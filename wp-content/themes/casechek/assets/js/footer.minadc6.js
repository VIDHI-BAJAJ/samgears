"use strict";!function(o,n){o(n).on("load",function(){o("#contact-us-popup").length&&(o(".contact-us-pop-holder").length&&o(".contact-us-pop-holder").find("a").addClass("contact-us-popup-link"),o(".contact-us-popup-link").magnificPopup({type:"inline",preloader:!1,mainClass:"contact-popup-container",fixedContentPos:!0,callbacks:{beforeOpen:function(){jQuery("body").css("overflow","hidden")},beforeClose:function(){jQuery("body").css({overflow:"auto"})}}}),o(".contact-pop__form").find(".wpcf7-submit").wrap('<div class="submit-wrap"></div>'))})}(jQuery,window,document);
