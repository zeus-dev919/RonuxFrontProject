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
  description: yup
    .string()
    .required("Email is required"),
  name: yup
    .string()
    .required("Username is required"),
  price: yup
    .number()
    .required("Price is required"),
});


export default function EditServiceModal(props: any) {
  const [open, setOpen] = React.useState(false);
  const BASE_URL = process.env.REACT_APP_API;
  console.log(props.row.id);
  const formik = useFormik({
    initialValues: {
      description: props.row.description,
      name: props.row.name,
      price: props.row.price
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios.post(`${BASE_URL}/menu/update/${props.row.id}`, {
        description: values.description,
        name: values.name,
        price: values.price,
      },).then(result => {
        console.log(result);
        handleClose();
        props.getServicelist();
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
  return (
    <Box>
      <Box onClick={handleClickOpen}>
        <MuiChip label="Edit service" />
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth='xs'
        style={{ width: '100%' }}
      >
        <DialogTitle className='dialog-title'>Edit service</DialogTitle>
        <CustomForm onSubmit={formik.handleSubmit}>
          <TextField
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
          //helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            id="price"
            name="price"
            label="Price"
            value={formik.values.price}
            onChange={formik.handleChange}
            error={formik.touched.price && Boolean(formik.errors.price)}
          // helperText={formik.touched.telephone && formik.errors.telephone}
          />
          <Divider />
          <TextField
            fullWidth
            id="description"
            name="description"
            label="Description"
            value={formik.values.description}
            onChange={formik.handleChange}
            error={formik.touched.description && Boolean(formik.errors.description)}
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
