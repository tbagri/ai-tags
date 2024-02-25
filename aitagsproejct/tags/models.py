from django.db import models

class User(models.Model):
    id = models.CharField(max_length=255, primary_key=True)
    object = models.CharField(max_length=255)
    full_name = models.CharField(max_length=255)
    admin = models.BooleanField()
    photo = models.CharField(max_length=255)
    
    def __str__(self):
        return self.full_name
    
    

