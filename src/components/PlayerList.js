import React from "react";
import players from "../players";
import Player from "./Player";
import { Container, Col, Row } from "react-bootstrap";

const PlayerList = () => {
	return (
		<div>
			<Container>
				<Row>
					{/* mapping through the array of players */}
					{players.map((player) => (
						<Col key={player.id}>
							<Player {...player} />
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default PlayerList;
