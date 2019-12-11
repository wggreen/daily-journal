import {getEntries} from "./JournalDataProvider.js"
import {EntryListComponent} from './JournalEntryList.js'
import {renderForm} from "./JournalForm.js"
import {EntryFormComponent} from "./JournalEntryComponent.js"

renderForm()
getEntries()
    .then(() => EntryFormComponent())
    .then(() => EntryListComponent())