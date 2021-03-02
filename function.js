$(document).ready(function() {
    
    function copy() {
        let content = $('.post-link').text();
        $('body').append(`<textarea id="clipboard" readonly>${content}</textarea>`);
        $('textarea#clipboard').select();
        document.execCommand('copy');
        $('textarea#clipboard').remove();
        
    };
    // Create a alert on sharing
    function sweetAlertTrigger() {
        const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });

        Toast.fire({
          icon: 'info',
          title: 'Link Copied'
        });
    };
    
    // grab share button
    $('#shareButton').click(function() {
        copy();
        sweetAlertTrigger()
    });
});