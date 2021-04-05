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
					placeholder="Enter a new task"
					aria-label=""
					aria-describedby="basic-addon1"
				/>
			</div>
			<ul className="list-group">
				{list.map((_item, index) => {
					return (
						<li className="list-group-item " key={index}>
							<button
								onClick={() => {
									setList(
										list.filter(
											(itemf, indexf) => indexf !== index
										)
									);
								}}
								type="button"
								className="btn btn-outline-light float-right">
								<i className="fas fa-times"></i>
							</button>
							{_item}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
