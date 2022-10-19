import * as React from "react";
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import axios from "axios";

const DataTableApp = () => {
    const [rowData, setRowData] = React.useState([]);
  // const rows = [
  //     { "id": 11, "name": "Shirt", "price": 200, "status": 0, "sale": 20 },
  //     { "id": 22, "name": "Shoe", "price": 350, "status": 1, "sale": 30 },
  //     { "id": 33, "name": "Hat", "price": 150, "status": 1, "sale": 25 },
  // ];

  const cols = [
    { field: "name", headerName: "Product", width: 150 },
    { field: "price", headerName: "Price" },
    { field: "sale", headerName: "Sale" },
    // {
    //     field: "status",
    //     headerName: "Status",
    //     valueFormatter: (params) => {
    //         if(params.value == 0) {
    //             return "None";
    //         }
    //         else {
    //             return "OK";
    //         }
    //     }
    // },
    {
      field: "status",
      headerName: "Status",
      renderCell: (params) => {
        if (params.value === 1) {
          return <CheckCircleIcon color="success" />;
        } else {
          return <CancelIcon color="error" />;
        }
      },
    },
    {
      field: "net",
      headerName: "Net price",
      valueGetter: (params) => {
        return params.row.price - params.row.sale;
      },
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Action",
      width: 200,
      getActions: (params) => [
        <Button variant="outlined" color="info">
          Edit
        </Button>,
        <Button variant="outlined" color="error">
          Delete
        </Button>,
      ],
    },
  ];

  React.useEffect(() => {
    axios
      .get(`http://localhost:9000/product`)
      .then((response) => {
        console.log(response.data);
        setRowData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {/* <CheckCircleIcon color="success"/> */}
      <Button variant="contained" color="success">
        Add
      </Button>
      <Button variant="contained" color="info">
        Choose
      </Button>
      <div style={{ display: "flex", height: 300, width: 800 }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid
            rows={rowData}
            columns={cols}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </div>
    </>
  );
};

export default DataTableApp;
