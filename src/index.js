import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App'
<<<<<<< HEAD

ReactDOM.render(<App />, document.getElementById('root'))
=======
import {ContextProvider} from './contexts/ContextProvider'

ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>,
    document.getElementById('root')
)
>>>>>>> d767f27fa0692b48942711f2b8fc259f877d5c4a
