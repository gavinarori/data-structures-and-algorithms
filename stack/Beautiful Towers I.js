function add(maxHeights) {
    let heights = [];
    
    for(let i = 0; i < maxHeights.length; i++){
        heights.push(maxHeights[i])
    }
        let sum = heights.reduce((a,b) => {
            return a + b
          },0);
 return sum;
    
};
const maxHeights = [6,5,3,9,2,7];
const result = add(maxHeights);

console.log(result);