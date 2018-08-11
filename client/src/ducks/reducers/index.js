import { combineReducers } from "redux";
import search from './search'
import popular from './popular'
import selected from './selected'
import userShows from './userShows'

const rootReducer = combineReducers({ search, popular, selected, userShows })

export default rootReducer