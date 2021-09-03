import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
	const [open, setOpen] = useState(false);
	const ref = useRef();

	useEffect(() => {
		const onBodyClick = (event) => {
			if (ref.current.contains(event.target)) {
				return;
			}
			setOpen(false);
		};

		document.body.addEventListener("click", onBodyClick, { capture: true });
 
		return () => {
			document.body.removeEventListener("click", onBodyClick, {
				capture: true,
			});
		};
	}, []);


	const renderedOptions = options.map((option) => {
		// Don't display in dropdown when option is selected
		if (option.value === selected.value) {
			return null;
		}

		return (
			<div
				key={option.value}
				className="item"
				onClick={() => onSelectedChange(option)}
			>
				{option.label}
			</div>
		);
	});

	return (
		<div className="ui form" ref={ref}>
			<div className="field">
				<label htmlFor="" className="label">
					{label}
				</label>
				<div
					onClick={() => setOpen(!open)}
					className={`ui selection dropdown ${open ? "visible active" : ""}`}
				>
					<i className="dropdown icon"></i>
					<div className="text">{selected.label}</div>
					<div className={`menu ${open ? "visible transition" : ""}`}>
						{renderedOptions}
					</div>
				</div>
				<h1 style={{ color: selected.value }}>This text is {selected.value}!</h1>
			</div>
		</div>
	);
};

export default Dropdown;
