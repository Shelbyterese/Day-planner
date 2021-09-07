//display the time and date 
var todayDate = moment().format('dddd, MMM Do YYYY');
$('currentday').hmtl(todayDate);

$(document).ready(function (){
  //adding event listener to saveBtn
  $(".saveBtn").on("click", function(){
    //get valuies from the nearby jquery
    var text =$(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
    
  })
  function timeTracker() {
    var timeNow = moment().hour();
    $(".time-block").each(function (){
      var blockTime = parseInt($(this).attr("id").split("hour")[1]);
      if (blockTime < timeNow){
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      else if (blockTime === timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      else {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
    })
    }
}
)
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour8"));
$("#hour10 .description").val(localStorage.getItem("hour8"));
$("#hour11 .description").val(localStorage.getItem("hour8"));
$("#hour12 .description").val(localStorage.getItem("hour8"));
$("#hour13 .description").val(localStorage.getItem("hour8"));
$("#hour14 .description").val(localStorage.getItem("hour8"));
$("#hour15 .description").val(localStorage.getItem("hour8"));
$("#hour16 .description").val(localStorage.getItem("hour8"));
$("#hour17 .description").val(localStorage.getItem("hour8"));

timeTracker();
