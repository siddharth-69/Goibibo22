import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import classes from './FlightDetails.module.css'

function FlightDetails(props) {
    return (
        <div>
            //<h1>{props.number}</h1>
            <div className={classes.IND}>
                <h1>INDIGO</h1>
                <h1>Price: {1000*props.number}</h1>
                <h1 onClick={()=>props.Evaluate(1000*props.number)}><Link to="/summary">SELECT</Link></h1>
            </div>
            <div className={classes.VIS}>
                <h1>VISTARA</h1>
                <h1>Price: {2000*props.number}</h1>
                <h1 onClick={()=>props.Evaluate(2000*props.number)}><Link to="/summary">SELECT</Link></h1>
            </div>
            <div className={classes.SPJ}>
                <h1>SPICEJET</h1>
                <h1>Price: {3000*props.number}</h1>
                <h1 onClick={()=>props.Evaluate(3000*props.number)}><Link to="/summary">SELECT</Link></h1>
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        number:state.number_of_people
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        Evaluate:(x)=>dispatch({type:"Price",val:x})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(FlightDetails)
