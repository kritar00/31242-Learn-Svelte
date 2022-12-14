import { writable } from "svelte/store";
import data from "../data.json";

export const dataStore = writable(data)

const {subscribe, set, update} = writable({
    isOpenSidebar: false,
    isOpenSearch: false,
    isExpanded: true,
    isExpandedDisclaimers: false,
})

export const sharedVariables = {
    subscribe, set, update,
    
    setIsOpenSidebar: (value) => update(self => {
        self.isOpenSidebar = !self.isOpenSidebar
        return self
    }),
    setIsOpenSearch: (value) => update(self => {
        self.isOpenSearch = !self.isOpenSearch
        return self
    }),
    setIsExpanded: (value) => update(self => {
        self.isExpanded = value
        return self
    }),
    setIsExpandedDisclaimers: () => update(self => {
        self.isExpandedDisclaimers = !self.isExpandedDisclaimers
        return self
    })
}

