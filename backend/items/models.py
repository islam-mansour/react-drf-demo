from django.db import models

class Item(models.Model):
    image = models.ImageField(upload_to='item_images')
    name = models.CharField(max_length=255)
    price = models.FloatField()
    quantity = models.IntegerField()
