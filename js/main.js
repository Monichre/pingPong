$(document).ready(function() {


//****************************** PLEASURE ******************************** PLEASURE *******************************//

  $("#form").submit(function(event) {

    event.preventDefault();

    var userInput = parseInt($('#number-input').val());
    console.log(userInput);
    var output = pingPong(userInput);

    $('li').remove();
    output.forEach(function (x){
      $('#result').append("<li>" + x + "</li>");
  
    });
  
    $('.result-img').fadeIn(1000);

    



  

   
















  // ****************************  BUSINESS *************** BUSINESS ***************************************** //

  function pingPong (num) {
    var nums = [];
    for (var i = 0; i <= num; i++) {
      nums.push(i);
    } // have populated the nums array
    console.log(nums);

    var nums = nums.map(function(x) {
      if (x === 0) {
        console.log("am i in the if loop?")
        return x;
      } else if (x % 15 === 0) {
        return "ping pong";
      } else if (x % 5 === 0) {
        return "pong";
      }else if (x % 3 === 0) {
        return "ping";
      } else {
      return x;
      }
    }); 
      return nums;
    };

  });
});