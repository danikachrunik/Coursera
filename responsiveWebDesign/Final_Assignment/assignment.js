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

$(document).ready(function() {
	//
	// compile all of our templates ready for use
	//
	var source = $("#classes-template").html();
	classes_template = Handlebars.compile(source);

	source = $("#class-template").html();
	class_template = Handlebars.compile(source);

	source = $("#animal-template").html();
	animal_template = Handlebars.compile(source);
	//
	//  clicking on classes shows all classes
	//
	$("#classes-tab").click(function() {
		// displays the albums template
		showTemplate(classes_template, animals_data);

		$("#breadcrumbs > li:not(:first)").remove();

		//
		// add a click callback to each class
		//
		$(".class-thumbnail").click(function() {

			// get the index of the class we clicked on
			var index = $(this).data("id");

			// set the current class to this class
			current_class = animals_data.category[index];

			//adds class to breadcrumb nav
			$("#breadcrumbs").append('<li id="class-name" class="active">'+ current_class.name +'</li>');

			//Make Classes a link and remove active class
			$("#classes-tab").removeClass("active");

			// displays the class template
			showTemplate(class_template, current_class);

			//
			// add a click callback to each animal
			//
			$(".animal-thumbnail").click(function() {
				// get the index of the animal we clicked on
				var index = $(this).data("id");

				// set the current photo to this photo
				current_animal = current_class.animals[index];

				//adds animal to breadcrumb nav
				$("#breadcrumbs").append('<li id="animal-name" class="active">'+ current_animal.name +'</li>');

				//Make Classes a link and remove active class
				$("#class-name").removeClass("active");

				// displays the single photo template
				showTemplate(animal_template, current_animal);

				$("#class-name").click(function() {

					$("#animal-name").remove();

					// displays the class template
					$(".class-thumbnail").click();
				});

			});
		});
	});

	$("#classes-tab").click();

});