from django.shortcuts import render
from .models import Testimonial, News

def home_page(request):
    testimonials = Testimonial.objects.all()
    news_items = News.objects.all()
    return render(request, 'home_page.html', {'testimonials': testimonials, 'news_items': news_items})
