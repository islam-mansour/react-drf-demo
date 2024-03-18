from rest_framework import permissions
import jwt
from users.models import User


class Authorized(permissions.BasePermission):
    """
    Global permission check for blocked IPs.
    """

    def has_permission(self, request, view):
        token = request.COOKIES.get('jwt')

        if not token:
            return False
        
        try:
            payload = jwt.decode(token, 'secret', algorithms="HS256")
            #decode gets the user

        except jwt.ExpiredSignatureError:
            return False
        
        user = User.objects.filter(id=payload['id']).first()
        return user != None