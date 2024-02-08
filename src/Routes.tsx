import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginForm } from "./components/LoginForm";
import { AppPrivate } from "./components/AppPrivate";

export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/app" element={<AppPrivate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
