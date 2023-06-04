import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import styles from "./Home.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../../components/Post";
import {
  fetchNewPosts,
  fetchPopularPosts,
  fetchTags,
} from "../../redux/slices/posts";
import moment from "moment";
import { Link } from "react-router-dom";

import "moment/locale/uk";

export const Home = () => {
  const [value, setValue] = React.useState(0);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const reload = () => {
    window.location.reload(false);
  };
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.data);
  console.log(userData);

  const { posts } = useSelector((state) => state.posts);

  const isPostLoading = posts.status === "loading";

  React.useEffect(() => {
    dispatch(fetchNewPosts());
    dispatch(fetchPopularPosts());
    dispatch(fetchTags());
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={styles.linkBlock}>
        <a className={styles.link} href="/" onClick={reload}>
          Нові
        </a>
        <a className={styles.link} href="/popular" onClick={reload}>
          Популярні
        </a>
      </div>
      <Grid container spacing={4}>
        <Grid xs={8} item>
          {(isPostLoading ? [...Array(5)] : posts.items).map((obj, index) =>
            isPostLoading ? (
              <Post key={index} isLoading={true} />
            ) : (
              <Post
                id={obj._id}
                title={obj.title}
                imageUrl={
                  obj.imageUrl ? `http://localhost:5000${obj.imageUrl}` : ""
                }
                user={obj.user}
                created_at={moment(obj.created_at).format("DD.MM.YYYY, LTS")}
                viewsCount={obj.viewsCount}
                tags={obj.tags}
                isEditable={userData?._id === obj.user._id}
              />
            )
          )}
        </Grid>

        <Grid xs={4} item></Grid>
      </Grid>
    </>
  );
};
