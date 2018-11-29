from django.db import models

from JobMatcherApp.models import BaseModel, Profile


class Transaction(BaseModel):
    profile = models.ForeignKey(Profile, related_name='transactions', on_delete=models.CASCADE)
    amount = models.IntegerField()
