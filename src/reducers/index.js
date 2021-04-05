import { combineReducers } from 'redux'
import counterReducer from './counter'
import toggleReducer from './toggle'

const rootReducer = combineReducers({
    counter: counterReducer,
    toggle: toggleReducer    
})

export default rootReducer