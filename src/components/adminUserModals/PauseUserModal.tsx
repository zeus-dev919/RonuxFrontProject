import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { TextField } from "@mui/material";
import { DecideButton } from "../../commonStyle/CommonStyle";

export default function PauseUserModal(props: any) {
	const [open, setOpen] = React.useState(false);
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<div onClick={handleClickOpen}>{"Pause user"}
			</div>
			<Dialog
				fullScreen={fullScreen}
				open={open}
				onClose={handleClose}
				aria-labelledby="responsive-dialog-title"
			>
				<DialogTitle
					id="responsive-dialog-title"
					style={{ color: "white", backgroundColor: "#336def" }}
				>
					Pause user {props.name}
				</DialogTitle>
				<DialogContent style={{ marginTop: "20px" }}>
					<DialogContentText style={{ marginTop: "20px" }} >
						The systems retains this user's data, but as long as the user is still paused, cannot sign in to the account.
					</DialogContentText>
					<DialogContentText style={{ marginTop: "20px" }} >
						<TextField label="Pause Reason" defaultValue="Text description" sx={{ m: 1, width: '60ch' }}></TextField>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<DecideButton onClick={handleClose} autoFocus>
						Cancel
					</DecideButton>
					<DecideButton onClick={handleClose} autoFocus>
						Pause
					</DecideButton>
				</DialogActions>
			</Dialog>
		</div>
	);
}
