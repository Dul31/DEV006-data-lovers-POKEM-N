//crear la funcion validarFormulario() para validar los inputs y reemplazarlos con los va.lolres del placeholder
function validarFormulario(event){
  event.preventDefault();
  const formulario = document.getElementById('contenedor-login');
  //obtener los valores de los inputs
  const username = document.getElementById('user');
  const password = document.getElementById('password');

  //para verificar si los inputs son válidos
  if (username.value === "Laboratoria" && password.value === "Dev006" ){
    formulario.submit(event);
    event.preventDefault();
    window.location.href ="saludo.html";
  } else {
    alert("Oh noooo!... Your username or password are incorrect, try again.")
  }
}

const form = document.getElementById('contenedor-login');
form.addEventListener('submit', validarFormulario);

//agregar un evento de click en boton ENTER
const btnEnter = document.getElementById('btn-enter');
btnEnter.addEventListener('click', () => {
  validarFormulario();
});

