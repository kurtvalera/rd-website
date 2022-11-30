window.onload = function () { 
    setTimeout(function(){
        console.log("Set timeout: 3 seconds for fadeOut preloader");
        
        $("#wrapper").css("opacity", "0");
        $("#preloader-gif").fadeOut(500, ()=> {
            $("#preloader").css("display", "none");

            
            
            //document.getElementById("preloader").style.zIndex = "0";
            $(".wrapper").css({"transition":"opacity 0.5s ease", "opacity": 1});
            $("body").css({"background-color":"white"});
            
            //document.getElementById("wrapper").style.zIndex ="999"
            document.querySelector("html").style.overflowY = "visible";
            document.querySelector("html").style.overflowX = "hidden";
        });  
    }, 1000);
    console.log('Site 100% loaded');
}

   