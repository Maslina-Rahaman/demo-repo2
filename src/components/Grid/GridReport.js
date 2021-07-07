import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import {
  SortingState,
  IntegratedSorting,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';



 const generateRows = [
  {
    finYear: 2021,
    projectCode: 171,
    grade: "A"
    
  },
  {
    finYear: 1920,
    projectCode: 168,
    grade: "C"
  
  },
  {
    finYear: 2021,
    projectCode: 172,
    grade: "B"
  
  },
  
]
 
const GridReport=() => {
  const [columns] = useState([
    { name: 'finYear', title: 'Financial Year' },
    { name: 'projectCode', title: 'Project Code' },
    { name: 'grade', title: 'Grade' },
  
  ]);
  const [rows] = useState(generateRows);
  const [sorting, setSorting] = useState([{ columnName: 'grade', direction: 'asc' }]);

  return (
    <Paper>
      <Grid
        rows={rows}
        columns={columns}
      >
        <SortingState
          sorting={sorting}
          onSortingChange={setSorting}
        />
        <IntegratedSorting />
        <Table />
        <TableHeaderRow showSortingControls />
      </Grid>
    </Paper>
  );
};

export default GridReport;