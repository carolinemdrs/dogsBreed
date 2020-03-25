import React from "react";
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router';

class List extends React.Component {
   componentWillMount () {
       const token = window.localStorage.getItem('token')
       if (!token){
        this.props.goToLoginPage()
       }
   }
  
    render() {
     
      return (
        <div>
          lissstssdsd
        </div>
      )
    }
}
  
  function mapDispatchToProps(dispatch) {
    return {
        goToLoginPage: () => dispatch(push(routes.login))
    };
  }
  
  export default connect( null,mapDispatchToProps)(List);