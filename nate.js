/* 메인 페이지1 */
$(window).scrollTop(100000);

function SliderBox__init() {
  $('.slider-box > .side-btn > *').click(function() {
    var $this = $(this);
    
    var $slider = $this.parent().parent();
    
    var $current = $slider.find('> .inner > .active');
    var $post;
    
    var isLeft = $this.index() == 0;
    
    if ( isLeft ) {
      $post = $current.prev();
    
      if ( $post.length == 0 ) {
        $post = $slider.find('> .inner > :last-child');
      }
    }
    else {
      $post = $current.next();
    
      if ( $post.length == 0 ) {
        $post = $slider.find('> .inner > :first-child');
      }
    }
    
    $current.removeClass('active');
    $post.addClass('active');
    
    var index = $post.index();
    
    $slider.find('.side-btn > *.active').removeClass('active');
    $slider.find('.side-btn > *').eq(index).addClass('active');
  });

  setInterval(function() {
    $('.slider-box > .side-btn > :last-child').click();
  }, 4000);
}

SliderBox__init();

/* 메인 페이지2 */
$(window).scrollTop(100000);

function SliderBox1__init() {
  $('.slider-box-1 > .side-btn > *').click(function() {
    var $this = $(this);
    
    var $slider = $this.parent().parent();
    
    var $current = $slider.find('> .slides > .active');
    var $post;
    
    var isLeft = $this.index() == 0;
    
    if ( isLeft ) {
      $post = $current.prev();
    
      if ( $post.length == 0 ) {
        $post = $slider.find('> .slides > :last-child');
      }
    }
    else {
      $post = $current.next();
    
      if ( $post.length == 0 ) {
        $post = $slider.find('> .slides > :first-child');
      }
    }
    
    $current.removeClass('active');
    $post.addClass('active');
    
    var index = $post.index();
    
    $slider.find('.side-btn > *.active').removeClass('active');
    $slider.find('.side-btn > *').eq(index).addClass('active');
  });

  setInterval(function() {
    $('.slider-box-1 > .side-btn > :last-child').click();
  }, 5000);
}

SliderBox1__init();

/* 메인페이지 5 */
$(window).scrollTop(100000);

function SliderBox2__init() {
  $('.slider-box-2 > .side-btn > *').click(function() {
    var $this = $(this);
    
    var $slider = $this.parent().parent();
    
    var $current = $slider.find('> .slides > .active');
    var $post;
    
    var isLeft = $this.index() == 0;
    
    if ( isLeft ) {
      $post = $current.prev();
    
      if ( $post.length == 0 ) {
        $post = $slider.find('> .slides > :last-child');
      }
    }
    else {
      $post = $current.next();
    
      if ( $post.length == 0 ) {
        $post = $slider.find('> .slides > :first-child');
      }
    }
    
    $current.removeClass('active');
    $post.addClass('active');
    
    var index = $post.index();
    
    $slider.find('.side-btn > *.active').removeClass('active');
    $slider.find('.side-btn > *').eq(index).addClass('active');
  });

  setInterval(function() {
    $('.slider-box-2 > .side-btn > :last-child').click();
  }, 5000);
}

SliderBox2__init();
