import "./App.css";
import { useState, useEffect } from "react";
// const add = (a, b) => {
// 	return a + b
// }

// add(10 , 20)

function App() {
	const [posts, setPosts] = useState([]);
	const [counter, setCounter] = useState(0);
	const [counter2, setCounter2] = useState(10);
	// const [loading, setLoad]
	// posts = data
	// let count = 0;

	useEffect(() => {
		// js
		// promise in javascript
		console.log("I am inside useEffect");
		const getAllPosts = async () => {
			const res = await fetch(
				`https://jsonplaceholder.typicode.com/posts`,
			);
			console.log(res, "res");
			const data = await res.json();
			console.log(data, "data");
			setPosts(data);
		};

		// js single threaded
		getAllPosts();
	}, []);

	console.log("I am outside useEffect");

	// setTimeout()
	// document.getElementById()

	// fetch()

	// Error()

	return (
		<div className="app">
			<h2>All Posts</h2>
			<div className="counter-app">
				<p>The value of the counter is {counter}</p>
				<button onClick={() => setCounter(counter + 1)}>
					Increase By 1
				</button>
			</div>
			<hr />
			<div className="counter-app">
				<p>The value of the counter is {counter2}</p>
				<button onClick={() => setCounter2(counter2 + 10)}>
					Increase By 10
				</button>
			</div>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</div>
	);
}
// component has 2 layer

// 1) presentation layer -> html, css/ design layer -> web designer
// 2) data layer -> i) props ii) state -> dynamic data -> web app developer

// BioData()
// component ->
// 1) A component must be a function
// 2) That function should return "something"
// 3) That "something" should be some html-ish code (jsx)

export default App;

// jsx- > html-ish code -> javascript xml

// asynchronous js -> promised base
// state mechanism
// rendering re-rendering

// fetch('')
// 	.then()
// 	.then()
// 	.catch(err => {

// 	})

// class Person {

// }

// const Person =
