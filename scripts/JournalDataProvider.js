/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data. Can't Touch This.
const journal = [
    {
        date: "11/21/2025",
        concept: "HTML, Javascript, Git",
        entry: "Presented first group project. Continued to practice github workflow",
        mood: "ok"
    },
    {
        date: "11/22/2025",
        concept: "Javascript automation",
        entry: "We talked about how to automate the creation of HTML elements using Javascript.",
        mood: "ok"
    },
    {
        date: "11/25/2025",
        concept: "Javascript Automation",
        entry: "Continued to work on the automatic creation of HTML elements through Javascript",
        mood: "tired"
    }

]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (nextEntry, currentEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}