# Generated by Django 4.1.5 on 2023-06-08 18:11

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_blogpost_date_created'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogpost',
            name='date_created',
            field=models.DateTimeField(default=datetime.datetime(2023, 6, 8, 20, 11, 57, 612099)),
        ),
    ]
