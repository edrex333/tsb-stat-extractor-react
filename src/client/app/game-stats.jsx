import React from "react";
import ReactDataGrid from "react-data-grid";

const GameStats = React.createClass({
    getInitialState() {
        this.createRows();
        this._columns = [
            { key: 'id', name: 'ID' },
            { key: 'title', name: 'Title' },
            { key: 'count', name: 'Count' } ];

        return null;
    },

    createRows() {
        let rows = [];
        console.log(this.props.stats);
        for (let i = 1; i < 2; i++) {
            rows.push({
                id: i,
                title: 'Title ' + i,
                count: i * 1000
            });
        }

        this._rows = rows;
    },

    rowGetter(i) {
        return this._rows[i];
    },

    render() {
        return  (
            <ReactDataGrid
                columns={this._columns}
                rowGetter={this.rowGetter}
                rowsCount={this._rows.length}
                minHeight={500} />);
    }
});

export default GameStats;