var hobbies = ["run", "knit", "paint", "garden", "read", "scrapbook"];
console.log(hobbies.length);
hobbies.push("dance");
console.log(hobbies[2]);
hobbies.pop();
hobbies.splice(2, 0, "woodwork", "sing");
console.log(hobbies);
hobbies.shift();
hobbies.unshift("weightlift");
console.log(hobbies);

var goals = ["finish my coursework", "read every day", "paint once a week"];

var allTheThings = [...hobbies, ...goals];
console.log(allTheThings);
console.log(allTheThings.indexOf("garden"));
allTheThings.splice(5, 1);
console.log(allTheThings);

var plans = allTheThings.map(function (item) {
  return (item = `I would love to ${item}.`);
});
console.log(plans);
