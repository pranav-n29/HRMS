// Auth Guard
function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}

function requireAuth(role = null) {
  const user = getUser();
  if (!user) location.href = "../index.html";
  if (role && user.role !== role) location.href = "../index.html";
}

function logout() {
  localStorage.removeItem("user");
  location.href = "../index.html";
}
