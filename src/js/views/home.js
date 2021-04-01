import React, { useContext, useEffect } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { CharacterCard } from "../component/characterCard";
import { PlanetCard } from "../component/planetCard";
import { CarCard } from "../component/carCard";
import { Container, Col, Card, Row } from "react-bootstrap";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getCharacterAPi();
		actions.getPlanetsAPi();
		actions.getCarsAPi();
	}, []);

	return (
		<Container>
			<Row>
				<Col>
					<h2 className="heading" style={{ color: "orangered" }}>
						Characters
					</h2>
				</Col>
			</Row>
			<Row>
				{store.characters.length > 0
					? store.characters.map((element, index) => (
							<CharacterCard key={index} id={++index} character={element} />
					  ))
					: ""}
			</Row>
			<Row>
				<Col>
					<h2 className="heading" style={{ color: "orangered" }}>
						Planets
					</h2>
				</Col>
			</Row>
			<Row>
				{store.planets.length > 0
					? store.planets.map((element, index) => <PlanetCard key={index} id={++index} planet={element} />)
					: ""}
			</Row>
			<Row>
				<Col>
					<h2 className="heading" style={{ color: "orangered" }}>
						Vehicles
					</h2>
				</Col>
			</Row>
			<Row>
				{store.cars.length > 0
					? store.cars.map((element, index) => <CarCard key={index} id={++index} car={element} />)
					: ""}
			</Row>
		</Container>
	);
};
