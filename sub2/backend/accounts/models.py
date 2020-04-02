from django.db import models

from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    username = models.CharField(max_length=20, unique=True, default=True)
    email = models.EmailField(unique=True, default=True)
    # gender = models.
