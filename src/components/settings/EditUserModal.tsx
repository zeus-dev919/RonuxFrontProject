import * as React from "react";
import * as yup from "yup";
import {
  TextField,
  Button,
  Box,
  Divider,
  Dialog,
  DialogTitle
} from "@mui/material";
import { BlueButton, CustomForm, MuiChip } from "../../commonStyle/CommonStyle";
import { useFormik } from "formik";
import axios from 'axios';


const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  username: yup
    .string()
    .required("Username is required"),
  telephone: yup
    .number()
    .required("Telephone is required"),
});


export default function EditUserModal(props: any) {
  const [open, setOpen] = React.useState(false);
  const BASE_URL = process.env.REACT_APP_API;
  console.log(props.row.id);
  const formik = useFormik({
    initialValues: {
      email: props.row.email,
      username: props.row.username,
      telephone: props.row.telephone
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios.post(`${BASE_URL}/users/update/${props.row.id}`, {
        email: values.email,
        username: values.username,
        telephone: values.telephone,
      },).then(result => {
        console.log(result);
        handleClose();
        props.getUserlist();
      }).catch((error) => console.log(error));

    },
  });
  //handle functions
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const unblockClick = () => {
    handleClose();

  }

  return (
    <Box>
      <Box onClick={handleClickOpen}>
        <MuiChip label="Edit user" />
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth='xs'
        style={{ width: '100%' }}
      >
        <DialogTitle className='dialog-title'>Edit user</DialogTitle>
        <CustomForm onSubmit={formik.handleSubmit}>
          <TextField
            id="username"
            name="username"
            label="Username"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
          // helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            name="telephone"
            label="Telephone"
            value={formik.values.telephone}
            onChange={formik.handleChange}
            error={formik.touched.telephone && Boolean(formik.errors.telephone)}
          // helperText={formik.touched.telephone && formik.errors.telephone}
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
          // helperText={formik.touched.email && formik.errors.email}
          />
          <Box style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Button
              className="normal-text round-button"
              onClick={handleClose}
              sx={{ mr: 2 }}
            >
              Cancel
            </Button>
            <BlueButton type="submit" style={{ float: "right" }}>
              Edit
            </BlueButton>
          </Box>
        </CustomForm>
      </Dialog>
    </Box >
  );
}
