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

const ViewElement = props => {
  console.log("ViewElement data : ", props);

  return (
    <React.Fragment>
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
                <CardTitle top width="100%">
                  {props.success && <h1>{props.data.first_name}</h1>}
                </CardTitle>
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
              <Button onClick={props.skip}>Skip</Button>
              <Button>Super</Button>
              <Button>Call</Button>
            </CardBody>
          </Card>
        </Card>
      </div>
      {/* {props.data &&
                 <div>
                    <h1>First-name: <em>{props.data.first_name}</em> <br/>Last-name:  <em>{props.data.last_name} </em></h1>
                    <h2>Title {props.data.is_employer ? " Employer" : "Seeker"} </h2>
                    <h3>email {props.data.email}</h3>
                    <h4>Id {props.data.id}</h4>
                </div>
            }
            <button onClick={props.onClick[1]}>Get seeker</button>
            <button onClick={props.onClick[0]}>Get Employer</button> */}
    </React.Fragment>
  );
};

export default ViewElement;
