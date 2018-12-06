import React from "react";
import ProfileContainer from "../features/forms/containers";
import { Row, Col } from "reactstrap";

class Profile extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col>
              <ProfileContainer />
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Profile;
