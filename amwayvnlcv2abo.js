//VH
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

$(document).ready(function(){

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
  //Stronger
  $('#healthStrongerButton').click(function(){

    transitionScenes($('#healthMainMenu'), $('#healthStronger'));

  });

  $('#strongerBackButton').click(function(){

    transitionScenes($('#healthStronger'), $('#healthMainMenu'));

  });

  //Traditional
  var currentTraditionalVideo = 1;

  $('#strongerButton1').click(function(){

    transitionScenes($('#strongerMainMenu'), $('#strongerTraditional'));
    $('#strongerTraditionalVideo').attr('src','https://player.vimeo.com/video/577953619');
    $('#traditionalWuxiButton').attr('src', 'images/traditionalWuxiButtonSelected.png');
    $('#traditionalMessageButton').attr('src', 'images/traditionalMessageButton.png');
    currentTraditionalVideo = 1;

  });

  $('#strongerTraditionalBackButton').click(function(){

    transitionScenes($('#strongerTraditional'), $('#strongerMainMenu'));
    $('#strongerTraditionalVideo').attr('src','');

  });

  $('#traditionalDownloadButton').click(function(){

    switch(currentTraditionalVideo)
    {

      case 1:
      window.open("https://player.vimeo.com/external/577953619.hd.mp4?s=038004e2c1cc3162bf9274f8032a080089e22147&profile_id=175&download=1");
      break;
      case 2:
      window.open("https://player.vimeo.com/external/576698161.hd.mp4?s=eb608b0f6829ab4d43429fd8912456175de71ef4&profile_id=175&download=1");
      break;

    }

  });

  $('#traditionalShareButton').click(function(){

    switch(currentTraditionalVideo)
    {
      case 1:
      shareurl = "https://player.vimeo.com/video/577953619";
      break;
      case 2:
      shareurl = "https://player.vimeo.com/video/576698161";
      break;
    }

    $('#shareBlock').fadeIn(500);

  });

  $('#traditionalWuxiButton').click(function(){
    $('#strongerTraditionalVideo').attr('src','https://player.vimeo.com/video/577953619');
    $('#traditionalWuxiButton').attr('src', 'images/traditionalWuxiButtonSelected.png');
    $('#traditionalMessageButton').attr('src', 'images/traditionalMessageButton.png');
    currentTraditionalVideo = 1;
  });

  $('#traditionalMessageButton').click(function(){
    $('#strongerTraditionalVideo').attr('src','https://player.vimeo.com/video/576698161');
    $('#traditionalWuxiButton').attr('src', 'images/traditionalWuxiButton.png');
    $('#traditionalMessageButton').attr('src', 'images/traditionalMessageButtonSelected.png');
    currentTraditionalVideo = 2;
  });


  //Protect
  var currentProtectStep = 1;

  $('#strongerButton2').click(function(){

    transitionScenes($('#strongerMainMenu'), $('#strongerProtect'));
    $('#iframe-protectvideo').attr('src','https://player.vimeo.com/video/577954815');
    transitionScenes($('#protectWebsiteBlock'), $('#protectVideoBlock'));
    $('#protectVideoButton').attr('src', 'images/protectVideoButtonSelected.png');
    $('#protectLeafletButton').attr('src', 'images/strongerLeafletButton.png');
    currentProtectStep = 1;


  });

  $('#strongerProtectBackButton').click(function(){

    transitionScenes($('#strongerProtect'), $('#strongerMainMenu'));
    $('#iframe-protectvideo').attr('src','');

  });

  $('#protectVideoButton').click(function(){

    transitionScenes($('#protectWebsiteBlock'), $('#protectVideoBlock'));
    $('#iframe-protectvideo').attr('src','https://player.vimeo.com/video/577954815');
    $('#protectVideoButton').attr('src', 'images/protectVideoButtonSelected.png');
    $('#protectLeafletButton').attr('src', 'images/strongerLeafletButton.png');
    currentProtectStep = 1;

  });

  $('#protectLeafletButton').click(function(){

    transitionScenes($('#protectVideoBlock'), $('#protectWebsiteBlock'));
    $('#iframe-protectvideo').attr('src','');
    $('#protectVideoButton').attr('src', 'images/protectVideoButton.png');
    $('#protectLeafletButton').attr('src', 'images/strongerLeafletButtonSelected.png');
    currentProtectStep = 2;

  });

  $('#protectDownloadButton').click(function(){

    switch(currentProtectStep)
    {

      case 1:
      window.open("https://player.vimeo.com/external/577954815.hd.mp4?s=5772d3ef1b81e256b96497163178164fc7da9e2b&profile_id=175&download=1");
      break;
      case 2:
      window.open("https://www.nutrilite.com.my/en/article/protect-kawkaw-with-nutrilite");
      break;

    }

  });

  $('#protectShareButton').click(function(){

    switch(currentProtectStep)
    {
      case 1:
      shareurl = "https://player.vimeo.com/video/577954815";
      break;
      case 2:
      shareurl = "https://www.nutrilite.com.my/en/article/protect-kawkaw-with-nutrilite";
      break;
    }

    $('#shareBlock').fadeIn(500);

  });

  //Behind
  $('#strongerButton3').click(function(){

    transitionScenes($('#strongerMainMenu'), $('#strongerBehind'));
    $('#iframe-behindvideo').attr('src','https://player.vimeo.com/video/575770520');

  });

  $('#strongerBehindBackButton').click(function(){

    transitionScenes($('#strongerBehind'), $('#strongerMainMenu'));
    $('#iframe-behindvideo').attr('src','');

  });

  $('#behindDownloadButton').click(function(){

    window.open("https://player.vimeo.com/external/575770520.hd.mp4?s=f7a9c3b4d9de70d0dea65ce3120609a5f663f262&profile_id=175&download=1");

  });

  $('#behindShareButton').click(function(){

    shareurl = "https://player.vimeo.com/video/575770520";
    $('#shareBlock').fadeIn(500);

  });

  //Simpler
  $('#healthSimplerButton').click(function(){

    transitionScenes($('#healthMainMenu'), $('#healthSimpler'));

  });

  $('#simplerBackButton').click(function(){

    transitionScenes($('#healthSimpler'), $('#healthMainMenu'));

  });

  $('#malaysiaSiteButton').click(function(){

    window.open("https://www.amway.my/category-landing-page/beauty");

  });

  $('#bruneiSiteButton').click(function(){

    window.open("https://www.amway.com.bn/category-landing-page/beauty");

  });

  //Artistry
  var currentArtistryStep = 1;
  $('#simplerArtistryButton').click(function(){

    transitionScenes($('#simplerMainMenu'), $('#simplerArtistry'));
    currentArtistryStep = 1;

  });

  $('#simplerArtistryBackButton').click(function(){

    switch(currentArtistryStep)
    {

      case 1:

        transitionScenes($('#simplerArtistry'), $('#simplerMainMenu'));

      break;

      case 2:
      transitionScenes($('#simplerArtistryPoster'), $('#simplerArtistryBottom'));
      $('#bottomLeftLogo').fadeIn(500);
      currentArtistryStep = 1;

      break;
    }

  });

  $('#tellButton').click(function(){

    transitionScenes($('#simplerArtistryBottom'), $('#simplerArtistryPoster'));
    $('#bottomLeftLogo').fadeOut(500);
    currentArtistryStep = 2;

  });

  //Solution
  $('#simplerSolutionButton').click(function(){

    transitionScenes($('#simplerMainMenu'), $('#simplerSolution'));
    $('#simplerSolutionVideo').attr('src','https://player.vimeo.com/video/577943445');

  });

  $('#simplerSolutionBackButton').click(function(){

    transitionScenes($('#simplerSolution'), $('#simplerMainMenu'));
    $('#simplerSolutionVideo').attr('src','');

  });

  $('#simplerSolutionDownloadButton').click(function(){

    window.open("https://player.vimeo.com/external/577943445.hd.mp4?s=ea06bb51cb341df8e0fcbe205213c883e3605d66&profile_id=175&download=1");

  });

  $('#simplerSolutionShareButton').click(function(){

    shareurl = "https://player.vimeo.com/video/577943445";
    $('#shareBlock').fadeIn(500);

  });


  //Smarter
  $('#healthSmarterButton').click(function(){

    transitionScenes($('#healthMainMenu'), $('#healthSmarter'));

  });

  $('#smarterBackButton').click(function(){

    transitionScenes($('#healthSmarter'), $('#healthMainMenu'));

  });

  //Shake
  var currentShakeStep = 1;

  $('#smarterButton1').click(function(){

    transitionScenes($('#smarterMainMenu'), $('#smarterShake'));
    transitionScenes($('#shakeInfoImage'), $('#shakeVideoEmbed'));
    $('#shakeMVButton').attr('src','images/shakeMVButtonSelected.png');
    $('#shakeReyhanaButton').attr('src','images/shakeReyhanaButton.png');
    $('#shakeInfoButton').attr('src','images/shakeInfoButton.png');
    $('#shakeVideo').attr('src','https://player.vimeo.com/video/577956715');
    currentShakeStep = 1;

  });

  $('#smarterShakeBackButton').click(function(){

    transitionScenes($('#smarterShake'), $('#smarterMainMenu'));
    $('#shakeVideo').attr('src','');

  });

  $('#shakeMVButton').click(function(){

    $('#shakeMVButton').attr('src','images/shakeMVButtonSelected.png');
    $('#shakeReyhanaButton').attr('src','images/shakeReyhanaButton.png');
    $('#shakeInfoButton').attr('src','images/shakeInfoButton.png');
    transitionScenes($('#shakeInfoImage'), $('#shakeVideoEmbed'));
    $('#shakeVideo').attr('src','https://player.vimeo.com/video/577956715');
    currentShakeStep = 1;

  });

  $('#shakeReyhanaButton').click(function(){

    $('#shakeMVButton').attr('src','images/shakeMVButton.png');
    $('#shakeReyhanaButton').attr('src','images/shakeReyhanaButtonSelected.png');
    $('#shakeInfoButton').attr('src','images/shakeInfoButton.png');
    transitionScenes($('#shakeInfoImage'), $('#shakeVideoEmbed'));
    $('#shakeVideo').attr('src','https://player.vimeo.com/video/575717977');
    currentShakeStep = 2;

  });

  $('#shakeInfoButton').click(function(){

    $('#shakeMVButton').attr('src','images/shakeMVButton.png');
    $('#shakeReyhanaButton').attr('src','images/shakeReyhanaButton.png');
    $('#shakeInfoButton').attr('src','images/shakeInfoButtonSelected.png');
    transitionScenes($('#shakeVideoEmbed'), $('#shakeInfoImage'));
    $('#shakeVideo').attr('src','');
    currentShakeStep = 3;

  });

  $('#shakeDownloadButton').click(function(){

    switch(currentShakeStep)
    {

      case 1:

      window.open("https://player.vimeo.com/external/577956715.hd.mp4?s=2d979805a8260a199915bcdee4fa59f3b8e7a6ad&profile_id=175&download=1");

      break;

      case 2:

      window.open("https://player.vimeo.com/external/575717977.hd.mp4?s=63cdfd3d659624787b0f099274e097ba748fa674&profile_id=175&download=1");

      break;

      case 3:

      fetch("images/shakeInfoImage.jpg")
      .then(response => response.blob())
      .then(blob => {
        const blobURL = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = blobURL;
        a.style = "display: none";
        a.download = "ShakeInfo.jpg";
        document.body.appendChild(a);
        a.click();

      });

      break;

    }

  });

  $('#shakeShareButton').click(function(){

    switch(currentShakeStep)
    {

      case 1:

      shareurl = "https://player.vimeo.com/video/577956715";

      break;

      case 2:

      shareurl = "https://player.vimeo.com/video/575717977";

      break;

      case 3:

      shareurl = "https://assets.amwayvnlc2021.com/assets/shakeInfoImage.jpg";

      break;

    }
    $('#shareBlock').fadeIn(500);

  });

  //Ready
  $('#smarterButton2').click(function(){

    transitionScenes($('#smarterMainMenu'), $('#smarterReady'));
    $('#iframe-readytoeatvideo').attr('src', 'https://player.vimeo.com/video/575718256');

  });

  $('#readyBackButton').click(function(){

    transitionScenes($('#smarterReady'), $('#smarterMainMenu'));
    $('#iframe-readytoeatvideo').attr('src', '');

  });

  //Wellness
  $('#healthWelnessButton').click(function(){

    transitionScenes($('#healthMainMenu'), $('#healthWellness'));
    $('#iframe-wellnessvideo').attr('src', 'https://player.vimeo.com/video/575718447');
  });

  $('#healthWelnessBackButton').click(function(){

    transitionScenes($('#healthWellness'), $('#healthMainMenu'));
    $('#iframe-wellnessvideo').attr('src', '');
  });

  //Message
  $('#healthMessageButton').click(function(){

    transitionScenes($('#healthMainMenu'), $('#healthMessage'));
    $('#iframe-healthmessagevideo').attr('src', 'https://player.vimeo.com/video/576613262');
  });

  $('#healthMessageBackButton').click(function(){

    transitionScenes($('#healthMessage'), $('#healthMainMenu'));
    $('#iframe-healthmessagevideo').attr('src', '');
  });

  //Side Buttons
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

  //VNLC Program
  $('#vnlcProgramShareButton').click(function(){

    shareurl = "https://assets.amwayvnlc2021.com/assets/VNLCProgram.jpg";

    $('#shareBlock').fadeIn(500);

  });

  $('#vnlcProgramDownloadButton').click(function(){

    fetch("images/VNLCProgram.jpg")
    .then(response => response.blob())
    .then(blob => {
      const blobURL = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobURL;
      a.style = "display: none";
      a.download = "VNLCProgram.jpg";
      document.body.appendChild(a);
      a.click();
    });

  });

  $('#vnlcProgramBackButton').click(function(){

    transitionScenes($('#vnlcProgramPage'), $('#vnlcMainMenu'));

  });

  $('#vnlcProgramButton').click(function(){

    transitionScenes($('#vnlcMainMenu'), $('#vnlcProgramPage'));

  });

  //Corporate Speeches
  var currentSpeaker = 1;
  var currentCSStep = 1;

  $('#csButton1').click(function(){

    currentSpeaker = 1;
    currentCSStep = 2;
    $('#speakerVideoImage').attr('src','images/csSpeaker1.png');
    $('#csVideo').attr('src','https://player.vimeo.com/video/577913879');
    transitionScenes($('#csMainMenu'), $('#csProfile'));

  });

  $('#csButton2').click(function(){

    currentSpeaker = 2;
    currentCSStep = 2;
    $('#speakerVideoImage').attr('src','images/csSpeaker2.png');
    $('#csVideo').attr('src','https://player.vimeo.com/video/577915477');
    transitionScenes($('#csMainMenu'), $('#csProfile'));

  });

  $('#csButton3').click(function(){

    currentSpeaker = 3;
    currentCSStep = 2;
    $('#speakerVideoImage').attr('src','images/csSpeaker3.png');
    $('#csVideo').attr('src','https://player.vimeo.com/video/577914059');
    transitionScenes($('#csMainMenu'), $('#csProfile'));

  });

  $('#csButton4').click(function(){

    currentSpeaker = 4;
    currentCSStep = 2;
    $('#speakerVideoImage').attr('src','images/csSpeaker4.png');
    $('#csVideo').attr('src','https://player.vimeo.com/video/577947452');
    transitionScenes($('#csMainMenu'), $('#csProfile'));

  });

  $('#csButton5').click(function(){

    currentSpeaker = 5;
    currentCSStep = 2;
    $('#speakerVideoImage').attr('src','images/csSpeaker5.png');
    $('#csVideo').attr('src','https://player.vimeo.com/video/577947573');
    transitionScenes($('#csMainMenu'), $('#csProfile'));

  });

  $('#csBackButton').click(function(){

    if(currentCSStep == 1)
    {

      transitionScenes($('#csPage'), $('#vnlcMainMenu'));

    }
    else if(currentCSStep == 2)
    {

      transitionScenes($('#csProfile'), $('#csMainMenu'));
      $('#csVideo').attr('src','');
      currentCSStep = 1;

    }
    else if(currentCSStep == 3)
    {


      $('#speakerProfileRightBlock').fadeOut(500);
      $('#speakerVideo').delay(500).fadeIn(500);
      transitionScenes($('#csProfile'), $('#csMainMenu'));
      hideAllProfiles();
      $('#csVideo').attr('src','');
      currentCSStep = 1;

    }

  });

  $('#csSpeakerProfileButton').click(function(){

      $('#csVideo').attr('src','');
      currentCSStep = 3;
      switch(currentSpeaker)
      {

        case 1:
        transitionScenes($('#speakerVideo'), $('#profile1'));
        break;

        case 2:
        transitionScenes($('#speakerVideo'), $('#profile2'));
        break;

        case 3:
        transitionScenes($('#speakerVideo'), $('#profile3'));
        break;

        case 4:
        transitionScenes($('#speakerVideo'), $('#profile4'));
        break;

        case 5:
        transitionScenes($('#speakerVideo'), $('#profile5'));
        break;

      }

      $('#speakerProfileRightBlock').delay(500).fadeIn(500);

  });

  $('#csVideoButton').click(function(){

      currentCSStep = 2;

      switch(currentSpeaker)
      {

        case 1:
        transitionScenes($('#profile1'), $('#speakerVideo'));
        $('#speakerVideoImage').attr('src','images/csSpeaker1.png');
        $('#csVideo').attr('src','https://player.vimeo.com/video/577913879');
        break;

        case 2:
        transitionScenes($('#profile2'), $('#speakerVideo'));
        $('#speakerVideoImage').attr('src','images/csSpeaker2.png');
        $('#csVideo').attr('src','https://player.vimeo.com/video/577915477');
        break;

        case 3:
        transitionScenes($('#profile3'), $('#speakerVideo'));
        $('#speakerVideoImage').attr('src','images/csSpeaker3.png');
        $('#csVideo').attr('src','https://player.vimeo.com/video/577914059');
        break;

        case 4:
        transitionScenes($('#profile4'), $('#speakerVideo'));
        $('#speakerVideoImage').attr('src','images/csSpeaker4.png');
        $('#csVideo').attr('src','https://player.vimeo.com/video/577947452');
        break;

        case 5:
        transitionScenes($('#profile5'), $('#speakerVideo'));
        $('#speakerVideoImage').attr('src','images/csSpeaker5.png');
        $('#csVideo').attr('src','https://player.vimeo.com/video/577947573');
        break;

      }

      $('#speakerProfileRightBlock').fadeOut(500);

  });

  $('#csNextSpeakerButton').click(function(){

    switch(currentSpeaker)
    {

      case 1:

      $('#profile1').fadeOut(500, function(){ $('#profile2').fadeIn(500)});
      currentSpeaker = 2;

      break;

      case 2:

      $('#profile2').fadeOut(500, function(){ $('#profile3').fadeIn(500)});
      currentSpeaker = 3;

      break;

      case 3:

      $('#profile3').fadeOut(500, function(){ $('#profile4').fadeIn(500)});
      currentSpeaker = 4;

      break;

      case 4:

      $('#profile4').fadeOut(500, function(){ $('#profile5').fadeIn(500)});
      currentSpeaker = 5;

      break;

      case 5:

      $('#profile5').fadeOut(500, function(){ $('#profile1').fadeIn(500)});
      currentSpeaker = 1;

      break;


    }

  });


  $('#corporateSpeechesButton').click(function(){

    transitionScenes($('#vnlcMainMenu'), $('#csPage'));

  });

  function hideAllProfiles()
  {

    $('#profile1').fadeOut(500);
    $('#profile2').fadeOut(500);
    $('#profile3').fadeOut(500);
    $('#profile4').fadeOut(500);
    $('#profile5').fadeOut(500);

  }

  function showspeaker(num)
  {

    switch(num)
    {

      case 1:

      $('#profile1').fadeIn(500);

      break;

      case 2:

      $('#profile2').fadeIn(500);

      break;

      case 3:

      $('#profile3').fadeIn(500);

      break;

      case 4:

      $('#profile4').fadeIn(500);

      break;

      case 5:

      $('#profile5').fadeIn(500);

      break;

    }

  }

  //NCA
  var currentNCAStep = 1;

  $('#ncaButton').click(function(){

    transitionScenes($('#vnlcMainMenu'), $('#ncaPage'));

  });

  $('#ncaBackButton').click(function(){

    if(currentNCAStep == 1){
    transitionScenes($('#ncaPage'), $('#vnlcMainMenu'));
    }
    else if(currentNCAStep == 2){
      hideAllALS();
      transitionScenes($('#ncaALS'), $('#ncaMainMenu'));
      $('#als2022Video').attr('src','');
      currentNCAStep = 1;
    }
    else if(currentNCAStep == 3){
      hideAllDI();
      transitionScenes($('#ncaDI'), $('#ncaMainMenu'));
      $('#di2022Video').attr('src','');
      currentNCAStep = 1;
    }

  });

  //ALS
  $('#ncaALSButton1').click(function(){

    transitionScenes($('#ncaMainMenu'), $('#ncaALS'));
    $('#alsVideoPage').fadeIn(500);
    $('#alsVideoButton').attr('src', 'images/als2022VideoButtonSelected.png');
    $('#alsNCAButton').attr('src', 'images/als2022NCABookletButton.png');
    $('#alsPhoneButton').attr('src', 'images/als2022NCAPhoneButton.png');
    $('#alsDesktopButton').attr('src', 'images/als2022NCADesktopButton.png');
    $('#alsZoomButton').attr('src', 'images/als2022NCAZoomButton.png');
    $('#als2022Video').attr('src','https://player.vimeo.com/video/577963939');
    currentNCAStep = 2;

  });

  $('#ncaALSButton2').click(function(){

    transitionScenes($('#ncaMainMenu'), $('#ncaALS'));
    $('#alsVideoPage').fadeIn(500);
    $('#alsVideoButton').attr('src', 'images/als2022VideoButtonSelected.png');
    $('#alsNCAButton').attr('src', 'images/als2022NCABookletButton.png');
    $('#alsPhoneButton').attr('src', 'images/als2022NCAPhoneButton.png');
    $('#alsDesktopButton').attr('src', 'images/als2022NCADesktopButton.png');
    $('#alsZoomButton').attr('src', 'images/als2022NCAZoomButton.png');
    $('#als2022Video').attr('src','https://player.vimeo.com/video/577963939');
    currentNCAStep = 2;

  });

  //Video
  $('#alsVideoButton').click(function(){

    hideAllALS();
    $('#alsVideoPage').delay(100).fadeIn(500);
    $('#als2022Video').attr('src','https://player.vimeo.com/video/577963939');
    $('#alsVideoButton').attr('src', 'images/als2022VideoButtonSelected.png');
    $('#alsNCAButton').attr('src', 'images/als2022NCABookletButton.png');
    $('#alsPhoneButton').attr('src', 'images/als2022NCAPhoneButton.png');
    $('#alsDesktopButton').attr('src', 'images/als2022NCADesktopButton.png');
    $('#alsZoomButton').attr('src', 'images/als2022NCAZoomButton.png');

  });

  $('#alsVideoDownloadButton').click(function(){

    window.open("https://player.vimeo.com/external/577963939.hd.mp4?s=b629e72a2046c9a3c92f5fe20ed14a7467e3b0c9&profile_id=175&download=1");

  });

  $('#alsVideoShareButton').click(function(){

      shareurl = "https://player.vimeo.com/video/577963939";
      $('#shareBlock').fadeIn(500);

  });

  //NCA
  $('#alsNCAButton').click(function(){

    hideAllALS();
    $('#alsBookletPage').delay(100).fadeIn(500);
    $('#als2022Video').attr('src','');
    $('#alsVideoButton').attr('src', 'images/als2022VideoButton.png');
    $('#alsNCAButton').attr('src', 'images/als2022NCABookletButtonSelected.png');
    $('#alsPhoneButton').attr('src', 'images/als2022NCAPhoneButton.png');
    $('#alsDesktopButton').attr('src', 'images/als2022NCADesktopButton.png');
    $('#alsZoomButton').attr('src', 'images/als2022NCAZoomButton.png');

  });

  //Phone
  $('#alsPhoneButton').click(function(){

    hideAllALS();
    $('#alsPhonePage').delay(100).fadeIn(500);
    $('#als2022Video').attr('src','');
    $('#alsVideoButton').attr('src', 'images/als2022VideoButton.png');
    $('#alsNCAButton').attr('src', 'images/als2022NCABookletButton.png');
    $('#alsPhoneButton').attr('src', 'images/als2022NCAPhoneButtonSelected.png');
    $('#alsDesktopButton').attr('src', 'images/als2022NCADesktopButton.png');
    $('#alsZoomButton').attr('src', 'images/als2022NCAZoomButton.png');

  });

  $('#alsPhoneOpenButton1').click(function(){
      openImage("images/ALSPhoneWallpaper1.jpg");
  });

  $('#alsPhoneOpenButton2').click(function(){
    openImage("images/ALSPhoneWallpaper2.jpg");
  });

  $('#alsPhoneShareButton1').click(function(){
    shareurl = "https://assets.amwayvnlc2021.com/assets/ALSPhoneWallpaper1.jpg";
    $('#shareBlock').fadeIn(500);
  });

  $('#alsPhoneShareButton2').click(function(){
      shareurl = "https://assets.amwayvnlc2021.com/assets/ALSPhoneWallpaper2.jpg";
      $('#shareBlock').fadeIn(500);

  });

  $('#alsPhoneDownloadButton1').click(function(){

    fetch("images/ALSPhoneWallpaper1.jpg")
    .then(response => response.blob())
    .then(blob => {
      const blobURL = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobURL;
      a.style = "display: none";
      a.download = "ALSPhoneWallpaper1.jpg";
      document.body.appendChild(a);
      a.click();
    });

  });

  $('#alsPhoneDownloadButton2').click(function(){

    fetch("images/ALSPhoneWallpaper2.jpg")
    .then(response => response.blob())
    .then(blob => {
      const blobURL = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobURL;
      a.style = "display: none";
      a.download = "ALSPhoneWallpaper2.jpg";
      document.body.appendChild(a);
      a.click();
    });

  });

  //Desktop
  $('#alsDesktopButton').click(function(){

    hideAllALS();
    $('#alsDesktopPage').delay(100).fadeIn(500);
    $('#als2022Video').attr('src','');
    $('#alsVideoButton').attr('src', 'images/als2022VideoButton.png');
    $('#alsNCAButton').attr('src', 'images/als2022NCABookletButton.png');
    $('#alsPhoneButton').attr('src', 'images/als2022NCAPhoneButton.png');
    $('#alsDesktopButton').attr('src', 'images/als2022NCADesktopButtonSelected.png');
    $('#alsZoomButton').attr('src', 'images/als2022NCAZoomButton.png');

  });

  $('#alsDesktopOpenButton1').click(function(){
      openImage("images/ALSDesktopWallpaper1.jpg");
  });

  $('#alsDesktopOpenButton2').click(function(){
    openImage("images/ALSDesktopWallpaper2.jpg");
  });

  $('#alsDesktopShareButton1').click(function(){
    shareurl = "https://assets.amwayvnlc2021.com/assets/ALSDesktopWallpaper1.jpg";
    $('#shareBlock').fadeIn(500);
  });

  $('#alsDesktopShareButton2').click(function(){
      shareurl = "https://assets.amwayvnlc2021.com/assets/ALSDesktopWallpaper2.jpg";
      $('#shareBlock').fadeIn(500);

  });

  $('#alsDesktopDownloadButton1').click(function(){

    fetch("images/ALSDesktopWallpaper1.jpg")
    .then(response => response.blob())
    .then(blob => {
      const blobURL = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobURL;
      a.style = "display: none";
      a.download = "ALSDesktopWallpaper1.jpg";
      document.body.appendChild(a);
      a.click();
    });

  });

  $('#alsDesktopDownloadButton2').click(function(){

    fetch("images/ALSDesktopWallpaper2.jpg")
    .then(response => response.blob())
    .then(blob => {
      const blobURL = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobURL;
      a.style = "display: none";
      a.download = "ALSDesktopWallpaper2.jpg";
      document.body.appendChild(a);
      a.click();
    });

  });

  //Zoom
  $('#alsZoomButton').click(function(){

    hideAllALS();
    $('#alsZoomPage').delay(100).fadeIn(500);
    $('#als2022Video').attr('src','');
    $('#alsVideoButton').attr('src', 'images/als2022VideoButton.png');
    $('#alsNCAButton').attr('src', 'images/als2022NCABookletButton.png');
    $('#alsPhoneButton').attr('src', 'images/als2022NCAPhoneButton.png');
    $('#alsDesktopButton').attr('src', 'images/als2022NCADesktopButton.png');
    $('#alsZoomButton').attr('src', 'images/als2022NCAZoomButtonSelected.png');

  });

  $('#alsZoomOpenButton1').click(function(){
      openImage("images/ALSZoomWallpaper1.jpg");
  });

  $('#alsZoomOpenButton2').click(function(){
    openImage("images/ALSZoomWallpaper2.jpg");
  });

  $('#alsZoomShareButton1').click(function(){
    shareurl = "https://assets.amwayvnlc2021.com/assets/ALSZoomWallpaper1.jpg";
    $('#shareBlock').fadeIn(500);
  });

  $('#alsZoomShareButton2').click(function(){
      shareurl = "https://assets.amwayvnlc2021.com/assets/ALSZoomWallpaper2.jpg";
      $('#shareBlock').fadeIn(500);

  });

  $('#alsZoomDownloadButton1').click(function(){

    fetch("images/ALSZoomWallpaper1.jpg")
    .then(response => response.blob())
    .then(blob => {
      const blobURL = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobURL;
      a.style = "display: none";
      a.download = "ALSZoomWallpaper1.jpg";
      document.body.appendChild(a);
      a.click();
    });

  });

  $('#alsZoomDownloadButton2').click(function(){

    fetch("images/ALSZoomWallpaper2.jpg")
    .then(response => response.blob())
    .then(blob => {
      const blobURL = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobURL;
      a.style = "display: none";
      a.download = "ALSZoomWallpaper2.jpg";
      document.body.appendChild(a);
      a.click();
    });

  });

  function hideAllALS(){
    $('#alsVideoPage').fadeOut(100);
    $('#alsBookletPage').fadeOut(100);
    $('#alsPhonePage').fadeOut(100);
    $('#alsDesktopPage').fadeOut(100);
    $('#alsZoomPage').fadeOut(100);
  }

  //DI
  $('#ncaDIButton1').click(function(){

    transitionScenes($('#ncaMainMenu'), $('#ncaDI'));
    $('#diVideoPage').fadeIn(500);
    $('#diVideoButton').attr('src', 'images/als2022VideoButtonSelected.png');
    $('#diNCAButton').attr('src', 'images/di2022NCABookletButton.png');
    $('#diPhoneButton').attr('src', 'images/di2022NCAPhoneButton.png');
    $('#diDesktopButton').attr('src', 'images/di2022NCADesktopButton.png');
    $('#diZoomButton').attr('src', 'images/di2022NCAZoomButton.png');
    $('#di2022Video').attr('src','https://player.vimeo.com/video/577964087');
    currentNCAStep = 3;

  });

  $('#ncaDIButton2').click(function(){

    transitionScenes($('#ncaMainMenu'), $('#ncaDI'));
    $('#diVideoPage').fadeIn(500);
    $('#diVideoButton').attr('src', 'images/als2022VideoButtonSelected.png');
    $('#diNCAButton').attr('src', 'images/di2022NCABookletButton.png');
    $('#diPhoneButton').attr('src', 'images/di2022NCAPhoneButton.png');
    $('#diDesktopButton').attr('src', 'images/di2022NCADesktopButton.png');
    $('#diZoomButton').attr('src', 'images/di2022NCAZoomButton.png');
    $('#di2022Video').attr('src','https://player.vimeo.com/video/577964087');
    currentNCAStep = 3;

  });

  //Video
  $('#diVideoButton').click(function(){

    hideAllDI();
    $('#diVideoPage').delay(100).fadeIn(500);
    $('#di2022Video').attr('src','https://player.vimeo.com/video/577964087');
    $('#diVideoButton').attr('src', 'images/als2022VideoButtonSelected.png');
    $('#diNCAButton').attr('src', 'images/di2022NCABookletButton.png');
    $('#diPhoneButton').attr('src', 'images/di2022NCAPhoneButton.png');
    $('#diDesktopButton').attr('src', 'images/di2022NCADesktopButton.png');
    $('#diZoomButton').attr('src', 'images/di2022NCAZoomButton.png');

  });

  $('#diVideoDownloadButton').click(function(){

    window.open("https://player.vimeo.com/external/577964087.hd.mp4?s=059c4e84bb3a3aafa23672a581208902dd36aa4a&profile_id=175&download=1");

  });

  $('#diVideoShareButton').click(function(){

      shareurl = "https://player.vimeo.com/video/577964087";
      $('#shareBlock').fadeIn(500);

  });

  //NCA
  $('#diNCAButton').click(function(){

    hideAllDI();
    $('#diBookletPage').delay(100).fadeIn(500);
    $('#di2022Video').attr('src','');
    $('#diVideoButton').attr('src', 'images/di2022VideoButton.png');
    $('#diNCAButton').attr('src', 'images/als2022NCABookletButtonSelected.png');
    $('#diPhoneButton').attr('src', 'images/di2022NCAPhoneButton.png');
    $('#diDesktopButton').attr('src', 'images/di2022NCADesktopButton.png');
    $('#diZoomButton').attr('src', 'images/di2022NCAZoomButton.png');

  });

  //Phone
  $('#diPhoneButton').click(function(){

    hideAllDI();
    $('#diPhonePage').delay(100).fadeIn(500);
    $('#di2022Video').attr('src','');
    $('#diVideoButton').attr('src', 'images/di2022VideoButton.png');
    $('#diNCAButton').attr('src', 'images/di2022NCABookletButton.png');
    $('#diPhoneButton').attr('src', 'images/als2022NCAPhoneButtonSelected.png');
    $('#diDesktopButton').attr('src', 'images/di2022NCADesktopButton.png');
    $('#diZoomButton').attr('src', 'images/di2022NCAZoomButton.png');

  });

  $('#diPhoneOpenButton1').click(function(){
      openImage("images/DIPhoneWallpaper1.jpg");
  });

  $('#diPhoneOpenButton2').click(function(){
    openImage("images/DIPhoneWallpaper2.jpg");
  });

  $('#diPhoneShareButton1').click(function(){
    shareurl = "https://assets.amwayvnlc2021.com/assets/DIPhoneWallpaper1.jpg";
    $('#shareBlock').fadeIn(500);
  });

  $('#diPhoneShareButton2').click(function(){
      shareurl = "https://assets.amwayvnlc2021.com/assets/DIPhoneWallpaper2.jpg";
      $('#shareBlock').fadeIn(500);

  });

  $('#diPhoneDownloadButton1').click(function(){

    fetch("images/DIPhoneWallpaper1.jpg")
    .then(response => response.blob())
    .then(blob => {
      const blobURL = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobURL;
      a.style = "display: none";
      a.download = "DIPhoneWallpaper1.jpg";
      document.body.appendChild(a);
      a.click();
    });

  });

  $('#diPhoneDownloadButton2').click(function(){

    fetch("images/DIPhoneWallpaper2.jpg")
    .then(response => response.blob())
    .then(blob => {
      const blobURL = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobURL;
      a.style = "display: none";
      a.download = "DIPhoneWallpaper2.jpg";
      document.body.appendChild(a);
      a.click();
    });

  });

  //Desktop
  $('#diDesktopButton').click(function(){

    hideAllDI();
    $('#diDesktopPage').delay(100).fadeIn(500);
    $('#di2022Video').attr('src','');
    $('#diVideoButton').attr('src', 'images/di2022VideoButton.png');
    $('#diNCAButton').attr('src', 'images/di2022NCABookletButton.png');
    $('#diPhoneButton').attr('src', 'images/di2022NCAPhoneButton.png');
    $('#diDesktopButton').attr('src', 'images/als2022NCADesktopButtonSelected.png');
    $('#diZoomButton').attr('src', 'images/di2022NCAZoomButton.png');

  });

  $('#diDesktopOpenButton1').click(function(){
      openImage("images/DIDesktopWallpaper1.jpg");
  });

  $('#diDesktopOpenButton2').click(function(){
    openImage("images/DIDesktopWallpaper2.jpg");
  });

  $('#diDesktopShareButton1').click(function(){
    shareurl = "https://assets.amwayvnlc2021.com/assets/DIDesktopWallpaper1.jpg";
    $('#shareBlock').fadeIn(500);
  });

  $('#diDesktopShareButton2').click(function(){
      shareurl = "https://assets.amwayvnlc2021.com/assets/DIDesktopWallpaper2.jpg";
      $('#shareBlock').fadeIn(500);

  });

  $('#diDesktopDownloadButton1').click(function(){

    fetch("images/DIDesktopWallpaper1.jpg")
    .then(response => response.blob())
    .then(blob => {
      const blobURL = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobURL;
      a.style = "display: none";
      a.download = "DIDesktopWallpaper1.jpg";
      document.body.appendChild(a);
      a.click();
    });

  });

  $('#diDesktopDownloadButton2').click(function(){

    fetch("images/DIDesktopWallpaper2.jpg")
    .then(response => response.blob())
    .then(blob => {
      const blobURL = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobURL;
      a.style = "display: none";
      a.download = "DIDesktopWallpaper2.jpg";
      document.body.appendChild(a);
      a.click();
    });

  });

  //Zoom
  $('#diZoomButton').click(function(){

    hideAllDI();
    $('#diZoomPage').delay(100).fadeIn(500);
    $('#di2022Video').attr('src','');
    $('#diVideoButton').attr('src', 'images/di2022VideoButton.png');
    $('#diNCAButton').attr('src', 'images/di2022NCABookletButton.png');
    $('#diPhoneButton').attr('src', 'images/di2022NCAPhoneButton.png');
    $('#diDesktopButton').attr('src', 'images/di2022NCADesktopButton.png');
    $('#diZoomButton').attr('src', 'images/als2022NCAZoomButtonSelected.png');

  });

  $('#diZoomOpenButton1').click(function(){
      openImage("images/DIZoomWallpaper1.jpg");
  });

  $('#diZoomOpenButton2').click(function(){
    openImage("images/DIZoomWallpaper2.jpg");
  });

  $('#diZoomShareButton1').click(function(){
    shareurl = "https://assets.amwayvnlc2021.com/assets/DIZoomWallpaper1.jpg";
    $('#shareBlock').fadeIn(500);
  });

  $('#diZoomShareButton2').click(function(){
      shareurl = "https://assets.amwayvnlc2021.com/assets/DIZoomWallpaper2.jpg";
      $('#shareBlock').fadeIn(500);

  });

  $('#diZoomDownloadButton1').click(function(){

    fetch("images/DIZoomWallpaper1.jpg")
    .then(response => response.blob())
    .then(blob => {
      const blobURL = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobURL;
      a.style = "display: none";
      a.download = "DIZoomWallpaper1.jpg";
      document.body.appendChild(a);
      a.click();
    });

  });

  $('#diZoomDownloadButton2').click(function(){

    fetch("images/DIZoomWallpaper2.jpg")
    .then(response => response.blob())
    .then(blob => {
      const blobURL = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobURL;
      a.style = "display: none";
      a.download = "DIZoomWallpaper2.jpg";
      document.body.appendChild(a);
      a.click();
    });

  });

  function hideAllDI(){
    $('#diVideoPage').fadeOut(100);
    $('#diBookletPage').fadeOut(100);
    $('#diPhonePage').fadeOut(100);
    $('#diDesktopPage').fadeOut(100);
    $('#diZoomPage').fadeOut(100);
  }

  //Snippets
  $('#snippetsButton').click(function(){

    transitionScenes($('#vnlcMainMenu'), $('#snippetsPage'));

  });

  $('#snippetsBackButton').click(function(){

    transitionScenes($('#snippetsPage'), $('#vnlcMainMenu'));

  });

  $('#snippetsDownloadButton').click(function(){

    window.open("https://player.vimeo.com/external/577944983.sd.mp4?s=bc989a36c37d9731e221b1c4e3b5aa055653b42d&profile_id=165&download=1");

  });

  $('#snippetsShareButton').click(function(){

    shareurl = "https://player.vimeo.com/video/577944983";
    $('#shareBlock').fadeIn(500);

  });

  //BSM
  $('#bsmButton').click(function(){

    transitionScenes($('#vnlcMainMenu'), $('#bsmPage'));

  });

  $('#bsmBackButton').click(function(){

    transitionScenes($('#bsmPage'), $('#vnlcMainMenu'));

  });

  //Instagram
  $('#instagramBackButton').click(function(){

    transitionScenes($('#instagramPage'), $('#vnlcMainMenu'));

  });

  $('#dinnerShareButton').click(function(){

    shareurl = "https://assets.amwayvnlc2021.com/assets/DinnerAtHomePoster.png";
    $('#shareBlock').fadeIn(500);

  });

  $('#dinnerDownloadButton').click(function(){

    fetch("images/DinnerAtHomePoster.png")
    .then(response => response.blob())
    .then(blob => {
      const blobURL = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobURL;
      a.style = "display: none";
      a.download = "VNLCProgram.jpg";
      document.body.appendChild(a);
      a.click();
    });

  });

  $('#dinnerButton').click(function(){

    transitionScenes($('#filterPage'), $('#dinnerPage'));
    $('#dinnerButton').attr('src', 'images/DinnerAtHomeClickedButton.png');
    $('#filterButton').attr('src', 'images/igButton.png');

  });

  $('#filterButton').click(function(){

    transitionScenes($('#dinnerPage'), $('#filterPage'));
    $('#dinnerButton').attr('src', 'images/DinnerAtHomeButton.png');
    $('#filterButton').attr('src', 'images/igClickedButton.png');

  });

  $('#filterLinkButton').click(function(){

    window.open("https://www.instagram.com/ar/893315877922337/");

  });

  $('#vnlcInstagramButton').click(function(){

    transitionScenes($('#vnlcMainMenu'), $('#instagramPage'));

  });

  //Side Menu
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

    if($to.attr('id') == $("#instagramPage").attr('id'))
    {

      $('#dinnerPage').css('display', 'block');
      $('#filterPage').css('display', 'none');

      $('#dinnerButton').attr('src', 'images/DinnerAtHomeClickedButton.png');
      $('#filterButton').attr('src', 'images/igButton.png');

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
    $('#imageBlockImage').attr('src', '');

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

  $('#popUpButton').click(function(){

    window.open("https://www.amwayvnlc2021.com/live-stream", "_self");

  });

  //Vimeo Player
  //Intro Video Scene
  var introVideoiFrame = $('#introvideo-iframe');
  var introVideoPlayer = new Vimeo.Player(introVideoiFrame);

  introVideoPlayer.on('ended', function() {

    $('#introVideo').fadeOut(1000, function(){introVideoiFrame.attr('src', '');});
    $('#skipButtonContainer').fadeOut(1000);

  });


  $('#skipButton').click(function(){

    $('#introVideo').fadeOut(1000, function(){introVideoiFrame.attr('src', '');});
    $('#skipButtonContainer').fadeOut(1000);

  });

});
