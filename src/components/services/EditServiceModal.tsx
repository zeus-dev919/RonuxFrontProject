import * as React from "react";
import * as yup from "yup";
import {
  TextField,
  Button,
  Box,
  Divider,
  Dialog,
  DialogTitle,
  InputAdornment
} from "@mui/material";
import { BlueButton, CustomForm, MuiChip } from "../../commonStyle/CommonStyle";
import { useFormik } from "formik";
import axios from 'axios';
import { useSnackbar } from "notistack";


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
  timeSlot: yup
    .number().integer().positive()
    .required("TimeSlot is required"),
});


export default function EditServiceModal(props: any) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [open, setOpen] = React.useState(false);
  const BASE_URL = process.env.REACT_APP_API;
  const formik = useFormik({
    initialValues: {
      description: `${props.row.description}`,
      name: `${props.row.name}`,
      price: `${props.row.price}`,
      timeSlot: `${props.row.time_slot}`
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios.post(`${BASE_URL}/menu/update/${props.row.id}`, {
        description: values.description,
        name: values.name,
        price: values.price,
        time_slot: values.timeSlot,
      },).then(result => {
        console.log(result);
        handleClose();
        props.getServicelist();
        enqueueSnackbar('Successfully updated', { variant: 'success' });
      }).catch((error) => {
        enqueueSnackbar('error occured', { variant: 'error' })
      });

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
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            name="price"
            label="Price"
            type='number'
            value={formik.values.price}
            onChange={formik.handleChange}
            error={formik.touched.price && Boolean(formik.errors.price)}
            helperText={formik.touched.price && formik.errors.price}
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>
            }}
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
            helperText={formik.touched.description && formik.errors.description}
          />
          <TextField
            type="number"
            name="timeSlot"
            label="Time Slot"
            value={formik.values.timeSlot}
            onChange={formik.handleChange}
            error={formik.touched.timeSlot && Boolean(formik.errors.timeSlot)}
            helperText={formik.touched.timeSlot && formik.errors.timeSlot}
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
