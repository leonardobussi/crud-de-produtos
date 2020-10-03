import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import Header from '../../../components/header/Header'
import '../../../css/dashboard.css';
 

export class List extends Component {
    render() {
        return (
            <div>
               <Header title="Produtos"/>
               
               <div className="conteiner p-xs-0 mt-4 pt-3">

                  <div className="d-flex mb-4 pl-3 pr-3 pl-md-0 pr-md-0">
                    <h3 className="font-weight-normal">
                      <span className="hidden-xs">Meus</span> Produtos
                    </h3>
                  </div>

                  <div className="card">
                    <div className="card-body">
                      <div className="text-center mt-md-5 mb-5 pt-md-5 pb-5">
                        <p className="text-uppercase mt-4 font-18 label-custom" >Cadastre algun produto logo</p>
                        <p className="label-custom font-weight-normal mb-5" >cadastra logo caramba</p>

                        <div className="mt-5 d-flex justify-content-center align-items-center">
                          <Link to="/" >
                            <Button variant="contained" color="primary" >
                              Cadastrar o Produto Top das galaxias
                            </Button>
                          </Link>
                        </div>

                      </div>
                    </div>
                  </div>

               </div>
               
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(List)
