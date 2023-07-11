window.addEventListener("message",function(event){
    if(event.data.action == "show"){
        if(event.data.type == "success"){
            element = document.getElementsByClassName("container")[0];
            element.style.borderColor = "green";
            $('.pozatype').attr("src","correct.png")
            $('.container').fadeIn(300)
            $('.text').html(event.data.text)     
        }
        else
        if(event.data.type == "error"){
            element = document.getElementsByClassName("container")[0];

            element.style.borderColor = "red";
            $(".pozatype").attr("src","remove.png");
            $('.container').fadeIn(300)
            $('.text').html(event.data.text)
        }   
    }
    else if(event.data.action == "hide"){
        $('.container').fadeOut(300)
    }
})