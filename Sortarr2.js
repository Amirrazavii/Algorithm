function sort (arr1,arr2){

    k={};
    for(i =0;i<arr2.length  ;i++){
if(k[arr2[i]]){

    k[arr2[i]] +=1;
}
else{
    k[arr2[i]] =1;
}

    }
    const arr=[];
    for (let i = 0; i < arr1.length; i++) {
        const y=k[arr1[i]];
     
        for (let j = 0; j < y; j++) {
            arr.push(arr1[i])
            
        }
       
        
    }
    console.log(arr);

    return arr;

}
arr1=[6,4,3,9] 
arr2=[6,6,3,4,4,9,,6,3,6,3,9]

sort(arr1,arr2)