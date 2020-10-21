import React from "react";
import { reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validator";
import { Textarea } from "../../Common/FormsControls/FormsControls";
import { AllPosts, PostsContainerStyled, TextAreaStyled } from "../../../styledComponents/MyPostsContainer";
import Post from "./Post/Post";
import { FlexContainerStyled } from "../../../styledComponents/Dialogs";
import { InputFileStyledBlue } from "../../../styledComponents/ProfileInfo";

const maxLength30 = maxLengthCreator(30);

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <TextAreaStyled placeholder="Send post" name="post" component={Textarea} validate={[required, maxLength30]} />
      <FlexContainerStyled justify="flex-end">
        <InputFileStyledBlue className="end" as="button">
          Add post
        </InputFileStyledBlue>
      </FlexContainerStyled>
    </form>
  );
};

const TextAreaReduxForm = reduxForm({
  form: "addPost",
})(AddPostForm);

const MyPosts = React.memo(({ addPost, posts, profile }) => {
  const onSubmit = (formData) => {
    addPost(formData.post);
  };

  let postsElements = posts.map((elem) => (
    <Post message={elem.message} likesCount={elem.likesCount} key={elem.id} profile={profile} />
  ));

  return (
    <PostsContainerStyled>
      <h3>My posts</h3>
      <TextAreaReduxForm onSubmit={onSubmit} />
      <AllPosts>{postsElements}</AllPosts>
    </PostsContainerStyled>
  );
});

export default MyPosts;
