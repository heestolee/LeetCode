/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function(days, meetings) {
  if (meetings.length === 0) return days;

  meetings.sort((a, b) => a[0] - b[0]);

  let totalMeetingDays = 0;
  let prevEnd = 0;

  for (const [start, end] of meetings) {
    if (start > prevEnd) {
      totalMeetingDays += end - start + 1;
      prevEnd = end;
    } else if (end > prevEnd) {
      totalMeetingDays += end - prevEnd;
      prevEnd = end;
    }
  }

  return days - totalMeetingDays;
};