import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
	{
		title: "What is react?",
		content: "React is frontend JS framework",
	},
	{
		title: "Why use React?",
		content: "React is a favourite JS library",
	},
	{
		title: "How to use React?",
		content: "Blalalala balalal blalala blakalala",
	},
];

const options = [
	{
		label: "The color red",
		value: "red",
	},
	{
		label: "The color blue",
		value: "blue",
	},
	{
		label: "The color green",
		value: "green",
	},
];

export default () => {
	const [selected, setSelected] = useState(options[0]);

	return (
		<div>
			<Header />
			<Route path="/">
				<Accordion items={items} />
			</Route>
			<Route path="/list">
				<Search />
			</Route>
			<Route path="/translate">
				<Translate />
			</Route>
			<Route path="/dropdown">
				<Dropdown
					options={options}
					onSelectedChange={setSelected}
					selected={selected}
					label="Select a Color"
				/>
			</Route>
		</div>
	);
};
