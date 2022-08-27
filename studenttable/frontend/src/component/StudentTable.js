import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';
const columns = [
  { field: 'id', headerName: 'ID',width: 130 },

  {
        field: 'avatr',
        headerName: 'Avatar',
        width: 150,
        editable: true,
        renderCell: (params) => <Avatar  src={params.value} />
        // renderCell:(row)=>{
        //   return(
        //     <div>
        //        <Avatar alt="Remy Sharp" src=""/>
        //     {row.value}
        //     </div>
           
        //   )
        // }
      },
      { field: 'name', headerName: 'Name', width: 150},
  { field: 'sex', headerName: 'Sex',width: 100 },
  { field: 'birth', headerName: 'Date of birth',width: 100 } ,
  { field: 'group', headerName: 'Groups', width: 200 }
]


// const columns= [
//   { field: 'id', headerName: 'ID', width: 130 },
//   {
//     field: 'Avtar',
//     headerName: 'Avtar',
//     width: 150,
//     editable: true,
//     renderCell:(row)=>{
//       return(
//         <div>
//            <Avatar alt="Remy Sharp" src="" />
//         {row.value}
//         </div>
       
//       )
//     }
//   },
//   {
//     field: 'Name',
//     headerName: 'Name',
//     width: 150,
//     editable: true,
//   },
  
//   {
//     field: 'Sex',
//     headerName: 'Sex',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'Place',
//     headerName: 'Place and Date of Birth',
//     type: 'number',
//     width: 160,
//     editable: true,
//   },
//   {
//     field: 'Groups',
//     headerName: 'Groups',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     // valueGetter: (params) =>
//     //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];

// const rows = [
//   { id: 1,  Name: 'Snow', Sex: 'Jon',Place: 35,Groups:'web development', },
//   { id: 2, Name: 'Lannister', Sex: 'Cersei', Place: 42,Groups:'web development',  },
//   { id: 3, Name: 'Lannister', Sex: 'Jaime', Place: 45,Groups:'web development',  },
//   { id: 4, Name: 'Stark', Sex: 'Arya', Place: 16,Groups:'web development',  },
//   { id: 5, Name: 'Targaryen', Sex: 'Daenerys', Place: null,Groups:'web development',  },
//   { id: 6, Name: 'Melisandre', Sex: null, Place: 150,Groups:'web development',  },
//   { id: 7, Name: 'Clifford', Sex: 'Ferrara', Place: 44,Groups:'web development',  },
//   { id: 8, Name: 'Frances', Sex: 'Rossini', Place: 36,Groups:'web development',  },
//   { id: 9, Name: 'Roxie', Sex: 'Harvey', Place: 65,Groups:'web development',  },
// ];

export default function StudentTable() {
  const [tableData, setTableData] = useState([]);
  


  useEffect(() => {
    fetch("  http://localhost:3001/table ")
      .then((data) => data.json())
      .then((data) => setTableData(data))
      

  }, [])

  

  console.log(tableData)
  return (
    <Box sx={{ height: 400, width: '100%',marginTop:'20px' }}>
        <input type='search' placeholder='Search' className='form-control'/>

      <DataGrid
      
    
        rows={tableData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  )
}
