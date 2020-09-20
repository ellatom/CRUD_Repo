import React from "react";
import Modal from "./Modal";
import api from './api';

class EditAvatar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      name: "",
      modalInputName: "",
      modalInputUrl: "",
      loading: false
    };
  }

  async handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });

  }

  async handleSubmit(e) {
    this.setState({ name: this.state.modalInputName });
    this.modalClose();
    let avatar = {
      "id": this.props.keyAvatar,
      "createdAt": new Date().toLocaleDateString(),
      "name": this.state.modalInputName,
      "avatar": this.state.modalInputUrl

    };

    this.setState({ loading: true }, async () => {
      await api.updateAvatar(avatar);
      window.location.reload(false);
      this.setState({
        loading: false
      });
    });
  }

  modalOpen() {
    this.setState({ modal: true });
  }

  modalClose() {
    this.setState({
      modalInputName: "",
      modal: false
    });
  }

  render() {
    return (
      <div>
        <a href="javascript:;" onClick={e => this.modalOpen(e)}>
          Update Avatar
          </a>
        <Modal show={this.state.modal} handleClose={e => this.modalClose(e)}>
          <div className="form-group">
            <label for="name">Avatar Name:</label>
            <input
              id="name"
              type="text"
              value={this.state.modalInputName}
              name="modalInputName"
              onChange={e => this.handleChange(e)}
              className="form-control"
            />
            <br />
            <label for="url">Image url:</label>
            <input
              id="url"
              type="text"
              value={this.state.modalInputUrl}
              name="modalInputUrl"
              onChange={e => this.handleChange(e)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button onClick={e => this.handleSubmit(e)} type="button">
              Save
              </button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default EditAvatar;

