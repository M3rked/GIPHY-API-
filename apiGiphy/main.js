



  function getData ()

{
   
var input = $("#searchtext").val();
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=3UYaadyaH2yMdA1aSBnew9sLMO1RxStn&limit=10"; 








$.ajax({
    url: queryURL,
    method:"GET",
}).then(function(response) { 
console.log("success got data", response);

    var giffs = response.data 


for (var i=0; i<giffs.length; i++) 
{  
    $(".inner").append("<img src="+giffs[i].images.fixed_height.url+"' style='height:300px; width: 300px;'/>")
    

    
    if (giffs[i].rating !== "r" && giffs[i].rating !== "pg-13") {
        
        var gifDiv = $("<div>");
        var rating = giffs[i].rating;
        var p = $("<p>").text("Rating: " + rating);
        var gifImage = $("<img>");

      
        gifImage.attr("src", giffs[i].images.fixed_height.url);
        gifDiv.append(p);
        gifDiv.append(gifImage);

       
        $(".inner").prepend(gifDiv);


      }








}







})

};















$("button").on("click", function zoo()

{
 var animal =$(this).attr("data-animals");  

var getGif = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=3UYaadyaH2yMdA1aSBnew9sLMO1RxStn&limit=10"; 








$.ajax({
    url: getGif,
    method:"GET",
}).then(function(farm) { 
console.log("success got data", farm);

    var zoo = farm.data 


for (var i=0; i<zoo.length; i++) 
{  
    $(".inner").append("<img src="+zoo[i].images.fixed_height.url+"' style='height:300px; width: 300px;'/>")
    


    if (zoo[i].rating !== "r" && zoo[i].rating !== "pg-13") {
        
        var gifDiv = $("<div>");
        var rating = zoo[i].rating;
        var p = $("<p>").text("Rating: " + rating);
        var gifImage = $("<img>");

      
        gifImage.attr("src", zoo[i].images.fixed_height.url);
        gifDiv.append(p);
        gifDiv.append(gifImage);

       
        $(".inner").prepend(gifDiv);


      }






}










});


});
