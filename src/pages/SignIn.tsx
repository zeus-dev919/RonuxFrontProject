import React from "react";
import { useDispatch } from "react-redux";
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
  Box
} from "@mui/material";
import axios from "axios";
import { BlueButton, CustomForm, FormBox } from "./../commonStyle/CommonStyle";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { IS_LOGIN } from "../actions/actionType";
import { useSnackbar } from "notistack";

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
const BASE_URL = process.env.REACT_APP_API;

export default function SignIn() {

  const [showPassword, setShowPassword] = React.useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios.post(`${BASE_URL}/users/sign-in`, {
        email: values.email,
        password: values.password
      }).then((res) => {
        localStorage.setItem('user', JSON.stringify(res.data.data[0]));
        dispatch({ type: IS_LOGIN, payload: res.data.data[0] });
        navigate("/");
        enqueueSnackbar('ログインしました', { variant: 'success' });
      })
        .catch((error) => {
          enqueueSnackbar(error.response.data.msg, { variant: 'error' });
        });
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormBox>
      <Box width='500px'>
        <CustomForm sx={{
          border: "1px solid lightgray",
          borderRadius: "4px",
        }} onSubmit={formik.handleSubmit}>
          <img
            src="icon.png"
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
            <span style={{ fontWeight: "bold" }}>Salon Admin</span>
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
          <Box style={{ margin: "10px 0px" }}>
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
          </Box>
        </CustomForm>
      </Box>
    </FormBox>
  );
}
