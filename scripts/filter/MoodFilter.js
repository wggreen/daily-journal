const MoodFilter = () => {
    return `
        <fieldset class="fieldset">
            <label for="journalDate">Filter Journal Entries by Mood</label>
            <select name="mood" id="moodFilter">
                <option value="sad">Sad</option>
                <option value="ok">Ok</option>
                <option value="happy">Happy</option>
            </select>
        </fieldset>
        `
}

export default MoodFilter