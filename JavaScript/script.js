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


