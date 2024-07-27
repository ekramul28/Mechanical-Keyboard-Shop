import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { Navigate } from "react-router-dom";

const ProviderLogin = ({ children }: { children: ReactNode }) => {
  const user = useAppSelector((state: RootState) => state.auth.user);

  if (!user?.email) {
    return <Navigate to="/login" replace></Navigate>;
  }
  return children;
};

export default ProviderLogin;
