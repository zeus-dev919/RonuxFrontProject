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
import { useNavigate } from 'react-router-dom';
export default function AccountPaper() {
    let navigate = useNavigate();
    return (
        <Paper sx={{ padding: '10px', marginRight: '10px' }} variant='outlined'>
            <Typography>Account Balance</Typography>
            <Typography>Available balance(CNY)</Typography>
            <Typography>100</Typography>
            <BlueButton onClick={() => navigate('/transactions')}>View transaction history</BlueButton>
        </Paper>
    )
}