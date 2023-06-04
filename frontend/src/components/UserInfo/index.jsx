import React from "react";
import styles from "./UserInfo.module.scss";
import Avatar from "@mui/material/Avatar";

export const UserInfo = ({ avatarUrl, fullName, additionalText }) => {
  const avatar = fullName.trim().toUpperCase().split("").slice(0, 2);

  return (
    <div className={styles.root}>
      {<Avatar src="/broken-image.jpg" className={styles.avatar} /> && (
        <Avatar alt={fullName} src={avatar} className={styles.avatar} />
      )}
      <div className={styles.userDetails}>
        <span className={styles.userName}>{fullName}</span>
        <span className={styles.additional}>{additionalText}</span>
      </div>
    </div>
  );
};
