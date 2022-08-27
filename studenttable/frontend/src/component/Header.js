import React from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handlePost = () => {
    var obj ={
      "firstname":"firstname here",
      "lastname": "lastname here"
      
    }
    fetch("  http://localhost:3000/table",({
      method: "POST",
      body: JSON.stringify(obj)
    })
    )
    
    .then((data) => data.json())
    .then((data) => setTableData(data))
  };
  
  return (
    <>
     <div className='text-center mb-5'>

<Typography  variant="h3" color={'red'} className="font-weight-bold" gutterBottom>Students Managment</Typography>
<Typography  variant="h5">10 Student Registered</Typography>

</div>
<Box marginBottom={'10px'}>

<Grid container marginBottom={'40px'}   rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item>
  <Typography marginBottom={'6px'} className="font-weight-bold">
    SEARCH FOR NAME
  </Typography>
  <input type='search' placeholder='Search' className='form-control'/>
  </Grid>
  <Grid item marginTop={'35px'}>
  <Typography className="font-weight-bold" marginLeft={"30px"}>
    <PersonOutlineIcon/>
    125 STUDENTS
  </Typography>
  </Grid>
  <Grid item marginTop={'29px'}>
  <Button variant="contained" onClick={handleClickOpen} >
    <NoteAltIcon className='mr-3'/>
    New</Button>
   
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle className='text-center text-danger font-weight-bold'>Add Students</DialogTitle>
        <DialogContent>
          
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Full Name"
            type="text"
            fullWidth
            variant="standard"
          />
          
           <Select
             className='mt-2'
          value=''
          label="Gender" variant="standard"
          fullWidth
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value=''>Male</MenuItem>
          <MenuItem value=''>Female</MenuItem>
          
        </Select>
         
          <TextField
            autoFocus
            margin="dense"
            id="date"
            label="Date of birth"
            type="date"
            fullWidth
            variant="standard"
          />
            
        <TextField
            autoFocus
            margin="dense"
            id="group"
            label="Groups"
            type="text"
            fullWidth
            variant="standard"
          />
            
        <TextField
            autoFocus
            margin="dense"
            id="avatar"
            label="Image"
            type="file"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
  
  </Grid>

</Grid>
</Box>
</>
   

    
  )
}
