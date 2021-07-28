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

  $('#beAmwayMomentsButton').click(function(){

    transitionScenes($('#beInspiredPage'), $('#amwayMomentsPage'));

  });

  //Health
  //Moments
  $('#amwayMomentsBEButton').click(function(){

    transitionScenes($('#amwayMomentsPage'), $('#beInspiredPage'));

  });

  //VNLC

  function transitionScenes($from, $to)
  {

    $from.fadeOut(500, function(){
      
      if($to.attr('id') == $("#beInspiredPage").attr('id'))
      {
        currentBeInspired = 0;
      }
      
      if($to.attr('id') == $("#amwayMomentsPage").attr('id'))
      {
        $('#wallsio-iframe').attr('src') = wallsrc;
      }
      
      if($from.attr('id') == $("#amwayMomentsPage").attr('id'))
      {
        $('#wallsio-iframe').attr('src') = "";
      }
      
      $to.fadeIn(500)
    
    });
    
  }

  //Vimeo Player
  //Intro Video Scene
  var introVideoiFrame = $('#introvideo-iframe');
  var introVideoPlayer = new Vimeo.Player(introVideoiFrame);

  introVideoPlayer.on('ended', function() {

    $('#introVideo').fadeOut(500, function(){introVideoiFrame.attr('src', "");});

  });


  //VH
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

  });

});
