/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
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
            <hr></hr>
        </section>
    `
}