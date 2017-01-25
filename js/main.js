
//The holy function of light.
Array.prototype.pickARandomElement = function() { 
	return this[Math.floor(Math.random() * this.length)]; 
}

var gold=["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "red"];

/*Databinding jazz*/
function dharma() {

	console.log("May all beings awaken to the light of the true nature!");

// Grab the template script
var theTemplateScript = $("#message-template").html();

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  //Bring the divine data
  $.getJSON('./data/divine.json', function(divine) { 
  	//On successful call
  	
  // Define our data object
  var context=divine.pickARandomElement();

  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $('.content-placeholder').html(theCompiledHtml);

}); 



}



$( document ).ready(function() {

  console.log("You are the Chosen one!")

  $(".earth").focus();

  $( ".earth" ).keypress(function() {
    console.log( "Holy! Holy! Holy!" );
    $('.moon').addClass("glow");
  });

//On click of the button
$( "body" ).on( "click", ".moon", function() {
	
  if(!$('.galaxy').hasClass("open")){

    $('.moon').hide('fast');
  //Open the door
  $('.galaxy').addClass("open");
  //Unlock the lock
  $('.lock').addClass("unlock");

  
  $('.moon').fadeIn("slow");
}


  //Choosen color
  var color=gold.pickARandomElement();
  //console.log(color);
  $('.lock').addClass(color);

  $('.content-placeholder').hide('fast');
  dharma();
  $('.content-placeholder').fadeIn("slow");

	//if($(".earth").val().length > 0)
});

});

