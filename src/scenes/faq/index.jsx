import {Box, Typography, useTheme} from "@mui/material";
import Header from "../../component/Header";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import expandMoreIcon from "@mui/icons-material/ExpandMore";
import {tokens} from "../../theme";

const FAQ = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box m="20px">
			<Header title="FAQ" subtitle="Frequently Asked Question Page" />
		</Box>
	);
};

export default FAQ;
