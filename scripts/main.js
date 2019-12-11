import {getEntries} from "./JournalDataProvider.js"
import {EntryListComponent} from './JournalEntryList.js'

getEntries()
    .then(() => EntryListComponent())