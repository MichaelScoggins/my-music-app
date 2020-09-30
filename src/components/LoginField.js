import React, { Component } from 'react'
import Dashboard from './Dashboard'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

export default class LoginField extends Component {
  state = {
    isLoggedIn: false,
  }

  toggleLogin = () => {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn,
    }))
  }

  render() {
    return !this.state.isLoggedIn ? (
      <Dashboard />
    ) : (
      <div>
        <Box
          component="span"
          m={30}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <TextField placeholder="Username" />
          <TextField placeholder="Password" />

          <Button
            variant="contained"
            onClick={() =>
              this.toggleLogin(this.state.isLoggedIn ? false : true)
            }
            color="inherit"
          >
            Login
          </Button>
        </Box>
      </div>
    )
  }
}
