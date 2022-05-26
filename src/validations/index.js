import * as Yup from "yup";

export const LoginValidate = Yup.object({
  email: Yup.string()
    .email("Email Format Is Invalid")
    .required("Email Is Required"),
  password: Yup.string().required("Password Is Requaired"),
});
export const RegisterValidate = Yup.object({
  name: Yup.string()
    .max(15, "Name Most Be Less Then 15 Characters")
    .required("Name Is Required"),
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
export const AddProperty = Yup.object({
  property_type_id: Yup.number().required("Property type is required"),
  name: Yup.string()
    .max(15, "Name Most Be Less Then 15 Characters")
    .required("Name Is Required"),
  description: Yup.string()
    .max(15, "Description most be less than 15 Characters")
    .required("Description Is Required"),
  images: Yup.array().required("you most at least add one image"),
  address: Yup.object().required(),
  city_id: Yup.number().required("you must choose a city"),
  full:""
});
