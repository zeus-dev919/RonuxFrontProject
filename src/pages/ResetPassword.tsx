import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  TextField,
  Button,
  Typography,
  FormControl,
  Select,
  MenuItem,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { BlueButton, CustomForm, FormBox } from "./../commonStyle/CommonStyle";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  confirmPwd: yup
    .string()
    .when("password", {
      is: (value: string) => (value && value.length > 0 ? true : false),
      then: yup.string().oneOf([yup.ref("password")], "Passwords do not match"),
    })
    .required("This field is required"),
});

export default function ResetPassword() {
  const [language, setLanguage] = React.useState("English");
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPwd: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      navigate("/sign-in");
    },
  });

  const handleChange = (event: any) => {
    setLanguage(event.target.value as string);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
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
          Reset password
        </Typography>
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Set password"
          type={showPassword ? "text" : "password"}
          value={formik.values.password}
          onChange={formik.handleChange}
          helperText={"At least 8 characters"}
          error={formik.touched.password && Boolean(formik.errors.password)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          id="confirmPwd"
          name="confirmPwd"
          type="password"
          label="Confirm password"
          value={formik.values.confirmPwd}
          onChange={formik.handleChange}
          error={formik.touched.confirmPwd && Boolean(formik.errors.confirmPwd)}
          helperText={formik.touched.confirmPwd && formik.errors.confirmPwd}
        />
        <div style={{ margin: "10px 0px" }}>
          <BlueButton type="submit" style={{ float: "right" }}>
            Confirm
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
