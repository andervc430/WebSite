document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const contrasena = document.getElementById('contrasena').value;

    const data = {
        name,
        email,
        telefono,
        contrasena
    };

    console.log(data)

    try {
        const response = await fetch('http://127.0.0.1:5000/user/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const responseData = await response.json();
            alert(`Usuario registrado: ${responseData.name} (${responseData.email} ${responseData.telefono} ${responseData.contrasena})`);
            document.getElementById('registerForm').reset(); // Limpiar todos los campos
        } else {
            const errorData = await response.json();
            alert(`Error: ${errorData.error}`);
        }
    } catch (error) {
        alert(`Error en la solicitud: ${error}`);
    }
});


function getUser() {
    const userId = document.getElementById('userId').value;
    if (userId) {
        fetch(`http://localhost:5000/user/${userId}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert('Usuario no encontrado');
            } else {
                alert(`Detalles del usuario:\nID: ${data.user_id}\nNombre: ${data.name}\nEmail: ${data.email}\nTeléfono: ${data.telefono}\nContraseña: ${data.contrasena}`);

            }
        })
        .catch(error => console.error('Error:', error));
    } else {
        alert('Por favor, ingrese un ID de usuario válido.');
    }
}

function updateUser() {
    const userId = document.getElementById('userId').value;
    if (userId) {
        const name = prompt('Ingrese el nuevo nombre:');
        const email = prompt('Ingrese el nuevo email:');
        const telefono = prompt('Ingrese el nuevo teléfono:');
        const contrasena = prompt('Ingrese la nueva contraseña:');

        if (name && email && telefono && contrasena) {
            fetch(`http://localhost:5000/user/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, telefono, contrasena })
            })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    alert('Usuario no encontrado');
                } else {
                    alert(`Usuario actualizado:\nNombre: ${data.name}\nEmail: ${data.email}\nTeléfono: ${data.telefono}\nContraseña: ${data.contrasena}`);
                }
            })
            .catch(error => console.error('Error:', error));
        } else {
            alert('Debe ingresar nombre, email, teléfono, y contraseña válidos.');
        }
    } else {
        alert('Por favor, ingrese un ID de usuario válido.');
    }
}


function deleteUser() {
    const userId = document.getElementById('userId').value;
    if (userId) {
        fetch(`http://localhost:5000/user/${userId}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                alert('Usuario eliminado correctamente');
            } else {
                alert('Error al eliminar usuario');
            }
        })
        .catch(error => console.error('Error:', error));
    } else {
        alert('Por favor, ingrese un ID de usuario válido.');
    }
}
