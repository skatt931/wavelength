import { createState, useState } from "@hookstate/core";

const settingsState = createState({
  cardsType: "easy",
  isOnline: true
});

export function useSettingsState() {
  const state = useState(settingsState);

  // This function wraps the state by an interface,
  // i.e. the state link is not accessible directly outside of this module.
  // The state for tasks in TasksState.ts exposes the state directly.
  // Both options are valid and you need to use one or another,
  // depending on your circumstances. Apply your engineering judgement
  // to choose the best option. If unsure, exposing the state directly
  // like it is done in the TasksState.ts is a safe bet.
  return {
    get cardsType() {
      return state.cardsType.get();
    },
    setCardsType(value) {
      state.cardsType.set(() => value);
    },
    get isOnline() {
      return state.isOnline.get();
    },
    toggleOnline() {
      state.isOnline.set((p) => !p);
    }
  };
}
