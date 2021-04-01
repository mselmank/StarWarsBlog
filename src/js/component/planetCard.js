import { Col, Card, Button } from "react-bootstrap";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const PlanetCard = props => {
	const { store, actions } = useContext(Context);
	const planetStore = store.planets.filter(planet => planet.name == props.planet.name);
	useEffect(() => {
		actions.getPlanetsAPi(props.planet.url);
	}, []);

	{
		store.planets.map((item, index) => {
			return (
				<Col key={index}>
					<Card style={{ width: "18rem" }}>
						<Card.Img
							variant="top"
							src="https://wallpapercave.com/wp/X0DFbDH.jpg"
							style={{ with: "200" }}
						/>
						<Card.Body>
							<Card.Title>{props.planets.name}</Card.Title>
							<Card.Text>
								<p>Climate:{item.climate} </p>
								<p>Population:{item.population} </p>
								<p>Terrain:{item.terrain} </p>
							</Card.Text>

							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
			);
		});
	}
};

PlanetCard.propTypes = {
	planet: PropTypes.object,
	id: PropTypes.number
};
