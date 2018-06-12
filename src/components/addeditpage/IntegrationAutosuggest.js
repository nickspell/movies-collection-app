// @flow
import React from 'react';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import * as db from '../../remote'
import * as langs from '../../localization/languages'



function renderInput(inputProps) {
    const { classes, ref,helperText,label, ...other } = inputProps;

    return (
        <TextField
            fullWidth
            label={label}
            helperText={helperText}
            InputProps={{
                inputRef: ref,
                classes: {
                    input: classes.input,
                },
                ...other,
            }}
        />
    );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
    const matches = match(suggestion.title, query);
    const parts = parse(suggestion.title, matches);

    return (
        <MenuItem selected={isHighlighted} component="div">
            <div>
                {parts.map((part, index) => {
                    return part.highlight ? (
                        <span key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </span>
                    ) : (
                        <strong key={String(index)} style={{ fontWeight: 500 }}>
                            {part.text}
                        </strong>
                    );
                })}
            </div>
        </MenuItem>
    );
}

function renderSuggestionsContainer(options) {
    const { containerProps, children } = options;

    return (
        <Paper {...containerProps} square>
            {children}
        </Paper>
    );
}


const styles = theme => ({
    container: {
         //flexGrow: 1,
        position: 'relative',
        // height: 250,
        width:'100%'
    },
    suggestionsContainerOpen: {
        position: 'absolute',
        zIndex: 1,
        marginTop: theme.spacing.unit,
        left: 0,
        right: 0,
    },
    suggestion: {
        display: 'block',
    },
    suggestionsList: {
        margin: 0,
        padding: 0,
        listStyleType: 'none',
    },
});



type Props={
    classes:{[string]:string},
    helperText:string,
    label:string,
    activeLanguage:string,
    onSelect:Function,
    fetchTMDB:Function,
}

type State={
    suggestion_selected:{[string]:string},
    value:string,
    suggestions:[]
}


class IntegrationAutosuggest extends React.Component<Props,State> {
    state = {
        suggestion_selected:{},
        value: '',
        suggestions: [],
    };

    handleSuggestionsFetchRequested = ({ value }) => {
        const url=db.QUERY_PATH_TMDB+value+'&api_key='+db.API_KEY+'&language='+langs.languages[this.props.activeLanguage].code;
        axios.get(url).then(
            response=>{
                const items=response.data.results.slice(0,5).map(
                    item=>{
                        return({
                            id:item.id,
                            title:item.title
                        });
                    }
                );

                this.setState({suggestions:items})
            }
        )
    };

    handleSuggestionsClearRequested = () => {
        //console.log('called handleSuggestionsClearRequested');
        this.setState({
            suggestions: [],
        });
    };

    handleChange = (event, { newValue }) => {
        //console.log('called handleChange');
        this.setState({
            value: newValue,
        });
    };

    getSuggestionValue=(suggestion)=> {
        //console.log('called getSuggestionValue');
        return suggestion.title;
    };

    handleSelectSuggestion=(event, { suggestion })=>{
        this.setState({
            suggestion_selected:suggestion
        });
        this.props.onSelect(true);
        this.props.fetchTMDB(suggestion.id);

    };


    render() {
        const { classes,helperText,label} = this.props;
        return (
            <Autosuggest
                theme={{
                    container: classes.container,
                    suggestionsContainerOpen: classes.suggestionsContainerOpen,
                    suggestionsList: classes.suggestionsList,
                    suggestion: classes.suggestion,
                }}
                renderInputComponent={renderInput}
                suggestions={this.state.suggestions}
                onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
                renderSuggestionsContainer={renderSuggestionsContainer}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={renderSuggestion}
                onSuggestionSelected={this.handleSelectSuggestion}
                inputProps={{
                    classes,
                    label:label,
                    helperText:helperText,
                    value: this.state.value,
                    onChange: this.handleChange,
                }}
            />
        );
    }
}


export default withStyles(styles)(IntegrationAutosuggest);