export default ({children, condition}) => {
  if (condition) {
    return children;
  }
  return false;
};
