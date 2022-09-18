
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
import SettingsTableBody from "../components/settings/SettingsTableBody";

const BASE_URL = process.env.REACT_APP_API;

export default function Setting() {
    const tableHeader = ["Username", "Time", "Reservation name", "Price"];
    const [settinglist, setSettinglist] = React.useState([]);
    // const [addUserOpen, setAddUserOpen] = React.useState(false);
    const getSettinglist = async () => {
        const res = await axios.get(`${BASE_URL}/reservation/list`);
        setSettinglist(res.data);
    }
    React.useEffect(() => {
        getSettinglist();
    }, []);
    //const rows = data;

    //handle event
    // const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    //     setAddUserOpen(true);
    // };
    // const handleClose = () => {
    //     setAddUserOpen(false);
    // }

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
                    {/* <Box className="admin-user-console-choose">
                        <Box onClick={handleClick} className="user-admin-console-add-filters">
                            <AddIcon />
                            Add service
                        </Box>
                    </Box> */}
                    {/* <AddServiceModal open={addUserOpen} handleClose={handleClose} getServicelist={getServicelist} /> */}
                    <TableContainer component={Paper}>
                        <Table>
                            <CustomTableHeadWithTwoActions name={tableHeader} />
                            <SettingsTableBody rows={settinglist} getServicelist={getSettinglist} />
                            <TableFooter>
                                <Pagination rows={settinglist} />
                            </TableFooter>
                        </Table>
                    </TableContainer>
                </Box>
            </TableBox>
        </>
    )
}
