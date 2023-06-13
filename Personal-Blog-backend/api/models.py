from django.db import models
from datetime import datetime
# Create your models here.

class Categories (models.TextChoices) :
    BUSINESS  = 'business'
    WEB_DEVELOPMENT = 'web development'
    MOBILE_DEVELOPMENT = 'mobile development'
    MACHINE_LEARNING = 'machine learning'

class BlogPost (models.Model) :
    title = models.CharField(max_length=100 , blank=False , primary_key=True)
    category = models.CharField(max_length=100, choices=Categories.choices, default=Categories.MACHINE_LEARNING) 
    summary = models.CharField(max_length=250)
    cover = models.ImageField(upload_to = 'photos/%y/%m/%d')
    date_created = models.DateTimeField(default=datetime.now())
    content = models.TextField()
    trendy = models.BooleanField(default=False)

    def __str__(self):
        return self.title
    

class NewsletterSubscriber(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()

    def __str__(self):
        return self.email  