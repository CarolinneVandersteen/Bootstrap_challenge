var browser;

var ua = navigator.userAgent.toLowerCase();
if (ua.indexOf('safari') != -1) {
  if (ua.indexOf('chrome') > -1) {
    browser = "Chrome"
  } else {
    browser = "Safari"
  }
}

function topFunction() {
    if (browser != "Safari") {
      document.body.scrollTop = 0;
      console.log("meow")
    }
    else {
      document.document.Element.scrollTop = 0;
    }
}
