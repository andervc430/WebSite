
class User:
    def __init__(self, user_id, name, email, telefono, contrasena):
        self.user_id = user_id
        self.name = name
        self.email = email
        self.telefono = telefono 
        self.contrasena = contrasena  

    def serialize(self):
        return {
            'user_id': self.user_id,
            'name': self.name,
            'email': self.email,
            'telefono': self.telefono,  
            'contrasena': self.contrasena  
        }


