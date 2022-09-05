import React from "react";
import { TextField, InputAdornment, } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

export default function JobSearch() {

  const [showClearIcon, setShowClearIcon] = React.useState("none");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
  };

  const handleClick = (): void => {
    // TODO: Clear the search input
    console.log("clicked the clear icon...");
  };
  return (
    <TextField
      fullWidth
      size="small"
      variant="outlined"
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        )
      }}
    />
  )
}