import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import img from './logo.jpeg'
import './SellerRegistration.css'
import Input from '@mui/material/Input'
import axios from 'axios'

const theme = createTheme()

export default function SellerRegistration() {
  const [values, setValues] = React.useState({
    firstName: '',
    middleName: '',
    lastName: '',
    password: '',
    tpnumber: '',
    Email: '',
    streetNo: '',
    Street: '',
    city: '',
    country: '',
    postalCode: '',
  })
  const navigate = useNavigate()
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleSubmit = async (event) => {
    await axios
      .post('/api/users/createuser', values)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
    navigate('/AdminPanel/Sellers')
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img
            sx={{ m: 1, bgcolor: 'secondary.main', minWidth: 300 }}
            src={img}
            className='logo-img'
          />

          <Typography
            className='header'
            component='h1'
            variant='h6'
            sx={{ fontSize: 18, mt: 4, mb: 4, fontFamily: 'Ruda' }}
          >
            Register as a seller with <b>CEYLON PRODUCTS</b>
          </Typography>
          <Typography
            className='header'
            component='h1'
            variant='h4'
            sx={{ fontSize: 30, mt: 4, mb: 4, fontFamily: 'Ruda' }}
          >
            <b>Provide your contact info</b>
          </Typography>
          <Box
            component='form'
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='given-name'
                  name='firstName'
                  required
                  fullWidth
                  id='firstName'
                  label='First Name'
                  autoFocus
                  onChange={handleChange('firstName')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id='lastName'
                  label='Last Name'
                  name='lastName'
                  autoComplete='family-name'
                  onChange={handleChange('lastName')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='given-name'
                  name='firstName'
                  required
                  fullWidth
                  id='firstName'
                  label='Contact Name'
                  autoFocus
                  // onChange={handleChange('lastName')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id='lastName'
                  label='Business Name'
                  name='lastName'
                  autoComplete='family-name'
                  // onChange={handleChange('lastName')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='given-name'
                  name='firstName'
                  required
                  fullWidth
                  id='firstName'
                  label='Contact No'
                  autoFocus
                  onChange={handleChange('tpnumber')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id='lastName'
                  label='Email'
                  name='lastName'
                  autoComplete='family-name'
                  onChange={handleChange('Email')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='email'
                  label='Street Address Line 01'
                  name='email'
                  autoComplete='email'
                  onChange={handleChange('streetNo')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='email'
                  label='Street Address Line 02'
                  name='email'
                  autoComplete='email'
                  onChange={handleChange('Street')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='given-name'
                  name='firstName'
                  required
                  fullWidth
                  id='firstName'
                  label='City'
                  autoFocus
                  onChange={handleChange('city')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id='lastName'
                  label='State/Province'
                  name='lastName'
                  autoComplete='family-name'
                  onChange={handleChange('country')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Postal/Zip Code'
                  type='password'
                  id='password'
                  autoComplete='new-password'
                  onChange={handleChange('postalCode')}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  className='header'
                  component='h1'
                  variant='h6'
                  sx={{ textAlign: 'left', fontSize: 15 }}
                >
                  Address verification details
                </Typography>
                <label
                  htmlFor='contained-button-file'
                  className='upload-button'
                >
                  <Input
                    accept='image/*'
                    id='contained-button-file'
                    multiple
                    type='file'
                    sx='mt : 10'
                  />
                </label>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  className='header'
                  component='h1'
                  variant='h6'
                  sx={{ textAlign: 'left', fontSize: 15 }}
                >
                  NIC/Driving Liecense
                </Typography>
                <label
                  htmlFor='contained-button-file'
                  className='upload-button'
                >
                  <Input
                    accept='image/*'
                    id='contained-button-file'
                    multiple
                    type='file'
                    sx='mt : 10'
                  />
                </label>
              </Grid>
            </Grid>
            <Button
              onClick={() => {
                handleSubmit()
              }}
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
