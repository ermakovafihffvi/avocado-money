import React from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Loading() {
    return (
      <div className="App">
            <Box className="loading-box">
                <CircularProgress />
            </Box>
      </div>
    );
  }
  
  export default Loading;