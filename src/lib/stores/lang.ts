import { locale } from "svelte-i18n";
import { writable } from "svelte/store"

const createLangStore = () => {
  const {  subscribe, set, update } = writable('en');

  return {
    subscribe,
    set: (lang: string) => {
      locale.set(lang);
      set(lang);
    },
    update
  }
}

export const langStore = createLangStore();