
      var characters = ["mario", "luigi", "donkey kong", "diddy kong", "toad", 
                         "yoshi", "wario", "waluigi", "bowser", "princess peach"];

      function renderButtons() {

        // Deleting the movies prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();

        // Looping through the array of movies
        for (var i = 0; i < characters.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var button = $("<button>");
          // Adding a class of movie to our button
          button.addClass("character");
          button.addClass("display-gif");
          button.attr("data-character", characters[i]);
          // Adding a data-attribute
          button.attr("data-name", characters[i]);
          // Providing the initial button text
          button.text(characters[i]);
          // Adding the button to the buttons-view div
          $("#buttons-view").append(button);
        }
      }

 // Adding click event listen listener to all buttons

    // This function handles events where a movie button is clicked
      $("#add-character").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var character = $("#character-input").val().trim();

        // Adding movie from the textbox to our array
        // characters.push(character);
        var button = $("<button>");
          // Adding a class of movie to our button
          button.addClass("character");
          button.addClass("btn btn-default navbar-btn");
          button.addClass("display-gif");
          button.attr("data-character", character);
          // Adding a data-attribute
          button.attr("data-name", character);
          // Providing the initial button text
          button.text(character);
          // Adding the button to the buttons-view div
          $("#buttons-view").append(button);
        // Calling renderButtons which handles the processing of our movie array
        button.on("click", function (){
                var character = $(this).attr("data-character");
      // Constructing a queryURL using the animal name
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          character + "&api_key=dc6zaTOxFJmzC&limit=10";
          console.log('hello');

      // Performing an AJAX request with the queryURL
      $.ajax({
          url: queryURL,
          method: "GET"
        })
        // After data comes back from the request
        .done(function(response) {
          console.log(queryURL);

          console.log(response);
          // storing the data from the AJAX request in the results variable
          var results = response.data;

          // Looping through each result item
          for (var i = 0; i < results.length; i++) {

            // Creating and storing a div tag
            var characterDiv = $("<div>");

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + results[i].rating);

            // Creating and storing an image tag
            var characterImage = $("<img>");
            // Setting the src attribute of the image to a property pulled off the result item
            characterImage.attr("src", results[i].images.fixed_height.url);

            // Appending the paragraph and image tag to the animalDiv
            characterDiv.append(p);
            characterDiv.append(characterImage);

            // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
            $("#gifs-appear-here").prepend(characterDiv);
          }
        });
        })

      });

      $(".display-gif").on("click", function() {
      // Grabbing and storing the data-animal property value from the button
      var character = $(this).attr("data-character");
      // Constructing a queryURL using the animal name
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          character + "&api_key=dc6zaTOxFJmzC&limit=10";
          console.log('hello');

      // Performing an AJAX request with the queryURL
      $.ajax({
          url: queryURL,
          method: "GET"
        })
        // After data comes back from the request
        .done(function(response) {
          console.log(queryURL);

          console.log(response);
          // storing the data from the AJAX request in the results variable
          var results = response.data;

          // Looping through each result item
          for (var i = 0; i < results.length; i++) {

            // Creating and storing a div tag
            var characterDiv = $("<div>");

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + results[i].rating);

            // Creating and storing an image tag
            var characterImage = $("<img>");
            // Setting the src attribute of the image to a property pulled off the result item
            characterImage.attr("src", results[i].images.fixed_height.url);

            // Appending the paragraph and image tag to the animalDiv
            characterDiv.append(p);
            characterDiv.append(characterImage);

            // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
            $("#gifs-appear-here").prepend(characterDiv);
          }
        });
    });

      // To Do
      // Use random function to randomize the images pulled from the search
      // Use css to standardize image sizes and alignment
      // Give each image a state class of either still or animated.  Use an if/else loop to 
      // change the state of each image when clicked.