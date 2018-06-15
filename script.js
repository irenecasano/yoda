<!-- imagesLoaded jQuery plugin by @desandro : https://github.com/desandro/imagesloaded -->
<script src="js/jquery.imagesloaded.min.js"></script>
<script src="js/cbpBGSlideshow.min.js"></script>
<script>
$(function() {
  cbpBGSlideshow.init();
});


<!-- imagesLoaded jQuery plugin by @desandro : https://github.com/desandro/imagesloaded -->
<script src="js/jquery.imagesloaded.min.js"></script>
<script src="js/cbpBGSlideshow.min.js"></script>
<script>
$(function() {
  cbpBGSlideshow2.init();
});

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
      if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
          document.getElementById("button").style.display = "block";
      } else {
          document.getElementById("button").style.display = "none";
      }
  }

  function topFunction() {
      document.body.scrollTop = 0; // Safari
      document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
  }

  window.onload = function() {hideloader()};
  function hideloader() {

  document.getElementById("spinner1").style.display = "none";
  document.getElementById("spinner2").style.display = "none";
  document.getElementById("spinner3").style.display = "none";
  }



  $(window).on("load", function() {
    $("img").removeClass("fadeout")
     $("img").addClass("fadein");
     $("#cards").addClass("foto");
      $("#book").addClass("foto");
     $("p").removeClass("fadeout")
      $("p").addClass("fadein");
     });

  function closeFunction (){
    $("#x").removeClass("buttonfadein")
    $("#x").addClass("fadeout");
    $(".cbp-bislideshow").removeClass("fadein")
    $(".cbp-bislideshow").addClass("fadeout");
    $(".cbp-bicontrols").removeClass("fadein")
    $(".cbp-bicontrols").addClass("fadeout");

    $(".hide").removeClass("fadeout")
    $("img").addClass("foto")
    $(".hide").addClass("fadein");
  }



  $("#cards").click(function(){
$(".hide").removeClass("fadein")
$(".hide").removeClass("foto")
$(".hide").addClass("fadeout");

    $(".cbp-bislideshow").removeClass("fadeout")
     $(".cbp-bislideshow").addClass("fadein");
     $(".cbp-bicontrols").removeClass("fadeout")
      $(".cbp-bicontrols").addClass("fadein");
      $("#x").removeClass("fadeout")
       $("#x").addClass("buttonfadein");

  });


  $("#book").click(function(){
$(".hide").removeClass("fadein")
$(".hide").removeClass("foto")
$(".hide").addClass("fadeout");

    $(".cbp-bislideshow2").removeClass("fadeout")
     $(".cbp-bislideshow2").addClass("fadein");
     $(".cbp-bicontrols").removeClass("fadeout")
      $(".cbp-bicontrols").addClass("fadein");
      $("#x").removeClass("fadeout")
       $("#x").addClass("buttonfadein");

  });
