import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router';
import {getList} from "../../actions/allActions";
import List from "@material-ui/core/List";
import Menu from "../../components/menu";
import {device} from "../../../src/device";

const Img = styled.img`
  width: 80vh;
  height:60vh;
  display: flex;
  justify-content: center;

  :hover {
    position:relative;
    top: 0;
    width: 100%;
    height:100%;
		cursor: pointer;
  }
  
  @media ${device.mobileM} {
    width: 50vh;
    height:60vh;
    display: flex;
    justify-content: center;
    margin-left: 3vh;

    :hover {
      position:relative;
      top: 0;
      width: 100%;
      height:100%;
      cursor: pointer;
      margin:0;
    }
  }
`

class ListDogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
          <Menu/>
           <List>
          {
              this.props.list.map((list) => {
                  return(<li> <Img src={list}/></li>)
              })
          }
        </List>
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
