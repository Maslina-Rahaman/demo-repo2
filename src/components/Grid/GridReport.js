import React, { useState,useRef, useCallback } from 'react';
import Paper from '@material-ui/core/Paper';
import {
  SortingState,
  IntegratedSorting,
  GroupingState,
  IntegratedGrouping,
  DataTypeProvider,
  SummaryState,
  SelectionState,
  IntegratedSelection
} from '@devexpress/dx-react-grid';
import { GridExporter } from '@devexpress/dx-react-grid-export';
import {
  Grid,
  DragDropProvider,
  Table,
  VirtualTable,
  TableHeaderRow,
  TableGroupRow,
  Toolbar ,
  GroupingPanel,
  ExportPanel,
  TableSummaryRow
 
} from '@devexpress/dx-react-grid-material-ui';
import saveAs from 'file-saver';

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

const DateFormatter = ({ value }) => (
  <span>
    {value.toLocaleDateString()}
  </span>
);

const DateTypeProvider = props => (
  <DataTypeProvider {...props} formatterComponent={DateFormatter} />
);

const onSave = (workbook) => {
  workbook.xlsx.writeBuffer().then((buffer) => {
    saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
  });
};

 
const GridReport=({reports}) => {
  // console.log("report inside grid report")
  // console.log(report)
 // console.log(generateRows)
  //const report= useSelector(state => state.report);
 // const reports=  Object.values(report);
  //console.log("report inside grid report")
 // console.log(report)
  const [columns] = useState([
    { name: 'finYear', title: 'Financial Year' },
    { name: 'projectCode', title: 'Project Code' },
    // { name: 'empCode', title: 'Emp Code' },
    { name: 'empName', title: 'Name' },
    // { name: 'deptCode', title: 'Department Code' },
    // { name: 'empCat', title: 'Category' },
    // { name: 'resignation', title: 'Resignation' },
    // { name: 'dob', title: 'Date of birth' },
    // { name: 'emp_cate', title: 'Category' },
    { name: 'joinedOn', title: 'Join Date' },
    { name: 'grade', title: 'Grade' },
    // { name: 'qualification', title: 'Education' },
    // { name: 'passingYear', title: 'Passing year' },
    // { name: 'designation', title: 'Designation' },
    
  
  ]);
  // const dateColumns = ['joinedOn'];
const groupSummaryItems = [
  { columnName: 'projectCode', type: 'count' },
  
];
  const [rows] = useState(reports);
  const [sorting, setSorting] = useState([{ columnName: ['grade','projectCode','empName'], direction: 'asc' }]);
  const [grouping, setGrouping] = useState([{ columnName: 'projectCode' }]);

   const [selection, setSelection] = useState([14, 30, 38]);
  const exporterRef = useRef(null);

  const startExport = useCallback((options) => {
    exporterRef.current.exportGrid(options);
  }, [exporterRef]);

 
  return (


  
    <Paper>
      <Grid
        rows={rows}
        columns={columns}
      >
        <DragDropProvider />
        {/* <DateTypeProvider for={dateColumns} /> */}
        <SortingState
          sorting={sorting}
          onSortingChange={setSorting}
        />
        <GroupingState
          grouping={grouping}
          onGroupingChange={setGrouping}
        />
        {/* <SummaryState
          groupItems={groupSummaryItems}
        /> */}
         <SelectionState selection={selection} onSelectionChange={setSelection} /> 
         <IntegratedGrouping />
        <IntegratedSorting />
        <IntegratedSelection />
        <Table />
        <VirtualTable height="500px"/>
        <TableHeaderRow showSortingControls showGroupingControls />
        <TableGroupRow />
        {/* <TableSummaryRow /> */}
        <Toolbar />
        <GroupingPanel showGroupingControls />
        <ExportPanel startExport={startExport} />
      </Grid>


      <GridExporter
        ref={exporterRef}
        rows={rows}
        columns={columns}
        grouping={grouping}
     
        groupSummaryItems={groupSummaryItems}
        selection={selection}
        onSave={onSave}
      />


    </Paper>
    
  );
};

export default GridReport;