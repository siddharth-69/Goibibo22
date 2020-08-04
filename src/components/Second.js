import {Link} from 'react-router-dom'
import FlightDetails from './FlightDetails'
import {connect} from 'react-redux'
import cities from './cities'
import React, { Component } from 'react'

export class Second extends Component {
    constructor(props) {
        super(props)
        if(this.props.startDate.getTime()>this.props.endDate.getTime()){
            throw new Error("Invalid Information")
        }
        if(!cities.some(x=>this.props.From===x)){
            throw new Error("Invalid Information")
        }
        if(!cities.some(x=>this.props.Destination===x)){
            throw new Error("Invalid Information")
        }
        if(this.props.number_of_people<=0||isNaN(this.props.number_of_people)){
            throw new Error("Invalid Information")
        }
    }
    
    render() {
        return (
            <div className="App">
                <Link to="/">
                    <h1><strong>Homepage</strong></h1>
                </Link>
                <FlightDetails />
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        startDate: state.startDate,
        number_of_people: state.number_of_people,
        endDate:state.endDate,
        From:state.From,
        Destination:state.Destination
    }
}

export default connect(mapStateToProps)(Second)

