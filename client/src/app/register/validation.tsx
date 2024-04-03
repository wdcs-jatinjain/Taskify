import * as yup from 'yup';

const registerUserValidation = yup.object().shape({
    name: yup.string().min(3).max(30).required('required field'),
    email: yup.string().email('must be a valid email').required('required field'),
    password:yup.string()
    .matches(
       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
       {
         message: "Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 6 characters long."
       }
    )
    .required('Password is a required field'),
    contactNo: yup.string()
        .typeError("That doesn't look like a phone number")
        .length(10),
    catagories: yup.string().required('Category selection is required'),
    recoverCode: yup.number().min(3),
    assignTask: yup.string(),
    createdTask: yup.string(),
});

const loginUserValidation = yup.object().shape({
    email: yup.string().email('must be a valid email').required('required field'),
    password: yup.string().matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
        {
          message: "Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 6 characters long."
        }
     )

})





export { loginUserValidation };
export { registerUserValidation };
