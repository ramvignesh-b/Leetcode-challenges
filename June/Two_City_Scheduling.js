/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    costs.sort((a,b) => {
        return Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1]);
    });
    let sum = 0
    let cityA = 0
    let cityB = 0;
    
    for (let i = 0; i < costs.length; i++) {
        let costA = costs[i][0];
        let costB = costs[i][1];
        
        //if A costs less
        if (costA <= costB) {
            if (cityA < costs.length / 2) {
               sum += costA;
                cityA++; 
            }
            else {
                sum += costB;
                cityB++;
            }
        }
        // B costs less
        else {
            if (cityB < costs.length / 2) {
                sum += costB;
                cityB++;
            }
            else {
                sum += costA;
                cityA++;
            }
        }
    }
    return sum;
};

/*
Runtime: 68 ms
Memory Usage: 35.8 MB
*/
