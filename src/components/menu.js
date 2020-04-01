import React from "react";
import Button from '@material-ui/core/Button';
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../containers/Router';

const MenuContainer = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;
`

const Menu = (props) => {
    return(
        <MenuContainer>
            <div>
              <Button onClick={props.goToChihuahuaPage}>Chihuahua</Button>
          </div>
          <div>
              <Button onClick={props.goToHuskyPage}>Husky</Button>
          </div>
          <div>
              <Button onClick={props.goToPugPage}>Pug</Button>
          </div>
          <div>
            <Button onClick={props.goToLabradorPage}>Labrador</Button>
          </div>
        </MenuContainer>
    )   
}

function mapDispatchToProps(dispatch) {
    return {
    goToChihuahuaPage: () => dispatch(push(routes.list)),     
    goToHuskyPage: () => dispatch(push(routes.husky)),     
    goToPugPage: () => dispatch(push(routes.pug)),
    goToLabradorPage: () => dispatch(push(routes.labrador)),    
   }
  } 
  
  export default connect( null, mapDispatchToProps)(Menu)