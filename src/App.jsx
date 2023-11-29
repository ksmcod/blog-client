import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import RootLayout from "./layouts/RootLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Private from "./components/Private";
import Public from "./components/Public";
import NewBlog from "./pages/NewBlog";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/new-blog" element={<NewBlog />} />

        {/* ROUTES THAT CANNOT BE ACCESSED WHILE BEING LOGGED IN */}
        <Route path="" element={<Public />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* PROTECTED ROUTES */}
        <Route path="" element={<Private />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
