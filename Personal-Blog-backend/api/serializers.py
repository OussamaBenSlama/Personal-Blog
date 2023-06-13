from django.urls import path, include
from rest_framework import  serializers
from .models import BlogPost , NewsletterSubscriber


# Serializers define the API representation.
class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = '__all__'

class NewsletterSubscriberSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsletterSubscriber
        fields = ['name', 'email']