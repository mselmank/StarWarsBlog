import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Dropdown, Button, Toggle } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<Container>
			<Row>
				<Col>
					<nav className="navbar navbar-light bg-light mb-3">
						<Link to="/">
							<span className="navbar-brand m-2 h1">
								<img src="https://i.ibb.co/9bhv2Zk/dlf-pt-star-wars-logo-png-54801.png" width="150" />
							</span>
						</Link>

						<div className="ml-auto">
							<Dropdown>
								<Dropdown.Toggle variant="warning" id="dropdown-basic">
									Favorites <div className=""></div>
								</Dropdown.Toggle>
								<Dropdown.Menu>
									{store.favorites ? (
										store.favorites.map((elem, i) => (
											<Dropdown.Item key={i} id={++i} title={elem.item}>
												{elem.item}
												<div id={i} onClick={() => actions.removeItem(i)}>
													&#128465;
												</div>
											</Dropdown.Item>
										))
									) : (
										<span>(empty)</span>
									)}
								</Dropdown.Menu>
							</Dropdown>
						</div>
					</nav>
				</Col>
			</Row>
		</Container>
	);
};
