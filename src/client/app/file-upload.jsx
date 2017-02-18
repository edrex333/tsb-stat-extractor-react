import React from 'react';
import FileInput from 'react-file-input';
import {extractFromArrayBuffer} from 'tsb-stat-extractor'

const Form = React.createClass({
    handleChange: function(event) {
        let file = event.target.files[0];
        console.log('Selected file:', file);
        let reader = new FileReader();
        reader.onload = function() {
            console.log(extractFromArrayBuffer(reader.result));
        };
        reader.readAsArrayBuffer(file);
    },

    render: function() {
        return (
            <form>
                <FileInput name="saveState"
                           accept=".bin"
                           placeholder="Save State"
                           className="inputClass"
                           onChange={this.handleChange} />
            </form>
        );
    },
});

export default Form;