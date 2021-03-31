import React from "react";

export function Home() {
	return (
		<div className="container ">
			<h1 className="text-lg-center">To Do List</h1>
			<div className="input-group mb-3">
				<div className="input-group-prepend"></div>
				<input
					type="text"
					className="form-control"
					placeholder=""
					aria-label=""
					aria-describedby="basic-addon1"
				/>
			</div>
		</div>
	);
}
