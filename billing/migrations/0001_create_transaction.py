# Generated by Django 2.1.3 on 2018-12-04 20:26

import JobMatcherApp.models
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Transaction',
            fields=[
                ('id', models.CharField(default=JobMatcherApp.models.id_gen, editable=False, max_length=10, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True, db_index=True, verbose_name='created time')),
                ('updated_at', models.DateTimeField(auto_now=True, db_index=True, verbose_name='updated time')),
                ('item', models.CharField(choices=[('CREDIT100', 'CREDIT100'), ('CREDIT5', 'CREDIT5'), ('POSTING1', 'POSTING1')], max_length=20)),
                ('amount', models.IntegerField()),
                ('currency', models.CharField(default='usd', max_length=3)),
                ('description', models.CharField(blank=True, max_length=500)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='transaction', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
