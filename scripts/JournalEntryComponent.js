import {saveEntry} from "./JournalDataProvider.js"

export const EntryFormComponent = () => {

    const eventHub = document.querySelector("#appContainer")

    // Handle internal element click
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "record") {
            let journalDate = new Date(document.getElementById("journalDate").value).toLocaleDateString()

            // Make a new object representation of a note
            const newNote = {
                date: journalDate,
                concept: document.getElementById("journalConcepts").value,
                entry: document.getElementById("journalEntry").value,
                mood: document.getElementById("journalMood").value
            }

            // Change API state and application state
            saveEntry(newNote)
        }
    })}

    // rest of the code here