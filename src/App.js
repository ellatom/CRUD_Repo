import React from 'react';
import api from './api';
import AvatarList from './AvatarList';
import LoadingSpinner from './LoadingSpinner';
import Form from './Form'
import './main.css';

class App extends React.Component {

    state = { allavatars: [], loading: true };

    async componentDidMount() {
        this.setState({isLoading: false});
        await this.refreshDisplay();
        console.log("Log: ComponentDidMount");
    };

    refreshDisplay = async () => {
        const avatars = await api.getAvatars();

        this.setState({ loading: true }, async () => {
            this.setState({
                allavatars: avatars,
                loading: false
            });
        });
    }
    deleteAvatar = async (event, keyAvatar) => {

        this.setState({ loading: true }, async () => {
            await api.deleteAvatar(keyAvatar);
            this.setState({
                loading: false
            });
            await this.refreshDisplay();
        });
    }

    updateAvatar = async (key, nameInput, urlInput) => {
        let avatar = {
            "id": key,
            "createdAt": new Date().toLocaleDateString(),
            "name": nameInput,
            "avatar": urlInput
        };
        await api.createAvatar(avatar);
        await this.refreshDisplay();
    }

    //first render is empty insert [] 
    render() {
        return (
            <>
            {this.state.loading ? <LoadingSpinner /> :
                <div>
                <Form avatars={this.state.allavatars}
                    onUpdate={this.updateAvatar} >
                </Form>
                 <AvatarList
                    avatars={this.state.allavatars}
                    onDelete={this.deleteAvatar}>
                </AvatarList>
                </div>}
            </>
        );
    }
}


export default App;
