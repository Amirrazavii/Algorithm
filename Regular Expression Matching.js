var isMatch = function(s, p) {
    let s1 =s.split('')
    let p1 =p.split('')
    console.log(p1);
    let ls=s1.length -1
    let j = 0

    for(i = 0;i < p1.length -1;){
        if(p1[i] =="."){
            j++
            i++

        }else if(p1[i] =="*"){
            if(p1[i -1]==s1[j]){
                console.log("h");

               j++
              
            }else{
                console.log("k");
                return false
            }
            

        }else{
            console.log("U");
            if(s1[j]==p1[i]){
                console.log("u");
                j++
                i++
            }

        }
        if(ls ==j ){
            return true
        }
    }
    console.log("l");
    return false
    
}


let s = "aa"
let p = "a*"

console.log(isMatch(s,p))