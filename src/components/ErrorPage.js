import React from 'react'
import classes from './ErrorPage.module.css'
import {Link} from 'react-router-dom'

function ErrorPage() {
    return (
        <div className={classes.App}>
            <h1>Please Enter the details Correctly!!</h1>
            <h1>Press the Link Below to return to Homepage and then reload it:</h1>
            <Link to="/"><h1>Homepage</h1></Link>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}

export default ErrorPage
