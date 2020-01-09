import {useEntries, editEntry} from "./JournalDataProvider.js"
import { EntryListComponent } from "./JournalEntryList.js"

export const JournalFormComponent = () => {

    const eventHub = document.querySelector("#appContainer")
    const entriesCollection = useEntries()
    const searchBar = document.querySelector("#searchBar")


    const FormHTML = () => {
        return `
            <form action="">
            <fieldset>
                <label for="journalDate">Date of Entry</label>
                <input type="date" name="journalDate" id="journalDate">
            </fieldset>
            <fieldset>
                <label for="journalConcepts">Concepts covered</label>
                <input type="text" name="journalConcepts" id="journalConcepts">
            </fieldset>
            <fieldset>
                <label for="journalEntry">Journal Entry</label>
                <textarea name="journalEntry" id="journalEntry" cols="20" rows="2"></textarea>
            </fieldset>
            <fieldset>
                <div id ="radioHappy">
                    <input type="radio" id="happy" name="journalMood" value="happy" checked>
                    <label for="happy">
                        Happy
                    </label>
                </div>
                <div id="radioSad">
                    <input type="radio" id="sad" name="journalMood" value="sad">
                    <label for="sad">
                        Sad
                    </label>
                </div>
                <div id="radioOk">
                    <input type="radio" id="ok" name="journalMood" value="ok">
                    <label for="ok">
                        Ok
                    </label>
                </div>
            </fieldset>
            </form>
            <div id="recordButton">
                <button id = "record">
                    Record Journal Entry
                </button>
            </div>
        `
    }
    
    const render = () => {
        const contentTarget = document.querySelector(".form_field")
        const formField = FormHTML()
        contentTarget.innerHTML = `
            ${formField}
        `
    }

    
    searchBar.addEventListener("keypress", keypressEvent => {
        if (keypressEvent.keyCode === 13) {
            const message = new CustomEvent("searchInitiated", {
                detail: {
                    searchTerm: document.querySelector("#searchBar").value
                }
            })
            eventHub.dispatchEvent(message)
        }
    })

    render()

    eventHub.addEventListener("editButtonClicked", editEvent => {
        const entryToEdit = entriesCollection.find(
            (singleEntry) => {
                return singleEntry.id === event.detail.editedEntryId
            }
        )

        document.querySelector("#journalDate").value = new Date(entryToEdit.date).toISOString().split('T')[0]
        document.querySelector("#journalConcepts").value = entryToEdit.concept
        document.querySelector("#journalEntry").value = entryToEdit.entry
        if (entryToEdit.mood == "happy") {
            document.querySelector("#happy").checked = true
        }
        if (entryToEdit.mood === "sad") {
            document.querySelector("#sad").checked = true
        }
        if (entryToEdit.mood === "ok") {
            document.querySelector("#ok").checked = true
        }

        const editRender = () => {
            const contentTarget = document.querySelector("#recordButton")
            contentTarget.innerHTML = ""
            contentTarget.innerHTML = `
                <button id="recordEdit">
                    Save edit
                </button>
            `
        }

        editRender()

        eventHub.addEventListener("click", clickEvent => {
            if (clickEvent.target.id.startsWith("recordEdit")) {
                
                const editId = entryToEdit.id
                let dateArray = document.querySelector("#journalDate").value.split("-")
                let formattedDateArray = []
                const formattedYear = dateArray[0].slice(2, 4)
                formattedDateArray[0] = dateArray[1]
                formattedDateArray[1] = dateArray[2]
                formattedDateArray[2] = formattedYear
                const formattedDate = formattedDateArray.join("/")

                const editedEntry = {
                    date: formattedDate,
                    concept: document.querySelector("#journalConcepts").value,
                    entry: document.querySelector("#journalEntry").value,
                    mood: document.querySelector("#journalMood").value,
                    id: editId
                }

                const recordRender = () => {
                    const contentTarget = document.querySelector("#recordButton")
                    contentTarget.innerHTML = ""
                    contentTarget.innerHTML = `
                        <button id = "record">
                            Record Journal Entry
                        </button>
                    `
                }

                recordRender()


                editEntry(editedEntry)
                .then(() => EntryListComponent())
            }
        })       
    })
}