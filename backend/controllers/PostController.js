import PostModel from "../models/Post.js";

export const getLastTags = async (req, res) => {
  try {
    const posts = await PostModel.find().limit(5).exec();
    const tags = posts
      .map((obj) => obj.tags)
      .flat()
      .slice(0, 5);
    res.json(tags);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Не вдалося отримати оголошення" });
  }
};

export const getNew = async (req, res) => {
  try {
    const posts = await PostModel.find()
      .sort({ created_at: -1 })
      .populate("user")
      .exec();

    res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Не вдалося отримати оголошення" });
  }
};

export const getPopular = async (req, res) => {
  try {
    const posts = await PostModel.find()
      .sort({ viewsCount: -1 })
      .populate("user")
      .exec();

    res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Не вдалося отримати оголошення" });
  }
};

export const getOne = async (req, res) => {
  try {
    const postId = req.params.id;

    PostModel.findOneAndUpdate(
      {
        _id: postId,
      },
      {
        $inc: {
          viewsCount: 1,
        },
      },
      {
        returnDocument: "after",
      },
      (err, doc) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "Не вдалося повернути оголошення",
          });
        }
        if (!doc) {
          return res.status(404).json({
            message: "Оголошення не знайдено",
          });
        }
        res.json(doc);
      }
    ).populate("user");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Не вдалося отримати оголошення" });
  }
};

export const create = async (req, res) => {
  try {
    const doc = new PostModel({
      title: req.body.title,
      text: req.body.text,
      tags: req.body.tags
        .split(/\,|\ /)
        .map(function (value) {
          return value.trim();
        })
        .filter(function (value, index) {
          const arr = value != "";
          return arr;
        })
        .reduce((result, item) => {
          return result.includes(item) ? result : [...result, item];
        }, []),
      imageUrl: req.body.imageUrl,
      user: req.userId,
    });

    const post = await doc.save();
    res.json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Помилка створення оголошення" });
  }
};

export const remove = async (req, res) => {
  try {
    const postId = req.params.id;

    PostModel.findOneAndDelete(
      {
        _id: postId,
      },
      (err, doc) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "Не вдалося видалити оголошення",
          });
        }

        if (!doc) {
          return res.status(404).json({
            message: "Оголошення не знайдено",
          });
        }
        res.json({
          success: true,
        });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Не вдалося отримати оголошення" });
  }
};

export const update = async (req, res) => {
  try {
    const postId = req.params.id;

    await PostModel.updateOne(
      {
        _id: postId,
      },
      {
        title: req.body.title,
        text: req.body.text,
        tags: req.body.tags,
        imageUrl: req.body.imageUrl,
        user: req.userId,
      }
    );
    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Помилка оновлення оголошення" });
  }
};
