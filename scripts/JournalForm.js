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
            <label for="journalMood">Mood</label>
            <select name="journalMood" id="journalMood">
                <option value="happy">
                    Happy
                </option>
                <option value="ok">
                    Ok
                </option>
                <option value="stressed">
                    Stressed
                </option>
                <option value="relieved">
                    Relieved
                </option>
                <option value="behind">
                    Behind
                </option>
                <option value="tired">
                    Tired
                </option>
                <option value="hungry">
                    Hungry
                </option>
            </select>
        </fieldset>
        </form>
        <button id = "record">
            Record Journal Entry
        </button>
    `
}

export const renderForm = () => {
    const contentTarget = document.querySelector(".form_field")
    const formField = FormHTML()
    contentTarget.innerHTML = `
        ${formField}
    `
}