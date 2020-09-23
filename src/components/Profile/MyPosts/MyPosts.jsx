import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validator";
import { Textarea } from "../../Common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="Send post"
          name="post"
          component={Textarea}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const TextAreaReduxForm = reduxForm({
  form: "addPost",
})(AddPostForm);

const MyPosts = React.memo((props) => {
  const onSubmit = (formData) => {
    props.addPost(formData.post);
  };
  let postsElements = props.posts.map((elem) => (
    <Post message={elem.message} likesCount={elem.likesCount} key={elem.id} />
  ));
  console.log("chika");
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <TextAreaReduxForm onSubmit={onSubmit} />
      <div>New posts</div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
});

export default MyPosts;
