import React from 'react';
import ReactDom from 'react-dom';
import Hello from './Hello';

require("./style.css");

ReactDom.render(<Hello />, document.getElementById('container'));
