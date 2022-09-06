import React from "react";
import { Button, Grid, ListItem, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import CheckboxList from "../components/moneyManage/CheckboxList";
import AccountPaper from "../components/moneyManage/AccountPaper";


export default function MoneyManage() {
	const [open, setOpen] = React.useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<ListItem>
				<Typography ml={1}> Money manage </Typography>
			</ListItem>
			<Divider />
			<Grid container>
				<Grid item xs={2}>
					<CheckboxList />
				</Grid>
				<Grid item xs={10}>
					<Grid mt={7} container>
						<Grid item xs={12} lg={3}>
							<AccountPaper />
						</Grid>
						<Grid item xs={12} lg={9}>
							<AccountPaper />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
}
