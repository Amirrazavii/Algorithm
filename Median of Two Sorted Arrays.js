
    
    var findMedianSortedArrays = function(nums1, nums2) {

        let concat=[]
        if(nums1.length < 1 ){
           
            concat = nums2
    
        }
        else if(nums2.length < 1){
     
            concat = nums1
    
        }   
        else{
    
         concat = nums1.concat(nums2).sort((a,b)=>a-b)
        }
    
    
    
        let temparr =[]
        
    
        let join =concat.filter(function(x){
            if(temparr.includes(x)){
                return false
            }
            temparr.push(x)
            return true
        })
    
            // if(join.length <=2){
            //     return join[0]
            // }
    
    
        if (join.length % 2 ==0){
            let mid = (join[join.length  / 2 -1] + join[join.length  / 2  ]) / 2
            return mid
    
        }else{
           let mid = join[Math.floor(join.length  / 2)]
           console.log(mid);
           return mid
    
    
        }
        
    };
    
    

    let nums1 = []
    let nums2 =[2,3]
console.log(findMedianSortedArrays(nums1,nums2))

