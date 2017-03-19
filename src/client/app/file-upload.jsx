import React from 'react';
import FileInput from 'react-file-input';
import GameStats from "./game-stats.jsx";
import {extractFromArrayBuffer} from 'tsb-stat-extractor'

const Form = React.createClass({
    getInitialState: function () {
        return { showResults: false };
    },

    showResults: function (stats) {
        this.setState({
            showResults: true,
            stats: stats
        });
    },

    handleChange: function(event) {
        let file = event.target.files[0];
        console.log('Selected file:', file);
        let reader = new FileReader();
        let self = this;
        reader.onload = function () {
            const stats = extractFromArrayBuffer(reader.result);
            console.log(stats);
            self.showResults(stats);
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
                <div>{ this.state.showResults ? <GameStats stats={this.state.stats}/> : null }</div>
            </form>
        );
    },
});

export default Form;