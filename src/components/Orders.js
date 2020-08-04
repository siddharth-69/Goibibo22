import React from 'react'
import {Link} from 'react-router-dom'
import classes from './Orders.module.css'
import {connect} from 'react-redux'

function Orders(props) {
    let FinalList=props.AllOrders.map((x,i)=>{
        return (
            <div className={classes.Orders}>
                <h2>Booking Number.{i+1}</h2>
                <h3>
                    Names Of passengers-:{props.Names[i].map((xx,ix)=>{
                        return (
                            <span>{xx} {" "}</span>
                        )
                    })}
                </h3>
                <h3>
                    From-:{props.AllOrders[i][0]}
                </h3>
                <h3>
                    To-:{props.AllOrders[i][1]}
                </h3>
                <h3>
                    Total Cost-:{props.AllOrders[i][2]}
                </h3>
            </div>
        )
    })

    return (
        <div className="App">
            <Link to="/">
                <h1>Homepage</h1>
            </Link>
            {FinalList}
            <br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br />
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        startDate: state.startDate,
        number_of_people: state.number_of_people,
        endDate:state.endDate,
        From:state.From,
        Destination:state.Destination,
        AllOrders:state.AllOrders,
        Names:state.Names
    }
}

export default connect(mapStateToProps)(Orders)
