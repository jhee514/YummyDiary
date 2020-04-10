from django.utils import timezone
from django.db import models


class Store(models.Model):
    store_name = models.CharField(max_length=100)
    branch = models.CharField(max_length=100, null=True)
    area = models.CharField(max_length=100, null=True)
    tel = models.CharField(max_length=30, null=True)
    address = models.CharField(max_length=200, null=True)
    latitude = models.FloatField(max_length=10, null=True)
    longitude = models.FloatField(max_length=10, null=True)
    category = models.CharField(max_length=200, null=True)
    menus = models.ManyToManyField('menus.Menu')
    bhour_list = models.CharField(max_length=200, null=True)
    review_cnt = models.IntegerField()

    @property
    def category_list(self):
        return self.category.split("|") if self.category else []


class Review(models.Model):
    writer = models.ForeignKey('accounts.User', on_delete=models.CASCADE)
    total_score = models.IntegerField()
    content = models.TextField()
    reg_time = models.DateTimeField(default=False)
    store = models.ForeignKey('stores.Store', on_delete=models.CASCADE)