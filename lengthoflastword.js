var lengthOfLastWord = function(s) {
    let k =s.trim().split(" ");
    return k[k.length -1].length
   
};

console.log(lengthOfLastWord("      fly me   to   the moon     "));