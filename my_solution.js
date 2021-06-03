var change = function(amount, coins) {
    
    let combos = []
    for(let i = 0; i < coins.length; i++){
        
        let subArr = []
        for(let j = 0; j <= amount; j++){
            let prevVal = combos[i - 1]
            if(j === 0){
                subArr.push(1)
            } else if(coins[i] > j) {
                subArr.push(prevVal ? prevVal[j] : 0)
            } else {
                const newInd = j - coins[i]
                let newVal = prevVal ? prevVal[j] + subArr[newInd] : subArr[newInd]
                subArr.push(newVal)
            }
        }
        combos.push(subArr)
    }
    
    return combos[combos.length - 1][amount]
};
