/**
 * @param {number[]} travelDays
 * @param {number[]} ticketCosts
 * @return {number}
 */
var mincostTickets = function(travelDays, ticketCosts) {
    const numberOfTravelDays = travelDays.length;
    const minCostUpToDay = new Array(numberOfTravelDays).fill(0);
    const durations = [1, 7, 30];

    minCostUpToDay[0] = Math.min(ticketCosts[0], ticketCosts[1], ticketCosts[2]);

    for (let i = 1; i < numberOfTravelDays; i++) {
        let currentMinCost = minCostUpToDay[i - 1] + ticketCosts[0];

        for (let j = 0; j < durations.length; j++) {
            const previousDay = travelDays[i] - durations[j];
            let k = i;

            while (k >= 0 && travelDays[k] > previousDay) {
                k--;
            }

            if (k >= 0) {
                currentMinCost = Math.min(currentMinCost, minCostUpToDay[k] + ticketCosts[j]);
            } else {
                currentMinCost = Math.min(currentMinCost, ticketCosts[j]);
            }
        }

        minCostUpToDay[i] = currentMinCost;
    }

    return minCostUpToDay[numberOfTravelDays - 1];
};
