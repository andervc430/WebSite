
from models.user import User

class UserService:
    def __init__(self):
        self.users = {}
        self.next_user_id = 1

    def create_user(self, name, email, telefono, contrasena):
        user_id = self.next_user_id
        self.next_user_id += 1
        user = User(user_id, name, email, telefono, contrasena)
        self.users[user_id] = user
        return user

    def get_user(self, user_id):
        return self.users.get(user_id)

    def update_user(self, user_id, name, email, telefono, contrasena):
        if user_id in self.users:
            user = self.users[user_id]
            user.name = name
            user.email = email
            user.telefono = telefono
            user.contrasena = contrasena
            return True
        return False

    def delete_user(self, user_id):
        if user_id in self.users:
            del self.users[user_id]
            return True
        return False

