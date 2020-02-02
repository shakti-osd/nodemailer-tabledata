import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             email: '',
             selectedFile: null
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name] : e.target.value})
    }

    onChangeHandler = e => {
        this.setState({
            selectedFile: e.target.files[0]
          })       
    }
    
    submitHandler = event => {
            event.preventDefault();
            
            const data1 = new FormData() 
            data1.append('avatar', this.state.selectedFile)
            data1.append('name', this.state.name)
            data1.append('email', this.state.email)
            

            axios.post('/register', data1)
                .then( response => {
                    this.refs.form.reset();
                    console.log(response.data)
                })
                .catch(err => console.log('Error: '+ err))
    }


    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler} ref="form">
                        <input 
                            type="text" 
                            name="name"
                            placeholder="Name"
                            value={this.state.value}
                            onChange={this.changeHandler}
                        />

                        <input 
                            type="text" 
                            name="email"
                            placeholder="email"
                            value={this.state.value}
                            onChange={this.changeHandler}
                        />

                        <input 
                            type="file" 
                            name="avatar"
                            onChange={this.onChangeHandler}
                        />

                        <button type="submit">Register</button>

                </form>
            </div>
        )
    }
}

export default Register
