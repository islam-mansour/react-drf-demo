from rest_framework import serializers
from .models import Item

class ItemSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(required=False)

    class Meta:
        model = Item
        fields = ['id', 'image', 'name', 'price', 'quantity']


    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance