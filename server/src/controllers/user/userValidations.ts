import Joi from 'joi';

const createUserValidation = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    contactNo: Joi.string().min(10).max(10),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    recoverCode: Joi.number().min(3),
    assignTask: Joi.string(),
    createdTask: Joi.string(),
});

export { createUserValidation };
