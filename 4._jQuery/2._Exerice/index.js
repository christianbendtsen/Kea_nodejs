//1
$("body").css("text-align", "center");

//2
$("#title h2").text("new title");


//4
$(".temp").css("visibility", "hidden");
// $(".temp").hide();

//6

$("#first-list li").css("font-weight", "bold");

//7
//$("#first-list").children().last().css("text-decoration", "underline");
$("#first-list li:nth-child(3)").css("text-decoration", "underline");


//8
$("#first-list li:nth-child(2)").css("text-decoration", "line-through");


//11
$(".unused-box label").remove();

//  12
$(".unused-box").append("<p> Second sentence </p>");

//13
$(".unused-box").before("<p> First sentence </p>");

//14
//$(".unused-box").removeClass("unused-box").addClass("used-box");
$(".unused-box").attr("class", "used-box");
//budo nodemon jquery comandoer documentaton i mandatory 1

//15
$(".used-box").on("click", (event) =>{

   $(event.currentTarget).toggleClass("used-boxed-clicked");
});

