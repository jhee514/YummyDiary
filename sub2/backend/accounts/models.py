from django.db import models
from django.urls import reverse

from django.contrib.auth.models import AbstractUser, BaseUserManager
import datetime

class User(AbstractUser):
    GENDER_CHOICES = (
        ('male', 'Male'),
        ('female', 'Female'),
    )
    username = None
    email = models.EmailField(unique=True, default=False)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES, default=False)
    birth_year = models.CharField(max_length=4, default=datetime.datetime.now().year)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def create_user(self, email, date_of_birth, password=None):
        pass

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