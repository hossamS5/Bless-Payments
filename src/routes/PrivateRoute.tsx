import React from "react";
import { Navigate } from "react-router-dom";

import { useStoreAuth } from "../store/auth";

const PrivateRoute = ({
  component: Component,
}: {
  component: React.ComponentType;
}) => {
  const token = useStoreAuth((state) => state.token);

  if (token) {
    return <Component />;
  }
  return <Navigate to="/login" replace />;
};

export default PrivateRoute;
