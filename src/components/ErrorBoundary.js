import React, { Component } from 'react'
import ErrorPage from './ErrorPage'
import {Route} from 'react-router-dom'


export class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             show:false
        }
    }
    static getDerivedStateFromError(error){
        return {
            show:true
        }
    }
    
    render() {
        if(this.state.show)
        {
            return(
                <ErrorPage />
            )
        }
        return(
            this.props.children
        )
    }
}

export default ErrorBoundary
