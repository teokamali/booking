import * as Yup from "yup";

export const LoginValidate = Yup.object({
	email: Yup.string().email("Email Format Is Invalid").required("Email Is Required"),
	password: Yup.string().required("Password Is Requaired"),
});
export const RegisterValidate = Yup.object({
	name: Yup.string().max(15, "Name Most Be Less Then 15 Characters").required("Name Is Required"),
	fname: Yup.string()
		.max(15, "Family Name  Most Be Less Then 15 Characters")
		.required("Family Name Is Required"),
	email: Yup.string().email("Email Invalid").required("Email Is Required"),
	password: Yup.string()
		.min(8, "password most be at least 8 characters")
		.required("Password Feild Is Requaired For Changes"),
	confirmPass: Yup.string()
		.oneOf([Yup.ref("password"), null], "Passwords Are Not Match")
		.required("You Need To Confirm Your Password"),
});
export const AddPropertyValidate = Yup.object({
	property_type_id: Yup.number().required("Property type is required"),
	city_id: Yup.number().required("You Most Select your City"),
	name: Yup.string().max(15, "Name Most Be Less Then 15 Characters").required("Name Is Required"),
	description: Yup.string()
		.min(15, "Description most at least 15 Characters")
		.required("Description Is Required"),
	full: Yup.string().required("Full Address is required"),
	subtitle: Yup.string()
		.max(20, "please write a shorter subtitle")
		.required("subtitle is required"),
});

export const AddUnitValidate = Yup.object({
	property_id: Yup.number().required("please Select a Property"),
	name: Yup.string()
		.required("Enter a Name for your unit")
		.min(4, "name must be at least 4 characters")
		.max(24, "Name must be at most 24 characters"),
	adults_sleeps_count: Yup.number(),
	kids_sleeps_count: Yup.number(),
	price: Yup.number("Invalid Price").required("You must enter a Price for your unit"),
	bedrooms_count: Yup.number(),
	description: Yup.string()
		.required("Enter a Description for your unit")
		.min(3, "Description must be at least 4 characters"),
	unit_count: Yup.number(),
	beds: Yup.array()
		.of(
			Yup.object().shape({
				bed_type_id: Yup.mixed().required("you must select your bed type"),
				count: Yup.number(),
			})
		)
		.required("You must enter your bed types"),
});
export const addSurroundingValidation = Yup.object({
	property_id: Yup.number().required("please Select a Property"),
	surrounding_category_id: Yup.number().required("please Select a Category"),
	surrounding_name: Yup.string()
		.required("Enter a Name For Surrounding")
		.min(4, "Nmae must be at least 4 characters"),
});
export const addFaq = Yup.object({
	property_id: Yup.number().required("please Select a Property"),
	question: Yup.string()
		.min(10, "Question Must Be At Least 10 Charachters")
		.required("Question Field Is Requierd"),
	answer: Yup.string()
		.min(10, "Answer Must Be At Least 10 Charachters")
		.required("Answer Field Is Requierd"),
});
