import {createStore, combineReducers} from 'redux'

// import reducers here

const rootReducer = combineReducers(
  { 
    'null':null // delete this
    // namespace your reducers here
  }
)

export default createStore(rootReducer)