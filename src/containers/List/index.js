import React from "react";
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router';
import {getList} from "../../actions/auth";
import List from "@material-ui/core/List";


class ListDogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list:[]
    };
  }

   componentWillMount () {
      this.props.getListAction()
       const token = window.localStorage.getItem('token')
       if (!token){
        this.props.goToLoginPage()
       }
    }

    render() {
      return (
        <div>
         <List>
              {
                  this.props.list.map((list) => {
                      return(<li>{list}</li>)
                  })
              }
          </List>
          <button>TESTE</button>
        </div>
      )
    }
}
  

const mapStateToProps = state => ({
  list: state.list.list
});


  function mapDispatchToProps(dispatch) {
    return {
        goToLoginPage: () => dispatch(push(routes.login)),
        getListAction: () => dispatch(getList())
    };
  }
  
  export default connect( mapStateToProps, mapDispatchToProps)(ListDogs);
