/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

    for(let i = 0;i < 9;i++){
        //row
        let tempRow = []
        for(let j of board[i]){
            if(j !== "."){
                tempRow.push(j)
            }
        }
        if(tempRow.length !== (new Set(tempRow).size)){
            return false
        }
   


        //column

        let tempColumn = []

        for(let j = 0;j < 9;j++){
            if(board[j][i] !== "."){
                tempColumn.push(board[j][i])
            }
        }
        if(tempColumn.length !== (new Set(tempColumn).size)){
            return false
        }
        let po=[]

        for(let j = 0;j < 3;j++){
            for(let k = 0;k < 3;k++){
                let q,w;
                
                if(i >= 0 && i < 3){
                    q = i
                    w = 0
                }else if(i >=3 && i<6){
                    q = i - 3
                    w = 3
                }else{
                    q = i - 6
                    w= 6
                }
                if(board[j + w][k + 3*(q)] !== "."){
                 po.push(board[j + w][k + 3*(q)])
                }

            }
        }
        if(po.length !== (new Set(po).size)){
                 return false
         }
    }

    return true
};