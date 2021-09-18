import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "../../Componment/Common/Table";
import Dialog from "../../Componment/Common/Dialog";
// import { IconButton, Button, Tooltip } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import EditWines from "./EditWines";
import DeleteWines from "./DeleteWines";
import AddNewWines from "./AddNewWines";

const WinesScreens = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedData, setSelectedData] = useState({});
  const [openDialogAddWine, setOpenDialogAddWine] = useState(false);
  const [openDialogEditWine, setOpenDialogEditWine] = useState(false);
  const [openDialogDeleteWine, setOpenDialogDeleteWine] = useState(false);
  const [isEditSuccess, setIsEditSuccess] = useState(false)

  const getWine = async () => {
    try {
      const { status, data } = await axios.get(
        "http://localhost:3000/api/public/Wines/get"
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
    getWine();
  }, [isEditSuccess]);
  return (
    <div>
      <Dialog
        tooltip="Add New Item"
        dialogtitle="Add New Item"
        dialogcontent={
          <AddNewWines
            data={selectedData}
            handleClose={() => setOpenDialogAddWine(false)}
            handleSuccess={() => setIsEditSuccess(!isEditSuccess)}
          />
        }
        maxWidth="sm"
        open={openDialogAddWine}
        handleClose={() => setOpenDialogAddWine(false)}
        handleOpen={() => setOpenDialogAddWine(true)}
      />
      <Dialog
        tooltip="Edit Item"
        dialogtitle="Edit Item"
        dialogcontent={
          <EditWines
            data={selectedData}
            handleClose={() => setOpenDialogEditWine(false)}
            handleSuccess={() => setIsEditSuccess(!isEditSuccess)}
          />
        }
        maxWidth="sm"
        open={openDialogEditWine}
        handleClose={() => setOpenDialogEditWine(false)}
        handleOpen={() => setOpenDialogEditWine(true)}
      />

      <Dialog
        tooltip="Delete Item"
        dialogtitle="Delete Item"
        dialogcontent={
          <DeleteWines
            data={selectedData}
            handleClose={() => setOpenDialogDeleteWine(false)}
            handleSuccess={() => setIsEditSuccess(!isEditSuccess)}
          />
        }
        maxWidth="xs"
        open={openDialogDeleteWine}
        handleClose={() => setOpenDialogDeleteWine(false)}
        handleOpen={() => setOpenDialogDeleteWine(true)}
      />

      <Table
        title="Wines Table"
        columns={[
          {
            title: "English Name",
            field: "ename",
            headerStyle: {
              fontWeight: "bold",
            },
          },
          {
            title: "Sinhala Name",
            field: "sname",
            headerStyle: {
              fontWeight: "bold",
            },
          },
          {
            title: "Description",
            field: "description",
            headerStyle: {
              fontWeight: "bold",
            },
          },
          {
            title: "Price For 750ml",
            field: "price_750",
            headerStyle: {
              fontWeight: "bold",
            },
          },
          {
            title: "Image",
            field: "image",
            headerStyle: {
              fontWeight: "bold",
            },
          },
        ]}
        data={data}
        actions={[
          {
            icon: EditIcon,
            tooltip: "Edit Item",
            onClick: (event, rowData) => {
              setSelectedData(rowData);
              setOpenDialogEditWine(true);
            },
          },
          {
            icon: DeleteIcon,
            tooltip: "Delete Item",
            onClick: (event, rowData) => {
              setSelectedData(rowData);
              setOpenDialogDeleteWine(true);
            },
          },

          {
            icon: EditIcon,
            tooltip: "Add Item",
            onClick: (event, rowData) => {
              setOpenDialogAddWine(true);
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

export default WinesScreens;
