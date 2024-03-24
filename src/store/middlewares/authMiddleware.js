import { loginUser, logout } from "../slices/auth-slices/loginSlice";

export const authMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (action.type === `${loginUser.typePrefix}/fulfilled`) {
    const authToken = action.payload.token.access;
    localStorage.setItem("accessToken", authToken);
    console.log("middleware", action.payload);
  }
  if (action.type === logout.type) {
    localStorage.removeItem("accessToken");
  }
  return result;
};
