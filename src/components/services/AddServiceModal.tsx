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
    description: yup
        .string()
        .required("Email is required"),
    name: yup
        .string()
        .required("Username is required"),
    price: yup
        .number()
        .required("Telephone is required"),
});

export default function AddServiceModal(props: any) {
    const [showPassword, setShowPassword] = React.useState(false);
    const BASE_URL = process.env.REACT_APP_API;

    const formik = useFormik({
        initialValues: {
            description: "",
            password: "",
            confirmPwd: "",
            name: "",
            price: ""
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            axios.post(`${BASE_URL}/menu/add`, {
                description: values.description,
                name: values.name,
                price: values.price,
            }).then(result => {
                props.handleClose();
                props.getServicelist();
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
            <DialogTitle className='dialog-title'>Add service</DialogTitle>
            <CustomForm onSubmit={formik.handleSubmit}>

                <TextField
                    id="name"
                    name="name"
                    label="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                    name="price"
                    label="Price"
                    value={formik.values.price}
                    onChange={formik.handleChange}
                    error={formik.touched.price && Boolean(formik.errors.price)}
                    helperText={formik.touched.price && formik.errors.price}
                />
                <TextField
                    fullWidth
                    multiline
                    id="description"
                    name="description"
                    label="Description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    error={formik.touched.description && Boolean(formik.errors.description)}
                    helperText={formik.touched.description && formik.errors.description}
                />
                <Box style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Button
                        className="normal-text round-button"
                        onClick={props.handleClose}
                        sx={{ mr: 2 }}
                    >
                        Cancel
                    </Button>
                    <BlueButton type="submit" style={{ float: "right" }}>
                        Add
                    </BlueButton>
                </Box>
            </CustomForm>
        </Dialog>


    );
}
