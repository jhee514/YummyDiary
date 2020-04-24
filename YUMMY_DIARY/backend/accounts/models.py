from django.db import models
from django.urls import reverse
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.core.validators import MinValueValidator, MaxValueValidator
from django.utils.translation import ugettext_lazy as _

import datetime


class User(AbstractUser):
    username = models.CharField(max_length=20, default=False)
    email = models.EmailField(unique=True, default=False)
    birth_year = models.PositiveIntegerField(
            validators=[
                MinValueValidator(1900), 
                MaxValueValidator(datetime.datetime.now().year)],
            default=False)
    
    class Gender(models.IntegerChoices):
        Female = 0
        Male = 1
    
    gender = models.IntegerField(choices=Gender.choices)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    
    class Meta:
        ordering = ['email']

    # def create_user(self, email, date_of_birth, password=None):
    #     pass

    def get_absolute_url(self):
        return reverse("accounts:user_page", kwargs={"user_id": self.pk})

    def __str__(self):
        return self.email


class UserManager(BaseUserManager):
    """Define a model manager for User model with no username field."""

    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        """Create and save a User with the given email and password."""
        if not email:
            raise ValueError('The given email must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        """Create and save a regular User with the given email and password."""
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        """Create and save a SuperUser with the given email and password."""
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(email, password, **extra_fields)

