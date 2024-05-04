 // para cerrar los eventos al hacer click fuera de el
document.addEventListener("click", closeAllSelect);

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('postulacionForm');
    const alertContainer = document.getElementById('alertContainer');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            showAlert('¡Envío de formulario exitoso!');
            form.reset();
        }
    });

    function validateForm() {
        const rut = document.getElementById('rut').value;
        const apellidoPaterno = document.getElementById('ape_paterno').value;
        const apellidoMaterno = document.getElementById('ape_materno').value;
        const nombre = document.getElementById('nombre').value;
        const fechaNacimiento = document.getElementById('fecha_nac').value;
        const edad = document.getElementById('edad').value;
        const genero = document.getElementById('genero').value;
        const email = document.getElementById('email').value;
        const celular = document.getElementById('celular').value;
        const profesion = document.getElementById('profesion').value;
        const postulacion = document.getElementById('postulacion').value;

    if (rut.length < 9 || rut.length > 10) {
        alert('El RUT debe tener entre 9 y 10 caracteres.');
        return false;
    }
    if (apellidoPaterno.length < 3 || apellidoPaterno.length > 20) {
        alert('El apellido paterno debe tener entre 3 y 20 caracteres.');
        return false;
    }
    if (apellidoMaterno.length < 3 || apellidoMaterno.length > 20) {
        alert('El apellido materno debe tener entre 3 y 20 caracteres.');
        return false;
    }
    if (nombre.length < 3 || nombre.length > 20) {
        alert('El nombre debe tener entre 3 y 20 caracteres.');
        return false;
    }
    if (!fechaNacimiento) {
        alert('Debe seleccionar una fecha de nacimiento.');
        return false;
    }
    if (edad < 18 || edad > 35) {
        alert('La edad debe estar entre 18 y 35 años.');
        return false;
    }
    if (genero === '') {
        alert('Debe seleccionar un género.');
        return false;
    }
    if (!email.includes('@')) {
        alert('Debe ingresar un correo electrónico válido.');
        return false;
    }
    if (celular.length < 9 || celular.length > 12) {
        alert('El número de celular debe tener entre 9 y 12 caracteres.');
        return false;
    }
    if (profesion.length === 0) {
        alert('Debe ingresar una profesión.');
        return false;
    }
    if (postulacion.length === 0) {
        alert('Debe ingresar una razón para postularse al trabajo.');
        return false;
    }

    return true;
}
function showAlert(message) {
    const alertElement = document.createElement('div');
    alertElement.classList.add('alert');
    alertElement.classList.add('alert-success');
    alertElement.textContent = message;
    alertContainer.appendChild(alertElement);
    // Ocultar el mensaje después de unos segundos
    setTimeout(function() {
        alertElement.remove();
    }, 3000); // 3000 milisegundos = 3 segundos
}
});