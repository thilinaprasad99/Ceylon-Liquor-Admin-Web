import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "../../Componment/Common/Table";
import Dialog from "../../Componment/Common/Dialog";
// import { IconButton, Button, Tooltip } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddNewArrack from "./AddNewArrack"
import DeleteArracks from "./DeleteArracks"
import EditArrack from "./EditArrack"

const ArracksScreens = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedData, setSelectedData] = useState({});
  const [openDialogAddArrack, setOpenDialogAddArrack] = useState(false);
  const [openDialogEditArrack, setOpenDialogEditArrack] = useState(false);
  const [openDialogDeleteArrack, setOpenDialogDeleteArrack] = useState(false);
  const [isEditSuccess, setIsEditSuccess] = useState(false)

  const getArracks = async () => {
    try {
      const { status, data } = await axios.get(
        "http://localhost:3700/api/public/arracks/get"
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
    getArracks();
  }, [isEditSuccess]);
  return (
    <div>
      <Dialog
        tooltip="Add New Item"
        dialogtitle="Add New Item"
        dialogcontent={
          <AddNewArrack
            data={selectedData}
            handleClose={() => setOpenDialogAddArrack(false)}
            handleSuccess={() => setIsEditSuccess(!isEditSuccess)}
          />
        }
        maxWidth="sm"
        open={openDialogAddArrack}
        handleClose={() => setOpenDialogAddArrack(false)}
        handleOpen={() => setOpenDialogAddArrack(true)}
      />
      <Dialog
        tooltip="Edit Item"
        dialogtitle="Edit Item"
        dialogcontent={
          <EditArrack
            data={selectedData}
            handleClose={() => setOpenDialogEditArrack(false)}
            handleSuccess={() => setIsEditSuccess(!isEditSuccess)}
          />
        }
        maxWidth="sm"
        open={openDialogEditArrack}
        handleClose={() => setOpenDialogEditArrack(false)}
        handleOpen={() => setOpenDialogEditArrack(true)}
      />

      <Dialog
        tooltip="Delete Item"
        dialogtitle="Delete Item"
        dialogcontent={
          <DeleteArracks
            data={selectedData}
            handleClose={() => setOpenDialogDeleteArrack(false)}
            handleSuccess={() => setIsEditSuccess(!isEditSuccess)}
          />
        }
        maxWidth="xs"
        open={openDialogDeleteArrack}
        handleClose={() => setOpenDialogDeleteArrack(false)}
        handleOpen={() => setOpenDialogDeleteArrack(true)}
      />

      <Table
        title="Arracks Table"
        columns={[
          {
            title: "English Name",
            field: "ename",
            headerStyle: {
              fontWeight: "bold",
              width: 2,
              maxWidth: 2,
            },
          },
          {
            title: "Sinhala Name",
            field: "sname",
            headerStyle: {
              fontWeight: "bold",
              width: 2,
              maxWidth: 2,
            },
          },
          {
            title: "Description",
            field: "description",
            headerStyle: {
              fontWeight: "bold",
              width: 2,
              maxWidth: 2,
            },
          },

          {
            title: "Price For 180ml",
            field: "price_180",
            headerStyle: {
              fontWeight: "bold",
              width: 2,
              maxWidth: 2,
            },
          },

          {
            title: "Price For 375ml",
            field: "price_375",
            headerStyle: {
              fontWeight: "bold",
              width: 2,
              maxWidth: 2,
            },
          },
          {
            title: "Price For 750ml",
            field: "price_750",
            headerStyle: {
              fontWeight: "bold",
              width: 2,
              maxWidth: 2,
            },
          },
          {
            title: "Image",
            field: "image",
            headerStyle: {
              fontWeight: "bold",
              width: 2,
              maxWidth: 2,
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
              setOpenDialogEditArrack(true);
            },
          },
          {
            icon: DeleteIcon,
            tooltip: "Delete Item",
            onClick: (event, rowData) => {
              setSelectedData(rowData);
              setOpenDialogDeleteArrack(true);
            },
          },

          {
            icon: EditIcon,
            tooltip: "Add Item",
            onClick: (event, rowData) => {
              setOpenDialogAddArrack(true);
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

export default ArracksScreens;
