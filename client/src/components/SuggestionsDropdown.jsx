export function SuggestionsDropdown({handleSuggestionClick, suggestions, 
    locationSelected, highlightedIndex}){

    return (
        <div className={`suggestion-dropdown ${locationSelected ? "hidden" : ""}`}>
            {suggestions.map((suggestion, index) => (
                <button 
                    key={suggestion.name + suggestion.state} 
                    onClick={() => handleSuggestionClick(suggestion)}
                    className={highlightedIndex === index ? "highlighted" : ""}
                >{suggestion.name}, {suggestion.state}, {suggestion.country}</button>
            ))}
        </div>
    )

}