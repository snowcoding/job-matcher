import React from "react";
import Billing from "../features/billing/component";
import { Row, Col } from "reactstrap";

class BillingView extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col>
              <Billing />
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default BillingView;
