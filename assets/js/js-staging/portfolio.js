// Portfolio image overlay

$(document).ready(()=>{
    $(".pf-img-ul").mouseenter(()=>{
        $(".pf-overlay-ul").css("opacity","0.9");
    });
    $(".pf-img-ul").mouseleave(()=>{
        $(".pf-overlay-ul").css("opacity","0");
    });

    $(".pf-img-ur").mouseenter(()=>{
        $(".pf-overlay-ur").css("opacity","0.9");
    });
    $(".pf-img-ur").mouseleave(()=>{
        $(".pf-overlay-ur").css("opacity","0");
    });

    $(".pf-img-ll").mouseenter(()=>{
        $(".pf-overlay-ll").css("opacity","0.9");
    });
    $(".pf-img-ll").mouseleave(()=>{
        $(".pf-overlay-ll").css("opacity","0");
    });

    $(".pf-img-lr").mouseenter(()=>{
        $(".pf-overlay-lr").css("opacity","0.9");
    });
    $(".pf-img-lr").mouseleave(()=>{
        $(".pf-overlay-lr").css("opacity","0");
    });
});

