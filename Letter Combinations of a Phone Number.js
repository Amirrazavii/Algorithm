var letterCombinations = function(digits) {
  const phone={
      "2":['a','b','c'],
      "3":['d','e','f'],
      "4":['g','h','i'],
      "5":['j','k','l'],
      "6":['m','n','o'],
      "7":['p','q','r','s'],
      "8":['t','u','v'],
      "9":['w','x','y','z']
  }
  let arrdigit = digits.split('')
  let ldigit =arrdigit.length

const ans =[]

if(digits.length == 0){
  return []
}
let k =phone[digits[0]]
let p =phone[digits[1]]

for(i =0;  i < k.length ;i++){
  for(j =0;j<p.length ;j++){
     let t = k[i] + p[j]
      ans.push(t)

  }
}
return ans
  
};

let digits = "";
console.log(letterCombinations(digits));