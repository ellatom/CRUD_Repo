import React from "react";
import Modal from "./Modal";
import api from './api';

class EditAvatar extends React.Component {


    state = {
      modalInputName: "",
      modalInputUrl: "",
      loading: false,
      modal: false
    };
  

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


  render() {
    return (
      <div>
        <div onClick={e => this.modalOpen(e)}>
          Update Avatar
          </div>
        <Modal show={this.state.modal}>
          <div className="form-group">
            <label htmlFor="modalInputName">Avatar Name:</label>
            <input
              id={this.props.avatarKey}
              type="text"
              value={this.state.modalInputName}
              name="modalInputName"
              onChange={e => this.handleChange(e)}
              className="form-control"/>
            <br />
            <label htmlFor="modalInputUrl">Image url:</label>
            <input
              id={this.props.avatarKey}
              type="text"
              value={this.state.modalInputUrl}
              name="modalInputUrl"
              onChange={e => this.handleChange(e)}
              className="form-control"/>
          </div>
          <button onClick={e => this.handleSubmit(e)}>
            Save
          </button>
        </Modal>
      </div>
    );
  }
}

export default EditAvatar;

