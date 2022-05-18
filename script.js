$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scroll > 15){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })

    $('menu-btn').click(function(){
        $('.navbar .menu').toggle("active");
    })
});
