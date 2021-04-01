import { Col, Card, Button } from "react-bootstrap";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const CarCard = props => {
	const { store, actions } = useContext(Context);
	const carsStore = store.cars.filter(car => car.name == props.car.name);

	useEffect(() => {
		actions.getCarsAPi(props.car.url);
	}, []);

	return (
		<Col>
			<Card style={{ width: "18rem" }}>
				<Card.Img
					variant="top"
					src="https://img.redbull.com/images/q_auto,f_auto/redbullcom/2015/12/27/1331767413572_2/star-wars-spaceships-x-wing.jpg"
					with="200"
				/>
				<Card.Body>
					<Card.Title>{props.car.name}</Card.Title>
					{carsStore[0] ? (
						<Card.Text>
							<p>Model:{carsStore[0].model} </p>
							<p>Class :{carsStore[0].starship_class} </p>
							<p>Capacity:{carsStore[0].passengers} </p>
						</Card.Text>
					) : (
						""
					)}
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
		</Col>
	);
};

CarCard.propTypes = {
	car: PropTypes.object,
	id: PropTypes.number
};
