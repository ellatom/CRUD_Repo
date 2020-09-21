import React from 'react';
import EditAvatar from './EditAvatar';
import LoadingSpinner from './LoadingSpinner';


class AvatarCard extends React.Component {

  state = {
    loading: false // will be true when ajax request is running
  }

  deleteAvatar = async (event) => {
    this.props.onDelete(event, this.props.keyAvatar);
  }

  editAvatar = async () => {
    //future on click edit box opens as overlay instead of putting in each
  }

  render() {

    return (
      <div className="avatarCard">
        <div className="avatarId" id={this.props.keyAvatar} >ID:{this.props.keyAvatar}</div>
        <div id={this.props.keyAvatar} className="avatarName"> {this.props.name}</div>
        <div id={this.props.keyAvatar} className="avatarUrl" >{this.props.url}</div>
        <img src={this.props.url} alt="" />
        <br />
        <div className="btnAvatarCard">
          {this.state.loading ?   <LoadingSpinner /> : 
                <button onClick={this.deleteAvatar} ><i className="far fa-trash-alt"></i></button>}
          <br />
          {this.state.loading ? <LoadingSpinner /> :
               <button onClick={this.editAvatar} ><i className="fas fa-edit"></i>
              </button>}
          <EditAvatar className="editAvatar" keyAvatar={this.props.keyAvatar} url={this.props.url}></EditAvatar>
        </div>
      </div>

    );
  }
}

export default AvatarCard;
