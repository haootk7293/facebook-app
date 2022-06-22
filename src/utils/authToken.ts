export const getStoredAuthToken = () => localStorage.getItem('authToken');

export const getStoredUserInfo = () => {
  return {
    user_id: localStorage.getItem('user_id'),
    username: localStorage.getItem('username'),
    first_name: localStorage.getItem('first_name'),
    last_name: localStorage.getItem('last_name'),
    profile_image: localStorage.getItem('profile_image'),
    cover_image: localStorage.getItem('cover_image'),
    description: localStorage.getItem('description'),
    current_city: localStorage.getItem('current_city'),
    school: localStorage.getItem('school'),
    workplace: localStorage.getItem('workplace'),
  };
};

export const storeAuthToken = (token: string) =>
  localStorage.setItem('authToken', token);

export const storeUserInfo = (user_info: any) => {
  localStorage.setItem('user_id', user_info.user_id);
  localStorage.setItem('username', user_info.username);
  localStorage.setItem('first_name', user_info.first_name);
  localStorage.setItem('last_name', user_info.last_name);
  localStorage.setItem('profile_image', user_info.profile_image);
  localStorage.setItem('cover_image', user_info.cover_image);
  localStorage.setItem('description', user_info.description);
  localStorage.setItem('current_city', user_info.current_city);
  localStorage.setItem('school', user_info.school);
  localStorage.setItem('workplace', user_info.workplace);
};

export const removeStoredAuthToken = () => localStorage.clear();
