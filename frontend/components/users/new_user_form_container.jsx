import { connect } from "react-redux";
import { createUser } from "../../actions/user_actions";
import NewUserForm from "./new_user_form_1";

const mSTP = ({ errors }) => ({
  user: {
    email: "",
    password: "",
    confirmPassword: "",
  },
  formType: "Create User",
  errors: errors.userErrors,
});

const mDTP = (dispatch) => ({
  createUser: (user) => dispatch(createUser(user))
});

export default connect(mSTP, mDTP)(NewUserForm);