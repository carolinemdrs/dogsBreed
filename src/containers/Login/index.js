import React from "react";
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import loginAuth from '../../actions/auth'

const FormStyled = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`

const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const ButtonStyled = styled(Button)`
  width: 100px;
  margin:5px
`
const TextFieldStyled = styled(TextField)`

`
const TypographyStyled = styled(Typography)`
  color: white;
`

class LoginDogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }


  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log("Oi")
  };

  onClickLogin = (e) => {
    e.preventDefault()
    const email = this.state.email
    this.props.doLogin(email)
    console.log("fuichamadis")
  }

  render() {
    const { email} = this.state;

    return (
      <div>
        <FormStyled >
          <TextFieldStyled
            required
            onChange={this.handleFieldChange}
            name="email"
            type="email"
            label="E-mail"
            value={email}
            variant="outlined"
          />
          <BtnWrapper>
            <ButtonStyled
              variant="contained"
              color="primary"
              type="submit"
              onClick={this.onClickLogin}
              >
              <TypographyStyled  color="textSecondary">Login</TypographyStyled>
            </ButtonStyled>
          </BtnWrapper>
        </FormStyled>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
  doLogin: (email) => dispatch(loginAuth(email)),
  
  };
}

export default connect( null,mapDispatchToProps)(LoginDogs);