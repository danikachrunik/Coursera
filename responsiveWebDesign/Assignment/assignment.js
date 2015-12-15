var classes_template, animals_template, animal_template;

var current_class = animals_data.category[0];
var current_animal = current_class.animals[0];

//
// instantiate template and display the results in the content div
//
function showTemplate(template, data){
	var html = template(data);
	$('#content').html(html);
}

$(document).ready(function(){
	//
	// compile all of our templates ready for use
	//
	var source = $("#classes-template").html();
	classes_template = Handlebars.compile(source);

	source = $("#animals-template").html();
	animals_template = Handlebars.compile(source);

	source = $("#animal-template").html();
	animal_template = Handlebars.compile(source);
	//
	//  clicking on classes shows all classes
	//
	$("#classes-tab").click(function () {

		// displays the albums template
		showTemplate(classes_template, animals_data);
	});

	//
	// add a click callback to each class
	//
	$(".class-thumbnail").click(function (){
			//
			// get the index (position in the array) of the class we clicked on
			// data("id") gets the attribute data-id
			//
			var index = $(this).data("id");

			// set the current album to this album
			current_class = animals_data.category[index];

			// displays the photos template
			showTemplate(animals_template, current_class);
			//
			// display the photo in a modal popup
			//
			$(".photo-thumbnail").click(function (){
				//
				// data("id") gets the attribute data-id
				//
				var index = $(this).data("id");

				// set the current photo to this photo
				current_animal = current_class.animals[index];

				// displays the single photo template
				showTemplate(animal_template, current_animal);
			});
		});

	//
	// start the page by showing the classes view
	//
	$("#classes-tab").click();

});