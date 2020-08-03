import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

function Summary(props) {
    return (
        <div className="App">
            <h1>Number of adults: 3</h1>
            <h1>From: Kokata</h1>
            <h1>To: Delhi</h1>
            <h1>Ticket Price: {props.Price}</h1>
            <h1>Total Price: {props.Price+0.2*props.Price}</h1>
            <Link to="finals">
                 <button onClick={props.storeData}>Confirm</button>
            </Link>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        Price:state.TotalPrice
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        storeData:()=>dispatch({type:"store"})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Summary)
