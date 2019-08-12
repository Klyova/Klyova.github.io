
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}


function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


 
$(window).on('load', function() {
  // ... место для инициализатора галерей/слкйдеров

  // Слайдер - галерея. Важно чтобы картинки загрузились все
  galleryInit('#mainGallery');

  // Локальный роутер
  if (typeof localRouter_init == 'function')
    localRouter_init();

});


/**
 * Run when DOM loaded and ready
 */
$(document).ready(function() {

   $(window).resize();

 $('.closebtn').on('click', function () {
   closeNav();
  });
 $('.openbtn').on('click', function () {
   openNav();
  });

});


/**
 * Event for window resize
 */
$(window).resize(function() {
  let w = $(window).width(), // Get window width
      h = $(window).height(); // Get window height

  // Process what we need
  // ...

});


/**
 * Run smoth scroll clicking by nav and etc.
 */
var smoothScroll;
var scroller_init = function (sets) {
  let opts = Object.assign({
    speed: 1000, // Integer. How fast to complete the scroll in milliseconds
    speedAsDuration: true, // All animations will take exactly 500ms
    offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
    updateURL: true,
    easing: 'easeInOutCubic', // Easing pattern to use
    ignore: '[data-scroll-ignore]' // Selector for links to ignore (must be a valid CSS selector)
  }, sets);

  smoothScroll = new SmoothScroll('a[href*="#"]', opts);
};


/**
 * Инициализация галереи, скроллера и попапа изображений
 * Важно: вызывать когда загрузятся все картинки, или при определенных заранее размеров блоков
 */
var galleryInit = function (selector) {
  if (!$(selector).length) return false;

  // Dublicate line on left&rigth couple times
  let s = $(selector).find('.gallery-viewport').html();
  //console.log(s);

  let qty = $(selector).find('.gallery-viewport .item').length,
      w = $(selector).find('.gallery-viewport .item').eq(0).width(),
      h = $(selector).find('.gallery-viewport .item').eq(0).height();

  let wTotal = w * qty;
  $(selector).find('.gallery-viewport').width(wTotal);

  let currPos = 0;

  $(selector).find('.js-prev').on('click', function () {
    scroll(-1); // Назад
  });

  $(selector).find('.js-next').on('click', function () {
    scroll(1); // Вперед
  });

  // Функция выполняющая скролл
  var scroll = function (toScroll) {
    let wViewport = $(selector).find('.gallery-list').width();
    let wSlides = wViewport / w;
    let slideView = Math.floor(wSlides);
    //console.log(wViewport, wSlides, slideView);

    if (toScroll < 0) currPos --;
    else if (toScroll > 0) currPos ++;

    //if (currPos < 0) currPos = 0;
    //else if (currPos > (qty - 3)) currPos = qty - 3;

    if (currPos < 0) currPos = (qty - slideView);
    else if (currPos > (qty - slideView)) currPos = 0;

    $(selector).find('.gallery-viewport').css('left', currPos*w*-1);
  };

  scroll(0);
  
  // Zoom in init
  photoSwipeInit();

  return true;
};


/**
 * Init gallery viewer
 */
function photoSwipeInit() {

  // Build galleries
  let items = [];
  $('a.js-zoom-img').each(function (index, el) {
    let realW = $(el).attr('data-w'),
        realH = $(el).attr('data-h');

    // If WxH not preset, try to get natural WxH.
    // IMPORTANT: images must be loaded befor. For this photoSwipeInit()
    //            should be placed in $(window).on('load', ...
    if (typeof realW == 'undefined' || typeof realH == 'undefined') {
      let img = $(el).find('img').eq(0);
      realW = img[0].naturalWidth;
      realH = img[0].naturalHeight;
    }

    // Add into gallery
    items.push({
      src: $(el).attr('href'),
      w: realW,
      h: realH,
      title: $(el).attr('title')
    });

    $(el)
      .attr('href', 'javascript:;') // replace URL in link, to nowhere
      .css('cursor', 'pointer') // ser cursor always hand to looks a like a link
      .attr('data-i', index); // index of image in galley (0, 1, 2, ...)
  });


  $('a.js-zoom-img').on('click', function () {
    let pswpElement = document.querySelectorAll('.pswp')[0];

    // define options (if needed)
    let options = {
      index: parseInt($(this).attr('data-i')), // start at first slide
      shareEl: false,
      showHideOpacity: true,
      bgOpacity: 0.85,
      history: false,
      galleryUID: 0,
    };

    // Initializes and opens PhotoSwipe
    let gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();

    return false;
  });

}











