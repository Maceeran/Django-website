from django.db import models

# Create your models here.

class saveGame(models.Model):
    title = models.CharField(max_length=20, default="Default Title")
    date = models.DateTimeField(auto_now=True)
    gameHTML = models.TextField()
