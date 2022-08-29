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
  height: "135px",
  width: "135px",
  cursor: "pointer",
  ":hover": {
    boxShadow: "7em rgba(0, 0, 0, 0.4)",
    transform: "scale(1.05)",
    backgroundColor: "lightgray",
  },
}));

const data = [
  {
    title: "Privacy & Terms",
    details: "Update privacy and terms",
    url: "/terms",
  },
  { title: "App release", details: "Manage and release app", url: "/admins" },
  {
    title: "Administrator",
    details: "Add and specify adminstrators",
    url: "/admins",
  },
  { title: "User", details: "Manage and search users", url: "/users" },
  {
    title: "Blocked IP",
    details: "Add and manage blocked IPs",
    url: "/blocked-ips",
  },
  {
    title: "Blocked keyword",
    details: "Add and manage blocked keywords",
    url: "/blocked-keywords",
  },
  {
    title: "Admin activity log",
    details: "Manage admin activity logs",
    url: "/activity-admins",
  },
  {
    title: "User activity log",
    details: "Manage user activity logs",
    url: "/activity-users",
  },
  {
    title: "Occuptation & skills",
    details: "Manage occuptation and skills",
    url: "/skills",
  },

  {
    title: "Suggested skill",
    details: "Manage user and suggested skills",
    url: "/admins",
  },
  {
    title: "Review identity",
    details: "Review freelancers identity verification",
    url: "/identities",
  },
  {
    title: "Review freelancer",
    details: "Review freelancer profile",
    url: "/freelancers",
  },
  { title: "Review job", details: "Review client jobs", url: "/admins" },
  { title: "Review report", details: "Review user reports", url: "/admins" },
  { title: "Job proposal", details: "Manage job proposals", url: "/admins" },
  {
    title: "Job invitation",
    details: "Manage job invitations",
    url: "/admins",
  },
  { title: "User feedback", details: "Manage user feedback", url: "/admins" },
  { title: "Help doc", details: "Manage help doc", url: "/admins" },
  { title: "Rounx blog", details: "Manage ronux blog", url: "/admins" },
  { title: "Job contract", details: "Review job contracts", url: "/admins" },
  {
    title: "Meditation center",
    details: "Arbitration dispute contracts",
    url: "/admins",
  },
  {
    title: "Transaction history",
    details: "Manage transaction histories",
    url: "/admins",
  },
  { title: "Money manage", details: "Manage account moneys", url: "/admins" },
  { title: "Data analysis", details: "View data analysis", url: "/admins" },
];

export default function RonuxAdmin() {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ margin: "50px 30px" }}>
        <Grid container wrap="wrap" justifyContent="center" spacing={2}>
          {data.map((item) => (
            <Grid item xs="auto" wrap="nowrap" key={item.title}>
              <Item onClick={() => navigate(item.url)}>
                <Avatar
                  style={{
                    backgroundColor: "black",
                    margin: "auto",
                    width: "35%",
                    height: "35%",
                    marginBottom: "20px",
                  }}
                />
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
