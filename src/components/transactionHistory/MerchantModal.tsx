import * as React from "react";
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    OutlinedInput,
    DialogActions,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from "@mui/material"
import { DecideButton } from "../../commonStyle/CommonStyle";

export default function MerchantModal(props: any) {
    const [open, setOpen] = React.useState(false);
    const [category, setCategory] = React.useState('');
    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
    ];
    React.useEffect(() => {
        setOpen(props.addKeyword)
    }, [props.addKeyword]);

    const handleClose = () => {
        setOpen(false);
    };
    const addClick = () => {
        props.addKeywordClick();
        //API fetch or axios here

    }
    const categoryChange = (e: any) => {
        setCategory(e.target.value)
    }
    return (
        <Dialog
            open={open}
            onClose={props.addIPClick}
            maxWidth='xs'
            style={{ width: '100%' }}
        >
            <DialogTitle
                className='dialog-title'
            >
                Add blocked IP
            </DialogTitle>
            <DialogContent style={{ marginTop: "20px" }}>
                <DialogContentText style={{ marginTop: "20px" }} >
                    <TextField fullWidth label="Blocked keyword" defaultValue="Test" />
                </DialogContentText>
                <FormControl fullWidth sx={{ mt: 2 }}>
                    <InputLabel>Blocked category</InputLabel>
                    <Select
                        value={category}
                        onChange={categoryChange}
                        input={<OutlinedInput label="Blocked Category" />}
                    >
                        {names.map((name) => (
                            <MenuItem
                                key={name}
                                value={name}
                            >
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth sx={{ mt: 2 }}>
                    <InputLabel>Blocked ranges</InputLabel>
                    <Select
                        value={category}
                        onChange={categoryChange}
                        input={<OutlinedInput label="Blocked ranges" />}
                    >
                        {names.map((name) => (
                            <MenuItem
                                key={name}
                                value={name}
                            >
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <DecideButton onClick={props.addKeywordClick} autoFocus>
                    Cancel
                </DecideButton>
                <DecideButton onClick={addClick} autoFocus>
                    Add
                </DecideButton>
            </DialogActions>
        </Dialog>
    );
}
