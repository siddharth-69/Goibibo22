import React from 'react'
import {Link} from 'react-router-dom'
import classes from './Summary.module.css'
import {connect} from 'react-redux'

function Summary(props) {
    return (
        <div className="App">
            <h1><Link to="/"><strong>Homepage</strong></Link></h1>
            <h1>Number of adults: {props.number}</h1>
            <h1>From: {props.From}</h1>
            <h1>To: {props.To}</h1>
            <h1>Ticket Price: {props.Price}</h1>
            <h1>Total Price: {props.Price+0.2*props.Price}</h1>
            <Link to="/forms">
                 <button onClick={props.storeData} className={classes.OrderButton}>Confirm</button>
            </Link>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br />
            <button></button>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        Price:state.TotalPrice,
        number:state.number_of_people,
        From:state.From,
        To:state.Destination
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        storeData:()=>dispatch({type:"store"})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Summary)
