const facts = [
  "Dogs can dream",
  "Dogs can not taste spicy food.",
  "Dogs sense of smell that is 10,000 to 100,000 times better than humans.",
  "A dog is a mans best friend."
];

const factParagraph = document.getElementById("fact");
const button = document.getElementById("changeButton");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factParagraph.textContent = facts[randomIndex];
'
