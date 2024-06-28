from flask import jsonify

def user_response(user):
    response = {
        'status': 'success',
        'user': {
            'name': user.name,
            'email': user.email,
            'telefono': user.telefono,
            'contrasena': user.contrasena
        }
    }
    return jsonify(response)
