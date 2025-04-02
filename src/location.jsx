import { useLocation } from "react-router-dom";

const useCustomLocation = () => {
  const location = useLocation();
  return location;
};

export default useCustomLocation;