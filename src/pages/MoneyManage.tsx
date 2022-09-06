import React from "react";
import { Button, Grid, ListItem, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import CheckboxList from "../components/moneyManage/CheckboxList";

const CreateRoleButton = styled(Button)({
    borderRadius: 20,
    marginLeft: 20,
    marginTop: 40,
    textTransform: "none",
});

const CustomPaper = styled(Paper)({
    height: "100vh",
    borderRadius: 0,
});

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
                    <CustomPaper variant="outlined">
                        <CheckboxList />
                    </CustomPaper>
                </Grid>
                <Grid item xs={10}>

                </Grid>
            </Grid>
        </>
    );
}
