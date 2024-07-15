$(document).ready(function() {

    const button_bar = $('.fill_bar');
    const bar = $('.bar');
    let range = 0;

    let isdrag = false


    button_bar.mousedown(function() {
        isdrag = true;
    });

    // é necessário utilizar o mousemove no document para que o evento ocorra em qualquer lugar da tela
    $(document).mouseup(function(event) {
        isdrag = false;
        enableSelection();
    });

    bar.mousemove(function(e){
        if(isdrag){
            disableSelection()
            let x = e.pageX - $(this).offset().left;
        

            if(x < 0) x = 0; 
        
            
            if(x > bar.width()) x = bar.width();
            

            let percent = (x/$(this).width())*100;
            button_bar.css('left', (percent-5) + '%');
            
            $(this).css('background', `linear-gradient(to right, #ff0000 ${percent}%, #fff ${percent}%)`);

            $('.range_bar').html(percent.toFixed(0) + '%');
        }
    })

    function disableSelection(){
        $('body').css('-webkit-user-select', 'none');
        $('body').css('-moz-user-select', 'none');
        $('body').css('-ms-user-select', 'none');
        $('body').css('user-select', 'none');
        $('body').css('-o-user-select', 'none');
    };

    function enableSelection(){
        $('body').css('-webkit-user-select', 'auto');
        $('body').css('-moz-user-select', 'auto');
        $('body').css('-ms-user-select', 'auto');
        $('body').css('user-select', 'auto');
        $('body').css('-o-user-select', 'auto');
    }


});