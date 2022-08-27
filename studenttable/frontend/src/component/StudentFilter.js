import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';


export default function StudentFilter() {
  return (
    <div>
        <Typography  className="font-weight-bold mt-3 mb-4">
    FILTER FOR STUDY GROUP
</Typography>
         <FormGroup>
      <FormControlLabel control={<Checkbox />}
       label="Typography" />
       <FormControlLabel control={<Checkbox  />}
       label="Biologist" />
       <FormControlLabel control={<Checkbox />}
       label="Chemistry Capital" />
       <FormControlLabel control={<Checkbox  />}
       label="web Developer" />
       <FormControlLabel control={<Checkbox />}
       label="Black Magic" />
       <FormControlLabel control={<Checkbox  />}
       label="Lame Gamer Boys" />
     
    </FormGroup>
    </div>
  )
}
