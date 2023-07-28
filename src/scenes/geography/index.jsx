import {Box} from "@mui/material";
import Header from "../../component/Header";
import GeographyChart from "../../component/GeographyChart";
import {tokens} from "../../theme";
import {useTheme} from "@mui/material";

const Geography = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<Box m="20px">
			<Header
				title="GeographyChart Chart"
				subtitle="simple GeographyChart Chart"
			/>
			<Box
				height="75vh"
				border={`1px solid ${colors.gray[100]}`}
				borderRadius="4px"
			>
				<GeographyChart />
			</Box>
		</Box>
	);
};

export default Geography;
