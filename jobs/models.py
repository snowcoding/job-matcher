from django.db import models

from JobMatcherApp.models import BaseModel, Employer, SkillsField
from django.utils.translation import gettext_lazy as _

class Job(BaseModel):
    employer = models.ForeignKey(Employer, related_name='jobs', on_delete=models.CASCADE)
    title = models.CharField(_('desired title'), max_length=150, blank=True)
    salary_min = models.DecimalField(max_digits=9, decimal_places=2)
    salary_max = models.DecimalField(max_digits=9, decimal_places=2)
    top_skills = SkillsField(size=5)
    extra_skills = SkillsField()
    familiar_with = SkillsField()
    description = models.CharField(max_length=500, blank=True)
    requirements = models.CharField(max_length=500, blank=True)
    is_active = models.BooleanField(default=False)

