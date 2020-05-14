import React, { Component } from 'react'

export default class SignUp extends Component {
    state = {
        email: '',
        password: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const token = Math.random();

        console.log('=============================\n')
        console.log('|| token', token, this.state.email, this.state.password)
        console.log('\n=============================')

        this.props.handleTokenChange(token);
        this.props.history.push('/todos')
    }
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    email
                    <input onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} />
                </label>
                <br/>
                <label>
                    password
                    <input onChange={(e) => this.setState({ password: e.target.value })} value={this.state.password} />
                </label>
                <br/>
                <button>sign up</button>
            </form>
            </div>
        )
    }
}
