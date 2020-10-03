import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login, changeValue } from '../../store/actions/auth.action';
import { Loading, Notify} from '../../components';
import { baseURL } from '../../config/globalConfig';

import  { Container, Button, TextField, Typography, Link, withStyles  }  from '@material-ui/core/';
 


const ColorButton = withStyles(theme => ({
    root:{
        color: '#fff',
        backgroundColor: '#81c784',
        '&:hover': {
            backgroundColor:  '#388e3c',
            textdecoration: 'none'
        }
    }
}))(Button)

export class Login extends Component {
    login = () => {
        const { credentials} = this.props;
        this.props.login(credentials).then(() =>{
            if(this.props.success){
                window.location.replace(baseURL+'painel')
            }
        })
    }
    render() {
        return (
            <div>
                <Loading />
                <Notify />
                <Container Component='main' maxWidth='xs'>
                    <div className="mt-3 mt-md-5">
                        <h1 className="text-center">Site do <strong>LÉO</strong></h1>
                        <div className='text-center' >
                            <Typography className="mt-3 font-weight-normal" component="h1" variant="h6">To ignore, add to the line before.</Typography>
                        </div>
                        <div className="mt-4" >
                            <TextField 
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="email"
                                name="username"
                                type="email"
                                value={this.props.credentials.username}
                                onChange={(text)=> this.props.changeValue({username: text.target.value})}
                            />

                            <TextField 
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                label="senha"
                                name="password"
                                type="password"
                                value={this.props.credentials.password}
                                onChange={(text)=> this.props.changeValue({password: text.target.value})}
                            />

                            <Button
                                type="button"
                                variant="contained"
                                fullWidth
                                color="primary"
                                size="large"
                                className="mb-3 mb-md-4 mt-4"
                                onClick={() => this.login()}
                            >Entrar</Button>

                            <Link href="./register">
                                <ColorButton
                                    type="button"
                                    variant="contained"
                                    fullWidth
                                    color="primary"
                                    size="large"
                                    className="mt-md-4"
                                >Cadastrar</ColorButton>
                            </Link>

                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    credentials: state.authReducer.credentials, 
    success: state.authReducer.success
})

const mapDispatchToProps = {
    login,
    changeValue 
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
