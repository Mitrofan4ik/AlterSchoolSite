// pop up
			function show(state){

					document.getElementById('window').style.display = state;			
					document.getElementById('wrap').style.display = state; 			
			}
	// pop up

	//admin panel

	$(function(){
	    $('.login-admin').on('click', function() {
	        $(".field-form").toggle('slow');
	    });
	});

	//admin panel

	//scrol to top

	$(document).ready(function(){
    // при клике скроллим страницу вверх
	    $('.in_top').click(function(){
	        $("body,html").animate({"scrollTop":0}, 300);
	    });
	 
	    // делаем проверку при скролле
	    $(window).scroll(function(event){
	        var countScroll = $(window).scrollTop();
	        // если прокрутили больше 100 пикселей показываем кнопку "вверх"
	        // иначе прячем
	        if (countScroll>100){
	            $('.in_top').show();
	        }else{
	            $('.in_top').hide();
	        }
	    });
	});

	//scrol to top

	$(function() {
	
		var Page = (function() {

			var $navArrows = $( '#nav-arrows' ),
				$nav = $( '#nav-dots > span' ),
				slitslider = $( '#slider' ).slitslider( {
					onBeforeChange : function( slide, pos ) {

						$nav.removeClass( 'nav-dot-current' );
						$nav.eq( pos ).addClass( 'nav-dot-current' );

					}
				} ),

				init = function() {

					initEvents();
					
				},
				initEvents = function() {

					// add navigation events
					$navArrows.children( ':last' ).on( 'click', function() {

						slitslider.next();
						return false;

					} );

					$navArrows.children( ':first' ).on( 'click', function() {
						
						slitslider.previous();
						return false;

					} );

					$nav.each( function( i ) {
					
						$( this ).on( 'click', function( event ) {
							
							var $dot = $( this );
							
							if( !slitslider.isActive() ) {

								$nav.removeClass( 'nav-dot-current' );
								$dot.addClass( 'nav-dot-current' );
							
							}
							
							slitslider.jump( i + 1 );
							return false;
						
						} );
						
					} );

				};

				return { init : init };

		})();

		Page.init();

	});


		// Добаленно

			$(document).ready(function(){
		    PopUpHide();
			});
			function PopUpShow(){
			    $("#popup1").show();
			}
			function PopUpHide(){
			    $("#popup1").hide();
			}
		// Добаленно

		$(function() {
				$('#va-accordion').vaccordion();
			});

		// Fancy box project pop up

		$(document).ready(function() {
		    $("#single_1").fancybox({
		          helpers: {
		              title : {
		                  type : 'float'
		              }
		          }
		      });
		});

		$(document).ready(function() {
		    $("#single_2").fancybox({
		          helpers: {
		              title : {
		                  type : 'float'
		              }
		          }
		      });
		});

		$(document).ready(function() {
		    $("#single_3").fancybox({
		          helpers: {
		              title : {
		                  type : 'float'
		              }
		          }
		      });
		});

		$(document).ready(function() {
		    $("#single_4").fancybox({
		          helpers: {
		              title : {
		                  type : 'float'
		              }
		          }
		      });
		});

		$(document).ready(function() {
		    $("#single_5").fancybox({
		          helpers: {
		              title : {
		                  type : 'float'
		              }
		          }
		      });
		});

		$(document).ready(function() {
		    $("#single_6").fancybox({
		          helpers: {
		              title : {
		                  type : 'float'
		              }
		          }
		      });
		});

		$(document).ready(function() {
		    $("#single_7").fancybox({
		          helpers: {
		              title : {
		                  type : 'float'
		              }
		          }
		      });
		});

		$(document).ready(function() {
		    $("#single_8").fancybox({
		          helpers: {
		              title : {
		                  type : 'float'
		              }
		          }
		      });
		});

		// Fancy box project pop up

		// Fancy box real-time pop up

			$(document).ready(function() {

			    $("#window_1").fancybox({
			          helpers: {
			              title : {
			                  type : 'float'
			              }
			          }
			      });

			    
			    $("#window_2").fancybox({
			          helpers: {
			              title : {
			                  type : 'float'
			              }
			          }
			      });

			    $("#window_3").fancybox({
			          helpers: {
			              title : {
			                  type : 'float'
			              }
			          }
			      });

			    $("#window_4").fancybox({
			          helpers: {
			              title : {
			                  type : 'float'
			              }
			          }
			      });

			    $("#window_5").fancybox({
			          helpers: {
			              title : {
			                  type : 'float'
			              }
			          }
			      });

		});

		$(".fancybox").fancybox({
		    openEffect  : 'fade',
    		closeEffect	: 'fade',
		    afterLoad   : function() {
		        this.inner.prepend( );
		        this.content = '' + this.content.html();
		    }
			
		});


		// Fancy box real-time pop up
