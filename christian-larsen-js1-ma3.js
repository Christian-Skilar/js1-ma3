// Question 1
//

(a, b) => a - b;

//
// Question 2
//

function loadData() {
	const baseUrl = "https://api.rawg.io/api/games?genres=sports";

	fetch(baseUrl)
		.then(function(response) {
			return response.json();
		})
		.then(function(json) {
			const results = json.results;
			for (let i = 0; i < json.results.length; i++) {
				console.log(results[i].name);
			}
		})
		.catch(function(error) {
			document.location.href = "error.html ";
		});
}
loadData();

//
// Question 3
//
let h3Text = "These cats are outrageous";
const tagH3 = document.querySelector("h3");
const changeH3 = h3Text.replace("cats", "giraffes");
tagH3.innerText = changeH3;

//
// Question 4
//Have commented out this question because i did not manage to
//solve it. but this is the code i came up with. whats wrong?
/*
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let userId;

if (params.has("userId")) {
	userId = params.get("userId");
}

if (userId < 10) {
	document.location.href("first.html");
} else if (userId >= 10) {
	document.location.href = "second.html";
} else {
	Document.location.href = "third.html";
}
*/

//
// Question 5
//
const divContainer = document.querySelector(".container");
const button = document.querySelector(".btn");

divContainer.removeChild(button);
console.log(divContainer);
//
// Question 6
//
const container = document.querySelector(".animals");
const list = document.querySelector(".elephants");
const liElement = document.createElement("li");
liElement.className = "parrots";

const liContent = document.createTextNode("Parrots");

liElement.appendChild(liContent);
container.appendChild(liElement);
console.log(liElement);

list.before(liElement);

//
// Question 7
function lastQuestion() {
	const callToUrl = "https://api.rawg.io/api/games/3801";

	fetch(callToUrl)
		.then(function(question7) {
			return question7.json();
		})
		.then(function(json) {
			const divTag = document.querySelector(".rating");
			const divTagContent = document.createTextNode(json.rating);
			divTag.appendChild(divTagContent);
			console.log(divTag);
		});
}
lastQuestion();
