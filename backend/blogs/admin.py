from django.contrib import admin
from .models import Blog, Category, Tag


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')
    prepopulated_fields = {
        'slug': ('name',)
    }


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')
    prepopulated_fields = {
        'slug': ('name',)
    }


@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):

    list_display = (
        'title',
        'category',
        'author',
        'status',
        'published_at',
    )

    list_filter = (
        'status',
        'category',
        'created_at',
    )

    search_fields = (
        'title',
        'content',
    )

    prepopulated_fields = {
        'slug': ('title',)
    }

    filter_horizontal = (
        'tags',
    )