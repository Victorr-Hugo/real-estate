import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthView, HomeView } from "../views";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/auth" element={<AuthView />} />
      </Routes>
    </BrowserRouter>
  );
}
