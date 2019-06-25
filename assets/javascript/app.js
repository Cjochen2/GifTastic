var topics = ['The Joker', 'The Penguin', 'Cat Woman', 'The Riddler', 'Loki', 'Thanos', 'Venom', 'Lex Luthor', 'Ajax', 'Deathstroke'];

function renderButtons() {

    $("#buttons-view").empty();

    for (var i = 0; i < topics.length; i++) {

      var a = $("<button>");
      a.addClass("villain-btn");
      a.attr("data-name", topics[i]);
      a.text(topics[i]);
      $("#buttons-view").append(a);
    }
  }

  $("#add-button").on("click", function(event) {
    event.preventDefault();
    var userTopic = $("#button-input").val().trim();

    topics.push(userTopic);
    
    renderButtons();
  });

  $(document).on('click', '.villain-btn', displayVillain)

  renderButtons();

function displayVillain(){
$("button").on("click", function () {

    var topic = $(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      topic + "&api_key=tKevWU5Ykf52GJn5Joatr6xVqrNNQIM5&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function (response) {

        var results = response.data;

        for (var i = 0; i < results.length; i++) {
        
            var gifDiv = $("<div>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var personImage = $("<img>");

            personImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.append(p);
            gifDiv.append(personImage);

            $("#gifs-appear-here").prepend(gifDiv);
        }
      });
  });
};
  