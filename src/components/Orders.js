import React from 'react'
import {connect} from 'react-redux'

function Orders(props) {
    return (
        <div className="App">
            <h1>
                {props.Final}
            </h1>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        Final:state.AllOrders
    }
}

export default connect(mapStateToProps)(Orders)
