export const logout = (navigate) => {
  // Remove auth related data
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  localStorage.removeItem("isAdmin");

  // Redirect to login
  window.location.href = "/auth/login";
};
