/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;

     for (let i = 0; i < prices.length; i++) {
         for (let j = i + 1; j < prices.length; j++) {
             profit = Math.max(profit, prices[j] - prices[i]);
         }
     }

     return profit;
 };