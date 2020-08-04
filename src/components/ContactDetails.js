import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import React, { Component } from 'react'

export class ContactDetails extends Component {
    constructor(props) {
        super(props)
        let arr1=[]

        for(let i=0;i<this.props.number;i++){
            arr1.push("")
        }
    
        this.state = {
             people: arr1
        }
    }

    onHandle=(e)=>{
        const arr2=[...this.state.people]
        this.props.onMerge(arr2)
        e.preventDefault()
        alert("Tickets Booked. Now Click on the Link to View all the bookings.")
    }

    onChanging=(e)=>{
        let arr2=[...this.state.people]
        arr2[e.target.id]=e.target.value
        this.setState({
            people: arr2
        })
    }
    
    render() {
        let {people}=this.state
        return (
            <div>
                <h1><Link to="/"><strong>Homepage</strong></Link></h1>
                <h1>Please Fill the name of each passengers:</h1>
                <form onSubmit={this.onHandle} onChange={this.onChanging}>
                    {
                        people.map((val,id)=>{
                            let Pid=`People-${id}`
                            return(
                                <div key={id}>
                                    <label>Name of passenger{id+1}-:</label>
                                    <input
                                    type="text"
                                    id={id}
                                    />
                                    <br /><br />
                                </div>
                            )
                        })
                    }
                    <input type="submit" value="SUBMIT" />
                </form>
                <Link to="/finals">
                    Click Here to check the Bookings
                </Link>
                <br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        number:state.number_of_people
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onMerge:(x)=>dispatch({type:"name",val:x})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ContactDetails)
