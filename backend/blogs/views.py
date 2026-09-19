from rest_framework import generics
from .models import Blog
from .serializers import BlogSerializer


class BlogListView(generics.ListAPIView):
    serializer_class = BlogSerializer

    def get_queryset(self):
        return Blog.objects.filter(
            status='published'
        ).order_by('-published_at')


class BlogDetailView(generics.RetrieveAPIView):
    serializer_class = BlogSerializer
    lookup_field = 'slug'

    def get_queryset(self):
        return Blog.objects.filter(
            status='published'
        )