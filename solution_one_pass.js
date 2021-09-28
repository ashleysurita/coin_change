function coinChange (coins, x) {  
  let combos = new Array(x + 1).fill(0)
  combos[0] = 1
  
  for(const coin of coins) {
    for(let i = 1; i < combos.length; i++){
      if(i >= coin){
        combos[i] += combos[i - coin]
      }
    }
  }
  
  return combos[x]
}
