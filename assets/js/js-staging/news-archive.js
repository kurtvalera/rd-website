function page1(){
    console.log("page 1 clicked");
    $("#news-gallery2").css("visibility","hidden");
    $("#news-gallery3").css("visibility","hidden");
    $("#news-gallery4").css("visibility","hidden");
    $("#news-gallery5").css("visibility","hidden");
    $("#news-gallery").css("visibility","visible");
    
}

function page2(){
    console.log("page 2 clicked");
    $("#news-gallery").css("visibility","hidden");
    $("#news-gallery3").css("visibility","hidden");
    $("#news-gallery4").css("visibility","hidden");
    $("#news-gallery5").css("visibility","hidden");
    $("#news-gallery2").css("display","block");
}
function page3(){
    console.log("page 3 clicked");
    $("#news-gallery2").css("visibility","hidden");
    $("#news-gallery").css("visibility","hidden");
    $("#news-gallery4").css("visibility","hidden");
    $("#news-gallery5").css("visibility","hidden");
    $("#news-gallery3").css("visibility","visible");
    
}
function page4(){
    console.log("page 4 clicked");
    $("#news-gallery2").css("visibility","hidden");
    $("#news-gallery3").css("visibility","hidden");
    $("#news-gallery").css("visibility","hidden");
    $("#news-gallery5").css("visibility","hidden");
    $("#news-gallery4").css("visibility","visible");
    
}

function page5(){
    console.log("page 4 clicked");
    $("#news-gallery2").css("visibility","hidden");
    $("#news-gallery3").css("visibility","hidden");
    $("#news-gallery").css("visibility","hidden");
    $("#news-gallery4").css("visibility","hidden");
    $("#news-gallery5").css("visibility","visible");
    
}

function page1Defi(){
    $("#defiNews").css("visibility","visible");
    $("#defiNews2").css("visibility","hidden");

}

function page2Defi(){
    $("#defiNews").css("visibility","hidden");
    $("#defiNews2").css("visibility","visible");

}

function page1Gamefi(){
    $("#gamefiNews").css("visibility","visible");
    $("#gamefiNews2").css("visibility","hidden");
}

function page2Gamefi(){
    $("#gamefiNews").css("visibility","hidden");
    $("#gamefiNews2").css("visibility","visible");
}

function page1Block(){
    $("#blockNews").css("visibility","visible");
    $("#blockNews2").css("visibility","hidden");
}

function page2Block(){
    $("#blockNews").css("visibility","hidden");
    $("#blockNews2").css("visibility","visible");
}



function showAll(){
    $("#news-gallery2").css("visibility","hidden");
    $("#news-gallery3").css("visibility","hidden");
    $("#news-gallery4").css("visibility","hidden");
    $("#news-gallery5").css("visibility","hidden");
    $("#news-gallery").css("visibility","visible");

    $("#defiNews").css("visibility","hidden");
    $("#defiNews2").css("visibility","hidden");

    $("#blockNews").css("visibility","hidden");
    $("#blockNews2").css("visibility","hidden");

    $("#eventNews").css("visibility","hidden");

    $("#gamefiNews").css("visibility","hidden");
    $("#gamefiNews2").css("visibility","hidden");

    $("#allNumbers").css("visibility", "visible");
    $("#defiNumbers").css("visibility", "hidden");
    $("#blockNumbers").css("visibility", "hidden");
    $("#eventNumbers").css("visibility", "hidden");
    $("#gamefiNumbers").css("visibility", "hidden");
    
}

function showDefi(){
    $("#news-gallery2").css("visibility","hidden");
    $("#news-gallery3").css("visibility","hidden");
    $("#news-gallery4").css("visibility","hidden");
    $("#news-gallery5").css("visibility","hidden");
    $("#news-gallery").css("visibility","hidden");

    $("#defiNews").css("visibility","visible");
    $("#defiNews2").css("visibility","hidden");
    $("#blockNews").css("visibility","hidden");
    $("#blockNews2").css("visibility","hidden");
    $("#eventNews").css("visibility","hidden");
    $("#gamefiNews").css("visibility","hidden");
    $("#gamefiNews2").css("visibility","hidden");

    $("#allNumbers").css("visibility", "hidden");
    $("#defiNumbers").css("visibility", "visible");
    $("#blockNumbers").css("visibility", "hidden");
    $("#eventNumbers").css("visibility", "hidden");
    $("#gamefiNumbers").css("visibility", "hidden");
    
}
function showGamefi(){
    $("#news-gallery2").css("visibility","hidden");
    $("#news-gallery3").css("visibility","hidden");
    $("#news-gallery4").css("visibility","hidden");
    $("#news-gallery5").css("visibility","hidden");
    $("#news-gallery").css("visibility","hidden");

    $("#defiNews").css("visibility","hidden");
    $("#defiNews2").css("visibility","hidden");
    $("#blockNews").css("visibility","hidden");
    $("#blockNews2").css("visibility","hidden");
    $("#eventNews").css("visibility","hidden");
    $("#gamefiNews").css("visibility","visible");
    $("#gamefiNews2").css("visibility","hidden");

    $("#allNumbers").css("visibility", "hidden");
    $("#defiNumbers").css("visibility", "hidden");
    $("#blockNumbers").css("visibility", "hidden");
    $("#eventNumbers").css("visibility", "hidden");
    $("#gamefiNumbers").css("visibility", "visible");
    
}
function showBlock(){
    $("#news-gallery2").css("visibility","hidden");
    $("#news-gallery3").css("visibility","hidden");
    $("#news-gallery4").css("visibility","hidden");
    $("#news-gallery5").css("visibility","hidden");
    $("#news-gallery").css("visibility","hidden");

    $("#defiNews").css("visibility","hidden");
    $("#defiNews2").css("visibility","hidden");
    $("#blockNews").css("visibility","visible");
    $("#blockNews2").css("visibility","hidden");
    $("#eventNews").css("visibility","hidden");
    $("#gamefiNews").css("visibility","hidden");
    $("#gamefiNews2").css("visibility","hidden");

    $("#allNumbers").css("visibility", "hidden");
    $("#defiNumbers").css("visibility", "hidden");
    $("#blockNumbers").css("visibility", "visible");
    $("#eventNumbers").css("visibility", "hidden");
    $("#gamefiNumbers").css("visibility", "hidden");
    
}

function showEvents(){
    $("#news-gallery2").css("visibility","hidden");
    $("#news-gallery3").css("visibility","hidden");
    $("#news-gallery4").css("visibility","hidden");
    $("#news-gallery5").css("visibility","hidden");
    $("#news-gallery").css("visibility","hidden");

    $("#defiNews").css("visibility","hidden");
    $("#defiNews2").css("visibility","hidden");
    $("#blockNews").css("visibility","hidden");
    $("#blockNews2").css("visibility","hidden");
    $("#eventNews").css("visibility","visible");
    $("#gamefiNews").css("visibility","hidden");
    $("#gamefiNews2").css("visibility","hidden");

    $("#allNumbers").css("visibility", "hidden");
    $("#defiNumbers").css("visibility", "hidden");
    $("#blockNumbers").css("visibility", "hidden");
    $("#eventNumbers").css("visibility", "visible");
    $("#gamefiNumbers").css("visibility", "hidden");
    
}