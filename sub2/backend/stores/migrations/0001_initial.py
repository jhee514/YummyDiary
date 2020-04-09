# Generated by Django 3.0.5 on 2020-04-08 12:00

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Store',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('store_name', models.CharField(max_length=50)),
                ('branch', models.CharField(max_length=20, null=True)),
                ('area', models.CharField(max_length=50, null=True)),
                ('tel', models.CharField(max_length=20, null=True)),
                ('address', models.CharField(max_length=200, null=True)),
                ('latitude', models.FloatField(max_length=10, null=True)),
                ('longitude', models.FloatField(max_length=10, null=True)),
                ('category', models.CharField(max_length=200, null=True)),
            ],
        ),
    ]
