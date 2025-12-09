import "./App.css";
import BioData from "./components/BioData";

const bioDataInfo = [
	{
		name: "Mahir Asief",
		email: "asiefmahir1@gmail.com",
		phone: "+88224254",
		skills: ["Js", "react", "redux"],
		interests: ["Chess", "football"],
	},
	{
		name: "SR",
		email: "srsetu@gmail.com",
		phone: "+34535435435",
		skills: ["Js", "react", "redux", "WP"],
		interests: ["Chess", "football", "SPACE"],
	},
	{
		name: "Albena",
		email: "albena@gmail.com",
		phone: "+454454",
		skills: ["Js", "react", "redux", "WP", "CSS"],
		interests: ["Chess"],
	},
	{
		name: "Mahmudul",
		email: "mahmudul@gmail.com",
		phone: "+454454",
		skills: ["Js", "react", "redux", "WP", "CSS"],
		interests: ["Chess"],
	},
];

function App() {
	console.log("I am being invoked");

	const eListener = () => {
		alert("Event is being triggered");
	};

	return (
		<div className="app">
			<h2>Bio Data Simple Practice</h2>
			{bioDataInfo.map((bio) => (
				<>
					<BioData
						name={bio.name}
						phone={bio.phone}
						email={bio.email}
						skills={bio.skills}
						interests={bio.interests}
					/>
					<hr />
					<hr />
				</>
			))}
			<button onClick={(e) => alert(e.target)}>Click me</button>
		</div>
	);
}
// BioData()
// component ->
// 1) A component must be a function
// 2) That function should return "something"
// 3) That "something" should be some html-ish code (jsx)

export default App;

// jsx- > html-ish code -> javascript xml
