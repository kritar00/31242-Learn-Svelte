import { writable } from "svelte/store";
import data from "../data.json";

export const dataStore = writable(data)

const sharedVariables = writable({
    isOpenSidebar: false,
    isOpenSearch: false,
})

