
    
    var findMedianSortedArrays = function(nums1, nums2) {

        let concat = nums1.concat(nums2).sort((a,b)=>a-b)
    
        let temparr =[]
    
        let join =concat.filter(function(x){
            if(temparr.includes(x)){
                return false
            }
            temparr.push(x)
            return true
        })
    
    
    
    
        if (join.length % 2 ==0){
            let mid = (join[join.length  / 2 -1] + join[join.length  / 2  ]) / 2
            return mid
    
        }else{
           let mid = join[Math.floor(join.length  / 2)]
           return mid
    
    
        }
        
    };
    
    

    let nums1 = [1,2]
    let nums2 =[3,4]
console.log(findMedianSortedArrays(nums1,nums2))

