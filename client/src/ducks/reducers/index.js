import { combineReducers } from "redux";
import search from './search'
import popular from './popular'
import selected from './selected'

const rootReducer = combineReducers({ search, popular, selected })

export default rootReducer