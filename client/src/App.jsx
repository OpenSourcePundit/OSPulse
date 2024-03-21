import React, { lazy,Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import LayoutLoader from "./components/layout/Loaders";

//Dynamic Routing.
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));
const NotFound = lazy(() => import("./pages/NotFound"));

let user = true;

function App() {
  return (
    <Router>
     <Suspense fallback={<LayoutLoader/>}>
     <Routes>
        <Route element={<ProtectedRoute user={user} />}>
          <Route path="/" element={<Home />} />
          <Route path="/chat/:chatId" element={<Chat />} />
          <Route path="/groups" element={<Groups />} />
        </Route>
     
        <Route
          path="/login"
          element={
            // This will disable or can say auto redirect to home when /login is in address
            <ProtectedRoute user={!user} redirect="/">  
              <Login />
            </ProtectedRoute>
          }
        />
          <Route path="*" element={<NotFound />} />

      </Routes>
     </Suspense>
    </Router>
  );
}

export default App;
