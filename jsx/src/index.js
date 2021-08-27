// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import Faker from "faker";

// Create a react component
const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>Are you sure you want to?</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Alex"
					timeAgo="Today at 4:45PM"
					avatar={Faker.image.avatar()}
					content="This is a nice post!"
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Frank"
					timeAgo="Today at 7:15PM"
					avatar={Faker.image.avatar()}
					content="This is a nice post!"
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Xavier"
					timeAgo="Yesterday at 2:45PM"
					avatar={Faker.image.avatar()}
					content="This is a nice post!"
				/>
			</ApprovalCard>
		</div>
	);
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));

if (module.hot) {
	module.hot.accept();
}
