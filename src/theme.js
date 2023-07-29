import {createContext, useState, useMemo} from "react";
import {createTheme} from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
	...(mode === "dark"
		? {
				gray: {
					100: "#e9ebec",
					200: "#7c8a8d",
					300: "#67777a",
					400: "#516367",
					500: "#3b5054",
					600: "#263d42",
					700: "#22363b",
					800: "#1e3034",
					900: "#1a2a2e",
				},
				primary: {
					100: "#9eb9bf",
					200: "#8aabb2",
					300: "#779da5",
					400: "#1e393f",
					500: "#182e32",
					600: "#366772",
					700: "#305c65",
					800: "#2a5058",
					900: "#24454c",
				},
				greenAccent: {
					100: "#dbf5ee",
					200: "#b7ebde",
					300: "#94e2cd",
					400: "#70d8bd",
					500: "#4FB17E",
					600: "#3da58a",
					700: "#2e7c67",
					800: "#1e5245",
					900: "#0f2922",
				},
				redAccent: {
					100: "#f8dcdb",
					200: "#f1b9b7",
					300: "#e99592",
					400: "#e2726e",
					500: "#db4f4a",
					600: "#af3f3b",
					700: "#832f2c",
					800: "#58201e",
					900: "#2c100f",
				},
				blueAccent: {
					100: "#e1e2fe",
					200: "#c3c6fd",
					300: "#a4a9fc",
					400: "#868dfb",
					500: "#6870fa",
					600: "#535ac8",
					700: "#217A9B",
					800: "#2a2d64",
					900: "#151632",
				},
		  }
		: {
				gray: {
					100: "#1a2a2e",
					200: "#1e3034",
					300: "#22363b",
					400: "#263d42",
					500: "#3b5054",
					600: "#516367",
					700: "#67777a",
					800: "#7c8a8d",
					900: "#e9ebec",
				},
				primary: {
					100: "#24454c",
					200: "#2a5058",
					300: "#305c65",
					400: "#f2f0f0", // manually changed
					500: "#182e32",
					600: "#1e393f",
					700: "#779da5",
					800: "#8aabb2",
					900: "#9eb9bf",
				},
				greenAccent: {
					100: "#0f2922",
					200: "#1e5245",
					300: "#2e7c67",
					400: "#3da58a",
					500: "#4FB17E",
					600: "#70d8bd",
					700: "#94e2cd",
					800: "#b7ebde",
					900: "#dbf5ee",
				},
				redAccent: {
					100: "#2c100f",
					200: "#58201e",
					300: "#832f2c",
					400: "#af3f3b",
					500: "#db4f4a",
					600: "#e2726e",
					700: "#e99592",
					800: "#f1b9b7",
					900: "#f8dcdb",
				},
				blueAccent: {
					100: "#151632",
					200: "#2a2d64",
					300: "#3e4396",
					400: "#535ac8",
					500: "#6870fa",
					600: "#868dfb",
					700: "#a4a9fc",
					800: "#c3c6fd",
					900: "#e1e2fe",
				},
		  }),
});

// mui theme settings
export const themeSettings = (mode) => {
	const colors = tokens(mode);
	return {
		palette: {
			mode: mode,
			...(mode === "dark"
				? {
						// palette values for dark mode
						primary: {
							main: colors.primary[500],
						},
						secondary: {
							main: colors.greenAccent[500],
						},
						neutral: {
							dark: colors.gray[700],
							main: colors.gray[500],
							light: colors.gray[100],
						},
						background: {
							default: colors.primary[500],
						},
				  }
				: {
						// palette values for light mode
						primary: {
							main: colors.primary[100],
						},
						secondary: {
							main: colors.greenAccent[500],
						},
						neutral: {
							dark: colors.gray[700],
							main: colors.gray[500],
							light: colors.gray[100],
						},
						background: {
							default: "#fcfcfc",
						},
				  }),
		},
		typography: {
			fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
			fontSize: 12,
			h1: {
				fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
				fontSize: 40,
			},
			h2: {
				fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
				fontSize: 32,
			},
			h3: {
				fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
				fontSize: 24,
			},
			h4: {
				fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
				fontSize: 20,
			},
			h5: {
				fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
				fontSize: 16,
			},
			h6: {
				fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
				fontSize: 14,
			},
		},
	};
};

// context for color mode
export const ColorModeContext = createContext({
	toggleColorMode: () => {},
});

export const useMode = () => {
	const [mode, setMode] = useState("dark");

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () =>
				setMode((prev) => (prev === "light" ? "dark" : "light")),
		}),
		[]
	);

	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
	return [theme, colorMode];
};
