import React, { useState } from 'react';
import useInput from './useInput';
import axios from 'axios';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import globe from './globe.svg';
import CircularProgress from '@mui/material/CircularProgress';
import InputAdornment from '@mui/material/InputAdornment';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Map from './Map';

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1280,
    },
  },
});

function App() {
  const [phone, updatePhone] = useInput();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = (phone) => {
    setLoading(true);
    setError(false);
    axios
      .post('/', { phoneNumber: '+' + phone })
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(phone);
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        margin: '5vh auto',
        height: '90vh',
      }}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            background: `url(${globe})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '50%',
            backgroundPositionX: 'center',
            paddingTop: {mobile: '80px', tablet: '170px'},
            height: {mobile: 'calc(100% - 80px)',tablet: 'calc(100% - 170px)'},
          }}>
          <Box
            sx={{
              backgroundColor: 'rgb(255, 255, 255)',
              borderRadius: '15px',
              padding: '20px',
              height:'calc(100% - 40px)',
              display:'grid',
              gridAutoRows:'auto auto 1fr'
            }}>
            <h1 className="title">
              <span>Geo</span>Phone
            </h1>
            <Box
              component="form"
              method="POST"
              onSubmit={handleSubmit}
              sx={{ display: 'flex', gap: '20px' }}>
              <TextField
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Please type a phone number"
                value={phone}
                onChange={updatePhone}
                size="small"
                fullWidth
                required
                error={error}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      +
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                type="submit"
                variant="contained"
                endIcon={<SearchIcon />}
                sx={{ padding: '0 25px' }}>
                search
              </Button>
            </Box>
            <Box
              sx={{
                marginTop: '20px',
                display: 'grid',
              }} id='mapContainer'>
              {loading ? (
                <Box
                  sx={{
                    width: 'fit-content',
                    justifySelf: 'center',
                    alignSelf: 'center',
                  }}>
                  <CircularProgress />
                </Box>
              ) : (
                data && !error && <Map data={data} />
              )}
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </Container>
  );
}

export default App;
