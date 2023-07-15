import React from "react";
import Header from "../../component/Header";
import {Box} from "@mui/material";

const Dashboard = () => {
	return (
		<Box m="20px">
			<Box display="flex" justifyContent="space-between" alignItems="">
				<Header title="DASHBOARD" subtitle="welcome to your dashboard" />
			</Box>
		</Box>
	);
};

export default Dashboard;
