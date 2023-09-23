import { useLayoutEffect, useState } from "react"

export const useTheme = () => {

    const getPreferredScheme = (): string =>
        window?.matchMedia('(prefers-color-scheme:dark)').matches
            ? 'dark'
            : 'light';            

    const [theme, setTheme] =
        useState<string>(localStorage.getItem('theme') || getPreferredScheme());

    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return { theme, setTheme, getPreferredScheme }
}