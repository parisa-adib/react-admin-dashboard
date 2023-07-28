import {Box} from "@mui/material";
import Header from "../../component/Header";
import PieChart from "../../component/PieChart";

const Pie = () => {
	return (
		<Box m="20px">
			<Header title="Pie Chart" subtitle="simple Pie Chart" />
			<Box height="75vh">
				<PieChart />
			</Box>
		</Box>
	);
};

export default Pie;
