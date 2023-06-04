import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import Container from "@mui/material/Container";
import { logout, selectIsAuth } from "../../redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";
export const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const onClickLogout = () => {
    if (window.confirm("Ви дійсно хочете вийтиз облікового запису?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
    }
  };
  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <a className={styles.logolink} href="/"></a>
          <div className={styles.navBar}>
            <a className={styles.nav} href="/">
              <div>Головна</div>
            </a>
            <a className={styles.nav} href="/about">
              <div>Про нас</div>
            </a>
            <a className={styles.nav} href="/vet">
              <div>Ветеринарні клініки</div>
            </a>
            <a className={styles.nav} href="/g">
              <div>Притулки</div>
            </a>

            <a className={styles.nav} href="/g">
              <div>Благодійність</div>
            </a>
          </div>
          <div className={styles.buttons}>
            {isAuth ? (
              <>
                <Link className={styles.linkBtn} to="/add-post">
                  <Button variant="contained">Створити оголошення</Button>
                </Link>
                <Link className={styles.linkBtn} to="/">
                  <Button onClick={onClickLogout} variant="contained">
                    Вийти
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link className={styles.linkBtn} to="/login">
                  <Button variant="contained">Вхід</Button>
                </Link>
                <Link className={styles.linkBtn} to="/register">
                  <Button variant="contained">Реєстрація</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
