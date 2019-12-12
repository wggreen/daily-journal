import {getEntries} from "./JournalDataProvider.js"
import {EntryListComponent} from './JournalEntryList.js'
import {JournalFormComponent} from "./JournalForm.js"
import {EntryFormComponent} from "./JournalEntryComponent.js"

JournalFormComponent()
getEntries()
    .then(() => EntryFormComponent())
    .then(() => EntryListComponent())