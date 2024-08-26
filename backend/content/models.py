# from django.db import models
# from users.models import CustomUser

# class Testimonial(models.Model):
#     user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
#     review = models.TextField()
#     rating = models.PositiveIntegerField()

#     def __str__(self):
#         return f"Testimonial by {self.user.username}"

# class News(models.Model):
#     title = models.CharField(max_length=255)
#     content = models.TextField()
#     date = models.DateField()

#     def __str__(self):
#         return self.title
