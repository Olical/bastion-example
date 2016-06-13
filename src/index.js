import React from 'react'
import ReactDOM from 'react-dom'
import AppRoot from './AppRoot'
import Elm from './elm/Main'

const reactNode = document.getElementById('react-mount')
const elmNode = document.getElementById('elm-mount')

ReactDOM.render(<AppRoot />, reactNode)
Elm.Main.embed(elmNode)
