import React from "react";
import { Col, Card, Alert, Spinner } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import fetchGenreAction from "../actions";

const ArtistCard = (props) => {
  props.fetchGenreAction(genre);
  return props.artists.map((artist, index) => (
    <Col
      xs={12}
      sm={6}
      lg={4}
      xl={2}
      key={index}
      onClick={() => this.props.history.push("/artist/" + artist.id)}
    >
      <Card>
        <Card.Img variant="top" src={artist.picture_xl} alt="artistImage" />
        <Card.Body>
          <Card.Text className="text-center">{artist.name}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ));
};

export default withRouter(ArtistCard);
