import uuid

from django.contrib.auth.base_user import AbstractBaseUser
from django.db import models
from django.utils.http import int_to_base36
from django.utils.translation import gettext_lazy as _

ID_LENGTH = 10


def id_gen() -> str:
    """Generates random string whose length is `ID_LENGTH`."""
    return int_to_base36(uuid.uuid4().int)[:ID_LENGTH]


class BaseModel(models.Model):
    """
    Django abstract model whose primary key is a random string and has auto create and update datetime fields.

    This acts as the base model for all other models.
    """
    id = models.CharField(max_length=ID_LENGTH, primary_key=True, default=id_gen, editable=False)
    created_at = models.DateTimeField(verbose_name=_('created time'), auto_now_add=True, db_index=True)
    updated_at = models.DateTimeField(verbose_name=_('updated time'), auto_now=True, db_index=True)

    class Meta:
        abstract = True
