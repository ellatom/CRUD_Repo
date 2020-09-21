import React from 'react';
import api from './api';

class Form extends React.Component {

    state = {
        allavatars: null,
        errors: '',
        nameInput: '',
        urlInput: ''
    };

    componentDidMount = async () => {
        const avatars = await api.getAvatars();

        this.setState(state => {
            return { allavatars: avatars };
        });
    };


    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState(state => {
            return { errors: '' };
        });

        let errors = this.validate();

        if (errors && errors.length > 0) {
            this.setState(state => {
                return { errors: errors };
            });
        }
        else
        {
        this.handleUpdate();
        }
    }

    handleUpdate = async () => {
        await this.props.onUpdate(this.state.key,this.state.nameInput,this.state.urlInput);
      }

    validate = () => {
        let error = "";

        if (this.state.nameInput.length === 0)
            error += 'You should enter something';

        else if (this.state.nameInput.length < 5)
            error += 'You must insert at least 5 characters';

        else if (this.state.urlInput==='')
            error += 'Please select image.';

        else if (!this.state.urlInput.match(/\.(jpg|jpeg|png|gif)$/))
            error += 'Please select valid image.';
        else if (this.state.allavatars.find(element => element.name=== this.state.nameInput) || 
                 this.state.allavatars.find(avatar=>avatar.avatar === this.state.urlInput))
                error += 'This avatar alreay exists by name or url'

        return error;
    }

    render() {
        return (
            <>
                <form className="form" onSubmit={this.handleSubmit} >
                    <h2>Create Avatar</h2>
                    <input 
                        id={this.props.avatarKey} 
                        name="nameInput" 
                        value={this.state.nameInput} 
                        onChange={this.handleChange} 
                        type='text' 
                        placeholder="Insert avatar name">
                    </input>
                    <input 
                        id={this.props.avatarKey} 
                        name="urlInput" 
                        value={this.state.urlInput} 
                        onChange={this.handleChange} 
                        type='text' 
                        placeholder="Insert avatar url image" >
                    </input>
                    <input type="submit" value="Submit" />
                    <div className="errMsg">{this.state.errors}</div>
                </form>
            </>
        );
    }
}


export default Form;
