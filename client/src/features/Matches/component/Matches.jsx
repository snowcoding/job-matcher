// import React from 'react';
// import { Card, CardImg, CardText, CardBody, CardLink,
//   CardTitle, CardSubtitle } from 'reactstrap';

// const Example = (props) => {
//   return (
//     <div>
//       <Card>
//         <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
//         <CardTitle> Awesome LLC </CardTitle>
//         <CardBody>
//           <CardSubtitle>Card subtitle</CardSubtitle>
//           <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
//           <CardLink href="#">Card Link</CardLink>
//           <CardLink href="#">Another Link</CardLink>
//         </CardBody>
//       </Card>
//     </div>
//   );
// };

// export default Example;

import React from 'react';
import { Card, Button, CardTitle, CardSubtitle, CardLink, CardText, Row, Col, CardImg } from 'reactstrap';
//import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';
const Example = (props) => {
  return (
    <Row>
      <Col sm="6">
        <Card body>
          <CardImg top width="100%" src="../../../assets/logo.png" alt="Card image cap" />
          <CardTitle> Awesome LLC </CardTitle>
          <CardSubtitle>Front end Web Developer</CardSubtitle>
          {/* <CardText>With supporting text below as a natural lead-in to additional content.</CardText> */}
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
           <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
           <CardTitle> Awesome LLC </CardTitle>
          <CardSubtitle>Full Stack Web Developer</CardSubtitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    </Row>
  );
};

export default Example;