import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TimPost from "./tim-post";
import TimSidebar from "./tim-siderbar";

const TimDetails = () => {
  return (
    <section className="service_details_area section_padding">
      <Container>
        <Row>
          <TimPost />
        </Row>
      </Container>
    </section>
  );
};

export default TimDetails;
