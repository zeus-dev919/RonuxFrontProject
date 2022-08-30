import * as React from "react";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { styled } from "@mui/material/styles";
import ModifyVersionModal from "./ModifyVersionModal";

const GrayButton = styled(Button)({
  textTransform: "none",
  height: 'fit-content',
  marginTop: '30px',
  borderRadius: 30,
  marginRight: 20,
  ":hover": {
    backgroundColor: "lightblue",
  },
});

export default function MoreOptionButton() {
  const options = ["Modify version", "Delete version", "Release version"];

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<any>(null);
  const [selectedIndex, setSelectedIndex] = React.useState<any>(1);
  const [modifyVersionOpen, setModifyVersionOpen] = React.useState(false);

  const handleMenuItemClick = (event: any, index: Number) => {
    setSelectedIndex(index);
    setOpen(false);
    if (index === 0) setModifyVersionOpen(true);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: any) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <React.Fragment>
      <GrayButton
        variant="outlined"
        ref={anchorRef}
        onClick={handleToggle}
      >
        More operations
        <ArrowDropDownIcon />
      </GrayButton>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper style={{ width: "150px" }}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      disabled={index === 3}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      {modifyVersionOpen && (
        <ModifyVersionModal onClose={() => setModifyVersionOpen(false)} />
      )}
    </React.Fragment>
  );
}
