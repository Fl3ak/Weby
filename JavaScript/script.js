 let likes = 0;

 function likeBlogPost2() {
 	likes++;
 	document.getElementById(
 		"likes_counter"
 	).innerHTML = `Count of likes: ${likes}`;
 }

const greetings = (name) => {
	alert(`Hello, Jan`);
};

let test = "first";
console.log(test);
test = "second";
console.log(test);

const sample = 123;

let text = "";
text = "";
const test1 = 123e5; // 12300
const test2 = 72e-2; // 0.72

const person = {
	name: "Ferko",
	surname: "Mrkvicka",
	age: 36,
	active: true,
	children: [
		{
			name: "Matej",
			surname: "Mrkvicka",
			age: 19,
			active: true,
			children: [
				{
					name: "Klara",
					surname: "Mrkvickova",
					age: 2,
					active: false
				}
			]
		},
		{
			name: "Adam",
			surname: "Mrkvicka",
			age: 4,
			active: false,
			children: []
		}
	]
};

console.log(`Klara's age: `, person.children[0].children[0].age);

console.log(`Adam's first child is:`, person["children"][1].children[0]);

const result = [];

const addToResult = (data) => {
	addToResult.push(data);

	result.filter((item) => item.name === 'Adam');
	console.debug('Adam in my collection', adam);

	const birthDates = result.map((item) => item.birthDate);
	console.debug('birthDates:', birthDates);

	const hasLikeCoding = result.some((item) => item.likeCoding);
	console.debug('addToResult hasLikeCoding:', hasLikeCoding)

	document.getElementById('output').textContent = JSON.stringify(result, null, 2);
}

function handleFormSubmit(event) {
	event.preventDefault();

	const form = event.target;
	const formData = new FormData(form);

	const outputData = {
		name: formData.get('name'),
		surname: formData.get('surname'),
		likeCoding: formData.get('likeCoding') ? true : false,
		aboutMe: formData.get('aboutMe'),
		languages: formData.get('languages'),
		favouriteColor: formData.get('favouriteColor'),
		gender: formData.get('gender'),
		birthDate: formData.get('birthDate'),
		avatar: formData.get('avatar').name,
		};
		
		addToResult(outputData);
}
