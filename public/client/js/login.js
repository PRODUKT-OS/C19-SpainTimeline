function userForm() {
    

}

$( "#submit" ).click(function() {
    $('#userForm').submit()
  });

  $('#userForm')
        .ajaxForm({
            dataType: 'json',
            error: function (data) {
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
            success: function (data) {
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