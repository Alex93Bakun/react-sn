import React from "react";
import {
  maxLengthCreator,
  required,
} from "../../../../utils/validators/validators";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name={"newPostText"}
          placeholder={"new post"}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

export const AddNewPostFormRedux = reduxForm({
  form: "ProfileAddNewPostForm",
})(AddPostForm);
