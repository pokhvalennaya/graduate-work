import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import Container from "@mui/material/Container";
import { logout, selectIsAuth } from "../../redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";

export const Footer = () => {
  const reload = () => {
    window.location.reload(false);
  };
  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <a className={styles.logolink} href="/"></a>

          <div className={styles.contactBlock}>
            <h2 className={styles.contactHeader}>Контакти</h2>
            <p className={styles.contactText}>Телефон</p>
            <a className={styles.contactLink} href="tel:+380ХХХХХХХХ">
              +38(0ХХ)-ХХХ-ХХ-ХХ
            </a>

            <p className={styles.contactText}>E-Mail</p>
            <a className={styles.contactLink} href="mailto:save-paws@gmail.com">
              save-paws@gmail.com
            </a>
          </div>

          <div className={styles.navBar}>
            <h2 className={styles.navHeader}>Навігація</h2>
            <a className={styles.nav} href="/">
              <div>Головна</div>
            </a>
            <a className={styles.nav} href="/about">
              <div>Про нас</div>
            </a>
            <a className={styles.nav} href="/g">
              <div>Притулки</div>
            </a>
            <a className={styles.nav} href="/g">
              <div>Ветеринарні клініки</div>
            </a>
            <a className={styles.nav} href="/g">
              <div>Благодійність</div>
            </a>
          </div>

          <div className={styles.emailBlock}>
            <h2 className={styles.emailHeader}>Хочу отримувати новини</h2>
            <div className={styles.fieldBlock}>
              <TextField
                id="my-input"
                className={styles.fieldBlock}
                label="E-Mail"
                type="email"
              />
            </div>
            <div>
              <Button
                className={styles.emailButton}
                variant="contained"
                onClick={reload}
              >
                Підписатися
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
