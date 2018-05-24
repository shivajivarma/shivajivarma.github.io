var $root = $('html, body');

$('a').click(function() {
  var href = $.attr(this, 'href');
  var hash;

  if (href === '#') {
    hash = $('body');
  } else if (href.match(/^#[a-zA-Z0-9]+$/g)) {
    hash = $('#' + href.substring(1));
  } else
    return true;

  $root.animate({
    scrollTop: $(hash).offset().top
  }, 500, function() {
    window.location.hash = href;
  });

  return false;
});

$(document).ready(function() {
  //$('.dropdown-toggle').dropdown();

  // This will take care of asynchronous Google ads
  setTimeout(function() {

    // We are targeting the first banner ad of AdSense
    var ad = $('.adsbygoogle');

    // If the ad contains no innerHTML, ad blockers are at work
    if (ad && ad.html() && ad.html().replace(/\s/g, '').length == 0) {
      $('#adblocker-message').show();
    }

  }, 2000); // The ad blocker check is performed 2 seconds after the page load

});

$(document).on('ready page:load', function() {
  Prism.highlightAll();
});

(function() {
  // Init
  var container = document.querySelector('.img-container');

  if (container) {
    var inner = container.querySelector('.img-inner');

    // Mouse
    var mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition: function(event) {
        var e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
      },
      setOrigin: function(e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
      },
      show: function() {
        return '(' + this.x + ', ' + this.y + ')';
      }
    };

    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(container);

    //-----------------------------------------

    var counter = 0;
    var updateRate = 10;
    var isTimeToUpdate = function() {
      return counter++ % updateRate === 0;
    };

    //-----------------------------------------

    var onMouseEnterHandler = function(event) {
      update(event);
    };

    var onMouseLeaveHandler = function() {
      inner.style = '';
    };

    var onMouseMoveHandler = function(event) {
      if (isTimeToUpdate()) {
        update(event);
      }
    };

    //-----------------------------------------

    var update = function(event) {
      mouse.updatePosition(event);
      updateTransformStyle(
        (mouse.y / inner.offsetHeight / 2).toFixed(2),
        (mouse.x / inner.offsetWidth / 2).toFixed(2)
      );
    };

    var updateTransformStyle = function(x, y) {
      var style = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)';
      inner.style.transform = style;
      inner.style.webkitTransform = style;
      inner.style.mozTransform = style;
      inner.style.msTransform = style;
      inner.style.oTransform = style;
    };

    //-----------------------------------------

    container.onmouseenter = onMouseEnterHandler;
    container.onmouseleave = onMouseLeaveHandler;
    container.onmousemove = onMouseMoveHandler;
  }
})();

function absorbEvent_(event) {
  var e = event || window.event;
  e.preventDefault && e.preventDefault();
  e.stopPropagation && e.stopPropagation();
  e.cancelBubble = true;
  e.returnValue = false;
  return false;
}

function preventLongPressMenu(node) {
  node.ontouchstart = absorbEvent_;
  node.ontouchmove = absorbEvent_;
  node.ontouchend = absorbEvent_;
  node.ontouchcancel = absorbEvent_;
}
