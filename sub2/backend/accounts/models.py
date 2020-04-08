from django.db import models
from django.urls import reverse
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.core.validators import MinValueValidator, MaxValueValidator
import datetime

class User(AbstractUser):
    username = None
    email = models.EmailField(unique=True, default=False)
    birth_year = models.PositiveIntegerField(
            validators=[
                MinValueValidator(1900), 
                MaxValueValidator(datetime.datetime.now().year)],
            default=datetime.datetime.now().year)
    
    GENDER_CHOICES = (
        ('male', 'Male'),
        ('female', 'Female'),
    )
    
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES, default=False)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    
    class Meta:
        ordering = ['email']

    def create_user(self, email, date_of_birth, password=None):
        pass

    def get_absolute_url(self):
        return reverse("accounts:user_page", kwargs={"user_id": self.pk})

    def __str__(self):
        return self.email

