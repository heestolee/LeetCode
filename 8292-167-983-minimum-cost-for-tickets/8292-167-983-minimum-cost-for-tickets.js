/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(travelDays, ticketCosts) {
    const numberOfTravelDays = travelDays.length;
    const minCostUpToDay = new Array(numberOfTravelDays).fill(0);
    const durations = [1, 7, 30];

    minCostUpToDay[0] = Math.min(ticketCosts[0], ticketCosts[1], ticketCosts[2]);

    for (let i = 1; i < numberOfTravelDays; i++) {
        minCostUpToDay[i] = Infinity;

        for (let j = 0; j < durations.length; j++) {
            let previousDay = travelDays[i] - durations[j];
            let k = i;

            while (k >= 0 && travelDays[k] > previousDay) {
                k--;
            }
            minCostUpToDay[i] = Math.min(
                minCostUpToDay[i],
                (k >= 0 ? minCostUpToDay[k] : 0) + ticketCosts[j]
            );
        }
    }

    return minCostUpToDay[numberOfTravelDays - 1];
};
