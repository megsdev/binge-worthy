import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import WantToWatch from './components/WantToWatch/WantToWatch'
import CurrentlyWatching from './components/CurrentlyWatching/CurrentlyWatching'
import Watched from './components/Watched/Watched'
import Show from './components/Show/Show'
import SearchResults from './components/SearchResults/SearchResults'
import Login from './components/Login/Login'

export default (
    <Switch>
        <Route path='/home' component={Dashboard} />
        <Route path='/wanttowatch' component={WantToWatch} />
        <Route path='/currentlywatching' component={CurrentlyWatching} />
        <Route path='/watched' component={Watched} />
        <Route path='/show/:showid' component={Show} />
        <Route path='/results' component={SearchResults} />
        <Route path='/login' component={Login} />
    </Switch>
)