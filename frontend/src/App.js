import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Container from "@mui/material/Container";
import React from "react";
import { Header, Footer } from "./components";
import {
  Home,
  FullPost,
  Registration,
  AddPost,
  Login,
  About,
  Vet,
} from "./pages";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth";
import styles from "./App.scss";
function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Header />
          <Container maxWidth="lg">
            <Routes>
              <Route path="/popular" element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/posts/:id" element={<FullPost />} />
              <Route path="/posts/:id/edit" element={<AddPost />} />
              <Route path="/add-post" element={<AddPost />} />
              <Route path="/about" element={<About />} />
              <Route path="/vet" element={<Vet />} />

              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Registration />} />
            </Routes>
          </Container>
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
