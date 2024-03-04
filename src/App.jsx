import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Movies from "./pages/Movies";
import MainMeny from "./pages/MainMeny";
import TvSeries from "./pages/TvSeries";
import Bookmarks from "./pages/Bookmarks";
import Layout from "./layout/layout";

function useAuthentication() {
  const [user, setUser] = useState(localStorage.getItem("user"));

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(localStorage.getItem("user"));
    }
  }, []);

  return user;
}

function ProtectedRoute({ children }) {
  const user = useAuthentication();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

function App() {
  return (
    //! chatGPT protected qilish uchun chatGPT dan yordam oldim

    // <div className="bg-[#10141E]">
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={
    //         <ProtectedRoute>
    //           <Navigate to="/login" />
    //         </ProtectedRoute>
    //       }
    //     />
    //     <Route path="/login" element={<Login />} />
    //     <Route index path="/register" element={<Register />} />
    //     <Route path="/" element={<Layout />}>
    //       <Route index path="/mainmeny" element={<MainMeny />} />
    //       <Route path="movies" element={<Movies />} />
    //       <Route path="tvseries" element={<TvSeries />} />
    //       <Route path="bookmarks" element={<Bookmarks />} />
    //     </Route>
    //   </Routes>
    // </div>
    <div className="bg-[#10141E]">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Navigate to="/mainmeny" />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route index path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index path="/mainmeny" element={<MainMeny />} />
          <Route path="movies" element={<Movies />} />
          <Route path="tvseries" element={<TvSeries />} />
          <Route path="bookmarks" element={<Bookmarks />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
