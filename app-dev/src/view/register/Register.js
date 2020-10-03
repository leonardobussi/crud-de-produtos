import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeValue, registerUser} from '../../store/actions/register.action';
import { baseURL } from '../../config/globalConfig';

import { Container, Button, TextField, Typography, Link}  from '@material-ui/core';

import { Loading, Notify } from '../../components';

export class Register extends Component {


  register = () => {
    this.props.registerUser(this.props.data)
      .then( () => {
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
                            <Typography className="mt-3 font-weight-normal" component="h1" variant="h6">
                              Create to Acount
                            </Typography>
                        </div>
                        <div className="mt-4" >
                            <TextField 
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                label="Nome"
                                name="name"
                                type="text"
                                value={this.props.data.name}
                                onChange={(text)=> {
                                  this.props.changeValue({name: text.target.value})
                                  if(this.props.error.name){
                                    delete this.props.error.name
                                  }
                                }}
                            />
                            {(this.props.error.name) &&
                              <strong className="text-danger">
                                {this.props.error.name[0]}
                              </strong>
                            }
                            <TextField 
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                label="Email"
                                name="email"
                                type="Email"
                                value={this.props.data.email}
                                onChange={(text)=> {
                                  this.props.changeValue({email: text.target.value})
                                  if(this.props.error.email){
                                    delete this.props.error.email
                                  }
                                }}
                            />

                            {(this.props.error.email) &&
                              <strong className="text-danger">
                                {this.props.error.email[0]}
                              </strong>
                            }
                            <TextField 
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                label="senha"
                                name="password"
                                type="password"
                                value={this.props.data.password}
                                onChange={(text)=> {
                                  this.props.changeValue({password: text.target.value})
                                  if(this.props.error.password){
                                    delete this.props.error.password
                                  }
                                }}
                            />

                            {(this.props.error.password) &&
                              <strong className="text-danger">
                                {this.props.error.password[0]}
                              </strong>
                            } 


                            <Button
                                type="button"
                                variant="contained"
                                fullWidth
                                color="primary"
                                size="large"
                                className="mb-3 mb-md-4 mt-4"
                                onClick={() => this.register()}
                            >Cadastrar</Button>

                            <div className="text-center">
                              <Link 
                                href="./login" 
                                className="mt-4 text-center" 
                                color="secondary"
                                variant="body2"
                              >
                              Fazer Login
                              </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.registerReducer.data,
  success: state.registerReducer.success,
  error: state.registerReducer.error

})

const mapDispatchToProps = {
  changeValue,
  registerUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
