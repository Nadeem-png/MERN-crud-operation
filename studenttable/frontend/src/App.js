import React from 'react';
import Header from './component/Header';
import StudentFilter from './component/StudentFilter';
import StudentTable from './component/StudentTable';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';


function App() {
  return (
    <div className=' m-5  ' style={{backgroundColor: "#f7f8fa"}}>
       <div className="m-5 mt-5 p-5 ">
       <Header/>
       <Divider/>
       <Box>

<Grid container  rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={12} md={3}>
  <StudentFilter/>
  </Grid>
  <Grid item xs={12}  md={9}>
  <StudentTable/>
  </Grid>

</Grid>
</Box>
    </div>
    </div>
   
  );
}

export default App;
