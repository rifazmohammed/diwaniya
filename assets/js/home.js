function contentSliderInit_109(cid) {
    cid = parseInt(cid);
    var containerID = 'ja-contentslider-109';
    var container = $(containerID);
    var containerwrap = $$('.ja-contentslider-center-wrap'),
        containersize = parseInt(containerwrap.getStyle('width')),
                        windowsize = $(window).getSize();
    container.getElements('.jsslide').each(function (el) {
        el.dispose();
    });

    if (cid == 0) {
        var elems = $('ja-contentslider-center-109').getElements('div[class*=content_element]');
    } else {
        var elems = $('ja-contentslider-center-109').getElements('div[class*=jaslide2_' + cid + ']');
    }
    var total = elems.length;

    if (windowsize.x > 450) {
        var cw = 450;
    } else {
        var cw = containersize - 0;
        containerwrap.setStyle('padding', '10px');
    }

    var options = {
        w: 400,
        h: 520,
        num_elem: 3,
        mode: 'horizontal', //horizontal or vertical
        direction: 'left', //horizontal: left or right; vertical: up or down
        total: total,
        url: '#',
        wrapper: container.getElement("div.ja-contentslider-center"),
        duration: 1000,
        interval: 5000,
        modid: 109,
        running: false,
        autoplay:true,
        auto: 1
    };

    var jscontentslider = new JS_ContentSlider(options);

    for (i = 0; i < elems.length; i++) {
        jscontentslider.update(elems[i].innerHTML, i);
    }
    jscontentslider.setPos(null);
    if (jscontentslider.options.auto) {
        jscontentslider.nextRun();
    }

    container.getElement(".ja-contentslide-left-img").onclick = function () { setDirection2109('right', jscontentslider); };
    container.getElement(".ja-contentslide-right-img").onclick = function () { setDirection2109('left', jscontentslider); };

    /**active tab**/
    if (container.getElement('.ja-button-control')) {
        container.getElement('.ja-button-control').getElements('a').each(function (el) {
            var css = (el.getProperty('rel') == cid) ? 'active' : '';
            el.className = css;
        });
    }
}

window.addEvent('domready', function () {
    contentSliderInit_109(0);
});
window.addEvent('resize', function () {
    contentSliderInit_109(0);
});
function setDirection109(direction, ret, jscontentslider) {
    jscontentslider.options.direction = direction;

    if (ret) {
        jscontentslider.options.auto = 0;
        jscontentslider.options.interval = 5000;
        jscontentslider.options.direction = 'left';
    }
    else {
        jscontentslider.options.auto = 1;
        jscontentslider.options.interval = 100;
        jscontentslider.nextRun();
        jscontentslider.options.interval = 5000;
    }
}

function setDirection2109(direction, jscontentslider) {
    var oldDirection = jscontentslider.options.direction;

    jscontentslider.options.direction = direction;

    jscontentslider.options.interval = 100;
    jscontentslider.options.auto = 1;
    jscontentslider.nextRun();
    jscontentslider.options.auto = 0;
    jscontentslider.options.interval = 5000;

    setTimeout(function () {
        jscontentslider.options.direction = oldDirection;
    }, 510);
}

window.addEvent('domready', function () {
    window.jassliteInst = window.jassliteInst || [];
    window.jassliteInst.push(new JASliderCSS('ja-ss-88', {
        interval: 3000,
        duration: 2200,

        repeat: true,
        autoplay: 1,
  

        navigation:1,
        thumbnail: 0,

        urls: ['#', '', '#'],
        targets: ['', '', '']
    }));
});

//jQuery(".t3-megamenu li a").hover(function () {
//    $(this).closest("li").toggleClass("nav-highlight");
//});

jQuery(".makescroll").smoothDivScroll({
    autoScrollingMode: "backAndForth",
    autoScrollingInterval: 40,
    manualContinuousScrolling: true
});
jQuery(".makescroll").bind("mouseover", function () {
    jQuery(this).smoothDivScroll("stopAutoScrolling");
}).bind("mouseout", function () {
    jQuery(this).smoothDivScroll("startAutoScrolling");
    });

jQuery(window).load(function () {
    jQuery('.video-area').css('height', jQuery('.about-area').height());
    jQuery('.video-area iframe').removeAttr('style');
    jQuery('.loader').hide();
});
jQuery(document).ready(function () {
    jQuery('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: [
            "<i class='fa fa-caret-left'></i>",
            "<i class='fa fa-caret-right'></i>"
        ],
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
});