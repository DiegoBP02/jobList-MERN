import {
  Landing,
  Error,
  Register,
  ProtectedRoute,
  SharedLayout,
  SingleJob,
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/edit/:id"
          element={
            <ProtectedRoute>
              <SingleJob />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Landing />} index />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
