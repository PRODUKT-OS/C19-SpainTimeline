// Evento que se activa cuando se hace click en el boton de logueo 
$( "#submit" ).click(function() {
    $('#userForm').submit()
  });
// Enviar las credenciales via ajax
  $('#userForm')
        .ajaxForm({
            dataType: 'json',
            error: function (data) { //En caso de error, se muestra con un popup un mensaje de error
                if (data.responseJSON.message == "Wrong UP") {
                    Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Wrong Username or Password!'
                    })
                } else {
                    Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    })
                }
            },
            success: function (data) { //De lo contrario, se redirige al usuario a la pagina principal
                console.log(data)
                if (data.message === "Access granted") {
                    document.cookie = `token=${data.access_token}`
                    Swal.fire({
                        type: 'success',
                        title: 'Great!',
                        text: 'Access granted',
                    }).then((result) => {
                        window.location.href = "/timeline"
                    })
                } else {
                    Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    })
                }
            }
        })
        ;