import React, { useState } from "react";

export function Home() {
	const [task, setTask] = useState("");
	const [list, setList] = useState([]);

	return (
		<div className="container text-muted">
			<h1 className="text-lg-center">To Do List</h1>
			<div className="input-group mb-3">
				<div className="input-group-prepend"></div>
				<input
					onChange={e => setTask(e.target.value)}
					value={task}
					onKeyPress={e => {
						if (e.key == "Enter") {
							setList(list.concat(task));
							setTask("");
							console.log({ list });
						}
					}}
					type="text"
					className="form-control"
					placeholder=""
					aria-label=""
					aria-describedby="basic-addon1"
				/>
			</div>
			<ul style={{ listStyleType: "none" }}>
				<li></li>
			</ul>
		</div>
	);
}
