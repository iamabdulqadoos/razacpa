from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name


class Tag(models.Model):
    name = models.CharField(max_length=50)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name


class Blog(models.Model):

    STATUS_CHOICES = [
        ('draft', 'Draft'),
        ('published', 'Published'),
    ]

    title = models.CharField(max_length=200)

    slug = models.SlugField(
        unique=True
    )

    excerpt = models.TextField()

    content = models.TextField()

    featured_image = models.ImageField(
        upload_to='blog/'
    )

    category = models.ForeignKey(
        Category,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='blogs'
    )

    tags = models.ManyToManyField(
        Tag,
        blank=True,
        related_name='blogs'
    )

    author = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='blogs'
    )

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='draft'
    )

    published_at = models.DateTimeField(
        null=True,
        blank=True
    )

    seo_title = models.CharField(
        max_length=200,
        blank=True
    )

    seo_description = models.TextField(
        blank=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    def __str__(self):
        return self.title