import {Box, Typography, useTheme} from "@mui/material";
import {tokens} from "../theme";

const Header = ({title, subtitle}) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<div>
			<Box mb="30px">
				<Typography
					varient="h2"
					color={colors.gray[100]}
					fontWeight="bold"
					sx={{mb: "5px"}}
				>
					{title}
				</Typography>
				<Typography varient="h6" color={colors.greenAccent[400]}>
					{subtitle}
				</Typography>
			</Box>
		</div>
	);
};

export default Header;
