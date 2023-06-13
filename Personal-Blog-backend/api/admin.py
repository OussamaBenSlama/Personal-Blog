from django_summernote.admin import SummernoteModelAdmin
from .models import BlogPost
from .models import NewsletterSubscriber
from django.contrib import admin

# Apply summernote to content TextField in model.
class BlogPostAdmin(SummernoteModelAdmin):  # instead of ModelAdmin
    list_display = ('title', 'date_created', 'category')
    list_display_links = ('title' ,)
    search_fields = ('title' ,)
    summernote_fields = ('content' ,)
    list_per_page = 25

admin.site.register(BlogPost, BlogPostAdmin)
admin.site.register(NewsletterSubscriber)