//You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique.
//The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:
//The 1st place athlete's rank is "Gold Medal".
//The 2nd place athlete's rank is "Silver Medal".
//The 3rd place athlete's rank is "Bronze Medal".
//For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is "x").
//Return an array answer of size n where answer[i] is the rank of the ith athlete.
 
//this my solution 
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    //used to sort the scores in descending order
    const sortedData = [...score].sort((a,b)=> b - a)
    //an object to map scores to their ranks
    const RankScores = {};
    for(let i = 0; i < sortedData.length; i++){
        RankScores[sortedData[i]] = i + 1
    }
    const awards =[];
    for (let i=0; i<score.length; i++) {
        const Rank = sortedData[i]
        if (Rank === 1){
            awards.push("Gold Medal")
    }else if(Rank === 2){
        awards.push("Silver Medal")
        } else if(Rank === 3){
        awards.push("Silver Medal")
    }else{
        awards.push(Rank.toString())
    }
}
return awards;
};

//[Javascript] A Solution Using Priority Queues (Max Heap)
const findRelativeRanks = function (score) {
    const ranks = new MaxPriorityQueue();
    //Enqueue the scores with their corresponding indices into the max priority queue.
    for (let i = 0; i < score.length; i++) {
        ranks.enqueue(i, score[i]);
    }
    //Dequeue athletes in order of their scores to determine their ranks and medals.
    for (let i = 0; i < score.length; i++) {
        // Dequeue the athlete with the highest score (item contains the index and score).
        const item = ranks.dequeue();
        let rank;
        switch (i) {
            case 0:
                rank = "Gold Medal";
                break;
            case 1:
                rank = "Silver Medal";
                break;
            case 2:
                rank = "Bronze Medal";
                break;
            default:
                rank = (i + 1).toString();
        }
        score[item.element] = rank;
    }
    return score;
};
