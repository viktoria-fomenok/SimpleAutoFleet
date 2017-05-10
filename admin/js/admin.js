/**
 * Created by vikyf on 5/8/2017.
 */

$(document).ready(function(){
    $("a.mobile").click(function(){
        $(".sidebar").slideToggle('fast');
    });

    window.onresize = function(event) {
        if($(window).width() > 480){
            $(".sidebar").show();
        }
    };

});


$('.remove').on('click', function() {
    $(this).closest('.box').remove();
});


function getName (str){
    if (str.lastIndexOf('\\')){
        let i = str.lastIndexOf('\\')+1;
    }
    else{
        let i = str.lastIndexOf('/')+1;
    }
    let filename = str.slice(i);
    let uploaded = document.getElementById("fileformlabel");
    uploaded.innerHTML = filename;
}


