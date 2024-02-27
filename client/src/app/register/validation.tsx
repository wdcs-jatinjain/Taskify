import * as yup from 'yup';

const registerUserValidation = yup.object().shape({
    name: yup.string().matches(RegExp(/^[a-zA-Z][a-zA-Z\s]*$/), 'Minimum 3 characters required').min(3).max(30).required('required field'),
    email: yup.string().min(3).email('must be a valid email').required('required field'),
    password: yup.string().matches(RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/), '1 special character,Number & Alphabate').required('required field'),
    contactNo: yup.number()
        .typeError("That doesn't look like a phone number")
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .min(8)
        .max(10),
    recoverCode: yup.number().min(3),
    assignTask: yup.string(),
    createdTask: yup.string(),
});

const loginUserValidation = yup.object().shape({
    email: yup.string().email('must be a valid email').required('required field'),
    password: yup.string().matches(RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/), '1 special character,Number & Alphabate').required('required field'),

})





export { loginUserValidation };
export { registerUserValidation };
