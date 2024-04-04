import createUser from './createuser';
import getUser from './finduser';
import getUserData from './getuserdata';
import loginUser from './loginuser';

const userViews = Object.freeze({
    createUserViews: createUser,
    loginUserViews: loginUser,
    getUserViews: getUser,
    getUserDataViews: getUserData,

})

export default userViews;
