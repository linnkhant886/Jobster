export const addToLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const RemoveFromLocalStorage = () => {
  localStorage.removeItem('user');
};

export const GetUserFromLocalStorage = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null;
  return user;
};
