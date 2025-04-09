import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import defaultImg from "../assets/deafaultImg.jpeg";



function Player({ name, team, nationality, jerseyNumber, age, imageURL }) {
	return (
		<>
			<div>
				<Container>
					{/* Cards */}
					<Row>
						<Col>
							<Card style={{ width: "15rem", marginBottom: "10px" }}>
								<Card.Img
									variant="top"
									src={imageURL || defaultImg}
									alt={name}
								/>

								<Card.Body>
									<Card.Title>Player</Card.Title>
									<Card.Text>
										<span className="fw-bold">Name:</span> {name}
									</Card.Text>
									<Card.Text>
										<span className="fw-bold">Club: </span>
										{team}
									</Card.Text>
									<Card.Text>
										<span className="fw-bold">Nationality: </span> {nationality}
									</Card.Text>
									<Card.Text>
										<span className="fw-bold">Jersey Number: </span>
										{jerseyNumber}
									</Card.Text>
									<Card.Text>
										<span className="fw-bold">Age: </span>
										{age}
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}

Player.propTypes = {
	name: PropTypes.string,
	team: PropTypes.string,
	nationality: PropTypes.string,
	jerseyNumber: PropTypes.number,
	age: PropTypes.number,
	imageUrl: PropTypes.string,
};

Player.defaultProps = {
	name: "Unknown Player",
	team: "Unknown Team",
	nationality: "Unknown",
	jerseyNumber: 0,
	age: 0,
	imageUrl: defaultImg, // placeholder image if none is provided
};

export default Player;
