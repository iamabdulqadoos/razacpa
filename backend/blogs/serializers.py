from rest_framework import serializers
from .models import Blog, Category, Tag


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug']


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'name', 'slug']


class BlogSerializer(serializers.ModelSerializer):

    category = CategorySerializer(read_only=True)
    tags = TagSerializer(many=True, read_only=True)
    author = serializers.StringRelatedField()

    class Meta:
        model = Blog
        fields = [
            'id',
            'title',
            'slug',
            'excerpt',
            'content',
            'featured_image',
            'category',
            'tags',
            'author',
            'status',
            'published_at',
            'seo_title',
            'seo_description',
            'created_at',
            'updated_at',
        ]