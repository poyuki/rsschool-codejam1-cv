function openDetails(event) {
    let el=event.currentTarget;

    if(el.classList.contains('fa-plus')){
        el.classList.remove('fa-plus');
        el.classList.add('fa-minus');
    }else{
        el.classList.remove('fa-minus');
        el.classList.add('fa-plus');
    }
}

function controlSlider(direction, event) {
    let controlButton=$(event.currentTarget),
        opositeDirection=direction==='right'?'left':'right',
        opositeControlButton=$(`svg.${opositeDirection}`),
        slider=$('.slider-content'),
        leftPos=parseInt(slider.css('left')),
        rightPos=parseInt(slider.css('right')),
        toMove=225;
    if (!slider.is(':animated')) {
        switch (direction) {
            case 'right':
                if (rightPos + toMove === 0) controlButton.hide();
                opositeControlButton.show();
                slider.animate({'left': `${leftPos - toMove}px`}, 500);
                break;
            case 'left':
                if (leftPos + toMove === 0) controlButton.hide();
                opositeControlButton.show();
                slider.animate({'left': `${leftPos + toMove}px`}, 500);
                break;
        }
    }
}
jQuery("document").ready(function(){
    $(window).scroll(function () {
        console.log($(this).scrollTop());
        if ($(this).scrollTop() > 142) {
            $('#side-menu').removeClass("invisible");
        } else {
            $('#side-menu').addClass("invisible");
        }
    });
});