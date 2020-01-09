import {getEntries} from "./JournalDataProvider.js"
import {EntryListComponent} from './JournalEntryList.js'
import {JournalFormComponent} from "./JournalForm.js"
import {EntryFormComponent} from "./JournalEntryComponent.js"
import {FilterBar} from "./filter/FilterBar.js"


getEntries()
    .then(() => EntryFormComponent())
    .then(() => EntryListComponent())
    .then(() => JournalFormComponent())
    .then(() => FilterBar())