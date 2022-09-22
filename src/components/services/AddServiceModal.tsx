import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
	TextField,
	Button,
	InputAdornment,
	Box,
	Divider,
	Dialog,
	DialogTitle
} from "@mui/material";
import { BlueButton, CustomForm } from "../../commonStyle/CommonStyle";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const validationSchema = yup.object({
	description: yup
		.string()
		.required("Description is required"),
	name: yup
		.string()
		.required("Username is required"),
	price: yup
		.number().positive()
		.required("Telephone is required"),
	timeSlot: yup
		.number().integer().positive()
		.required("TimeSlot is required"),
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
			price: "",
			timeSlot: ""
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			axios.post(`${BASE_URL}/menu/add`, {
				description: values.description,
				name: values.name,
				price: values.price,
				time_slot: values.timeSlot,
			}).then(result => {
				props.handleClose();
				props.getServicelist();
			}).catch((error) => console.log(error));

		},
	});

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
					type='number'
					value={formik.values.price}
					onChange={formik.handleChange}
					error={formik.touched.price && Boolean(formik.errors.price)}
					helperText={formik.touched.price && formik.errors.price}
					InputProps={{
						startAdornment: <InputAdornment position="start">$</InputAdornment>
					}}
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
