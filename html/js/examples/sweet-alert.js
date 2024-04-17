'use strict';
$(document).ready(function () {

    $('.sweetAlert2-example1').on('click', function () {
        Swal.fire('Any fool can use a computer')
    });

    $('.sweetAlert2-example2').on('click', function () {
        Swal.fire(
            'The Internet?',
            'That thing is still around?',
            'question'
        )
    });

    $('.sweetAlert2-example2-success').on('click', function () {
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Process completed!'
        })
    });

    $('.sweetAlert2-example2-warning').on('click', function () {
        Swal.fire({
            icon: 'warning',
            title: 'Hey...',
            text: 'Something went wrong!'
        })
    });

    $('.sweetAlert2-example2-error').on('click', function () {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
        })
    });

    $('.sweetAlert2-example2-info').on('click', function () {
        Swal.fire({
            icon: 'info',
            title: 'Info',
            text: 'Not active now!'
        })
    });

    $('.sweetAlert2-example3').on('click', function () {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href>Why do I have this issue?</a>'
        })
    });

    $('.sweetAlert2-example4').on('click', function () {
        Swal.fire({
            title: '<strong>HTML <u>example</u></strong>',
            icon: 'info',
            html:
                'You can use <b>bold text</b>, ' +
                '<a href="//sweetalert2.github.io">links</a> ' +
                'and other HTML tags',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
                '<i class="bi bi-hand-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText:
                '<i class="bi bi-hand-thumbs-down"></i>',
            cancelButtonAriaLabel: 'Thumbs down'
        })
    });

    $('.sweetAlert2-example5').on('click', function () {
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Save`,
            denyButtonText: `Don't save`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
    });

    $('.sweetAlert2-example6').on('click', function () {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
    });

    $('.sweetAlert2-example7').on('click', function () {
        Swal.fire({
            title: 'Custom animation with Animate.css',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    });

    $('.sweetAlert2-example8').on('click', function () {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    });

    $('.sweetAlert2-example9').on('click', function () {
        Swal.mixin({
            input: 'text',
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
            progressSteps: ['1', '2', '3']
        }).queue([
            {
                title: 'Question 1',
                text: 'Chaining swal2 modals is easy'
            },
            'Question 2',
            'Question 3'
        ]).then((result) => {
            if (result.value) {
                const answers = JSON.stringify(result.value)
                Swal.fire({
                    title: 'All done!',
                    html: `
        Your answers:
        <pre><code>${answers}</code></pre>
      `,
                    confirmButtonText: 'Lovely!'
                })
            }
        })
    });

    $('.sweetAlert2-example10').on('click', function () {
        const ipAPI = '//api.ipify.org?format=json'

        Swal.queue([{
            title: 'Your public IP',
            confirmButtonText: 'Show my public IP',
            text:
                'Your public IP will be received ' +
                'via AJAX request',
            showLoaderOnConfirm: true,
            preConfirm: () => {
                return fetch(ipAPI)
                    .then(response => response.json())
                    .then(data => Swal.insertQueueStep(data.ip))
                    .catch(() => {
                        Swal.insertQueueStep({
                            icon: 'error',
                            title: 'Unable to get your public IP'
                        })
                    })
            }
        }])
    });

});
