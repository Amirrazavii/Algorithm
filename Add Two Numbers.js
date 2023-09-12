var addTwoNumbers = function(l1, l2) {
    let  ans =parseInt(l1.join('')) + parseInt(l2.join(''))
    return ans.toString().split('').map(a =>parseInt(a));
  };


  let l1 =[6,5,4]
  let l2 =[4,1,3]

  console.log(addTwoNumbers(l1,l2));