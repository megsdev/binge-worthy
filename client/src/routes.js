import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Show from './components/Show/Show'
import SearchResults from './components/SearchResults/SearchResults'
import Profile from './components/Profile/Profile'
import Login from './components/Login/Login'

export default (
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/show/:showid' component={Show} />
        <Route path='/results' component={SearchResults} />
        <Route path='/login' component={Login} />
        <Route path='/profile' component={Profile} />
    </Switch>
)