import React, { Component } from 'react'
import {connect} from 'react-redux'
import DatePicker from "react-datepicker";
import {Route,Link} from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";

export class Homepage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput:""
        };
    }

    handleChangeS=(date)=>{
        this.props.onSdateChange(date)
    }

    handleChangeE=(date)=>{
    this.props.onEdateChange(date)
    }

    handleChangeN=(e)=>{
        this.props.onNumberChange(e.currentTarget.value)
    }

    onChangeF = e => {
    const { options } = this.props;
    const userInput = e.currentTarget.value;

    const filteredSuggestions = options.filter(
        suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    
    this.props.onFromChange(userInput)
    this.setState({
        activeSuggestion: 0,
        filteredSuggestions,
        showSuggestions: true,
        userInput:userInput
    });
    };

    onChangeT = e => {
    const { options } = this.props;
    const userInput = e.currentTarget.value;

    const filteredSuggestions = options.filter(
        suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    
    this.props.onToChange(userInput)
    this.setState({
        activeSuggestion: 0,
        filteredSuggestions,
        showSuggestions: true,
        userInput:userInput
    });
    };

    onClick = e => {
    this.setState({
        activeSuggestion: 0,
        filteredSuggestions: [],
        showSuggestions: false,
        userInput: e.currentTarget.innerText
    });
    };

    onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;
    if (e.keyCode === 13) {
        this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
        });
    }
    else if (e.keyCode === 38) {
        if (activeSuggestion === 0) {
        return;
        }

        this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    else if (e.keyCode === 40) {
        if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
        }

        this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
    };


    render() {
    const {
        onClick,
        onKeyDown,
        state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
        }
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
        if (filteredSuggestions.length) {
        suggestionsListComponent = (
            <ul class="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
                let className;

                // Flag the active suggestion with a class
                if (index === activeSuggestion) {
                className = "suggestion-active";
                }

                return (
                <li
                    className={className}
                    key={suggestion}
                    onClick={onClick}
                >
                    {suggestion}
                </li>
                );
            })}
            </ul>
        );
        } else {
        suggestionsListComponent = (
            <div>
                <em>No suggestions, you're on your own!</em>
            </div>
        );
        }
    }

    return (
        <div>
            <h2>From</h2>
            <input
            type="text"
            onChange={this.onChangeF}
            onKeyDown={onKeyDown}
            value={this.props.From}
            />
            {suggestionsListComponent}
            <h2>To</h2>
            <input
            type="text" 
            onChange={this.onChangeT}
            onKeyDown={onKeyDown}
            value={this.props.Destination}
            />
            {suggestionsListComponent}
            <h2>Date of Departure</h2>
            <DatePicker
            selected={this.props.startDate}
            onChange={this.handleChangeS} />
            <h2>Date of Return</h2>
            <DatePicker
            selected={this.props.endDate}
            onChange={this.handleChangeE} />
            <h2>Number of People</h2>
            <input type="number" onChange={this.handleChangeN}/><br /><br />
            <Link to="/orders">
                <button>CONTINUE</button>
            </Link>            
        </div>
    );
    }
}

const mapStateToProps=(state)=>{
    console.log(state)
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
