# Generated by Django 2.1.3 on 2018-11-30 00:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0004_update_match_choices'),
    ]

    operations = [
        migrations.AlterField(
            model_name='job',
            name='salary_max',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='job',
            name='salary_min',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
