import React from "react";
import { Row } from "react-bootstrap";
import ArtistCard from "./ArtistCard";

class HomeBody extends React.Component {
  render() {
    return (
      <Row>
        <ArtistCard pop={132} />
      </Row>
    );
  }
}

export default HomeBody;
