// import images from assets folder
import harryImg from "./assets/harry.jpeg";
import victorImg from "./assets/victor.jpeg";
import vjImg from "./assets/vj.jpeg";
import judeImg from "./assets/Jude.jpeg";

const players = [
	{
		id: 1,
		name: "Harry kane",
		team: "FC Bayern Munich",
		nationality: "England",
		jerseyNumber: 9,
		age: "31",
		imageURL: harryImg,
	},

	{
		id: 2,
		name: "Victor Osimhen",
		team: "Galatasaray",
		nationality: "Nigeria",
		jerseyNumber: 45,
		age: "26",
		imageURL: victorImg,
	},
	{
		id: 3,
		name: "Vinicius Junior",
		team: "Real Madrid",
		nationality: "Brazil",
		jerseyNumber: 7,
		age: "24",
		imageURL: vjImg,
	},

	{
		id: 4,
		name: "Jude Bellingham",
		team: "Real Madrid",
		nationality: "England",
		jerseyNumber: 10,
		age: "21",
		imageURL: judeImg,
	},
];

export default players;
