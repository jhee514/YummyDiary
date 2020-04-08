from django.db import models


class Menu(models.Model):
    name = models.CharField(max_length=100, null=True)
    price = models.PositiveIntegerField()
    store = models.ForeignKey('stores.Store', on_delete=models.CASCADE)

    class Meta:
        ordering = ['name']

    def get_absolute_url(self):
        pass

    def __str__(self):
        return self.name