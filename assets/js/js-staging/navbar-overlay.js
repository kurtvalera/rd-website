function noScroll() {	
	if($(".toggled-content").hasClass("d-block")){
		closeOverlay();
	}else {
		document.body.style.setProperty('overflow', 'hidden');
		$(".toggled-content").addClass("d-block");
		$(".toggled-content").removeClass("d-none");
	}
	
}

function closeOverlay(){
	$(".toggled-content").addClass("d-none");
	$(".toggled-content").removeClass("d-block");
	document.body.style.setProperty('overflow', 'visible');

}