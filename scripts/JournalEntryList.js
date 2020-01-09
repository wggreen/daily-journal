/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useEntries, deleteEntry } from "./JournalDataProvider.js"
import {EntryHTML} from "./JournalEntry.js"

const eventHub = document.querySelector("#appContainer")

export const EntryListComponent = () => {

    // Use the journal entry data from the data provider component
    const entries = useEntries()

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("button--delete")) {    
            const [prefix, id] = clickEvent.target.id.split("_")
            /*
                Invoke the function that performs the delete operation.

                Once the operation is complete you should THEN invoke
                useNotes() and render the note list again.
            */
            deleteEntry(id).then( () => render(useEntries()) )
        }
    })

    const render = (entriesCollection) => {

        const contentTarget = document.querySelector("#entryLog")
        let entryHTML = entriesCollection.map(note => EntryHTML(note)).join(" ")
        contentTarget.innerHTML = `
            ${entryHTML}
        `
    }

    render(entries)

    eventHub.addEventListener("searchInitiated", searchEvent => {
        let searchFilteredEntries = []
        console.log(event.detail.searchTerm)
        for (const entry of entries) {
            for (const value of Object.values(entry)) {
                if (value === event.detail.searchTerm) {
                    searchFilteredEntries.push(entry)
                }
                if (typeof(value) === 'string') {
                    if (value.includes(event.detail.searchTerm) && !(searchFilteredEntries.includes(entry))) {
                        searchFilteredEntries.push(entry)
                    }
                }
            }
        }
        render(searchFilteredEntries)
    })

    eventHub.addEventListener("change", changeEvent => {
        if (changeEvent.target.id.startsWith("moodFilter")) {
            const filteredEntries = entries.filter(
                (individualEntry) => {
                    if (individualEntry.mood === changeEvent.target.value) {
                        return individualEntry
                    }
                }
            )
            render(filteredEntries)
        }
    })
    // DOM reference to where all entries will be rendered

}