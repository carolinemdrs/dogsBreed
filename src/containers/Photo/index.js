import React from "react";
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router';

class Photo extends React.Component {
  
    render() {
     
      return (
        <div>
            PHOTOOOO      
        </div>
      )
    }
}
  
  function mapDispatchToProps(dispatch) {
    return {
    };
  }
  
  export default connect( null,mapDispatchToProps)(Photo);