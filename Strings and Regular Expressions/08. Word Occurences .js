function countOccurances(text,word) {
    let matches = text.match(new RegExp(`\\b${word}\\b`, 'gi'));
    return matches === null ? 0 : matches.length
}

