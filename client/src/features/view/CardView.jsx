import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardColumns
} from "reactstrap";
import container from "../testing/container";

const CardView = props => {
  return (
    <div>
      <Card>
        <CardColumns>
          <Card>
            <CardImg
              top
              width="50%"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
              alt="Card image cap"
            />
          </Card>
          <Card>
            <CardBody>
              <CardTitle>Shobana</CardTitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
        </CardColumns>
        <Card>
          <CardBody>
            <CardTitle>Software Engineer</CardTitle>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </Card>
    </div>
  );
};

export default CardView;
