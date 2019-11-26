/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <h3>${entry.date}</h3>
            <div>
                ${entry.entry}
            </div>
            <div>
                <span>Concepts covered</span>:
                <br>
                ${entry.concept}
            </div>
            <div>
                <span>Mood:</span>:
                <br>
                ${entry.mood}
            </div>
            <hr></hr>
        </section>
    `
}

export default JournalEntryComponent