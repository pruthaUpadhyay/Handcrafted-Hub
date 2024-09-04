# your_app_name/management/commands/create_product.py
from django.core.management.base import BaseCommand

from products.models import Product



class Command(BaseCommand):
    help = 'Create a new product'

    def add_arguments(self, parser):
        parser.add_argument('name', type=str)
        parser.add_argument('price', type=float)
        parser.add_argument('description', type=str)
        parser.add_argument('image', type=str)
        parser.add_argument('category', type=str)
        parser.add_argument('stock', type=int)
        parser.add_argument('has_sizes', type=bool)
        parser.add_argument('sizes', nargs='*', type=str)

    def handle(self, *args, **options):
        result = Product.create_product(
            name=options['name'],
            price=options['price'],
            description=options['description'],
            image=options['image'],
            category=options['category'],
            stock=options['stock'],
            has_sizes=options['has_sizes'],
            sizes=options['sizes']
        )
        if result.acknowledged:
            self.stdout.write(self.style.SUCCESS('Product created successfully'))
        else:
            self.stdout.write(self.style.ERROR('Failed to create product'))
