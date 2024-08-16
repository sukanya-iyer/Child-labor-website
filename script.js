/* .js files add interaction to your website */
var factList = [
 "About 70% of child laborers work in agriculture", 
  "Over 1/3 of children in child labor are out of school",
  "There are 86.6 million children in child labor in sub-Saharan Africa, more than anywhere else in the world.",
  "As of 2020, around 160 million children are in child labor",
  "Nearly half of those in child labor perform hazardous work",
  "The occurrence of hazardous work in countries affected by armed conflict is 50% higher than the global average",
];

var fact = document.getElementById("fact");
var myButton = document.getElementById("factBtn");
var count = 0;

factBtn.addEventListener("click", displayFact);
function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count==6) {
    count=0;
  }
}
