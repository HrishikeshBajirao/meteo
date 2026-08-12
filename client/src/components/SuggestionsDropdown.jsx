export function SuggestionsDropdown({suggestions}){

    return (
        <div id="suggestion-dropdown">
            {suggestions.map((suggestion) => <p>{suggestion.name}, {suggestion.state}, {suggestion.state}</p>)}
        </div>
    )

}