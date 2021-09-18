import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "../../Componment/Common/Table";
import Dialog from "../../Componment/Common/Dialog";
// import { IconButton, Button, Tooltip } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddNewBeer from "./AddNewBeer";
import EditBeers from "./EditBeers";
import DeleteBeers from "./DeleteBeers";

const BeersScreens = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedData, setSelectedData] = useState({});
  const [openDialogAddBeer, setOpenDialogAddBeer] = useState(false);
  const [openDialogEditBeer, setOpenDialogEditBeer] = useState(false);
  const [openDialogDeleteBeer, setOpenDialogDeleteBeer] = useState(false);
  const [isEditSuccess, setIsEditSuccess] = useState(false)

  const getBeers = async () => {
    try {
      const { status, data } = await axios.get(
        "http://193.122.148.31:3700/api/public/beers/get"
      );

      if (status !== 200) {
        throw new Error();
      } else {
        setData(data);
        setError(null);
      }
    } catch (error) {
      setError(JSON.stringify(error));
      setData([]);
      console.error(error);
    }
  };

  useEffect(() => {
    getBeers();
  }, [isEditSuccess]);
  return (
    <div>
      <Dialog
        tooltip="Add New Item"
        dialogtitle="Add New Item"
        dialogcontent={
          <AddNewBeer
            data={selectedData}
            handleClose={() => setOpenDialogAddBeer(false)}
            handleSuccess={() => setIsEditSuccess(!isEditSuccess)}
          />
        }
        maxWidth="sm"
        open={openDialogAddBeer}
        handleClose={() => setOpenDialogAddBeer(false)}
        handleOpen={() => setOpenDialogAddBeer(true)}
      />
      <Dialog
        tooltip="Edit Item"
        dialogtitle="Edit Item"
        dialogcontent={
          <EditBeers
            data={selectedData}
            handleClose={() => setOpenDialogEditBeer(false)}
            handleSuccess={() => setIsEditSuccess(!isEditSuccess)}
          />
        }
        maxWidth="sm"
        open={openDialogEditBeer}
        handleClose={() => setOpenDialogEditBeer(false)}
        handleOpen={() => setOpenDialogEditBeer(true)}
      />

      <Dialog
        tooltip="Delete Item"
        dialogtitle="Delete Item"
        dialogcontent={
          <DeleteBeers
            data={selectedData}
            handleClose={() => setOpenDialogDeleteBeer(false)}
            handleSuccess={() => setIsEditSuccess(!isEditSuccess)}
          />
        }
        maxWidth="xs"
        open={openDialogDeleteBeer}
        handleClose={() => setOpenDialogDeleteBeer(false)}
        handleOpen={() => setOpenDialogDeleteBeer(true)}
      />

      <Table
        title="Beers Table"
        columns={[
          {
            title: "English Name",
            field: "ename",
            headerStyle: {
              fontWeight: "bold",
              width: 2,
              maxWidth: 2,
            },
            cellStyle: { width: 500, maxWidth: 500 },
          },
          {
            title: "Sinhala Name",
            field: "sname",
            headerStyle: {
              fontWeight: "bold",
              width: 2,
              maxWidth: 2,
            },
            cellStyle: { width: 500, maxWidth: 500 },
          },
          {
            title: "Description",
            field: "description",
            headerStyle: {
              fontWeight: "bold",
              width: 2,
              maxWidth: 2,
            },
            cellStyle: { width: 1000, maxWidth: 1000 },
          },

          {
            title: "Price For 120ml",
            field: "price_120",
            headerStyle: {
              fontWeight: "bold",
              width: 2,
              maxWidth: 2,
            },
            cellStyle: { width: 2, maxWidth: 2 },
          },

          {
            title: "Price For 180ml",
            field: "price_180",
            headerStyle: {
              fontWeight: "bold",
              width: 2,
              maxWidth: 2,
            },
            cellStyle: { width: 2, maxWidth: 2 },
          },
          {
            title: "Image",
            field: "image",
            headerStyle: {
              fontWeight: "bold",
              width: 2,
              maxWidth: 2,
            },
            cellStyle: { width: 2, maxWidth: 2 },
          },
        ]}
        data={data}
        actions={[
          {
            icon: EditIcon,
            tooltip: "Edit Item",
            onClick: (event, rowData) => {
              setSelectedData(rowData);
              setOpenDialogEditBeer(true);
            },
          },
          {
            icon: DeleteIcon,
            tooltip: "Delete Item",
            onClick: (event, rowData) => {
              setSelectedData(rowData);
              setOpenDialogDeleteBeer(true);
            },
          },

          {
            icon: EditIcon,
            tooltip: "Add Item",
            onClick: (event, rowData) => {
              setOpenDialogAddBeer(true);
            },
            isFreeAction: true,
          },
        ]}
        // components={{
        //   Action: (props) => {
        //     switch (props.action.icon) {
        //       case "Edit":
        //         return (
        //           <Tooltip title={"Edit"}>
        //             <IconButton
        //               disabled={false}
        //               color="inherit"
        //               onClick={() => {}}
        //             >
        //               <EditIcon />
        //             </IconButton>
        //           </Tooltip>
        //         );
        //       case "Remove":
        //         return (
        //           <Tooltip title={"Remove"}>
        //             <IconButton
        //               disabled={false}
        //               color="inherit"
        //               onClick={() => {}}
        //             >
        //               <DeleteIcon />
        //             </IconButton>
        //           </Tooltip>
        //         );
        //       case "Add":
        //         return (
        //           <Button
        //             variant="contained"
        //             color="primary"
        //             size="small"
        //             onClick={() => {}}
        //           >
        //             Add New Item
        //           </Button>
        //         );
        //       default:
        //         break;
        //     }
        //   },
        // }}
        options={{
          addRowPosition:"first",
          loadingType: "overlay",
          showEmptyDataSourceMessage: true,
          search: true,
          actionsColumnIndex: -1,
          paging: true,
          padding: "dense",
          headerStyle: {
            backgroundColor: "#378FC3",
            color: "#FFF",
            fontSize: "17px",
            textAlign: "center",
            fontWeight: "bold",
            height: 2,
          },
          rowStyle: (rowData) => ({
            backgroundColor: !!rowData.parentOnly ? "#EEE" : "#EEE",
            fontSize: 14,
            height: 10,
          }),
        }}
      />
    </div>
  );
};

export default BeersScreens;
