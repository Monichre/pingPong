function pingPong(num) {
  var nums = [];
  for (var i = 0; i <= num; i++) {
    nums.push(i);
  } // have populated the nums array
  console.log(nums);

  nums = nums.map(function(x) {
    if (x === 0) {
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
      console.log(nums);
  };

  pingPong(30);