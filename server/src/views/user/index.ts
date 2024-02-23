import createUser from './createuser';
import loginUser from './loginuser';

const userViews = Object.freeze({
    createUserViews: createUser,
    loginUserViews: loginUser
})

export default userViews;
