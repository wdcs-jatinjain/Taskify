import * as yup from 'yup';

const registerUserValidation = yup.object().shape({
    name: yup.string().matches(new RegExp(/^[a-zA-Z][a-zA-Z\s]*$/)).min(3).max(30).required('Minimum 3 characters required'),
    contactNo: yup.string().min(10).max(10),
    email: yup.string().min(3, 'must be at least 3 characters long').email('must be a valid email').required(),
    password: yup.string().matches(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/)).required('1 special character,Number & Alphabate'),
    recoverCode: yup.number().min(3),
    assignTask: yup.string(),
    createdTask: yup.string(),
});

export { registerUserValidation };
