import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Row, Jumbotron, ListGroup } from "react-bootstrap";
import "./ArtistPage.css";
import SongCard from "./SongCard";

const ArtistPage = (props) => {
  useEffect(() => {
    props.fetchArtist();
    props.fetchTracklist();
  }, []);
  const fetchArtist = async () => {
    try {
      let response = await fetch(
        "https://deezerdevs-deezer.p.rapidapi.com/artist/" +
          props.match.params.id,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "b5adde9161msh8a1dcb5f94ec12fp19467bjsn5987880f6b6c",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          },
        }
      );
      let parsedResponse = await response.json();
      props.setState({ artist: parsedResponse });
      console.log(props.state.artist);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchTracklist = async () => {
    try {
      let response2 = await fetch(
        `https://deezerdevs-deezer.p.rapidapi.com/artist/${props.match.params.id}/top?limit=50`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "b5adde9161msh8a1dcb5f94ec12fp19467bjsn5987880f6b6c",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          },
        }
      );
      let parsedResponse2 = await response2.json();
      props.setState({ tracklist: parsedResponse2.data });
      console.log(props.state.tracklist);
    } catch (error) {
      console.log(error);
    }
  };
  return;

  return (
    <>
      <section id="album-banner">
        <Jumbotron className="py-0 align-items-center text-center">
          <div className="buttonbox">
            <p className="text-center p-0 m-0 listeners">
              {props.state.artist.nb_fan} FANS
            </p>
            <h1 id="groupName">{props.state.artist.name}</h1>
            <button id="playbtn" className="btn-play d-none d-md-inline-block">
              PLAY
            </button>
            <button
              id="followbtn"
              className="btn-follow d-none d-md-inline-block"
            >
              FOLLOW
            </button>
            <FontAwesomeIcon icon={["fas", "ellipsis-h"]} />
          </div>
          <img
            className="img-fluid"
            style={{ width: "100%", height: "50vh", objectFit: "cover" }}
            src={props.state.artist.picture_xl}
            alt="album cover"
          />
          <div className="wrapper-img"></div>
          <Row className="d-flex justify-content-center contentnav">
            <ListGroup horizontal>
              <ListGroup.Item>Overview</ListGroup.Item>
            </ListGroup>
          </Row>
        </Jumbotron>
      </section>
      <Container fluid className="containerfix">
        <Row>
          <Container fluid>
            <h1
              style={{
                color: "white",
                fontSize: "40px",
                marginBottom: "50px",
              }}
            >
              Popular Releases
            </h1>
            <Row className="popular">
              {props.state.tracklist.map((song) => (
                <SongCard song={song} />
              ))}
            </Row>
          </Container>
        </Row>
      </Container>
    </>
  );
};

export default connect()(ArtistPage);
