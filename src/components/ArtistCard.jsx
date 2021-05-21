import React, { useEffect } from "react";
import { Col, Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchGenreAction } from "../actions";
const mapStateToProps = (props) => ({ ...props });

const mapDispatchToProps = (dispatch) => ({
  getSongs: (genre) => dispatch(fetchGenreAction(genre)),
});

const ArtistCard = (props) => {
  useEffect(() => {
    console.log(props.songs);
    const gen = props.pop;
    props.getSongs(gen);
  }, []);
  return props.songs.genre.map((artist, index) => (
    <Col
      xs={12}
      sm={6}
      lg={4}
      xl={2}
      key={index}
      onClick={() => props.history.push("/artist/" + artist.id)}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ArtistCard));
