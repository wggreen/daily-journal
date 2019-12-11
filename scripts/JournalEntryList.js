/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useEntries } from "./JournalDataProvider.js"
import {EntryHTML} from "./JournalEntry.js"

export const EntryListComponent = () => {

    // Use the journal entry data from the data provider component
    const entries = useEntries()

    const render = (entriesCollection) => {

        const contentTarget = document.querySelector("#entryLog")
        let entryHTML = entriesCollection.map(note => EntryHTML(note)).join(" ")
        contentTarget.innerHTML = `
            ${entryHTML}
        `
    }
    render(entries)
    // DOM reference to where all entries will be rendered

    }