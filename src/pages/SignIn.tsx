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
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

export default function SignIn() {
  const [language, setLanguage] = React.useState("English");
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      navigate("/");
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
          <span>Sign in </span>
          <span style={{ fontWeight: "bold" }}>Rounx Admin</span>
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
        <FormControl>
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            helperText={formik.touched.password && formik.errors.password}
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
        </FormControl>
        <div style={{ margin: "10px 0px" }}>
          <Button
            className="normal-text round-button"
            variant="outlined"
            onClick={() => navigate("/forgot-password")}
          >
            Forgot password?
          </Button>
          <BlueButton type="submit" style={{ float: "right" }}>
            Sign in
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
