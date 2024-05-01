import "react/jsx-runtime";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
const Map = () => {
  const data = useSelector((state) => {
    var _a;
    return (_a = state.websiteDates.websiteDates.footer) == null ? void 0 : _a.map;
  });
  if (!data) {
    return "";
  }
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return "";
};
export {
  Map as default
};
