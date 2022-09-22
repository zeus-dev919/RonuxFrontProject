
import * as React from "react";
import {
    Table,
    TableContainer,
    TableFooter,
    Paper,
    Typography,
    Toolbar,
    Box,
    Divider,
    ListItem
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Pagination from "../components/Pagination";
import { CustomTableHeadWithTwoActions, TableBox } from "../commonStyle/CommonStyle";
import axios from "axios";
import ServicesTableBody from "../components/services/ServicesTableBody";
import AddServiceModal from "../components/services/AddServiceModal";

const BASE_URL = process.env.REACT_APP_API;

export default function Service() {
    const tableHeader = ["Name", "Created Time", "Price", "description", "Time Slot"];
    const [servicelist, setServicelist] = React.useState([]);
    const [addUserOpen, setAddUserOpen] = React.useState(false);
    const getServicelist = async () => {
        const res = await axios.get(`${BASE_URL}/menu/menulist`);
        console.log('ok');
        setServicelist(res.data);
    }
    React.useEffect(() => {
        getServicelist();
    }, []);
    //const rows = data;

    //handle event
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAddUserOpen(true);
    };
    const handleClose = () => {
        setAddUserOpen(false);
    }

    return (
        <>
            <ListItem>
                <Typography ml={1}> Services </Typography>
            </ListItem>
            <Divider />
            <TableBox>
                <Box className="user-admin-console-container">
                    <Toolbar className="user-admin-console-toolbar">
                        <Typography className="user-admin-console-typography">
                            Currently showing all services
                        </Typography>
                    </Toolbar>
                    <Box className="admin-user-console-choose">
                        <Box onClick={handleClick} className="user-admin-console-add-filters">
                            <AddIcon />
                            Add service
                        </Box>
                    </Box>
                    <AddServiceModal open={addUserOpen} handleClose={handleClose} getServicelist={getServicelist} />
                    <TableContainer component={Paper}>
                        <Table>
                            <CustomTableHeadWithTwoActions name={tableHeader} />
                            <ServicesTableBody rows={servicelist} getServicelist={getServicelist} />
                            <TableFooter>
                                <Pagination rows={servicelist} />
                            </TableFooter>
                        </Table>
                    </TableContainer>
                </Box>
            </TableBox>
        </>
    )
}
