import React from "react";
import {
  CAMERA_ICON,
  CLOSE_BUTTON, 
  DEFAULT_PROFILE_PICTURE,
  DELETE_BUTTON,
  CHECK_MARK_ICON
} from "../../util/images_and_icons_util";

export default class EditProfilePictureModal extends React.Component {
  render() {
    return this.props.show ? this.show() : null;
  }

  handleFile(event) {
    const fileReader = new FileReader();
    let user = Object.assign({}, this.props.user);
    let file = event.currentTarget.files[0];

    fileReader.onloadend = () => {
      user["profilePicture"] = file ? file : "";
    }

    if (file) fileReader.readAsDataURL(file);
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
              <input
                type="file"
                onChange={this.handleFile}
                accept="image/*"
              />
              Upload photo
            </label>
          </div>

          <div id="submit-button">
            <button>
              <img src={CHECK_MARK_ICON} />
              <div>Update photo</div>
            </button>
          </div>

          <div id="delete">
            <button>
              <img src={DELETE_BUTTON} />
              <div>Remove photo</div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}