import React from 'react';
import {render} from 'react-dom';
import FileUpload from './file-upload.jsx';

class App extends React.Component {
    render () {
        return (
            <div>
              <p> Hello React!</p>
              <FileUpload />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));