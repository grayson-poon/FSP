import React from "react";
import EditProfilePictureModal from "../modals/edit_profile_picture";
import ProfileMain from "./profile_page_components/profile_main";
import Activity from "./profile_page_components/activity";

export default class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePicture: false,
      backgroundPicture: false,
      profileForm: false,
      postForm: false,
    }

    this.showModal = this.showModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.props.fetchUser(this.props.match.params.userId);
    }
  }

  render() {
    let { user, errors } = this.props;

    return user && errors ? this.profile() : this.loading();
  }

  showModal(field) {
    this.setState({ [field]: true });
  }

  displayErrors() {
    return (
      <div>
        <ul>
          {this.props.errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
      </div>
    )
  }

  profile() {
    let { user } = this.props;

    return (
      <div className="profile-page">
        <div className="profile-middle">
          <ProfileMain user={user} showModal={this.showModal} />
          <Activity user={user} showModal={this.showModal}/>
        </div>

        <EditProfilePictureModal show={this.state.profilePicture} />
        {/* {this.displayErrors()} */}
      </div>
    );
  }

  loading() {
    return (
      <div className="loading-profile">
        loading profile
      </div>
    )
  }
};