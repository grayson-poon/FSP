import React from "react";
import { CAMERA_ICON, CLOSE_BUTTON, DEFAULT_PROFILE_PICTURE, DELETE_BUTTON } from "../../util/images_and_icons_util";

export default class EditProfilePictureModal extends React.Component {
  render() {
    return this.props.show ? this.show() : null;
  }

  show() {
    let { user, hideModal } = this.props;
    debugger

    return (
      <div className="profile-picture-modal">
        <div className="header">
          <div>Profile Photo</div>
          <div className="close-button">
            <button onClick={() => hideModal("profilePicture")}>
              <img src={CLOSE_BUTTON} />
            </button>
          </div>
        </div>

        <div className="current-image">
          <img
            src={
              user.profilePicture
                ? user.profilePicture
                : DEFAULT_PROFILE_PICTURE
            }
          />
        </div>

        <div className="edit-delete">
          <div id="upload-button">
            <label>
              <img src={CAMERA_ICON} />
              <input type="file" accept="image/*" />
              Upload photo
            </label>
          </div>

          <div id="delete">
            <button>
              <img src={DELETE_BUTTON} />
              <div>Delete</div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}