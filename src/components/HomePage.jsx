import React from "react";
import HomeNav from "./HomeNav";
import HomeBody from "./HomeBody";
import { Container } from "react-bootstrap";
import {connect} from "react-redux"

const HomePage =(props)=> {
  fetchGenre = (selectedGenre) => {
    console.log("GENRE IN HomePage", props.songs.genre);
  };
  render() {
    return (
      <Container
        fluid
        id="mainBody"
        className="color-change-5x"
        style={{ paddingBottom: "100px" }}
      >
        <HomeNav />
        <HomeBody />
      </Container>
    );
  }
}

export default connect()(HomePage);
