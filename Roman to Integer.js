var romanToInt = function(s) {
    const symbols={
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 100

    }
    const sa =s.split('')
    let ans =0
    for(i =0 ;i<sa.length ;i++){
        const h = sa[i]
        let add =symbols[h];
        ans += add
    }
    return ans
};

let s = 'IV'
console.log(romanToInt(s));