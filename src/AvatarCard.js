import React from 'react';
import api from './api';
import EditAvatar from './EditAvatar';
import LoadingSpinner from './LoadingSpinner';


class AvatarCard extends React.Component {

  state = {
    loading: false, // will be true when ajax request is running
  }
  deleteAvatar = async (event, props) => {

    this.setState({ loading: true }, async() => {
      await api.deleteAvatar(this.props.keyAvatar);
      window.location.reload(false);
      this.setState({
        loading: false
      });
    });
  }


  editAvatar = async () => {
    //future on click edit box opens as overlay instead of putting in each
  }

  render() {
    //render avatarcard
    return (
      <div style={{ backgroundColor: 'green', margin: '7px', borderRadius: '4px', padding: '5px 0px', color: 'white', border: '1px solid white' }}>
        <div id={this.props.keyAvatar} style={{ textAlign: 'center' }}>ID:{this.props.keyAvatar}</div>
        <div className="avatarName" style={{ borderRadius: '4px', textAlign: 'center' }} > {this.props.name}</div>
        <div className="avatarUrl" style={{ fontSize: '5px', maxWidth: '100px', margin: '0 auto', wordWrap: "break-word" }}>{this.props.url}</div>
        <img src={this.props.url} style={{
          width: '128px', height: '128px', margin: '0px auto', display: 'block',
          marginLeft: 'auto', marginRight: 'auto'
        }} alt="" />
        <br />
        <div style={{ textAlign: 'center' }}>
        {this.state.loading ? <LoadingSpinner /> : <button onClick={this.deleteAvatar} style={{ borderRadius: '7px' }}><i className="far fa-trash-alt"></i></button>}
          <br />
          <button onClick={this.editAvatar} ><i className="fas fa-edit"></i>
            <EditAvatar keyAvatar={this.props.keyAvatar} url={this.props.url} style={{ backgroundColor: "grey", margin: "7px", borderRadius: "4px", padding: "5px 0px" }}></EditAvatar></button>
        </div>
      </div>

    );
  }
}

export default AvatarCard;
