import React from 'react';
import {
    Table,
    TableContainer,
    TableFooter,
    Paper,
    Divider,
    Toolbar,
    ListItem,
    Typography,
    Box
} from "@mui/material";
import { BlueButton } from '../../commonStyle/CommonStyle';

export default function AccountPaper() {
    return (
        <Paper sx={{ padding: '10px' }} variant='outlined'>
            <Typography>Account Balance</Typography>
            <Typography>Available balance(CNY)</Typography>
            <Typography>100</Typography>
            <BlueButton>View transaction history</BlueButton>
        </Paper>
    )
}