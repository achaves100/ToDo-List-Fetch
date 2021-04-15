import React, { useState, useEffect } from "react";

export function Home() {
	const [task, setTask] = useState("");
	const [list, setList] = useState([]);
	var url = "https://assets.breatheco.de/apis/fake/todos/user/achaves100";

	const loadTodo = () => {
		fetch(url, {
			method: "GET",
			headers: { "Content-Type": "application/json" }
		})
			.then(res => res.json())
			.then(data => {
				setList(data);
				//console.log({ data });
			}) //cargando la info
			.catch(error => console.error("Error:", error.message));
	};

	const updateTodo = lista => {
		fetch(url, {
			method: "PUT",
			body: JSON.stringify(lista),
			headers: { "Content-Type": "application/json" }
		})
			.then(res => res.json())
			.then(data => {
				loadTodo();
				alert(data.result);
			}) //cargando la info
			.catch(error => console.error("Error:", error.message));
	};

	useEffect(() => {
		loadTodo();
	}, []);

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
							let obj = {
								label: task,
								done: false
							};
							setList(list.concat(obj));
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
							{_item.label}
						</li>
					);
				})}
			</ul>
			<div className="row d-flex justify-content-center">
				<button
					type="button"
					className="btn btn-outline-success"
					onClick={() => {
						updateTodo(list);
					}}>
					Update
				</button>
				<button
					type="button"
					className="btn btn-outline-danger"
					onClick={() => {
						// deleteTodo();
					}}>
					Delete
				</button>
			</div>
		</div>
	);
}
