import React, { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import EventForm from './EventForm'
import Events from './Events'
import reducer from '../reducers'
import AppContext from '../contexts/AppContext'

const App = () => {
  const initialStates = {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialStates)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  );
}

export default App
