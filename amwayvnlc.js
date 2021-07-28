var currentBeInspired = 0;
var wallsrc = "https://my.walls.io/tsa2y?nobackground=1&amp;show_header=0&amp;autoscroll=0&amp;columns=2";

$(document).ready(function(){

  //Main Page Button Clicks
  $('#mainAmwayMomentsButton').click(function(){


    transitionScenes($('#mainPage'), $('#amwayMomentsPage'));

  });



  $('#mainBeInspiredButton').click(function(){

    transitionScenes($('#mainPage'), $('#beInspiredPage'));
    $('#beInspiredMainMenu').css("visibility","visible");

  });

  //Logoff
  $("#logoffButton").click(function() {
    window.open("https://staging.amwayvnlc2021.com", "_self");
  });

  //Facebook
  $("#facebookButton").click(function() {
    window.open("https://www.facebook.com/amwaymalaysia");
  });

  //Instagram
  $("#instagramButton").click(function() {
    window.open("https://instagram.com/amwaymy?utm_medium=copy_link");
  });

  //Be Inspired Page Button Clicks
  $('#newAchieversBackButton').click(function(){

    switch(currentBeInspired)
    {

      case 1:

      transitionScenes($('#newAchieversMenu'), $('#beInspiredMainMenu'));
      currentBeInspired = 0;

      break;

      case 2:

      transitionScenes($('#py2019Block'), $('#newAchieversRightBlock'));
      currentBeInspired = 1;

      break;

      case 3:

      transitionScenes($('#py2020Block'), $('#newAchieversRightBlock'));
      currentBeInspired = 1;

      break;

    }

  });

  $('#fcacaBackButton').click(function(){

    transitionScenes($('#fcacaMenu'), $('#beInspiredMainMenu'));
    currentBeInspired = 0;

  });

  $('#newAchieversButton').click(function(){

    transitionScenes($('#beInspiredMainMenu'), $('#newAchieversMenu'));
    currentBeInspired = 1;

  });

  $('#py2019Button').click(function(){

    transitionScenes($('#newAchieversRightBlock'), $('#py2019Block'));
    currentBeInspired = 2;

  });

  $('#py2020Button').click(function(){

    transitionScenes($('#newAchieversRightBlock'), $('#py2020Block'));
    currentBeInspired = 3;

  });

  $('#fcacaButton').click(function(){

    transitionScenes($('#beInspiredMainMenu'), $('#fcacaMenu'));

  });

  $('#py2019ABO1').click(function(){

    openImage("images/Chan Koon Tin &Chai Foong.jpg");

  });

  $('#py2019ABO2').click(function(){

    openVideo("https://player.vimeo.com/video/575724643");

  });

  $('#py2019ABO3').click(function(){

    openVideo("https://player.vimeo.com/video/575724182");

  });

  $('#py2019ABO4').click(function(){

    openVideo("https://player.vimeo.com/video/575724182");

  });

  $('#py2019ABO5').click(function(){

    openVideo("https://player.vimeo.com/video/575724182");

  });

  $('#py2019ABO6').click(function(){

    openVideo("https://player.vimeo.com/video/575724182");

  });

  $('#py2019ABO7').click(function(){

    openVideo("https://player.vimeo.com/video/575724305");

  });

  $('#py2019ABO8').click(function(){

    openVideo("https://player.vimeo.com/video/575725873");

  });

  $('#py2019ABO9').click(function(){

    openVideo("https://player.vimeo.com/video/575725713");

  });

  $('#py2019ABO10').click(function(){

    openVideo("https://player.vimeo.com/video/575724451");

  });

  $('#py2019ABO11').click(function(){

    openVideo("https://player.vimeo.com/video/575723846");

  });

  $('#py2019ABO12').click(function(){

    openVideo("https://player.vimeo.com/video/575725553");

  });

  $('#py2019ABO13').click(function(){

    openVideo("https://player.vimeo.com/video/575724048");

  });

  $('#py2019ABO14').click(function(){

    openVideo("https://player.vimeo.com/video/575725315");

  });

  $('#py2019ABO15').click(function(){

    openImage("images/Patrick & Edna.jpg");

  });

  $('#py2019ABO16').click(function(){

    openVideo("https://player.vimeo.com/video/575724798");

  });

  $('#py2019ABO17').click(function(){

    openVideo("https://player.vimeo.com/video/575724966");

  });

  $('#beAmwayMomentsButton').click(function(){

    transitionScenes($('#beInspiredPage'), $('#amwayMomentsPage'));

  });

  //Health
  //Moments
  $('#amwayMomentsBEButton').click(function(){

    transitionScenes($('#amwayMomentsPage'), $('#beInspiredPage'));

  });

  //VNLC

  function openVideo($url)
  {

    $('#video-iframe').attr('src',$url);
    $('#videoBlock').fadeIn(500);

  }

  function openImage($imageSrc)
  {

      $('#imageBlockImage').attr('src', $imageSrc);
      $('#imageBlock').fadeIn(500);

  }

  function transitionScenes($from, $to)
  {

    $from.fadeOut(500, function(){

      if($to.attr('id') == $("#beInspiredPage").attr('id'))
      {
        currentBeInspired = 0;
      }

      if($to.attr('id') == $("#amwayMomentsPage").attr('id'))
      {
        $('#amwayMomentsEmbed').attr('src', wallsrc);
      }

      if($from.attr('id') == $("#amwayMomentsPage").attr('id'))
      {
        $('#amwayMomentsEmbed').attr('src', "");
      }

      if($('#bottomLeftLogo').css('opacity') == 0)
      {

        $('#bottomLeftLogo').animate({opacity: 1}, 500);

      }

      $to.fadeIn(500)

    });

  }

  //Video Block
  $('#videoCloseButton').click(function(){

    $('#videoBlock').fadeOut(500);
    $('#video-iframe').attr('src','');

  });

  //Image Block
  $('#imageCloseButton').click(function(){

    $('#imageBlock').fadeOut(500);

  });

  //Vimeo Player
  //Intro Video Scene
  var introVideoiFrame = $('#introvideo-iframe');
  var introVideoPlayer = new Vimeo.Player(introVideoiFrame);

  introVideoPlayer.on('ended', function() {

    $('#introVideo').fadeOut(1000, function(){introVideoiFrame.attr('src', "");});

  });


  //VH
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

  });

});
