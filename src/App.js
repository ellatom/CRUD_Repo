import React from 'react';
import api from './api';
import AvatarList from './AvatarList';
import LoadingSpinner from './LoadingSpinner';
import Form from './Form'

class App extends React.Component {

    state = { allavatars: [], loading: false };

    async componentDidMount() {
        await this.refreshDisplay();
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

    //first render is empty insert [] or condition spinner instead of Please wait....render happens
    render() {
        return (
            <>
                <Form ></Form>
                <div>
                    {this.state.allavatars !== null && this.state.loading
                        ? <LoadingSpinner /> : <AvatarList avatars={this.state.allavatars}></AvatarList>}
                </div>
            </>
        );
    }
}


export default App;
