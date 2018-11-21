import React  from "react";
import Forms from "./index";
import {
		Tab, Col,NavItem
	} from 'react-bootstrap';
import  {StyledNav, StyledRow} from './indexCss';

const Profile  = props => {

	let stateToArry = Object.entries(props.state);

	 let steps =  stateToArry.filter(item =>
		props.is_seeker ?
		item[0] !== "company" : item[0] !== "skill" && item[0] !== 'education'  && item[0] !== 'expreince'
	).map((item, index)=>{
			return([
				<NavItem eventKey={index} key={index+10}>{item[0]}</NavItem>,
				<Tab.Pane eventKey={index} key={index+10}>
										<Forms
											name={item[0]}
											state={item[1]}
											is_seeker={props.is_seeker}
											onChange={props.onChange}
										/>
				</Tab.Pane>
			])
	});
	 let tabs = steps.map((step, index) => step[0]);
	 let content = steps.map((step, index) => step[1]);

		return(
			<Tab.Container id="left-tabs-example" defaultActiveKey={0}>
			  <StyledRow className="clearfix">
				<Col sm={4}>
				  <StyledNav bsStyle="pills" stacked={true}>
					  {tabs}
				  </StyledNav>
				</Col>
				<Col sm={8}>
				  <Tab.Content animation={false}>
					  {content}
				  </Tab.Content>
				</Col>
			  </StyledRow>
			</Tab.Container>
		);
	}
export  default  Profile;


