import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { link, useParams } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getCharacterAPi();
		actions.getPlanetsAPI();
		actions.getCars();
	}, []);

	return (
		<div className="container">
			<h1>characters</h1>
			<div className="scrolling-wrapper" />
			{store.characters.map((item, index) => {
				return (
					<div key={index} className="card" style={{ width: "18rem" }}>
						<img
							className="card-img-top"
							src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png"
							alt="Card image cap"
							style={{ width: "18rem" }}
						/>
						<div className="card-body">
							<h6 className="card-title">{item.name}</h6>
							<p className="card-text">
								Gender: {item.gender} <br />
								Hair Color: {item.hair_color} <br />
								Eye-Color: {item.eye_color}
							</p>
							<Link to={`/characters/${index}`}>
								<a className="btn btn-outline-primary">Learn more!</a>
							</Link>
							<a className="btn btn-outline-warning" onClick={() => actions.addItem(item.name)}>
								<i className="far fa-heart" />
							</a>
						</div>
					</div>
				);
			})}
		</div>
	);
};
