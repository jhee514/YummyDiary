from django.db import models
from django.urls import reverse

from django.contrib.auth.models import AbstractUser
import datetime

class User(AbstractUser):
    GENDER_CHOICES = (
        ('male', 'Male'),
        ('female', 'Female'),
    )
    email = models.CharField(max_length=100, unique=True, default=False)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES, default=False)
    birth_year = models.CharField(max_length=4, default=datetime.datetime.now().year)

    def get_absolute_url(self):
        return reverse("accounts:user_page", kwargs={"user_id": self.pk})

    def __str__(self):
        return self.username