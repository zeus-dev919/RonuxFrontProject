import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { CustomForm, FormBox, BlueButton } from "../commonStyle/CommonStyle";
import {
  TextField,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
});

export default function ForgotPassword() {
  const [language, setLanguage] = React.useState("English");
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      navigate("/verification-email");
    },
  });

  const handleChange = (event: any) => {
    setLanguage(event.target.value as string);
  };

  return (
    <FormBox>
      <CustomForm onSubmit={formik.handleSubmit}>
        <img
          src="logo.png"
          alt="Rounx admin"
          width="90px"
          height="90px"
          style={{ color: "#336def", alignSelf: "center" }}
        />
        <Typography
          style={{
            fontSize: "20px",
            textAlign: "center",
            marginTop: "-10px",
            marginBottom: "20px",
          }}
        >
          <span>Forgot password</span>
        </Typography>
        <Typography
          style={{
            fontSize: "16px",
            textAlign: "center",
            marginTop: "-30px",
            marginBottom: "20px",
          }}
        >
          Please enter your email, we will send you
          <br />a verification code
        </Typography>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <div style={{ margin: "10px 0px" }}>
          <BlueButton type="submit" style={{ float: "right" }}>
            Next
          </BlueButton>
        </div>
      </CustomForm>
      <FormControl sx={{ minWidth: "180px" }}>
        <Select defaultValue="English" value={language} onChange={handleChange}>
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="Chinese">Chinese</MenuItem>
        </Select>
      </FormControl>
    </FormBox>
  );
}
