import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App'

const reducer = (state = {arr:[]}, action) => {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                arr: state.arr.concat(action.payload)
            }

        case 'delete':
            return {
                ...state,
                arr: state.arr.splice(0,state.arr.length-1)
            }
        default:
            return state
    }
}
const store = createStore(reducer)
const container = document.getElementById('root')
const root = createRoot(container)
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)
