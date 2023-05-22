export const setScrollPermission = (allow: boolean) => {
  document.body.style.overflowY = allow ? 'auto' : 'hidden';
};
