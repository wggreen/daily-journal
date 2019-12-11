/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

 let entries = []

 export const saveEntry = entry => {    
    fetch('http://localhost:3000/entries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(getEntries)
}

 export const getEntries = () => {
    return fetch("http://localhost:3000/entries") // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(entriesArray => {
            entries = entriesArray.slice()
        })
}

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useEntries = () => {
    const sortedByDate = entries.sort(
        (nextEntry, currentEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}