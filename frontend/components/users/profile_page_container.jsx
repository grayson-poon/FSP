import { connect } from "react-redux";
import { fetchUser, updateUser } from "../../actions/user_actions";
import UserShow from "./profile_page";

const mSTP = (state, ownProps) => {
  return {
    showUser: state.entities.users[ownProps.match.params.userId],
    currentUserId: state.session.currentUserId,
    currentUser: state.entities.users[state.session.currentUserId],
    errors: state.errors.userErrors,
  }
};

const mDTP = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    updateUser: (user) => dispatch(updateUser(user)),
  };
};

export default connect(mSTP, mDTP)(UserShow);