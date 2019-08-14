import React, {Component} from 'react'
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom'
import Serial from "../components/protected/serial";
//const MyFiles = lazy(() => import('_myFiles'));

class RootRouter extends Component {
    constructor(props) {

        super(props)

    }

    componentDidMount() {

    }

    renderVetOrProRoutes() {
            return (
                    <Switch>
                        <Route component={Serial}/>
                    </Switch>
            )

    }


    render() {
        return (
            <BrowserRouter>
                    <div className="mainContent">
                        {this.renderVetOrProRoutes()}
                    </div>
            </BrowserRouter>
        )
    }
}

export default (RootRouter)

