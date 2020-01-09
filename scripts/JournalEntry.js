/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */

const eventHub = document.querySelector("#appContainer")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("editEntry--")) {
        const [notUsed, entryId] = clickEvent.target.id.split("--")

        const entryIdParsed = parseInt(entryId, 10)

        /*
            Let all other components know that the user chose
            to edit an entry, and attach data to the message
            so that any listeners know which entry should be
            edited.
        */
        const message = new CustomEvent("editButtonClicked", {
            detail: {
                editedEntryId: entryIdParsed
            }
        })
        eventHub.dispatchEvent(message)
    }
})

export const EntryHTML = (entry) => {
    return `
        <section class="journalEntry" id="entry--${entry.id}">
            <h3 class="entry_date">${entry.date}</h3>
            <div class="entry_info">
                <div>
                    <span class="entry_text">${entry.entry}</span>
                </div>
                <div>
                    <span class="entry_concepts">Concepts covered: ${entry.concept}</span>
                </div>
                <div>
                    <span class="entry_mood">Mood: ${entry.mood}</span>
                </div>
            </div>
            <div class="delete_button">
                <button id="button--delete_${entry.id}">
                    Delete entry
                </button>
            </div>
            <div class = "edit_button">
                <button id="editEntry--${entry.id}">
                    Edit entry
                </button>
                <input type="hidden" name="entryId" id="${entry.id}">
            <hr></hr>
        </section>
    `
}

