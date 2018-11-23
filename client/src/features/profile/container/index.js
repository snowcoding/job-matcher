import React, {Component} from 'react';
import BrowseElement from '../component/'
import  {connect} from 'react-redux';
import {getRandomUser} from '../store/action'
class BrowseContainer extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        this.props.getRandomUser("employer")
    }

    render(){
       return this.props.data ?<BrowseElement data={this.props.data} /> : <div>Waiting</div>;
    }
}
const MapStateToProps = state => ({
    data: state.data
})
export  default  connect(null, {getRandomUser})(BrowseContainer);