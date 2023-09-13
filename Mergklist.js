var mergeKLists = function(lists) {
    ans =[]
    for(const list in lists){

        for(const el of lists[list]){

            ans.push(el)
        }
        
            
     
    }

return ans.sort((a,b)=>a-b)

};

console.log(mergeKLists([[4,6,7],[2,9,10],[3,6,9]]));