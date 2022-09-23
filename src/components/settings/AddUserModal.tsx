import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
    TextField,
    Button,
    InputAdornment,
    IconButton,
    Box,
    Divider,
    Dialog,
    DialogTitle
} from "@mui/material";
import { BlueButton, CustomForm, FlexBox, FormBox } from "../../commonStyle/CommonStyle";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const validationSchema = yup.object({
    email: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required"),
    password: yup
        .string()
        .min(8, "Password should be of minimum 8 characters length")
        .required("Password is required"),
    username: yup
        .string()
        .required("Username is required"),
    telephone: yup
        .string().matches(/^[0-9]{10,11}$/i, 'Phone number is not valid')
        .required("Telephone is required"),
    confirmPwd: yup
        .string()
        .when("password", {
            is: (value: string) => (value && value.length > 0 ? true : false),
            then: yup.string().oneOf([yup.ref("password")], "Passwords do not match"),
        })
        .required("This field is required"),
});

export default function AddUserModal(props: any) {
    const [language, setLanguage] = React.useState("English");
    const [showPassword, setShowPassword] = React.useState(false);
    const BASE_URL = process.env.REACT_APP_API;

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmPwd: "",
            username: "",
            telephone: ""
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            axios.post(`${BASE_URL}/users/add`, {
                email: values.email,
                password: values.password,
                username: values.username,
                telephone: values.telephone,
            }).then(result => {
                console.log(result);
                props.handleClose();
                props.getUserlist();
            }).catch((error) => console.log(error));

        },
    });

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Dialog
            open={props.open}
            onClose={props.handleClose}
            maxWidth='xs'
            style={{ width: '100%' }}
        >
            <DialogTitle className='dialog-title'>Add user</DialogTitle>
            <CustomForm onSubmit={formik.handleSubmit}>
                <img
                    src="icon.png"
                    alt="Salon admin"
                    width="90px"
                    height="90px"
                    style={{ color: "#336def", alignSelf: "center" }}
                />
                <TextField
                    id="username"
                    name="username"
                    label="Username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={formik.touched.username && Boolean(formik.errors.username)}
                    helperText={formik.touched.username && formik.errors.username}
                />
                <TextField
                    name="telephone"
                    label="Telephone"
                    value={formik.values.telephone}
                    onChange={formik.handleChange}
                    error={formik.touched.telephone && Boolean(formik.errors.telephone)}
                    helperText={formik.touched.telephone && formik.errors.telephone}
                />
                <Divider />
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
                <FlexBox sx={{ justifyContent: 'space-between' }}>
                    <TextField
                        sx={{ mr: 2 }}
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
                        style={{ float: 'right' }}
                        id="confirmPwd"
                        name="confirmPwd"
                        type="password"
                        label="Confirm password"
                        value={formik.values.confirmPwd}
                        onChange={formik.handleChange}
                        error={formik.touched.confirmPwd && Boolean(formik.errors.confirmPwd)}
                        helperText={formik.touched.confirmPwd && formik.errors.confirmPwd}
                    />
                </FlexBox>
                <Box style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Button
                        className="normal-text round-button"
                        onClick={props.handleClose}
                        sx={{ mr: 2 }}
                    >
                        Cancel
                    </Button>
                    <BlueButton type="submit" style={{ float: "right" }}>
                        Register
                    </BlueButton>
                </Box>
            </CustomForm>
        </Dialog>


    );
}
