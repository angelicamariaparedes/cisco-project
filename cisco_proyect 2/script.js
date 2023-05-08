$('.js-start-button').click(() => {
    $('.js-blue-container').animate({
        height: '100%'
    });

    $('.js-cisco-logo').addClass('cisco-logo-animated');
    $('.js-first-wave').addClass('first-wave-animated');
    $('.js-second-wave').addClass('second-wave-animated');
    $('.js-tp-logo').addClass('tp-logo-animated');
    

    $('.js-start-button').animate(
        { deg: -500, scale: .1},
        {
          duration: 1000,
          step: function(fx, {now, prop}) {
              $(this).css({ transform: `rotate(${prop === 'deg' ? now : '-'+500}deg) scale(${prop === 'scale' ? now : .1})`})
          }
        },
    );

    setTimeout(() => {
        $('.js-start-button').addClass('start-button-animated');
    }, 500);
    
    setTimeout(() => {
        $('.js-cisco-logo').removeClass('cisco-logo-animated');
        $('.js-cisco-logo__corner').addClass('cisco-logo__corner-animated');
    }, 1500);
    
    
    setTimeout(() => {
        $('.js-container-intro').animate({
            opacity: '0',
            'z-index': '-2',
        }, 2000)
    });

    setTimeout(() => {
        $('.js-container-intro__button').animate({
            'margin-top': 0,
            opacity: 1
        })
        $('.js-content-title__intro').animate({
            'font-size': '45px',
        })
    }, 2200)
})

///////////////// Network

$('.js-next-button').click(() => {
    $('.container-info').css('transform', 'translateX(0px)');
})

$('.js-back-button').click(() => {
    $('.container-info').css('transform', 'translateX(-570px)');
})

let count = 2;
$('.js-next-button').click(() => {
    let currentCount = count - 1;
    if (count <= 4) {
        $(`.components-telemetry__info--box-${currentCount}`).removeClass(`components-telemetry__info-show--box-${currentCount}`);
        $(`.components-telemetry__info--box-${count}`).addClass(`components-telemetry__info-show--box-${count}`);
        $(`.js-telemetry-${count}`).addClass(`telemetry-show--${count}`);
    }
    count <= 4 ? count++ : null;
});

$('.js-back-button').click(() => {
    count >= 1 ? count-- : null;
    let currentCount = count - 1;

    $(`.components-telemetry__info--box-${currentCount}`).addClass(`components-telemetry__info-show--box-${currentCount}`);
    $(`.components-telemetry__info--box-${count}`).removeClass(`components-telemetry__info-show--box-${count}`);
    $(`.js-telemetry-${count}`).removeClass(`telemetry-show--${count}`);
});
