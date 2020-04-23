from django.db import models


class Tag(models.Model):
    content = models.CharField(max_length=100)

    def __str__(self):
        return self.content


class Store(models.Model):
    name = models.CharField(max_length=100)
    branch = models.CharField(max_length=100, null=True)
    tel = models.CharField(max_length=30, null=True)
    address = models.CharField(max_length=200, null=True)
    latitude = models.CharField(max_length=30, null=True)
    longitude = models.CharField(max_length=30, null=True)
    category = models.CharField(max_length=200, null=True)
    bhour = models.CharField(max_length=1000, null=True)
    image = models.CharField(max_length=1000, null=True)
    tags = models.ManyToManyField('stores.Tag')

    def __str__(self):
        return self.name


class Review(models.Model):
    writer = models.ForeignKey('accounts.User', on_delete=models.CASCADE)
    store = models.ForeignKey('stores.Store', on_delete=models.CASCADE)
    total_score = models.FloatField(max_length=10)
    content = models.TextField()
    reg_time = models.DateTimeField(default=False)
    
    def __str__(self):
        return '%s | %s' % (self.writer, self.store)


class Menu(models.Model):
    name = models.CharField(max_length=100, null=True)
    price = models.PositiveIntegerField()
    store = models.ForeignKey('stores.Store', on_delete=models.CASCADE)

    class Meta:
        ordering = ['name']

    def get_absolute_url(self):
        pass

    def __str__(self):
        return '%s | %s' % (self.name, self.store)

