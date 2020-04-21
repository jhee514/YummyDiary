from django.db import models

class Post(models.Model):
    writer = models.ForeignKey('accounts.User', on_delete=models.CASCADE)
    
    class Meal(models.IntegerChoices):
        Breakfast = 0
        Lunch = 1
        Dinner = 2
        Snack = 3

    meal = models.IntegerField(choices=Meal.choices)
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)
    menus = models.CharField(max_length=300)
    party = models.CharField(max_length=200)
    store = models.ForeignKey('stores.Store', on_delete=models.DO_NOTHING)
    location = models.CharField(max_length=200)
    score = models.FloatField(max_length=10)

    def __str__(self):
        return '%s | %s | %s' % (self.writer, self.menus, self.created_at)