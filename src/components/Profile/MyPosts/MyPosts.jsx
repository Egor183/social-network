import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm, reset } from "redux-form";
import { required } from "../../../utils/validators/validator";
import { Textarea } from "../../Common/FormsControls/FormsControls";

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="Write a post..."
          name="post"
          component={Textarea}
          validate={[required]}
          className={s.textarea}
        />
      </div>
      <div className={s.buttonWrapper}>
        <button className={s.commonButton}>Add post</button>
      </div>
    </form>
  );
};




const TextAreaReduxForm = reduxForm({
  form: "addPost",
})(AddPostForm);

const MyPosts = React.memo(({ addPost, posts, profile }) => {
  const onSubmit = (formData, dispatch) => {
    addPost(formData.post);
    dispatch(reset("addPost"));
  };

  let postsElements = posts.map((elem) => (
    <Post message={elem.message} likesCount={elem.likesCount} key={elem.id} profile={profile} />
  ));
  return (
    <div>
      <h3 className={s.myPostsName}>My posts</h3>
      <TextAreaReduxForm onSubmit={onSubmit} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
});

export default MyPosts;
