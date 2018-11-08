from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
# from oauth2_provider.models import AbstractApplication

# The BaseUserManager is the manager class to manage the User Model
# Employers.objects.get(name='name')


# Since we are extending from the AbstractUser() we have to also 
# extend the BaseUserManager to use an instance of the class

# If we were not using the AbstractUser class then Django would automatically
# create the user using BaseUserManager.create_user()

class UserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, **fields):
        """
        Create and save a user with the given username, email, and password.
        """
        # We need to pop the email out of the dict because we need to validate it
        
        # email = fields.pop('email')
        email = fields['email']

        password = fields.get('password')
        
        #May not need this because we're checking for the email field in the 
        # request itself. Not sure where it's better to do the check:
        if not email:
            raise ValueError("Email address is required")
        # elif cohort is None or isinstance(cohort, str):
        #     raise ValueError("Cohort is required")
        # elif not slack_handle:
        #     raise ValueError("Slack handle is required")
        
        
        # Checks if the email is valid meaning in the correct format
        email = self.normalize_email(email)

        # This will add the validated email back into the fields dict
        fields['email'] = email
        user = self.model(**fields)

        # The above two lines could be combined into 1 line below
        # user = self.model(email=email, **fields)
        
        # Adding hasing to the password
        user.set_password(password)

        user.save(using=self._db)
        return user

    # The call to _create_user(**fields) abstracts away the common 
    # fields between the user and the super_user
    def create_user(self, **fields):
        fields.setdefault('is_staff', False)
        fields.setdefault('is_superuser', False)

        return self._create_user(**fields)

    # $ python manage.py createsuperuser calls this function:
    def create_superuser(self, **fields):
        fields.setdefault('is_staff', True)
        fields.setdefault('is_superuser', True)

        if fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(**fields)


class User(AbstractUser):

    username = None

    # Setting blank=True and null=True for some fields is because 
    # they won't be set during the sign-in call 
    # firstname = models.CharField(max_length=128, blank=True, null=True)
    # lastname = models.CharField(max_length=128, blank=True, null=True)
    summary = models.TextField(blank=True, null=True)
    email = models.EmailField(max_length=50, unique=True) #Required
    picture = models.CharField(max_length=255, blank=True, null=True)
    last_modified = models.DateTimeField(auto_now=True, editable=False)
    password = models.CharField(max_length=128) #Required

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    objects = UserManager()

    class Meta:
        verbose_name_plural = "All Users"
        ordering = ['-id'] # ORDER BY DESC


class Employer(User):
    company_name = models.CharField(max_length=128)

    class Meta:
        verbose_name = "Employer User"

class Seeker(User):
    desired_title = models.CharField(max_length=128)

    class Meta:
        verbose_name = "Seeker User"


# class APIUser(AbstractApplication):
#     client_type = models.CharField(
#         max_length=32,
#         choices=AbstractApplication.CLIENT_TYPES,
#         default=AbstractApplication.CLIENT_CONFIDENTIAL)
#     authorization_grant_type = models.CharField(
#         max_length=32,
#         choices=AbstractApplication.GRANT_TYPES,
#         default=AbstractApplication.GRANT_CLIENT_CREDENTIALS
#     )

#     class Meta:
#         verbose_name = "API User"
#         ordering = ['-id']


# class UserFeedback(models.Model):
#     """ Stores user feedback data """
#     FEEDBACK = "feedback"
#     BUG = "bug"
#     option = (
#         (FEEDBACK, "feedback"),
#         (BUG, "bug"),
#     )
#     reported_by = models.ForeignKey(User, on_delete=models.PROTECT)
#     message = models.CharField(max_length=200, null=False)
#     report_type = models.CharField(max_length=10,
#                                    blank=False,
#                                    choices=option,
#                                    null=False)
#     created_at = models.DateTimeField(auto_now_add=True, editable=False)

#     class Meta:
#         verbose_name_plural = "User Feedback"
#         ordering = ['-id']