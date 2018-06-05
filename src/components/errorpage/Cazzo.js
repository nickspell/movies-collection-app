import React from "react";
import Bloodhound from 'bloodhound-js'
import * as ReactDOM from "react-dom";
import $ from 'jquery';





class Cazzo extends React.Component {

    componentDidMount() {

        var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
            'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
            'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
            'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
            'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
            'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
            'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
            'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
            'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ];

        // constructs the suggestion engine
        var bloodhound = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.whitespace,
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            // `states` is an array of state names defined in "The Basics"
            local: states
        });

        ReactDOM.findDOMNode(this.refs.myTextInput).focus();

        //
        // $(ReactDOM.findDOMNode(this.refs.myTextInput)).typeahead({
        //         hint: true,
        //         highlight: true,
        //         minLength: 1
        //     },
        //     {
        //         name: 'states',
        //         limit: 10,
        //         source: bloodhound
        //     });

    }

    render() {

        return (
            <div id="scrollable-dropdown-menu">
                <input class="typeahead" type="text" placeholder="Countries" ref="myTextInput" />
            </div>
        );
    }

}

export default Cazzo;