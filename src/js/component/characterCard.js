import { Col, Card, Button, Container } from "react-bootstrap";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const CharacterCard = props => {
    const { store, actions } = useContext(Context);
    const characterStore = store.characters.filter(char => char.name == props.character.name);

    useEffect(() => {
        actions.getCharacterAPi(props.character.url);
    }, [])
                  
			return (
               
                store.characters.map((item, index) => {
				<Col key={index}>
                    <Card style={{ width: "18rem" }}>
                        <Card.Img
                            variant="top"
                            src="https://wallpapercave.com/wp/X0DFbDH.jpg"
                            style={{ with: "200" }}
                        />
                        <Card.Body>
                            <Card.Title>{props.character.name}</Card.Title>
                            <Card.Text>
                                <p>Gender:{item.gender} </p>
                                <p>Hair Color:{item.hair_color} </p>
                                <p>Eye Color:{item.eye_color} </p>
                            </Card.Text>

                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            
                }
                )           
            );
                                        // fin return
                
            


CharacterCard.propTypes = {
    character: PropTypes.object,
    id: PropTypes.number
};
