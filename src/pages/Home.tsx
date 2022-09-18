import React from "react";
import { Avatar, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",

  color: theme.palette.text.secondary,
  position: "relative",

  cursor: "pointer",
  ":hover": {
    boxShadow: "7em rgba(0, 0, 0, 0.4)",
    transform: "scale(1.05)",
    backgroundColor: "lightgray",
  },
}));

const data = [
  {
    title: "Service",
    details: "Adding the service",
    url: "/services",
    src: "/service.jpg"
  },
  {
    title: "Setting",
    details: "Edit setting",
    url: "/settings",
    src: "/settings.jpg"

  },
  {
    title: "User",
    details: "Manage and search users",
    url: "/users",
    src: "/user.jpg"
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ margin: "10% 30px", }}>
        <Grid container justifyContent="center" spacing={4}>
          {data.map((item) => (
            <Grid item xs="auto" sm="auto" md="auto" lg="auto" wrap="nowrap" key={item.title}>
              <Item onClick={() => navigate(item.url)}>
                <img
                  height='300px'
                  width='400px'
                  src={item.src} />
                <br />
                <br />
                <br />
                <Typography
                  sx={{ fontWeight: "bold", fontSize: "14px" }}
                  gutterBottom
                >
                  {item.title}
                </Typography>
                {item.details}
              </Item>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}
