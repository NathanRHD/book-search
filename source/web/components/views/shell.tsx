import * as React from "react"
import { withRouter } from "react-router"

import "./shell.scss";

import Helmet from "react-helmet";

export const Shell = withRouter(props => {
    return <div className="shell">
        <Helmet>
            <title>Book Search</title>
        </Helmet>
        {props.children}
    </div>
})