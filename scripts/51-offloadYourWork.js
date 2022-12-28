// ? Exercise from CodeWars: Offload your work!, rank 7kyu
/**
 * You need to write a method called workNeeded to figure out how much time you need to contribute to a project.
 * Giving the amount of time in minutes needed to complete the project and an array of pair values
 * representing other freelancers' time in [Hours, Minutes] format ie. [[2, 33], [3, 44]]
 * calculate how much time you will need to contribute to the project (if at all) and return a string depending on the case.
 * * If we need to contribute time to the project then return "I need to work x hour(s) and y minute(s)"
 * * If we don't have to contribute any time to the project then return "Easy Money!"
 */

function workNeeded(projectMinutes, freelancers) {
  const availableTime = freelancers.reduce((acc, curr) => {
    const [hours, minutes] = curr;
    return acc + hours * 60 + minutes;
  }, 0);

  const remainingTime = projectMinutes - availableTime;
  const remainingMinutes = remainingTime % 60;
  const remainingHours = (remainingTime - remainingMinutes) / 60;

  return remainingTime <= 0
    ? "Easy Money!"
    : `I need to work ${remainingHours} hour(s) and ${remainingMinutes} minute(s)`;
}

console.log(
  workNeeded(141, [
    [1, 55],
    [0, 25],
  ])
);
