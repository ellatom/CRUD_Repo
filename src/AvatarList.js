import React from 'react';
import AvatarCard from './AvatarCard';
import './main.css';

class AvatarList extends React.Component {

    avatarsList = this.props.avatars.map((avatar, index) =>{ //ask why i need avatar.id and keyAvatar
        console.log("aaaaaaaaaaaaaaa");
        return (
        <AvatarCard
<<<<<<< Updated upstream
            avatar={avatar}
=======
            key={avatar.id}
            keyAvatar={avatar.id}
            name={avatar.name}
            url={avatar.avatar} 
>>>>>>> Stashed changes
            onDelete={this.props.onDelete}>
        </AvatarCard>
    
        )
    });

    render() {
        console.log("I was in avatar list")
        return (
            <>
                <div className="avatarList" >{this.avatarsList}</div>
            </>
        );
    }
}


export default AvatarList;
