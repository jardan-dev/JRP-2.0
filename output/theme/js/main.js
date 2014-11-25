$(document).ready(function(){



 var s = getUrlParameter('s');
 if (s != null){
  $('#surveyAlert').css("display", "block");
 }




$('a.new-window').on('click', function(e) {
    window.open(e.currentTarget.href);
    simulateClick(e);
});

var simulateClick = function(origEv) {
    var e = $.Event("click");
    e.ctrlKey = true;
    e.metaKey = true;
    e.originalEvent = origEv;
    $('a.new-window').trigger(e);
};


// $('button.programatic').on('click', function(e) {
//     // this will result in a blocked popup
//     $.get('https://script.google.com/macros/s/AKfycbxiCndm68PS106n52E0VwrUVrYXICvzbd2q_5sO5dHeX1Q40MwF/exec').always(function() {
//         // executes the method after a non-user event
//         // results in blocked popup
//         simulateClick(e);
//     });
// });

// // this will result in a blocked popup
// setTimeout(simulateClick, 1000);




$('.post-its').waypoint(function(direction) {
  if (direction === 'down'){
  	$('.blurred').fadeTo(300, 1)	
  } else {
  	$('.blurred').fadeTo(300, 0)	
  }
  
}, { offset: '28%' });

hero_dictionary={ 
     "break":["break.jpg", "posts_red.jpg", "posts_red_blur.jpg", "Take a<br/>Break<div class='title-underline'></div>", "Jardan is creating the next room planner &mdash; Design it with us"], 
     "holidays":["holidays.jpg", "posts_green.jpg", "posts_green_blur.jpg", "These<br/>Holidays<div class='title-underline'></div>", "Help us dream up the next Jardan Room Planner"], 
     "room":["room.jpg", "posts_aqua.jpg", "posts_aqua_blur.jpg", "Make this<br/>Space<div class='title-underline'></div>", "The next Jardan Room Planner is about place-making, tell us how."]
};


var images = ['room', 'holidays', 'break'];
var random = Math.floor(Math.random() * 3);
var key = images[random];


$('.banner').css({
	'background': 'url(./theme/images/' + hero_dictionary[key][0] +") scroll no-repeat",
	'background-position' : 'center top',
	'background-size' : 'cover'
 });

$('div.title').html(hero_dictionary[key][3]);

$('.tagline').html(hero_dictionary[key][4]);

$('#posts').css({
	'background': 'url(./theme/images/' + hero_dictionary[key][1] +") fixed no-repeat",
	'background-position' : 'center top',
	'background-size' : 'cover'

})

$('#posts-blurred').css({
	'background': 'url(./theme/images/' + hero_dictionary[key][2] +") fixed no-repeat",
  // 'background': "url(./theme/images/posts_aqua_blur.jpg) fixed no-repeat",
	'background-position' : 'center top',
	'background-size' : 'cover'
})


$('.blurred').fadeTo(300, 0)






function isMobile(){
    // if we want a more complete list use this: http://detectmobilebrowsers.com/
    // str.test() is more efficent than str.match()
    // remember str.test is case sensitive
    var isMobile = (/iphone|ipod|ipad|android|ie|playbook|silk|blackberry|fennec/).test
         (navigator.userAgent.toLowerCase());
    return isMobile;
}


if(isMobile()===true){
    $('.a1, .a2, .a3, .a4, .a5, .a6, .a7, .a8, .a9').click(function(){
		$(this).toggleClass("flip");
	});
}else{
$('.a1, .a2, .a3, .a4, .a5, .a6, .a7, .a8, .a9').hover(function(){
		$(this).toggleClass("flip");
	});
}



// $(window).scroll(function() {
//     var s = $(window).scrollTop(),
//     opacityVal =  s-$('.panel1').scrollTop();//((s*2) / 600.0) -3.0;
//     console.log(opacityVal);
//     $('.blurred').css('opacity', opacityVal);
// });


});


function getUrlParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}