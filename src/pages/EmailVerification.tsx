import React from "react";
import { useFormik } from "formik";
import { CustomForm, FormBox, BlueButton } from "../commonStyle/CommonStyle";
import * as yup from "yup";
import {
  TextField,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  code: yup.string().required("Code is required"),
});

export default function EmailVerification() {
  const [language, setLanguage] = React.useState("English");
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema,
    onSubmit: (values) => {
      navigate("/reset-password");
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
          Verification email
        </Typography>
        <Typography
          style={{
            fontSize: "16px",
            textAlign: "center",
            marginTop: "-30px",
            marginBottom: "20px",
          }}
        >
          An email with a verification code was just sent to
          <br />
          <span style={{ fontWeight: "bold" }}>usertcqq@gmail.com</span>
        </Typography>
        <TextField
          fullWidth
          id="code"
          name="code"
          label="Verification code"
          value={formik.values.code}
          onChange={formik.handleChange}
          error={formik.touched.code && Boolean(formik.errors.code)}
          helperText={formik.touched.code && formik.errors.code}
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
