var $buttons = $('.filtr-controls').click(function() {
    console.log('Clicked: ' + this.id)
    if(this.id == 'all'){
        console.log('Clicked ALL');
  
    }else if(this.id == 'defi'){
        console.log('Clicked DEFI');
       
    }else if(this.id == 'gamefi'){
        console.log('Clicked GAMEFI');
    }else if(this.id == 'blockchain'){
        console.log('Clicked BLOCKCHAIN');
    }else if(this.id == 'events'){
        console.log('Clicked EVENTS');
    }


    $buttons.removeClass('active');
    $(this).addClass('active');
    var textx = $(this).text();
    $('.activeButton').text(textx);
});