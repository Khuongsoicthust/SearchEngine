$(document).ready(function() {
	/*Search top*/
	$("#bt-site-search").click(function () {
        $("#keyword_text").toggleClass('expand');
    })
	/*Back To Top*/
	$('#bt_to_top, .bt-top').click(function(){
		$('html, body').stop().animate({
			'scrollTop': 0
		}, 1000, 'swing');
	});
	/*Back To Dow*/
	$('.bt_down').click(function(){
		$('html, body').stop().animate({
			'scrollTop': ($('.home-category-topic').offset().top)*1-20
		}, 900, 'swing');
	});
	$('.bt_down-sub-menu-home-premier').click(function(){
		$('html, body').stop().animate({
			'scrollTop': ($('.support').offset().top)*1-20
		}, 900, 'swing');
	});
	/*Page đăng ký nhanh*/
	$(".type_customer_select > div").click(function(event) {
		event.stopPropagation();
        $(".type_customer_select ul").slideToggle();
    });
	$(".category_customer_select >  div").click(function(event) {
		event.stopPropagation();
        $(".category_customer_select ul").slideToggle();
    });
	$(".type_chuacotaikhoan_top >  div").click(function(event) {
		event.stopPropagation();
        $(".type_chuacotaikhoan_top ul").slideToggle();
    });
	/*Page khuyến mại*/
	$(".filter-select-iterm > div").click(function(event) {
		event.stopPropagation();
		$(this).siblings('ul').slideToggle();
		$(this).parent().siblings().find('ul.dropdown-menu').hide();
    });
	var state = true;
	$( ".box_offers" ).click(function() {
		$(this).toggleClass('collaps');
		if ( state ) {
		$(this).children().children().siblings('.b_right').animate({
		height: 100+'%'
		}, 1000 );
		} else {
		$(this).children().children().siblings('.b_right').animate({
		height: 150
		}, 1000 );
		}
		state = !state;
	});	
	$('#offer_view_list').click(function(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		$('.round-list-offer').show('slow');
		$('.bando-offer').hide();
	});
	$('#offer_view_map').click(function(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		$('.bando-offer').show('slow');
		$('.round-list-offer').hide();
	});
	$("#show-category").click(function() {
		$(this).addClass('active');
		$('.box_search_category').show('slow');
		$('.box_search_category .close-btn').show('slow');
    });
	$("#show-filter").click(function() {
		$(this).addClass('active');
		$('.box_search_bottom').show('slow');
		$('.box_search_bottom .close-btn').show('slow');
    });
	$(".box_search_bottom .close-btn").click(function() { 
		$('.box_search_bottom').hide('slow');
		$("#show-filter").removeClass('active');
	});
	$(".box_search_category .close-btn").click(function() { 
		$('.box_search_category').hide('slow');
		$("#show-category").removeClass('active');
	});
	
	/*Trang khách hàng cao cấp*/
	$( ".prm_item_box" ).click(function() {
		$(this).toggleClass('collaps');
		if ( state ) {
			$(this).children().siblings('.prm-item-box').animate({
			height: '100%',
			}, 1000 );
		} else {
			$(this).children().siblings('.prm-item-box').animate({
			height: 210
			}, 1000 );
		}
		state = !state;
	});
	
	/*Trang khách hàng cá nhân*/
	$(".product_title .button").click(function () {
		$(".product_title").toggleClass('active');
        $(".relate_product").slideToggle();
		var windowW = $(window).width();
		if (windowW < 980) {
			$(window).scroll(function() {
				var currentScroll = $(window).scrollTop(); 
				if (currentScroll >= 1) {
					$('#header, #header-2').addClass('header-fix');
					$('#header, #header-2').css({             
						position: 'relative',
						top: '0',
						'z-index': '121'
					});
				}
			});	
		};
    });
	var highestCol = Math.max($('.relate_product').height());
	$('.cate_other_products').height(highestCol);
	$('.popup_left_menu').height(highestCol);
	
//	var highestCol_vcretail = Math.max($('.vocabulary-retail .views-row').height());
//	$('.vocabulary-retail .views-row').height(highestCol_vcretail);

	/*Trang khách hàng chi tiết*/
	$(".tell_more_title").click(function(event) {
		$('.tell_more_detail').slideToggle();
		$(this).toggleClass('icon-active');
    });
	$(".view-row .title-faq").click(function () {
		$(this).toggleClass('icon-active');
		$(this).siblings('.body-faq').slideToggle();
    });

	/*Header bottom 2 Mobile*/
	$('.show-iterm .b_left').click(function() {
		$(this).find('i').toggleClass('fa-chevron-up fa-chevron-down')
		$('.mobile_header2_navigator').slideToggle();
	});
		/*Bx slider khách hàng chi tiết optione 1*/
		$('.productpromotion-wrapper.option1 .bxslider').bxSlider({
			controls: true,
			nextSelector: '.productpromotion-wrapper.option1 #slider-next',
			prevSelector: '.productpromotion-wrapper.option1 #slider-prev',
			nextText: 'Onward →',
			prevText: '← Go back',
			minSlides: 1,
			maxSlides: 3,
			slideWidth: 280,
			slideMargin: 15,
			pager: false,
			onSliderLoad: function(){
			 $(".productpromotion-wrapper.option1 .bxslider").css("visibility", "visible");
			}
		  });
		  /*Bx slider khách hàng chi tiết optione 2*/
			$('.productpromotion-wrapper.option2 .bxslider').bxSlider({
				controls: true,
				nextSelector: '.productpromotion-wrapper.option2 #slider-next',
				prevSelector: '.productpromotion-wrapper.option2 #slider-prev',
				nextText: 'Onward 2→',
				prevText: '← Go back 2',
				minSlides: 1,
				maxSlides: 1,
				slideWidth: 600,
				slideMargin: 15,
				pager: false
			});
			/*Bx slider khách hàng chi tiết optione cho mobile*/
			$('.productpromotion-wrapper.formobile-sliderkm .bxslider').bxSlider({
				controls: true,
				nextSelector: '.productpromotion-wrapper.formobile-sliderkm #slider-next',
				prevSelector: '.productpromotion-wrapper.formobile-sliderkm #slider-prev',
				nextText: 'Onward mobile→',
				prevText: '← Go back mobile→',
				minSlides: 1,
				maxSlides: 1,
				slideWidth: 280,
				slideMargin: 15,
				pager: false
			});
	/*Page liên hệ*/
	$(document).on('click', '.form-group-select > div', function() { 
	  $(this).siblings('ul').slideToggle();
	  $(this).parent().parent().siblings().find('ul.dropdown-menu').hide();
	 });
	
	/*Webchat*/
	$('.webchat_widget_wrap').hover(function(){
		$('.webchat_widget_link').toggleClass('show_ht');
	});
	
	/*Drop language PC*/
	$(".select-lang").click(function (event) {
		event.stopPropagation();
		$(".choise-lang").slideToggle();
	})
	$(document).click( function(){
        $('.choise-lang, .type_customer_select ul, .category_customer_select ul, .type_chuacotaikhoan_top ul, .filter-select-iterm ul').hide();
    });
	
	/*Menu Footer*/
	$('.footer-index-lv1 > li > a').click(function() {
		$(this).toggleClass('icon-active');
		$(this).parent().siblings().children('a').removeClass('icon-active');
		$(this).next('.hidden').toggleClass('active');
		$('.footer-index-lv1 > li > a').not($(this)).next('.hidden').removeClass('active');
	});
	$("#footer_tel").click(function () {
        $(".footer-tel-popup").show();
    })
	$(".footer-tel-popup-close").click(function () {
        $(".footer-tel-popup").hide();
    });
	/*Popup Question Help*/
	$(document).on('click', '.question_help', function() { 
	  $(this).siblings('.form-group .popup_question_help').slideToggle();
	 });
	$(document).on('click', '.popup-close', function() { 
	  $(".popup_question_help").hide();
	 });
	/*Sub menu Navigation*/
	$(".menu-personal").hover(function(){
		$(".menu-personal .sub-menu-icon-arrow").toggle();
        $(".menu-personal .sub-nice-menu").toggleClass('active');
    });
	$(".menu-corperate").hover(function () {
		$(".menu-corperate .sub-menu-icon-arrow").toggle();
        $(".menu-corperate .sub-nice-menu").toggleClass('active');
    });
	$(".top_menu_open_account_reg").hover(function () {
		$(".top_menu_open_account_reg .sub-menu-icon-arrow").toggle();
        $(".top_menu_open_account_reg .sub-nice-menu").toggleClass('active');
    })
	$(".top_menu_open_account_ext").hover(function () {
		$(".top_menu_open_account_ext .sub-menu-icon-arrow").toggle();
        $(".top_menu_open_account_ext .sub-nice-menu").toggleClass('active');
    })
	
	/*Slide Tin trang chủ*/
	$('.block-tinvan .bxslider').bxSlider({
	  mode: 'vertical',
	  auto: true,
	  speed: 400,
	  pager: false, 
	  controls: false
	});
	
	/*Quick Tab*/
	$('.tabgroup > div').hide();
	$('.tabgroup > div:first-of-type').show();
	$('.tabs a').click(function(e){
	  e.preventDefault();
		var $this = $(this),
			tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
			others = $this.closest('li').siblings().children('a'),
			target = $this.attr('href');
		others.removeClass('active');
		$this.addClass('active');
		$(tabgroup).children('div').hide();
		$(target).show();
	  
	});
	
	/*Language Mobile*/
	$(".mobile_menu_flag").click(function () {
		$(".mobile_lang_pane").slideToggle();
		$(this).toggleClass('icon-active');
		$(".menu_mobile_tablet").hide();
		$(".mobile_menu_line").removeClass('icon-active');
	})
	
	/*Menu Mobile*/
	$(".mobile_menu_line").click(function () {
		$(".menu_mobile_tablet").slideToggle();
		$(this).toggleClass('icon-active');
		$(".mobile_lang_pane").hide();
		var windowW = $(window).width();
		if (windowW < 980) {
			$(window).scroll(function() {
				var currentScroll = $(window).scrollTop(); 
				if (currentScroll >= 1) {
					$('#header').addClass('header-fix');
					$('#header').css({             
						position: 'relative',
						top: '0',
						'z-index': '121'
					});
				}
			});	
		};
	});
	$('.list_item_panel li > a').click(function() {
		$(this).find('i').toggleClass('fa-chevron-up fa-chevron-down');
		$(this).parent().siblings().children('a').find('i.fa-chevron-up').addClass('fa-chevron-down').removeClass('fa-chevron-up');
		$(this).next('.hidden').slideToggle();
		$(this).parent().siblings().find('ul').slideUp();
	})
	
	/*Slider category for mobile*/
	var owl_slider_newvip = $("#slide_news #owl-demo");
    owl_slider_newvip.owlCarousel({
        autoPlay: false,
        transitionStyle:'fade',
        items: 1,
        itemsDesktop: [1199, 1],
        itemsTablet: [600, 1],
        itemsDesktopSmall: [900, 1],
        itemsMobile: [479, 1]
    });

    $(".next_slider_newvip").click(function() {
        owl_slider_newvip.trigger('owl.next');
    });
    $(".prev_slider_newvip").click(function() {
        owl_slider_newvip.trigger('owl.prev');
    });
	
	/*Slider Suggested Properties*/
	var owl_properties = $(".suggested-properties #owl-demo");
    owl_properties.owlCarousel({
        autoPlay: false,
        transitionStyle:'fade',
        items: 3,
        itemsDesktop: [1199, 3],
        itemsTablet: [600, 2],
        itemsDesktopSmall: [900, 3],
        itemsMobile: [479, 1]
    });

    $(".next_suggested-properties").click(function() {
        owl_properties.trigger('owl.next');
    });
    $(".prev_suggested-properties").click(function() {
        owl_properties.trigger('owl.prev');
    });
	
	/*SUB MENU BELOW BANNER*/
	$("#submenu6").hover(function () {
        $(".sub-menu-tools-popup").toggle();
    })
	$("#submenu5").hover(function () {
        $(".sub-menu-tel-popup").toggle();
    })
	$("#submenu4").hover(function () {
        $(".sub-menu-location-popup").toggle();
    })
	$("#submenu3").hover(function () {
        $(".sub-menu-exchange-popup").toggle();
    })
	
	/*Discovery TPbank*/
	var discover_tpbank = $('#discover_tpbank');
	var doc_witdth = $('#header').width();
	var doc_height = (doc_witdth * 313) / 1000;
	
	discover_tpbank.css('left',doc_witdth);
	$('#root_floatbt').css('left',(doc_witdth / 2) - 346);
	$('#popup_widget').css('top', ((doc_height - 380) /3));
	
	$('#bt_popup_widget').click(function(){
		discover_tpbank.css('visibility','visible');
		discover_tpbank.addClass('active');
		discover_tpbank.animate({
			left : 0
		},1000,function(){
			$('#root_floatbt').animate({
				top : '0'
			},1000,function(){
				$('#root_floatbt > .floatbt_parent').click();
			});
		});
		$('.close_bt_root').delay(500).show(0).css({
			'top': '-200px',
			'left': '335px'
		});
		$('.bt_wrapper').delay(600).css({
			'position': 'relative',
			'top': '-500px',
			'transition': 'top 3s ease'
		});
		$('ul.floatbt_wrapper').delay(700).css({
			'position': 'relative',
			'top': '-500px',
			'left': '0'
		});
		$('ul.floatbt_wrapper > li').delay(700).show(0).css('margin','0 -40px');
		$('ul.floatbt_wrapper > li').removeClass('active');
	});
	
	$('.floatbt_button').hover(function(){
		$(this).find(".label").toggle();
    });
	$('.floatbt_child').hover(function(){
		$(this).find(".label_sub").toggle();
    });
	
	$('#bt_close_popup_widget').click(function(){
		discover_tpbank.removeClass('active');
		discover_tpbank.animate({
			left : doc_witdth + 'px'
		},1000);
		$('.close_bt_root').hide(0);
		$('ul.floatbt_wrapper li').hide(0);
	});
	$('.close_bt_root').click(function(){
		discover_tpbank.removeClass('active');
		discover_tpbank.delay(1000).animate({
			left : doc_witdth + 'px'
		},1000);
		$('.close_bt_root').hide(0);
		$('ul.floatbt_wrapper > li').hide(0);
		$('#conten_floatbt').hide();
	});
	
	/*Quick Tab Discovery TPBANK*/
	$('#floatbt1').click(function(){
		$(this).parent().addClass('active');
		$(this).parent().siblings().removeClass('active');
		$('#conten_floatbt #floatbt1').slideToggle('slow');
		$('#conten_floatbt #floatbt2').hide();
		$('#conten_floatbt #floatbt3').hide();
	});
	$('#floatbt2').click(function(){
		$(this).parent().addClass('active');
		$(this).parent().siblings().removeClass('active');
		$('#conten_floatbt #floatbt2').slideToggle('slow');
		$('#conten_floatbt #floatbt1').hide();
		$('#conten_floatbt #floatbt3').hide();
	});
	$('#floatbt3').click(function(){
		$(this).parent().addClass('active');
		$(this).parent().siblings().removeClass('active');
		$('#conten_floatbt #floatbt3').slideToggle('slow');
		$('#conten_floatbt #floatbt1').hide();
		$('#conten_floatbt #floatbt2').hide();
	});
	
	/*Trang hỏi đáp*/
	//$('.group-wrapper-button a.bt-hideall').click(function(){
	$(document).on('click', '.group-wrapper-button a.bt-hideall', function(){
		$('.group-wrapper-button a.bt-showall').removeClass('active');
		$(this).addClass('active');
		$(this).parent().siblings('.group-content').find('.answer').slideUp();
	});
	//$('.group-wrapper-button a.bt-showall').click(function(){
	$(document).on('click', '.group-wrapper-button a.bt-showall', function(){
		$('.group-wrapper-button a.bt-hideall').removeClass('active');
		$(this).addClass('active');
		$(this).parent().siblings('.group-content').find('.answer').slideDown();
	});
	//$('.b_right_hoidap .question').click(function(){
	$(document).on('click', '.b_right_hoidap .question', function(){
		$(this).siblings('.b_right_hoidap .answer').slideToggle();
	});
	//$('.subgroup-title').click(function(){
	$(document).on('click', '.subgroup-title', function(){
		$(this).toggleClass('icon-active');
		$(this).siblings('.subgroup-wrapper-in').slideToggle();
		$(this).siblings('.group-wrapper-button-bottom').slideToggle();
		$(this).siblings('.bt-top-bottom').slideToggle();
	});
	
	/*Trang Properties Search*/
	//$('.list-content-property .group-title').click(function(){
	$(document).on('click', '.list-content-property .group-title', function() { 
		$(this).toggleClass('open');
		$(this).siblings('.list-content-property ul').slideToggle();
	});
	$('.bt_expand_search').click(function(){
		$(this).toggleClass('open');
		$(this).siblings('.ppt_text_again').toggleClass('bt-hidden');
		$('.property_search_form').slideToggle();
	});
	
	/*Block phương án vay*/
	$('.schedule-toggle #toggle-show').click(function(){
		$('.schedule-top-pager, .schedule-table').toggleClass('bt-hidden');
		$('.schedule-header').removeClass('schedule-hide');
		$('.schedule-header').addClass('schedule-show');		
	});
	$('.schedule-toggle #toggle-hide').click(function(){
		$('.schedule-top-pager, .schedule-table').toggleClass('bt-hidden');
		$('.schedule-header').removeClass('schedule-show');
		$('.schedule-header').addClass('schedule-hide');	
	});
	/*Fix menu window scroll*/
	function fixDiv() {
		var $cache = $('#navigation');
		if ($(window).scrollTop() > 100){
			$cache.addClass('navigation-fix');
			$cache.css({
			'position': 'fixed',
			'top': '0px',
			'width': '100%'
			});
		}
		else {
			$cache.removeClass('navigation-fix');
			$cache.css({
			'position': 'relative',
			'top': 'auto'
			});
		}
	}
	$(window).scroll(fixDiv);
	fixDiv();
	
	/*Fix LeftSidebar when window scroll*/
	if ($('.sidebars').length){
		var fixmeTop = $('.sidebars').offset().top;
	}
	$(window).scroll(function() {
		var currentScroll = $(window).scrollTop(); 
		if (fixmeTop < currentScroll && $(".content-pane-wrap").height() + $(".content-pane-wrap").offset().top - $(".sidebars").height() > currentScroll) {
			$('.sidebars').css({
				'position': 'fixed',
				'top': '45px'
			});
		} else {
			$('.sidebars').css({
				'position': 'relative',
				'top': 'auto'
			});
		};
		if (fixmeTop < currentScroll && $(".content-pane-wrap").height() + $(".content-pane-wrap").offset().top - $(".sidebars").height() < currentScroll) {
			$('.sidebars').css({
				'position': 'absolute',
				'bottom': '45px'
			});
		} else if (fixmeTop < currentScroll && $(".content-pane-wrap").height() + $(".content-pane-wrap").offset().top - $(".sidebars").height() > currentScroll) {
			$('.sidebars').css({
				'position': 'fixed',
				'top': '45px'
			});
		}else {
			$('.sidebars').css({
				'position': 'relative',
				'top': 'auto',
				'bottom': 0
			});
		};
	});
	
	/*window scroll fix header mobile*/
	var windowW = $(window).width();
	if (windowW < 980) {
		$(window).scroll(function() {
			var currentScroll = $(window).scrollTop(); 
			if (currentScroll >= 1) {
				$('#header').addClass('header-fix');
				$('#header').css({             
					position: 'fixed',
					top: '0',
					'z-index': '121'
				});
			}else {
				$('#header').removeClass('header-fix');
				$('#header').css({                   
					position: 'relative',
					top: '0',
					'z-index': '10'
				});
			}
		});	
	};
	/*LeftSidebar Mobile*/
	$(".mobile_nav > div").click(function () {
        $(".mobile_nav ul").slideToggle();
    });
	
	/*Về TPbank + Nhà đầu tư*/
	//$(".group-wrapper .group-title").click(function () {
$(document).on('click', '.group-wrapper .group-title', function() { 
		$(this).toggleClass('icon');
		$(this).siblings('.group-body').slideToggle();
    });
	$(".group-wrapper .bt-view-profile").click(function () {
		$(this).toggleClass('active');
		$(this).parent().parent().siblings('.profile-value').slideToggle();
    });
	$('.sub-sidebar a[href^="#"]').click(function(event) {
		var id = $(this).attr("href");
		var offset = 40;
		var target = $(id).offset().top - offset;
		$('html, body').animate({scrollTop:target}, 500);
		event.preventDefault();
	});
	/*Trang tỉ giá vàng*/
	$(".ring-region .group-title").click(function () {
		$(this).toggleClass('icon-active');
		$(this).siblings('.region-table-wrapper').slideToggle();
    });
	
	/*Type check Y - N*/
	$('.form-checkyn span').click(function(event) {
		$(this).addClass('active').siblings().removeClass('active');
	});
	/*Type Checkbox*/
	 $(document).on('click', '.formCheckbox a', function() { 
	  $(this).toggleClass('jqTransformChecked');
	 });
	/*Type Radio*/
	 $(document).on('click', '.formradio a', function() { 
	  $(this).addClass('jqTransformChecked').parent().siblings().children().removeClass('jqTransformChecked');
	 });
	/*Date picker*/
	if ($('#datepicker').length){
		var date = $('#datepicker').datepicker({ dateFormat: 'dd-mm-yy' }).val();
		$("#datepicker").datepicker();
	}
	
	/*Flip Slide*/
	if ($('#coverflow').length){
		$("#coverflow").flipster({
			style: 'carousel'
		});	
	};
	
	/*Tooltip*/
	if ($('.ico-mask').length){
		$(".ico-mask").tooltip();
	};
	
	/*FancyBox Images Slide*/
	if ($('[data-fancybox]').length){
	$('[data-fancybox]').fancybox({
		fullScreen : {
			autoStart : false,
		},
	});
	}
	
	/*FancyBox Form viết đánh giá*/
	if ($(".list-reviewpopup").length){
		$(".list-reviewpopup").fancybox();
	}
	if ($(".fancybox-formnx").length){
		$(".fancybox-formnx").fancybox({
			afterShow: function () {
				$("#mySubmit").on("click", function () {
					$.fancybox.close();
					setTimeout(function () {
						$("#myForm").submit();
					}, 100);
				});
			}
		});
	}
	
	/*Fancybox chi tiết cate khách hàng cao cấp*/
	if ($(".fancybox-readmore").length){
		$(".fancybox-readmore").fancybox();
	}

	/*Fancybox Alert News letter*/
	if ($(".alert-newletter").length){
		$(".alert-newletter").fancybox();
	}
	
	/*FancyBox User Login Property*/
	if ($(".alert-property-user-login").length){
		$(".alert-property-user-login").fancybox();
	}
	});
	/*Click onscroll Header 2*/
	$(function(){
		$('.top_menu_product_link a[href^="#"]').click(function(event) {
			$('a').each(function () {
				$(this).removeClass('active');
				$(this).parent().removeClass('active');
			})
			$(this).addClass('active');
			$(this).parent().addClass('active');
			var id = $(this).attr("href");
			var offset = 107;
			var target = $(id).offset().top - offset;
			$('html, body').animate({scrollTop:target}, 500);
			event.preventDefault();
		});
	});
	
	/*Window scroll active Header 2*/
	$(document).ready(function () {
		$(document).on("scroll", onScroll);
		function onScroll(event){
			var offset = 150;
			var scrollPos = $(document).scrollTop() + offset;
			$('#menu-center a[href*=\\#]:not([href=\\#])').each(function () {
				var currLink = $(this);
				var refElement = $(currLink.attr("href"));
				if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
					$('#menu-center ul li a').removeClass("active");
					currLink.addClass("active");
					$(this).parent().addClass('active');
				}
				else{
					currLink.removeClass("active");
					$(this).parent().removeClass('active');
				}
			});
		}
	});
	/*Window scroll active Header 2 Property*/
	$(document).ready(function () {
		$(document).on("scroll", onScroll);
		function onScroll(event){
			var scrollPos = $(document).scrollTop();
			$('.property_left_nav a[href*=\\#]:not([href=\\#])').each(function () {
				var currLink = $(this);
				var refElement = $(currLink.attr("href"));
				if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
					$('.property_left_nav ul li a').removeClass("active");
					currLink.addClass("active");
					$(this).parent().addClass('active');
				}
				else{
					currLink.removeClass("active");
					$(this).parent().removeClass('active');
				}
			});
		}
	});
	
	
	/*Fix header menu premier*/
	$(function(){
		if ($('.header-menu-premier').length){
			var fix_headerpremier = $('.header-menu-premier').offset().top;
		}
		var windowW = $(window).width();
		$(window).scroll(function() {
			var currentScroll = $(window).scrollTop(); 
			if (windowW < 980 & fix_headerpremier < currentScroll) {
				$('.header-menu-premier').addClass('fix-header-menu-premier');
				$('.header-menu-premier').css({
					'position': 'fixed',
					'top': '63px'
				});
			}else if (windowW >= 980 & fix_headerpremier < currentScroll) {
				$('.header-menu-premier').addClass('fix-header-menu-premier');
				$('.header-menu-premier').css({
					'position': 'fixed',
					'top': '41px'
				});
			} else {
				$('.header-menu-premier').removeClass('fix-header-menu-premier');
				$('.header-menu-premier').css({
					'position': 'relative',
					'top': 'auto'
				});
			}
		});
	});
	/*Tabs Đăng ký tài khoản
	$(function(){
		if ($("#tabs-register").length){
			$( "#tabs-register" ).tabs();
		}
	});*/
	/*Tabs Đăng ký tài khoản V2*/
	$(".tab-sidebar-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tabside-bar").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
	
	/*Đánh giá rate 2*/
	$(function(){
		$('.rank-half').hover(function() {
			var thisIndex = $(this).index(),
				parent = $(this).parent(),
				parentIndex = parent.index(),
				ranks = $('.rank-container');
			for (var i = 0; i < ranks.length; i++) {
				if(i < parentIndex) {
					$(ranks[i]).removeClass('half').addClass('full');
				} else {
					$(ranks[i]).removeClass('half').removeClass('full');
				}
			}
			if(thisIndex == 0) {
				parent.addClass('half');
			} else {
				parent.addClass('full');
			}
		});

		$('.rank-half').click(function() {
			var thisIndex = $(this).index(),
				parent = $(this).parent(),
				parentIndex = parent.index(),
				rating = parentIndex;
			rating += thisIndex ? 1 : 0.5;
			$('.foo').text(rating);
		});
	});
	/*Tabs khuyến mãi offer*/
	$(function(){
		if ($(".tabs-offer").length){
			$( ".tabs-offer" ).tabs();
		}
	});

	/*Quicktab sidebar menu V2*/
	$(".nav_tabregister a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-register").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
	/*Drop value form group select*/
	$(function() { 
		/*Property Search*/
		//$(".search_box .btn-dropdown-select").click(function() {
		$(document).on('click', '.search_box .btn-dropdown-select', function() { 
			$(this).siblings('.dropdown-menu').slideToggle();
			$(this).parent().parent().siblings().find('ul.dropdown-menu').hide();
			$(this).parent().siblings('search_box_bottom').find('ul.dropdown-menu').hide();
		});
		
	});
	$(function() { 
		//$(".dropdown-menu li a").click(function() {
		$(document).on('click', '.dropdown-menu li a', function() { 
			var text = $(this).html();
			$(this).parent().parent().siblings('.btn-dropdown-select').find("span").html(text);
			$(".dropdown-menu").hide();
			$('.dropdown-menu li').removeClass('active');
			$(this).parent().addClass('active');
		});
	});
	
	$(function() {
		$('.checkbox').on('click', function() {
			$('.form-register-property .dropdown-label').html($(':checked').length); 
		})
	});
	
	/*Hide mouseup*/
	$(document).mouseup(function(e) 
	{
		var container = $('.multi-dropdown-menu, .dropdown-menu');
		if (!container.is(e.target) && container.has(e.target).length === 0) 
		{
			container.hide();
		}
	});
	

!function(t){var e={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,ariaLive:!0,ariaHidden:!0,keyboardEnabled:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",stopAutoOnClick:!1,autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,shrinkItems:!1,onSliderLoad:function(){return!0},onSlideBefore:function(){return!0},onSlideAfter:function(){return!0},onSlideNext:function(){return!0},onSlidePrev:function(){return!0},onSliderResize:function(){return!0}};t.fn.bxSlider=function(n){if(0===this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var s={},o=this,r=t(window).width(),a=t(window).height();if(!t(o).data("bxSlider")){var l=function(){t(o).data("bxSlider")||(s.settings=t.extend({},e,n),s.settings.slideWidth=parseInt(s.settings.slideWidth),s.children=o.children(s.settings.slideSelector),s.children.length<s.settings.minSlides&&(s.settings.minSlides=s.children.length),s.children.length<s.settings.maxSlides&&(s.settings.maxSlides=s.children.length),s.settings.randomStart&&(s.settings.startSlide=Math.floor(Math.random()*s.children.length)),s.active={index:s.settings.startSlide},s.carousel=s.settings.minSlides>1||s.settings.maxSlides>1,s.carousel&&(s.settings.preloadImages="all"),s.minThreshold=s.settings.minSlides*s.settings.slideWidth+(s.settings.minSlides-1)*s.settings.slideMargin,s.maxThreshold=s.settings.maxSlides*s.settings.slideWidth+(s.settings.maxSlides-1)*s.settings.slideMargin,s.working=!1,s.controls={},s.interval=null,s.animProp="vertical"===s.settings.mode?"top":"left",s.usingCSS=s.settings.useCSS&&"fade"!==s.settings.mode&&function(){for(var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"],i=0;i<e.length;i++)if(void 0!==t.style[e[i]])return s.cssPrefix=e[i].replace("Perspective","").toLowerCase(),s.animProp="-"+s.cssPrefix+"-transform",!0;return!1}(),"vertical"===s.settings.mode&&(s.settings.maxSlides=s.settings.minSlides),o.data("origStyle",o.attr("style")),o.children(s.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),d())},d=function(){var e=s.children.eq(s.settings.startSlide);o.wrap('<div class="'+s.settings.wrapperClass+'"><div class="bx-viewport"></div></div>'),s.viewport=o.parent(),s.settings.ariaLive&&!s.settings.ticker&&s.viewport.attr("aria-live","polite"),s.loader=t('<div class="bx-loading" />'),s.viewport.prepend(s.loader),o.css({width:"horizontal"===s.settings.mode?1e3*s.children.length+215+"%":"auto",position:"relative"}),s.usingCSS&&s.settings.easing?o.css("-"+s.cssPrefix+"-transition-timing-function",s.settings.easing):s.settings.easing||(s.settings.easing="swing"),s.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),s.viewport.parent().css({maxWidth:u()}),s.children.css({float:"horizontal"===s.settings.mode?"left":"none",listStyle:"none",position:"relative"}),s.children.css("width",h()),"horizontal"===s.settings.mode&&s.settings.slideMargin>0&&s.children.css("marginRight",s.settings.slideMargin),"vertical"===s.settings.mode&&s.settings.slideMargin>0&&s.children.css("marginBottom",s.settings.slideMargin),"fade"===s.settings.mode&&(s.children.css({position:"absolute",zIndex:0,display:"none"}),s.children.eq(s.settings.startSlide).css({zIndex:s.settings.slideZIndex,display:"block"})),s.controls.el=t('<div class="bx-controls" />'),s.settings.captions&&P(),s.active.last=s.settings.startSlide===f()-1,s.settings.video&&o.fitVids(),("all"===s.settings.preloadImages||s.settings.ticker)&&(e=s.children),s.settings.ticker?s.settings.pager=!1:(s.settings.controls&&C(),s.settings.auto&&s.settings.autoControls&&T(),s.settings.pager&&w(),(s.settings.controls||s.settings.autoControls||s.settings.pager)&&s.viewport.after(s.controls.el)),c(e,g)},c=function(e,i){var n=e.find('img:not([src=""]), iframe').length,s=0;return 0===n?void i():void e.find('img:not([src=""]), iframe').each(function(){t(this).one("load error",function(){++s===n&&i()}).each(function(){this.complete&&t(this).trigger("load")})})},g=function(){if(s.settings.infiniteLoop&&"fade"!==s.settings.mode&&!s.settings.ticker){var e="vertical"===s.settings.mode?s.settings.minSlides:s.settings.maxSlides,i=s.children.slice(0,e).clone(!0).addClass("bx-clone"),n=s.children.slice(-e).clone(!0).addClass("bx-clone");s.settings.ariaHidden&&(i.attr("aria-hidden",!0),n.attr("aria-hidden",!0)),o.append(i).prepend(n)}s.loader.remove(),m(),"vertical"===s.settings.mode&&(s.settings.adaptiveHeight=!0),s.viewport.height(p()),o.redrawSlider(),s.settings.onSliderLoad.call(o,s.active.index),s.initialized=!0,s.settings.responsive&&t(window).bind("resize",Z),s.settings.auto&&s.settings.autoStart&&(f()>1||s.settings.autoSlideForOnePage)&&H(),s.settings.ticker&&W(),s.settings.pager&&I(s.settings.startSlide),s.settings.controls&&D(),s.settings.touchEnabled&&!s.settings.ticker&&N(),s.settings.keyboardEnabled&&!s.settings.ticker&&t(document).keydown(F)},p=function(){var e=0,n=t();if("vertical"===s.settings.mode||s.settings.adaptiveHeight)if(s.carousel){var o=1===s.settings.moveSlides?s.active.index:s.active.index*x();for(n=s.children.eq(o),i=1;i<=s.settings.maxSlides-1;i++)n=o+i>=s.children.length?n.add(s.children.eq(i-1)):n.add(s.children.eq(o+i))}else n=s.children.eq(s.active.index);else n=s.children;return"vertical"===s.settings.mode?(n.each(function(i){e+=t(this).outerHeight()}),s.settings.slideMargin>0&&(e+=s.settings.slideMargin*(s.settings.minSlides-1))):e=Math.max.apply(Math,n.map(function(){return t(this).outerHeight(!1)}).get()),"border-box"===s.viewport.css("box-sizing")?e+=parseFloat(s.viewport.css("padding-top"))+parseFloat(s.viewport.css("padding-bottom"))+parseFloat(s.viewport.css("border-top-width"))+parseFloat(s.viewport.css("border-bottom-width")):"padding-box"===s.viewport.css("box-sizing")&&(e+=parseFloat(s.viewport.css("padding-top"))+parseFloat(s.viewport.css("padding-bottom"))),e},u=function(){var t="100%";return s.settings.slideWidth>0&&(t="horizontal"===s.settings.mode?s.settings.maxSlides*s.settings.slideWidth+(s.settings.maxSlides-1)*s.settings.slideMargin:s.settings.slideWidth),t},h=function(){var t=s.settings.slideWidth,e=s.viewport.width();if(0===s.settings.slideWidth||s.settings.slideWidth>e&&!s.carousel||"vertical"===s.settings.mode)t=e;else if(s.settings.maxSlides>1&&"horizontal"===s.settings.mode){if(e>s.maxThreshold)return t;e<s.minThreshold?t=(e-s.settings.slideMargin*(s.settings.minSlides-1))/s.settings.minSlides:s.settings.shrinkItems&&(t=Math.floor((e+s.settings.slideMargin)/Math.ceil((e+s.settings.slideMargin)/(t+s.settings.slideMargin))-s.settings.slideMargin))}return t},v=function(){var t=1,e=null;return"horizontal"===s.settings.mode&&s.settings.slideWidth>0?s.viewport.width()<s.minThreshold?t=s.settings.minSlides:s.viewport.width()>s.maxThreshold?t=s.settings.maxSlides:(e=s.children.first().width()+s.settings.slideMargin,t=Math.floor((s.viewport.width()+s.settings.slideMargin)/e)):"vertical"===s.settings.mode&&(t=s.settings.minSlides),t},f=function(){var t=0,e=0,i=0;if(s.settings.moveSlides>0)if(s.settings.infiniteLoop)t=Math.ceil(s.children.length/x());else for(;e<s.children.length;)++t,e=i+v(),i+=s.settings.moveSlides<=v()?s.settings.moveSlides:v();else t=Math.ceil(s.children.length/v());return t},x=function(){return s.settings.moveSlides>0&&s.settings.moveSlides<=v()?s.settings.moveSlides:v()},m=function(){var t,e,i;s.children.length>s.settings.maxSlides&&s.active.last&&!s.settings.infiniteLoop?"horizontal"===s.settings.mode?(e=s.children.last(),t=e.position(),S(-(t.left-(s.viewport.width()-e.outerWidth())),"reset",0)):"vertical"===s.settings.mode&&(i=s.children.length-s.settings.minSlides,t=s.children.eq(i).position(),S(-t.top,"reset",0)):(t=s.children.eq(s.active.index*x()).position(),s.active.index===f()-1&&(s.active.last=!0),void 0!==t&&("horizontal"===s.settings.mode?S(-t.left,"reset",0):"vertical"===s.settings.mode&&S(-t.top,"reset",0)))},S=function(e,i,n,r){var a,l;s.usingCSS?(l="vertical"===s.settings.mode?"translate3d(0, "+e+"px, 0)":"translate3d("+e+"px, 0, 0)",o.css("-"+s.cssPrefix+"-transition-duration",n/1e3+"s"),"slide"===i?(o.css(s.animProp,l),0!==n?o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(e){t(e.target).is(o)&&(o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),q())}):q()):"reset"===i?o.css(s.animProp,l):"ticker"===i&&(o.css("-"+s.cssPrefix+"-transition-timing-function","linear"),o.css(s.animProp,l),0!==n?o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(e){t(e.target).is(o)&&(o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),S(r.resetValue,"reset",0),L())}):(S(r.resetValue,"reset",0),L()))):(a={},a[s.animProp]=e,"slide"===i?o.animate(a,n,s.settings.easing,function(){q()}):"reset"===i?o.css(s.animProp,e):"ticker"===i&&o.animate(a,n,"linear",function(){S(r.resetValue,"reset",0),L()}))},b=function(){for(var e="",i="",n=f(),o=0;o<n;o++)i="",s.settings.buildPager&&t.isFunction(s.settings.buildPager)||s.settings.pagerCustom?(i=s.settings.buildPager(o),s.pagerEl.addClass("bx-custom-pager")):(i=o+1,s.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+o+'" class="bx-pager-link">'+i+"</a></div>";s.pagerEl.html(e)},w=function(){s.settings.pagerCustom?s.pagerEl=t(s.settings.pagerCustom):(s.pagerEl=t('<div class="bx-pager" />'),s.settings.pagerSelector?t(s.settings.pagerSelector).html(s.pagerEl):s.controls.el.addClass("bx-has-pager").append(s.pagerEl),b()),s.pagerEl.on("click touchend","a",z)},C=function(){s.controls.next=t('<a class="bx-next" href="">'+s.settings.nextText+"</a>"),s.controls.prev=t('<a class="bx-prev" href="">'+s.settings.prevText+"</a>"),s.controls.next.bind("click touchend",E),s.controls.prev.bind("click touchend",k),s.settings.nextSelector&&t(s.settings.nextSelector).append(s.controls.next),s.settings.prevSelector&&t(s.settings.prevSelector).append(s.controls.prev),s.settings.nextSelector||s.settings.prevSelector||(s.controls.directionEl=t('<div class="bx-controls-direction" />'),s.controls.directionEl.append(s.controls.prev).append(s.controls.next),s.controls.el.addClass("bx-has-controls-direction").append(s.controls.directionEl))},T=function(){s.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+s.settings.startText+"</a></div>"),s.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+s.settings.stopText+"</a></div>"),s.controls.autoEl=t('<div class="bx-controls-auto" />'),s.controls.autoEl.on("click",".bx-start",M),s.controls.autoEl.on("click",".bx-stop",y),s.settings.autoControlsCombine?s.controls.autoEl.append(s.controls.start):s.controls.autoEl.append(s.controls.start).append(s.controls.stop),s.settings.autoControlsSelector?t(s.settings.autoControlsSelector).html(s.controls.autoEl):s.controls.el.addClass("bx-has-controls-auto").append(s.controls.autoEl),A(s.settings.autoStart?"stop":"start")},P=function(){s.children.each(function(e){var i=t(this).find("img:first").attr("title");void 0!==i&&(""+i).length&&t(this).append('<div class="bx-caption"><span>'+i+"</span></div>")})},E=function(t){t.preventDefault(),s.controls.el.hasClass("disabled")||(s.settings.auto&&s.settings.stopAutoOnClick&&o.stopAuto(),o.goToNextSlide())},k=function(t){t.preventDefault(),s.controls.el.hasClass("disabled")||(s.settings.auto&&s.settings.stopAutoOnClick&&o.stopAuto(),o.goToPrevSlide())},M=function(t){o.startAuto(),t.preventDefault()},y=function(t){o.stopAuto(),t.preventDefault()},z=function(e){var i,n;e.preventDefault(),s.controls.el.hasClass("disabled")||(s.settings.auto&&s.settings.stopAutoOnClick&&o.stopAuto(),void 0!==(i=t(e.currentTarget)).attr("data-slide-index")&&(n=parseInt(i.attr("data-slide-index")))!==s.active.index&&o.goToSlide(n))},I=function(e){var i=s.children.length;return"short"===s.settings.pagerType?(s.settings.maxSlides>1&&(i=Math.ceil(s.children.length/s.settings.maxSlides)),void s.pagerEl.html(e+1+s.settings.pagerShortSeparator+i)):(s.pagerEl.find("a").removeClass("active"),void s.pagerEl.each(function(i,n){t(n).find("a").eq(e).addClass("active")}))},q=function(){if(s.settings.infiniteLoop){var t="";0===s.active.index?t=s.children.eq(0).position():s.active.index===f()-1&&s.carousel?t=s.children.eq((f()-1)*x()).position():s.active.index===s.children.length-1&&(t=s.children.eq(s.children.length-1).position()),t&&("horizontal"===s.settings.mode?S(-t.left,"reset",0):"vertical"===s.settings.mode&&S(-t.top,"reset",0))}s.working=!1,s.settings.onSlideAfter.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index)},A=function(t){s.settings.autoControlsCombine?s.controls.autoEl.html(s.controls[t]):(s.controls.autoEl.find("a").removeClass("active"),s.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},D=function(){1===f()?(s.controls.prev.addClass("disabled"),s.controls.next.addClass("disabled")):!s.settings.infiniteLoop&&s.settings.hideControlOnEnd&&(0===s.active.index?(s.controls.prev.addClass("disabled"),s.controls.next.removeClass("disabled")):s.active.index===f()-1?(s.controls.next.addClass("disabled"),s.controls.prev.removeClass("disabled")):(s.controls.prev.removeClass("disabled"),s.controls.next.removeClass("disabled")))},H=function(){s.settings.autoDelay>0?setTimeout(o.startAuto,s.settings.autoDelay):(o.startAuto(),t(window).focus(function(){o.startAuto()}).blur(function(){o.stopAuto()})),s.settings.autoHover&&o.hover(function(){s.interval&&(o.stopAuto(!0),s.autoPaused=!0)},function(){s.autoPaused&&(o.startAuto(!0),s.autoPaused=null)})},W=function(){var e,i,n,r,a,l,d,c,g=0;"next"===s.settings.autoDirection?o.append(s.children.clone().addClass("bx-clone")):(o.prepend(s.children.clone().addClass("bx-clone")),e=s.children.first().position(),g="horizontal"===s.settings.mode?-e.left:-e.top),S(g,"reset",0),s.settings.pager=!1,s.settings.controls=!1,s.settings.autoControls=!1,s.settings.tickerHover&&(s.usingCSS?(r="horizontal"===s.settings.mode?4:5,s.viewport.hover(function(){i=o.css("-"+s.cssPrefix+"-transform"),n=parseFloat(i.split(",")[r]),S(n,"reset",0)},function(){c=0,s.children.each(function(e){c+="horizontal"===s.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)}),a=s.settings.speed/c,l="horizontal"===s.settings.mode?"left":"top",d=a*(c-Math.abs(parseInt(n))),L(d)})):s.viewport.hover(function(){o.stop()},function(){c=0,s.children.each(function(e){c+="horizontal"===s.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)}),a=s.settings.speed/c,l="horizontal"===s.settings.mode?"left":"top",d=a*(c-Math.abs(parseInt(o.css(l)))),L(d)})),L()},L=function(t){var e,i,n=t||s.settings.speed,r={left:0,top:0},a={left:0,top:0};"next"===s.settings.autoDirection?r=o.find(".bx-clone").first().position():a=s.children.first().position(),e="horizontal"===s.settings.mode?-r.left:-r.top,i="horizontal"===s.settings.mode?-a.left:-a.top,S(e,"ticker",n,{resetValue:i})},O=function(e){var i=t(window),n={top:i.scrollTop(),left:i.scrollLeft()},s=e.offset();return n.right=n.left+i.width(),n.bottom=n.top+i.height(),s.right=s.left+e.outerWidth(),s.bottom=s.top+e.outerHeight(),!(n.right<s.left||n.left>s.right||n.bottom<s.top||n.top>s.bottom)},F=function(t){var e=document.activeElement.tagName.toLowerCase();if(null==new RegExp(e,["i"]).exec("input|textarea")&&O(o)){if(39===t.keyCode)return E(t),!1;if(37===t.keyCode)return k(t),!1}},N=function(){s.touch={start:{x:0,y:0},end:{x:0,y:0}},s.viewport.bind("touchstart MSPointerDown pointerdown",X),s.viewport.on("click",".bxslider a",function(t){s.viewport.hasClass("click-disabled")&&(t.preventDefault(),s.viewport.removeClass("click-disabled"))})},X=function(t){if(s.controls.el.addClass("disabled"),s.working)t.preventDefault(),s.controls.el.removeClass("disabled");else{s.touch.originalPos=o.position();var e=t.originalEvent,i=void 0!==e.changedTouches?e.changedTouches:[e];s.touch.start.x=i[0].pageX,s.touch.start.y=i[0].pageY,s.viewport.get(0).setPointerCapture&&(s.pointerId=e.pointerId,s.viewport.get(0).setPointerCapture(s.pointerId)),s.viewport.bind("touchmove MSPointerMove pointermove",V),s.viewport.bind("touchend MSPointerUp pointerup",R),s.viewport.bind("MSPointerCancel pointercancel",Y)}},Y=function(t){S(s.touch.originalPos.left,"reset",0),s.controls.el.removeClass("disabled"),s.viewport.unbind("MSPointerCancel pointercancel",Y),s.viewport.unbind("touchmove MSPointerMove pointermove",V),s.viewport.unbind("touchend MSPointerUp pointerup",R),s.viewport.get(0).releasePointerCapture&&s.viewport.get(0).releasePointerCapture(s.pointerId)},V=function(t){var e=t.originalEvent,i=void 0!==e.changedTouches?e.changedTouches:[e],n=Math.abs(i[0].pageX-s.touch.start.x),o=Math.abs(i[0].pageY-s.touch.start.y),r=0,a=0;3*n>o&&s.settings.preventDefaultSwipeX?t.preventDefault():3*o>n&&s.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!==s.settings.mode&&s.settings.oneToOneTouch&&("horizontal"===s.settings.mode?(a=i[0].pageX-s.touch.start.x,r=s.touch.originalPos.left+a):(a=i[0].pageY-s.touch.start.y,r=s.touch.originalPos.top+a),S(r,"reset",0))},R=function(t){s.viewport.unbind("touchmove MSPointerMove pointermove",V),s.controls.el.removeClass("disabled");var e=t.originalEvent,i=void 0!==e.changedTouches?e.changedTouches:[e],n=0,r=0;s.touch.end.x=i[0].pageX,s.touch.end.y=i[0].pageY,"fade"===s.settings.mode?(r=Math.abs(s.touch.start.x-s.touch.end.x))>=s.settings.swipeThreshold&&(s.touch.start.x>s.touch.end.x?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto()):("horizontal"===s.settings.mode?(r=s.touch.end.x-s.touch.start.x,n=s.touch.originalPos.left):(r=s.touch.end.y-s.touch.start.y,n=s.touch.originalPos.top),!s.settings.infiniteLoop&&(0===s.active.index&&r>0||s.active.last&&r<0)?S(n,"reset",200):Math.abs(r)>=s.settings.swipeThreshold?(r<0?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto()):S(n,"reset",200)),s.viewport.unbind("touchend MSPointerUp pointerup",R),s.viewport.get(0).releasePointerCapture&&s.viewport.get(0).releasePointerCapture(s.pointerId)},Z=function(e){if(s.initialized)if(s.working)window.setTimeout(Z,10);else{var i=t(window).width(),n=t(window).height();r===i&&a===n||(r=i,a=n,o.redrawSlider(),s.settings.onSliderResize.call(o,s.active.index))}},B=function(t){var e=v();s.settings.ariaHidden&&!s.settings.ticker&&(s.children.attr("aria-hidden","true"),s.children.slice(t,t+e).attr("aria-hidden","false"))},U=function(t){return t<0?s.settings.infiniteLoop?f()-1:s.active.index:t>=f()?s.settings.infiniteLoop?0:s.active.index:t};return o.goToSlide=function(e,i){var n,r,a,l,d=!0,c=0,g={left:0,top:0},u=null;if(s.oldIndex=s.active.index,s.active.index=U(e),!s.working&&s.active.index!==s.oldIndex){if(s.working=!0,void 0!==(d=s.settings.onSlideBefore.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index))&&!d)return s.active.index=s.oldIndex,void(s.working=!1);"next"===i?s.settings.onSlideNext.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index)||(d=!1):"prev"===i&&(s.settings.onSlidePrev.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index)||(d=!1)),s.active.last=s.active.index>=f()-1,(s.settings.pager||s.settings.pagerCustom)&&I(s.active.index),s.settings.controls&&D(),"fade"===s.settings.mode?(s.settings.adaptiveHeight&&s.viewport.height()!==p()&&s.viewport.animate({height:p()},s.settings.adaptiveHeightSpeed),s.children.filter(":visible").fadeOut(s.settings.speed).css({zIndex:0}),s.children.eq(s.active.index).css("zIndex",s.settings.slideZIndex+1).fadeIn(s.settings.speed,function(){t(this).css("zIndex",s.settings.slideZIndex),q()})):(s.settings.adaptiveHeight&&s.viewport.height()!==p()&&s.viewport.animate({height:p()},s.settings.adaptiveHeightSpeed),!s.settings.infiniteLoop&&s.carousel&&s.active.last?"horizontal"===s.settings.mode?(u=s.children.eq(s.children.length-1),g=u.position(),c=s.viewport.width()-u.outerWidth()):(n=s.children.length-s.settings.minSlides,g=s.children.eq(n).position()):s.carousel&&s.active.last&&"prev"===i?(r=1===s.settings.moveSlides?s.settings.maxSlides-x():(f()-1)*x()-(s.children.length-s.settings.maxSlides),u=o.children(".bx-clone").eq(r),g=u.position()):"next"===i&&0===s.active.index?(g=o.find("> .bx-clone").eq(s.settings.maxSlides).position(),s.active.last=!1):e>=0&&(l=e*parseInt(x()),g=s.children.eq(l).position()),void 0!==g?(a="horizontal"===s.settings.mode?-(g.left-c):-g.top,S(a,"slide",s.settings.speed)):s.working=!1),s.settings.ariaHidden&&B(s.active.index*x())}},o.goToNextSlide=function(){if(s.settings.infiniteLoop||!s.active.last){var t=parseInt(s.active.index)+1;o.goToSlide(t,"next")}},o.goToPrevSlide=function(){if(s.settings.infiniteLoop||0!==s.active.index){var t=parseInt(s.active.index)-1;o.goToSlide(t,"prev")}},o.startAuto=function(t){s.interval||(s.interval=setInterval(function(){"next"===s.settings.autoDirection?o.goToNextSlide():o.goToPrevSlide()},s.settings.pause),s.settings.autoControls&&!0!==t&&A("stop"))},o.stopAuto=function(t){s.interval&&(clearInterval(s.interval),s.interval=null,s.settings.autoControls&&!0!==t&&A("start"))},o.getCurrentSlide=function(){return s.active.index},o.getCurrentSlideElement=function(){return s.children.eq(s.active.index)},o.getSlideElement=function(t){return s.children.eq(t)},o.getSlideCount=function(){return s.children.length},o.isWorking=function(){return s.working},o.redrawSlider=function(){s.children.add(o.find(".bx-clone")).outerWidth(h()),s.viewport.css("height",p()),s.settings.ticker||m(),s.active.last&&(s.active.index=f()-1),s.active.index>=f()&&(s.active.last=!0),s.settings.pager&&!s.settings.pagerCustom&&(b(),I(s.active.index)),s.settings.ariaHidden&&B(s.active.index*x())},o.destroySlider=function(){s.initialized&&(s.initialized=!1,t(".bx-clone",this).remove(),s.children.each(function(){void 0!==t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!==t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),s.controls.el&&s.controls.el.remove(),s.controls.next&&s.controls.next.remove(),s.controls.prev&&s.controls.prev.remove(),s.pagerEl&&s.settings.controls&&!s.settings.pagerCustom&&s.pagerEl.remove(),t(".bx-caption",this).remove(),s.controls.autoEl&&s.controls.autoEl.remove(),clearInterval(s.interval),s.settings.responsive&&t(window).unbind("resize",Z),s.settings.keyboardEnabled&&t(document).unbind("keydown",F),t(this).removeData("bxSlider"))},o.reloadSlider=function(e){void 0!==e&&(n=e),o.destroySlider(),l(),t(o).data("bxSlider",this)},l(),t(o).data("bxSlider",this),this}}}(jQuery);
