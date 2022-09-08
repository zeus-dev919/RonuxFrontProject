import * as React from "react";
import {
	Dialog,
	Button,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField
} from "@mui/material";

export default function PauseUserModal(props: any) {
	const [open, setOpen] = React.useState(false);

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
				fullWidth
				maxWidth='xs'
				open={open}
				onClose={handleClose}
			>
				<DialogTitle
					className='dialog-title'
				>
					Pause user {props.name}
				</DialogTitle>
				<DialogContent style={{ marginTop: "20px" }}>
					<DialogContentText  >
						The systems retains this user's data, but as long as the user is still paused, cannot sign in to the account.
					</DialogContentText>
					<DialogContentText style={{ marginTop: "20px" }} >
						<TextField fullWidth label="Pause Reason" defaultValue="Text description"></TextField>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button className='normal-text round-button' autoFocus onClick={handleClose}>
						Cancel
					</Button>
					<Button className='normal-text round-button' autoFocus onClick={handleClose}>
						Pause
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
