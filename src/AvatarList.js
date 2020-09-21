import React from 'react';
import AvatarCard from './AvatarCard';
import './main.css';

class AvatarList extends React.Component {

    avatarsList = this.props.avatars.map((avatar, index) => //ask why i need avatar.id and keyAvatar
        <AvatarCard
            key={avatar.id}
            keyAvatar={avatar.id}
            name={avatar.name}
            url={avatar.avatar}
            onDelete={this.props.onDelete}>
        </AvatarCard>);

    render() {
        return (
            <>
                <div className="avatarList" >{this.avatarsList}</div>
            </>
        );
    }
}


export default AvatarList;
