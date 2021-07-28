$(document).ready(function(){

  //VH
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  var currentBeInspired = 0;
  var wallsrc = "https://my.walls.io/tsa2y?nobackground=1&amp;show_header=0&amp;autoscroll=0&amp;columns=2";
  var shareurl = "";

  //Main Page Button Clicks
  $('#mainAmwayMomentsButton').click(function(){


    transitionScenes($('#mainPage'), $('#amwayMomentsPage'));

  });

  $('#mainBeInspiredButton').click(function(){

    transitionScenes($('#mainPage'), $('#beInspiredPage'));

  });

  $('#mainVNLCButton').click(function(){

    transitionScenes($('#mainPage'), $('#vnlcPage'));

  });

  $('#mainHealthCButton').click(function(){

    transitionScenes($('#mainPage'), $('#healthPage'));

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

    openVideo("https://player.vimeo.com/video/575723741");

  });

  $('#py2019ABO5').click(function(){

    openVideo("https://player.vimeo.com/video/575725222");

  });

  $('#py2019ABO6').click(function(){

    openVideo("https://player.vimeo.com/video/575725119");

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

  $('#py2020ABO1').click(function(){

    openVideo("https://player.vimeo.com/video/575726497");

  });

  $('#py2020ABO2').click(function(){

    openImage("images/Wong Mee San & Kee Kok Joo.jpg");

  });

  $('#py2020ABO3').click(function(){

    openVideo("https://player.vimeo.com/video/575726690");

  });

  $('#py2020ABO4').click(function(){

    openVideo("https://player.vimeo.com/video/575725873");

  });

  $('#py2020ABO5').click(function(){

    openVideo("https://player.vimeo.com/video/575724451");

  });

  $('#py2020ABO6').click(function(){

    openVideo("https://player.vimeo.com/video/575726851");

  });

  $('#py2020ABO7').click(function(){

    openVideo("https://player.vimeo.com/video/575724048");

  });

  $('#py2020ABO8').click(function(){

    openVideo("https://player.vimeo.com/video/575727003");

  });

  $('#py2020ABO9').click(function(){

    openVideo("https://player.vimeo.com/video/575727313");

  });

  $('#py2020ABO10').click(function(){

    openImage("images/Ong Kok Leong.jpg");

  });

  $('#py2020ABO11').click(function(){

    openVideo("https://player.vimeo.com/video/575726604");

  });

  $('#py2020ABO12').click(function(){

    openVideo("https://player.vimeo.com/video/575727155");

  });

  $('#fcacaABO1').click(function(){

    openVideo("https://player.vimeo.com/video/577960249");

  });

  $('#fcacaABO2').click(function(){

    openVideo("https://player.vimeo.com/video/577958555");

  });

  $('#fcacaABO3').click(function(){

    openVideo("https://player.vimeo.com/video/577956117");

  });

  $('#fcacaABO4').click(function(){

    openVideo("https://player.vimeo.com/video/577959425");

  });

  $('#fcacaABO5').click(function(){

    openVideo("https://player.vimeo.com/video/577952871");

  });

  $('#fcacaABO6').click(function(){

    openVideo("https://player.vimeo.com/video/577955153");

  });

  $('#fcacaABO7').click(function(){

    openVideo("https://player.vimeo.com/video/577955448");

  });

  $('#fcacaABO8').click(function(){

    openVideo("https://player.vimeo.com/video/577953699");

  });

  $('#fcacaABO9').click(function(){

    openVideo("https://player.vimeo.com/video/577955785");

  });

  $('#fcacaABO10').click(function(){

    openVideo("https://player.vimeo.com/video/577951895");

  });

  $('#beAmwayMomentsButton').click(function(){

    transitionScenes($('#beInspiredPage'), $('#amwayMomentsPage'));

  });

  $('#beHealthButton').click(function(){

    transitionScenes($('#beInspiredPage'), $('#healthPage'));

  });

  $('#beVNLCButton').click(function(){

    transitionScenes($('#beInspiredPage'), $('#vnlcPage'));

  });

  //Health Page Button Clicks
  var currentHealthVideo = 1;

  $('#nutriliteButton').click(function(){

    $('#healthvideo-iframe').attr('src', 'https://player.vimeo.com/video/575770520');
    $('#nutriliteButton').attr('src', "images/NutriliteChosenButton.png");
    $('#artistryButton').attr('src', "images/ArtistryButton.png");

    currentHealthVideo = 1;

  });

  $('#artistryButton').click(function(){

    $('#healthvideo-iframe').attr('src', 'https://player.vimeo.com/video/577943445');
    $('#nutriliteButton').attr('src', "images/NutriliteButton.png");
    $('#artistryButton').attr('src', "images/ArtistryChosenButton.png");

    currentHealthVideo = 2;

  });

  $('#healthDownloadButton').click(function(){

    if(currentHealthVideo == 1)
    {

      window.open("https://player.vimeo.com/external/575770520.hd.mp4?s=f7a9c3b4d9de70d0dea65ce3120609a5f663f262&profile_id=175&download=1");

    }
    else if(currentHealthVideo == 2)
    {

      window.open("https://player.vimeo.com/external/577943445.hd.mp4?s=ea06bb51cb341df8e0fcbe205213c883e3605d66&profile_id=175&download=1");

    }

  });

  $('#healthShareButton').click(function(){

    if(currentHealthVideo == 1)
    {

      shareurl = "https://player.vimeo.com/video/575770520";

    }
    else if(currentHealthVideo == 2)
    {

      shareurl = "https://player.vimeo.com/video/577943445";

    }

    $('#shareBlock').fadeIn(500);

  });

  $('#healthBEButton').click(function(){

    transitionScenes($('#healthPage'), $('#beInspiredPage'));

  });

  $('#healthAmwayMomentsButton').click(function(){

    transitionScenes($('#healthPage'), $('#amwayMomentsPage'));

  });

  $('#healthVNLCButton').click(function(){

    transitionScenes($('#healthPage'), $('#vnlcPage'));

  });

  //Amway Moments Page Button Clicks
  $('#amwayMomentsBEButton').click(function(){

    transitionScenes($('#amwayMomentsPage'), $('#beInspiredPage'));

  });

  $('#amwayMomentsHealthButton').click(function(){

    transitionScenes($('#amwayMomentsPage'), $('#healthPage'));

  });

  $('#amwayMomentsVNLCButton').click(function(){

    transitionScenes($('#amwayMomentsPage'), $('#vnlcPage'));

  });

  //VNLC Page Button Clicks

  $('#vnlcProgramShareButton').click(function(){

    shareurl = "https://assets.amwayvnlc2021.com/assets/VNLCProgram.jpg";

    $('#shareBlock').fadeIn(500);

  });

  $('#vnlcProgramDownloadButton').click(function(){

    var a = document.createElement('a');
    a.href = "https://assets.amwayvnlc2021.com/assets/VNLCProgram.jpg";
    a.download = "VNLProgram.jpg";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

  });

  $('#vnlcBEButton').click(function(){

    transitionScenes($('#vnlcPage'), $('#beInspiredPage'));

  });

  $('#vnlcHealthButton').click(function(){

    transitionScenes($('#vnlcPage'), $('#healthPage'));

  });

  $('#vnlcAmwayMomentsButton').click(function(){

    transitionScenes($('#vnlcPage'), $('#amwayMomentsPage'));

  });

  //Open Video Block
  function openVideo($url)
  {

    $('#video-iframe').attr('src',$url);
    $('#videoBlock').fadeIn(500);

  }

  //Open Image Block
  function openImage($imageSrc)
  {

    $('#imageBlockImage').attr('src', $imageSrc);
    $('#imageBlock').fadeIn(500);

  }

  //Transition Handler
  function transitionScenes($from, $to)
  {

    if($to.attr('id') == $("#beInspiredPage").attr('id'))
    {
      currentBeInspired = 0;
    }

    if($to.attr('id') == $("#amwayMomentsPage").attr('id'))
    {
      $('#amwayMomentsEmbed').attr('src', wallsrc);
    }

    if($to.attr('id') == $("#healthPage").attr('id'))
    {
      $('#healthvideo-iframe').attr('src', 'https://player.vimeo.com/video/575770520');
      $('#nutriliteButton').attr('src', "images/NutriliteChosenButton.png");
      $('#artistryButton').attr('src', "images/ArtistryButton.png");

      currentHealthVideo = 1;
    }

    if($from.attr('id') == $("#amwayMomentsPage").attr('id'))
    {
      $('#amwayMomentsEmbed').attr('src', "");
    }

    if($('#bottomLeftLogo').css('opacity') == 0)
    {

      $('#bottomLeftLogo').animate({opacity: 1}, 500);

    }

    $from.fadeOut(500, function(){

      $to.fadeIn(500);

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

  //Share Block
  $('#shareCloseButton').click(function(){

    $('#shareBlock').fadeOut(500);

  });

  $('#whatsappShareButton').click(function(){

    var encodedURL = encodeURI(shareurl);
    window.open("https://wa.me/?text=" + encodedURL);

  });

  $('#facebookShareButton').click(function(){

    var encodedURL = encodeURI(shareurl);
    window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodedURL);

  });

  //Vimeo Player
  //Intro Video Scene
  var introVideoiFrame = $('#introvideo-iframe');
  var introVideoPlayer = new Vimeo.Player(introVideoiFrame);

  introVideoPlayer.on('ended', function() {

    $('#introVideo').fadeOut(1000, function(){introVideoiFrame.attr('src', "");});

  });



});
