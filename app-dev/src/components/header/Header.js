import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeDrawer } from '../../store/actions/drawer.action';
import '../.././css/dashboard.css';

import { AppBar, Link, MenuList, MenuItem, 
        Divider, Toolbar, IconButton, 
        Typography, Drawer, List, ListItem, 
        ListItemIcon, ListItemText, Collapse } from '@material-ui/core';


import MenuIcon from '@material-ui/icons/Menu';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

export class Header extends Component {

  constructor(props){
    super(props);

    this.state = {
      collapse: {
        site: false,
        account: false
      }
    }
  }

  render() {
    return(
      <div>
        {(window.innerWidth < 577 ) ? 
          <div>

            <AppBar position="fixed">
              <Toolbar>
                <IconButton onClick={() => this.props.changeDrawer(true)} edge="start" color="inherit" aria-label="menu" >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                  {this.props.title}
                </Typography>
              </Toolbar>
            </AppBar>
            <div className="header-margin d-flex">
              
            </div>
          </div>
          :
          <div>
            <nav className="header navbar navbar-expand-lg navbar-light bg-white">
              <div className="conteiner">
                <Link className="navbar-brand" to="/" >
                  <h3>Site do Leo</h3>
              </Link>

              <ul className="navbar-nav ml-md-5 mr-auto mt-4 mt-md-0">

                <li className="navbar-nav" >
                  <Link className="nav-link"  to="/" >
                    <i className="far fa-folder-open mr-2 lg"></i> Product
                  </Link>
                </li>

                <li className="navbar-nav" >
                  <Link className="nav-link"  to="/" >
                    <i className="far fa-list mr-2 lg"></i> Categorias
                  </Link>
                </li>

                <li className="nav-item dropdown" >
                  <Link className="nav-link dropdown-toggle" to="#" data-toggle="dropdown" >
                    <i className="far fa-laptop mr-2 lg"></i> Meu Site
                  </Link>

                  <MenuList className="dropdown-mwnu m-0" >
                    <MenuItem className="dropdown-item" >Dados de Contato</MenuItem>
                    <MenuItem className="dropdown-item" >Minha Logo</MenuItem>
                    <Divider />
                    <MenuItem className="dropdown-item" >Ver Meu Site</MenuItem>
                  </MenuList>
                </li>

                <li className="nav-item dropdown ml-auto" >
                  <Link className="nav-link dropdown-toggle" to="#" data-toggle="dropdown" >
                    <i className="far fa-user mr-2 lg"></i> Minha Conta
                  </Link>

                  <MenuList className="dropdown-mwnu m-0" >
                    <MenuItem className="dropdown-item" >Email e Senha</MenuItem>
                    <MenuItem className="dropdown-item" >Usuarios</MenuItem>
                    <Divider />
                    <MenuItem className="dropdown-item" >Sair</MenuItem>
                  </MenuList>
                </li>

              </ul>

              </div>
            </nav>
          </div>

        }
        <Drawer anchor="left" open={this.props.drawer.open} onClose={() => this.props.changeDrawer(false)} >
          <div style={{width: 230, maxWidth: window.innerWidth - 70}}>
            <List component="nav" className="menu-mobile">
              <ListItem>
                <h1>Site do Leo</h1>
              </ListItem>

              <ListItem>
                leonardo@gmail.com
              </ListItem>
              <Divider className="mb-3 mt-2"/>

              <ListItem button onClick={() => {}}>
                <ListItemIcon>
                  <i className="far fa-folder-open"></i>
                </ListItemIcon>
                <ListItemText primary="Produtos" />
              </ListItem>

              <ListItem button onClick={() => {}}>
              <ListItemIcon>
                  <i className="far fa-list"></i>
                </ListItemIcon>
                <ListItemText primary="Categoria" />
              </ListItem>

              <ListItem button onClick={() => 
                this.setState({
                  collapse: {
                    ...this.state.collapse,
                    site: (this.state.collapse.site) ? false : true
                  }
                })
              }>
              <ListItemIcon>
                  <i className="far fa-laptop"></i>
                </ListItemIcon>
                <ListItemText primary="Meu Site" />
                {this.state.collapse.site ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={this.state.collapse.site} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

                  <Divider className="mb-3 mt-2" />

                  <ListItem className="ml-4 pl-5" button onClick={() => {}}>
                    <ListItemText primary="Dados de Contato" />
                  </ListItem>

                  <ListItem className="ml-4 pl-5" button onClick={() => {}}>
                    <ListItemText primary="Minha Logo" />
                  </ListItem>

                  <ListItem className="ml-4 pl-5" button onClick={() => {}}>
                    <ListItemText primary="Ver Meu Site" />
                  </ListItem>

                </List>
              </Collapse>
              <Divider className="mb-3 mt-2" />
              <ListItem button onClick={() => 
                this.setState({
                  collapse: {
                    ...this.state.collapse,
                    account: (this.state.collapse.account) ? false : true
                  }
                })
              }>
              <ListItemIcon>
                  <i className="far fa-user"></i>
                </ListItemIcon>
                <ListItemText primary="Minha Conta" />
                {this.state.collapse.account ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={this.state.collapse.account} timeout="auto" unmountOnExit>

                <List component="div" disablePadding>

                  <Divider className="mb-3 mt-2" />

                  <ListItem className="ml-4 pl-5" button onClick={() => {}}>
                    <ListItemText primary="Email e Senha" />
                  </ListItem>

                  <ListItem className="ml-4 pl-5" button onClick={() => {}}>
                    <ListItemText primary="Usuarios" />
                  </ListItem>

                </List>
              </Collapse>
              <Divider className="mb-3 mt-2" />

            

              <ListItem button onClick={() => {}}>
              <ListItemIcon>
                  <i className="far fa-sign-out-alt"></i>
                </ListItemIcon>
                <ListItemText primary="Sair" />
              </ListItem>


            </List>
          </div>
        </Drawer>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  drawer: state.drawerReducer
})

const mapDispatchToProps = {
  changeDrawer
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)