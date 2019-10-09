"use strict";

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}


function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

$(document).ready(function() {

  $('.closebtn').on('click', function () {
   closeNav();
  });
 $('.openbtn').on('click', function () {
   openNav();
  });


  $("#commentForm").validate({
    rules: {
    name: "required",
    phone: "required",
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    name: "Укажите имя и фамилию",
    phone:"Укажите Ваш телефон",
    email: {
      required: "Укажите корректно Ваш e-mail",
      email: "Ваш email должен быть у формате name@domain.com"
    }
  }
  });

   });

// var tag = document.createElement('script');

// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


// var player;

// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('player', {
//     height: '100%',
//     width: '100%',
//     fitToBackground: true,
//     videoId: 'bPtG05_K6mg',
//     playerVars: {
//       'autoplay': 1,
//       'start':5,
//       'end':280,
//       'controls': 0,
//       'autohide': 1,
//       'enablejsapi': 1,
//       'loop': 1,
//       'disablekb': 1,
//       'fs': 0,
//       'modestbranding': 0,
//       'showinfo': 0,
//       'color': 'white',
//       'theme': 'light',
//       'rel': 0,
//       'playlist': 'bPtG05_K6mg'
//     },
//     events: {
//       'onReady': onPlayerReady,
//       'onStateChange': onPlayerStateChange
//     }
//   });
// }


// function onPlayerReady(event) {
//   event.target.playVideo();
//   player.mute();
//   player.setVolume(0);
//   player.setLoop(true);
//   player.setPlaybackQuality('hd1080');
// }


// function onPlayerStateChange(event) {}



// var $item = $('.carousel .item');
// var $wHeight = $(window).height();
// $item.eq(0).addClass('active');
// $item.height($wHeight);
// $item.addClass('full-screen');

// $(window).on('resize', function() {
//   $wHeight = $(window).height();
//   $item.height($wHeight);
// });

// $('.carousel').carousel({
//   interval: 0
// });
