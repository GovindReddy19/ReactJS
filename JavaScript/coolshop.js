// coding with nisk

// Js Documents

// Table of content
// 1.  vars and inits
// 2.  Init Menu
// 3.  Init
// 4.  Init Favorite 
// 5.  init Isotope Filtering
// 6.  Init Slider

// jQuery(document).ready(function($)
// {
    // $(document).ready(function($){

    
    // debugger;

    // "user strict";
    // // 1 vars and inits
    // var mainSlider = $('.main_slider');
    // var hamburger = $('.humburger_container');
    // var menu = $ ('.hamburger_menu');
    // var menuActive = false;
    // var hamburgerClose = $('.hamburger_close');
    // var fsOverlay = $('.fs_menu_overlay');

    // initFavorite();
    // initIsotopeFiltering(); 
    
    // 2. Inits Menu
    // 3. Init Timer
    // function initTimer()
    // function initTime()
    // {
    //     var initTime;
    //     if($('.timer').length)
    //     {
    //         var date =new Date();
    //         date.setDate(date.getData()+3);
    //         var target_date = date.getTime();

    //         // variables for time units
    //         var days,hours,minutes,seconds;
    //         var d = $('#day');
    //         var h = $('#hour');
    //         var m = $('#minute');
    //         var s = $('#second');
            
    //         setInterval(function()
    //         {
    //             // find the amount of "Seconds"between now and target 
    //             var current_date = new Date().getTime();
    //             var seconds_left = (target_date - current_date)/1000;
    //             // do some time Calculations
               
                
    //             days = parseInt(seconds_left / 86400);
    //             seconds_left = seconds_left % 86400;

    //             hours = parseInt(seconds_left / 3600);
    //             seconds_left = seconds_left % 3600;

    //             minutes = parseInt(seconds_left / 60);
    //             seconds_left = seconds_left % 60;

    //             // display result
    //             d.text(days);
    //             h.text(hours);
    //             m.text(minuts);
    //             s.text(seconds);

            
    //         },1000 );
    //     }
    // }


    // 4. Init Favorite
    // function initFavorite()
    // {
    //     if($9('.favorite').length)
    //     {
    //         var favs = $('.favorite');
            
    //         favs.each(function()
    //         {
    //             var fav  = $(this);
    //             var active = false;
    //             if(fav.hasClass('active'))
    //             {
    //                 active = true;
    //             }
    //             fav.on('click',function()
    //             {
    //                 if(active)
    //                 {
    //                     fav.removeClass('active');
    //                     active = false;
    //                 }
    //                 else
    //                 {
    //                     fav.addClass('active');
    //                     active = true;
    //                 }
    //             });
    //         });
    //     }
    // }

    // // 5. Init Isotope Filtering

    // function initIsotopeFiltering(){
    //     if($('.grid-sorting_button').length)
    //     {
    //         $('.grid-sorting_button').click(function()
    //         {
    //             $('.grid-sorting_button.active').removeClass('active');
    //             $(this).addClass('active');

    //             var  selector = $(this).attr('data-filter');
    //             $('.product-grid').isotope({
    //                 filter: selector,
    //                 animationOptions: {
    //                     duration : 750,
    //                     easing:'linear',
    //                     quere : false
    //                 }
    //             });
    //             return false;
    //         });
    //     }
        
    //     } 


    // 6. Init Slider    


// });


//  Set the date we're counting down to
// var countDownDate = new Date("Jan 16, 2022 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);


//6. Init Slider 

// initSlider();

// function initSlider(){
//   if($('.product_slider').length)
//   {
//     var slider1 = $('.product_slider');
//     slider1.owlCarousel({
//       loop:false,
//       dots:false,
//       responsive:
//       {
//         0:{items:1},
//         480:{items:2},
//         768:{items:3},
//         991:{items:4},
//         1280:{items:5},
//         1440:{items:5},
//       }
//     });
//   }
// }

// });

// // Inits Menu

// function initMenu()
// {
//   if(hamburger.length)
//   {
//     hamburger.responsive('click',function()
//     {
//       if(!menuActive)
//       {
//         openMenu();
//       }
//     });
//   }
// if('hamburgerClose.length')
//   {
//     hamburgerClose.on('click',function()
//     {
//       if(!menuActive)
//       {
//         closeMenu();
//       }
//     });
//   }
//   if($('.menu_item'),length)
//   {
//     var items = document.getElementsByClassName('menu_item');
//     var i;

//     for(i=0; i<items.length;i++)
//     {
//       if(items[i].classList.contains("has-children"))
//       {
//         items[i].onclick = function()
//         {
//           this.classList.toggle("active");
//           var panel = this.children[1];
//           if(panel.style.maxHeight)
//           {
//             panel.style.maxHeight = null;
//           }
//           elase
//           {
//             panel.style.maxHeight = panel.scrollHeight + "px"; 
//           }
//         }
//       }
//     }
//   }
// }

// $(document).ready(function () {

//   $('.first-button').on('click', function () {

//     $('.animated-icon1').toggleClass('open');
//   });
//   $('.second-button').on('click', function () {

//     $('.animated-icon2').toggleClass('open');
//   });
//   $('.third-button').on('click', function () {

//     $('.animated-icon3').toggleClass('open');
//   });
// });