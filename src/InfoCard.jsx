import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';

function InfoCard({data}) {
  return (
    <Card
      sx={{
        display: 'flex',
      }}>
          <Box sx={{height:'30px', width:'50px'}}>
              <img className='flag' src={`https://countryflagsapi.com/png/${data?.country}`} alt={data?.country} />
          </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <h5>{data?.country}</h5>
          <h6>{data?.carrier || '--'}</h6>
          <p>lat:{data?.lat} long:{data?.long}</p>
        </CardContent>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            pl: 1,
            pb: 1,
          }}></Box>
      </Box>
    </Card>
  );
}

export default InfoCard;
