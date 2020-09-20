import React from 'react';
import AvatarCard from './AvatarCard';

class AvatarList extends React.Component {

   
    avatarsList = this.props.avatars.map((avatar,index)=> //ask why i need avatar.id and keyAvatar
    <AvatarCard key={avatar.id} keyAvatar={avatar.id} name={avatar.name} url={avatar.avatar}></AvatarCard>);
                                                            

    render() {
        return (
            <>
            <div style={{display:"flex",flexDirection:'row',flexWrap:'wrap',margin:'5px',backgroundColor:"black"}}>{this.avatarsList}</div>
            </>
        );
    }
}


export default AvatarList;
