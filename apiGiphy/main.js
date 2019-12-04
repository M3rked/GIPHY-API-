var topics = ["rats", "lions","dogs","cats","fish","cartoons"];

function displayButtons() {
	$("#buttons").empty();
	for (var i = 0; i < topics.length; i++) {
		var initialButtons = $("<button>")
        initialButtons.addClass("topic-button")
        initialButtons.addClass("btn btn-primary")
		initialButtons.text(topics[i])
		initialButtons.attr("data-topic", topics[i])
		$("#buttons").append(initialButtons)
	}
}

$(document).ready(function() {
	displayButtons()
	$("#buttons").on("click", ".topic-button", function() {
        var gif =  $(this).attr("data-topic")
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        gif + "&api_key=6kBjFZWPNUa1OOwOnw7Fmt7NrMWF2pi1&limit=10"

		$.ajax({
			url: queryURL,
			method: "GET"
		}).then(function(response) {
			var gifs = response.data
            var gifSection = $("<div>")
            $("#gifs").empty()

			gifSection.attr("class", "gif-section");
			for (var i = 0; i < gifs.length; i++) {
				var gifDiv = $("<div>")
				var gifImg = $("<img>")
				gifImg.attr("data-still-url", gifs[i].images.fixed_height_still.url)
				gifImg.attr("data-animate-url", gifs[i].images.fixed_height.url)
				gifImg.attr("data-state", "still")
				gifImg.attr("src", gifImg.attr("data-still-url"))
				gifImg.addClass("gif-img")
				gifDiv.append(gifImg)
				gifDiv.addClass("gif-div")
                var gifRating = $("<p>")
                gifRating.attr("class","rating")
				gifRating.text("Rating: " +gifs[i].rating)
				gifRating.addClass("rating")
				gifDiv.append(gifRating)
				$(gifSection).append(gifDiv)
			}

			$("#gifs").prepend(gifSection)
		})
	})
	$("#gifs").on("click", ".gif-img", function() {
		if ($(this).attr("data-state") == "still") {
			$(this).attr("src", $(this).attr("data-animate-url"))
			$(this).attr("data-state", "animate")
		} else {
			$(this).attr("src", $(this).attr("data-still-url"))
			$(this).attr("data-state", "still")
		}
	})
	$("#add-button").on("click", "#add-button-submit", function() {
		event.preventDefault()
		var newTopic = $("#add-button-input").val().trim()
		topics.push(newTopic)
		displayButtons()
	})
})