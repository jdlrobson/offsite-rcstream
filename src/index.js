import React from 'react'
import ReactDOM from 'react-dom'

import './index.less'
import App from './ui/app.js'

import stream from './net/rc.js'
import editsPerSecondStream from './streams/edits-per-second.js'

function render (edits) {
  ReactDOM.render(<App edits={edits}/>, document.body)
}

var edits = []
var eps = editsPerSecondStream( stream );

stream.on('message', (m) => { edits.push(m); render(edits); })
eps.on('message', (m) => { console.log('yo',m) })
