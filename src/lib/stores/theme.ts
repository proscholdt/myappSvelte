import { writable } from "svelte/store";

type Theme = "light" | "dark";

const defaultTheme: Theme = "dark";

const createThemeStore = () => {
  const { subscribe, set, update } = writable<Theme>(defaultTheme);

  if (typeof window !== "undefined") {
    const stored = (localStorage.getItem("theme") as Theme | null) ?? null;
    const initial = stored ?? "dark";

    set(initial);

    subscribe((value) => {
      document.documentElement.dataset.theme = value;
      localStorage.setItem("theme", value);
    });
  }

  return {
    subscribe,
    toggle: () => update((value) => (value === "light" ? "dark" : "light"))
  };
};

export const theme = createThemeStore();
export const toggleTheme = () => theme.toggle();
