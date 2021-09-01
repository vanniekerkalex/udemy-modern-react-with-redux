import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
	{
		label: "Afrikaans",
		value: "af",
	},
	{
		label: "Arabic",
		value: "ar",
	},
	{
		label: "Hindi",
		value: "hi",
	},
];

const Translate = () => {
	const [language, setLanguage] = useState(options[0]);
	const [text, setText] = useState("");

	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label htmlFor="textInput">Input Text</label>
					<input id="textInput" type="text" onChange={(e) => setText(e.target.value)} />
				</div>
			</div>
			
			<Dropdown
				label="Select Language"
				selected={language}
				onSelectedChange={setLanguage}
				options={options}
			/>
			<hr />
			<h3 className="ui header">Output</h3>
			<Convert language={language} text={text} />
		</div>
	);
};

export default Translate;
