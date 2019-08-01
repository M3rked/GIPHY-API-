



 function getData()

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
    
}








})

};

















$("button").on("click", function ()

{
 var animal =$(this).attr("data-animals");  

var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=3UYaadyaH2yMdA1aSBnew9sLMO1RxStn&limit=10"; 








$.ajax({
    url: queryURL,
    method:"GET",
}).then(function(response) { 
console.log("success got data", response);

    var giffs = response.data 


for (var i=0; i<giffs.length; i++) 
{  
    $(".inner").append("<img src="+giffs[i].images.fixed_height.url+"' style='height:300px; width: 300px;'/>")
    
}








})

});







