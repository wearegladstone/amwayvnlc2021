var currentBeInspired = 0;
  
$(document).ready(function(){
  //Hide other blocks
  //Amway Moments
  $('#amwayMomentsPage').css("visibility","hidden");
  
  //Be Inspired
  $('#beInspiredPage').css("visibility","hidden");
  $('#newAchieversMenu').css("visibility","hidden");
  $('#py2019Block').css("visibility","hidden");
  
  //Main Page Buttons
  //Amway Moments
  $('#mainAmwayMomentsButton').click(function(){
  
    $('#mainPage').animate({opacity : 0},500, function(){
     $('#mainPage').css("visibility", "hidden");
 	$('#amwayMomentsPage').css("visibility", "visible").animate({opacity : 1}, 500);
    });
    
  });
  
  //Be Inspired
    $('#mainBeInspiredButton').click(function(){
  		
    $('#mainPage').animate({opacity : 0},500, function(){
     $('#mainPage').css("visibility", "hidden");
 	$('#beInspiredPage').css("visibility", "visible").animate({opacity : 1}, 500);
    });
    
  });
  
  //Vimeo Player
  var iframe = $('#introvideo-iframe');
  var player = new Vimeo.Player(iframe);

  player.on('ended', function() {

    $('#introVideo').fadeOut(500, function(){iframe.attr('src', "");});
  });
  

  
  //Main Page
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
  
  //Be Inspired 
  
  $('#newAchieversBackButton').click(function(){
    
    switch(currentBeInspired)
    {
        
      case 1:
        
        $('#newAchieversMenu').animate({opacity : 0},500, function(){
     $('#newAchieversMenu').css("visibility", "hidden");
      currentBeInspired = 0;
 	$('#beInspiredMainMenu').css("visibility", "visible").animate({opacity : 1}, 500);
    });
        
        break;
        
      case 2:
        $('#py2019Block').animate({opacity : 0},500, function(){
     $('#py2019Block').css("visibility", "hidden");
      currentBeInspired = 1;
 	$('#newAchieversRightBlock').css("visibility", "visible").animate({opacity : 1}, 500);
    });
        break;
    
    }
        
  });
  
   $('#newAchieversButton').click(function(){
     
    $('#beInspiredMainMenu').animate({opacity : 0},500, function(){
     $('#beInspiredMainMenu').css("visibility", "hidden");
      currentBeInspired = 1;
 	$('#newAchieversMenu').css("visibility", "visible").animate({opacity : 1}, 500);
    });
     
   });
  
   $('#py2019Button').click(function(){
  
    $('#newAchieversRightBlock').animate({opacity : 0},500, function(){
     $('#newAchieversRightBlock').css("visibility", "hidden");
      currentBeInspired = 2;
 	$('#py2019Block').css("visibility", "visible").animate({opacity : 1}, 500);
    });
     
   });
  //Health
  //Moments
  //VNLC

});
  
//VH
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

});
