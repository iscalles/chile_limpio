 // para cerrar los eventos al hacer click fuera de el
document.addEventListener("click", closeAllSelect);

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('postulacionForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      if (validateForm()) {
        // Aquí puedes enviar el formulario si pasa la validación
        alert('¡Formulario enviado!');
        form.reset();
      } else {
        alert('Por favor completa todos los campos correctamente.');
      }
    });
  
    function validateForm() {
      const rut = document.getElementById('rut').value;
      const apellidoPaterno = document.getElementById('apellidoPaterno').value;
      const apellidoMaterno = document.getElementById('apellidoMaterno').value;
      const nombre = document.getElementById('nombre').value;
      const edad = parseInt(document.getElementById('edad').value);
      const genero = document.getElementById('genero').value;
      const celular = document.getElementById('celular').value;
  
      if (
        rut.length < 9 || rut.length > 10 ||
        apellidoPaterno.length < 3 || apellidoPaterno.length > 20 ||
        apellidoMaterno.length < 3 || apellidoMaterno.length > 20 ||
        nombre.length < 3 || nombre.length > 20 ||
        isNaN(edad) || edad < 18 || edad > 35 ||
        genero === '' ||
        celular.length < 9 || celular.length > 12
      ) {
        return false;
      }
      return true;
    }
  });