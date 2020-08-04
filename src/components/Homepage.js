import React, { Component } from 'react'
import {connect} from 'react-redux'
import "../App.css"
import cities from './cities'
import classes from './Homepage.module.css'
import DatePicker from 'react-datepicker';
import {Route,Link} from 'react-router-dom'
import {TextField} from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import 'react-datepicker/dist/react-datepicker.css';

export class Homepage extends Component {
    handleChangeS=(date)=>{
        this.props.onSdateChange(date)
    }

    handleChangeE=(date)=>{
    this.props.onEdateChange(date)
    }

    handleChangeN=(e)=>{
        this.props.onNumberChange(e.currentTarget.value)
    }

    onChangeF = (e,val) => {
        this.props.onFromChange(val)
    }

    onChangeT = (e,val) => {
        this.props.onToChange(val)
    }

    render() {
        console.log(this.props.From)
        return (
            <div className={classes.Homepage} style={{opacity:0.8}}>
                <h4>From</h4>
                <Autocomplete
                options={cities}
                onChange={this.onChangeF}
                getOptionLabel={(option) => option}
                renderInput={(params) => <TextField {...params} label="Travelling From..." variant="outlined" 
                />}
                />
                <h4>To</h4>
                <Autocomplete
                options={cities}
                onChange={this.onChangeT}
                getOptionLabel={(option) => option}
                renderInput={(params) => <TextField {...params} label="Travelling To..." variant="outlined"
                />}
                />
                <h4>Date of Departure: {' '}<DatePicker
                selected={this.props.startDate}
                onChange={this.handleChangeS} /></h4>
                <h4>Date of Return:{' '}<DatePicker
                selected={this.props.endDate}
                onChange={this.handleChangeE} />
                </h4>
                <h4>Number of People: <input type="text" onChange={this.handleChangeN}/></h4>
                
                <Link to="/orders">
                    <button className={classes.OrderButton}>CONTINUE</button>
                </Link>
            </div>
        );
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

const mapDispatchToProps=(dispatch)=>{
    return{
        onSdateChange:(x)=>dispatch({type:"Sdate",val:x}),
        onEdateChange:(x)=>dispatch({type:"Edate",val:x}),
        onNumberChange:(x)=>dispatch({type:"Num",val:x}),
        onFromChange:(x)=>dispatch({type:"From",val:x}),
        onToChange:(x)=>dispatch({type:"To",val:x})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Homepage)
