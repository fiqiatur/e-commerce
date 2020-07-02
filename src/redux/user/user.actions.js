import { userActionTypes } from "./user.type.js";

export const setCurrentUser = (user) => ({
   type: userActionTypes.SET_CURRENT_USER,
   payload: user,
});
