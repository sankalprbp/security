from django.db import models

class RiskAssessmentFactor(models.Model):
    name = models.CharField(max_length=100)
    options = models.JSONField()

    def __str__(self):
        return self.name