import {ColorModeContext, useMode} from "./theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import SidebarComponent from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Form from "./scenes/form/index";
import Calendar from "./scenes/calendar";
import Bar from "./scenes/bar";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq/index";
import Geography from "./scenes/geography";
import {useState} from "react";

function App() {
	const [theme, colorMode] = useMode();
	const [isSidebar, setIsSidebar] = useState(true);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className="app">
					<SidebarComponent isSidebar={isSidebar} />
					<main className="content">
						<Topbar setIsSidebar={setIsSidebar} />
						<Routes>
							<Route path="/" element={<Dashboard />} />
							<Route path="/team" element={<Team />} />
							<Route path="/invoices" element={<Invoices />} />
							<Route path="/contacts" element={<Contacts />} />
							<Route path="/form" element={<Form />} />
							<Route path="/calendar" element={<Calendar />} />
							<Route path="/fAQ" element={<FAQ />} />
							<Route path="/bar" element={<Bar />} />
							<Route path="/pie" element={<Pie />} />
							<Route path="/line" element={<Line />} />
							<Route path="/geography" element={<Geography />} />
						</Routes>
					</main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
