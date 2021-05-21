import React from "react";
import HomeNav from "./HomeNav";
import HomeBody from "./HomeBody";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";

const HomePage = (props) => {
  return (
    <Container
      fluid
      id="mainBody"
      className="color-change-5x"
      style={{ paddingBottom: "100px" }}
    >
      <HomeNav />
      <HomeBody pop={132} />
    </Container>
  );
};

export default connect()(HomePage);
