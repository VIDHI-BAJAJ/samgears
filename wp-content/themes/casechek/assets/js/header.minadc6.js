"use strict";!function(a,s,e){var o=s.matchMedia("(max-width: 1200px)"),i=a(".casechek-header"),n=a("body"),d=0,t=0,c=null,l=null;function r(){l=c=null}function h(){if(i.length){var e=a(".casechek-header .js-toggle-mobile");a(".casechek-header .menu-item-has-children > a").after('<span class="dropdown-btn"></span>');var n=a(".cs-main-header").find(".cs-main-header__menu-box");a(".casechek-header").append('<span class="body-overlay"></span>'),e.on("click",function(){a("body").addClass("sidebar-open no-scroll"),n.addClass("menu-open"),c=s.scrollX,l=s.scrollY})}}function m(){i.length&&(o.matches?(a("header .cs-main-header").addClass("cs-main-header--mobile").removeClass("cs-main-header--desktop"),a("body").addClass("aheto-menu--mobile").removeClass("aheto-menu--desktop")):(a("header .cs-main-header").removeClass("cs-main-header--mobile").addClass("cs-main-header--desktop"),a("body").removeClass("aheto-menu--mobile").addClass("aheto-menu--desktop")))}s.addEventListener("scroll",function(){null!==c&&null!==l&&s.scrollTo(c,l)}),s.innerWidth,s.innerHeight,n.hasClass("admin-bar")&&782<a(s).width()?d=32:n.hasClass("admin-bar")&&(d=46),t=Math.max(e.documentElement.clientHeight,s.innerHeight||0),a(s).on("load",function(){h(),function(){var e=a(".header-form");e.length&&(a(".cs-main-header__demo").magnificPopup({type:"inline",preloader:!1,mainClass:"header-form-popup-container",fixedContentPos:!0,callbacks:{beforeOpen:function(){jQuery("body").css("overflow","hidden")},beforeClose:function(){jQuery("body").css({overflow:"auto"})}}}),e.find(".wpcf7-submit").wrap('<div class="submit-wrap"></div>'))}(),i.css("display","block"),i.length&&a(".cs-main-header").each(function(){a(this).find(".menu-item-has-children .dropdown-btn").on("click",function(e){console.log("fff"),a(this).parent().parent().parent().hasClass("menu-home-page-container")&&a(this).closest(".menu-home-page-container").find(".dropdown-btn").not(this).next(".sub-menu").slideUp(),a(this).next(".sub-menu").slideToggle()})}),i.length&&a('.casechek-header .cs-main-header__menu-box li a[href*="#"]').click(function(){a(".cs-main-header--mobile .btn-close").click()})}),a(s).on("load resize orientationchange",function(){setTimeout(m,100),function(){if(i.length&&o.matches){var e=a(".cs-main-header").find(".cs-main-header__menu-box");e.css("top",d),e.find(".btn-close").length||e.append('<span class="btn-close"><i class="ion-android-close"></i></span>'),a(".btn-close").on("click",function(){e.removeClass("menu-open"),a("body").removeClass("sidebar-open no-scroll"),a("*").removeClass("sm-opened list-opened sub-opened"),r()}),a(".cs-main-header").each(function(){var e=t-d;navigator.userAgent.match(/(iPod|iPad)/)&&a(".aheto-header--fixed").length?a(this).find(".cs-main-header__menu-box").css({height:100+e,"padding-bottom":"156px"}):a(this).find(".cs-main-header__menu-box").css({height:100+e,"padding-bottom":"100px"})})}else{a(".cs-main-header").each(function(){a(this).find(".cs-main-header__menu-box").css({top:"auto",height:"auto","padding-bottom":"0"})});var n=a(".cs-main-header").find(".cs-main-header__menu-box");n.length&&(n.removeClass("menu-open"),a("body").removeClass("sidebar-open no-scroll"),r())}}()})}(jQuery,window,document);
