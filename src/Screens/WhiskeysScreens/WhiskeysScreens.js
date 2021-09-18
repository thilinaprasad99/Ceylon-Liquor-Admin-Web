import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "../../Componment/Common/Table";
import Dialog from "../../Componment/Common/Dialog";
// import { IconButton, Button, Tooltip } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddNewWhiskeys from "./AddNewWhiskey";
import EditWhiskey from "./EditWhiskeys";
import DeleteWhiskeys from "./DeleteWhiskeys";

const WhiskeysScreens = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedData, setSelectedData] = useState({});
  const [openDialogAddWhiskey, setOpenDialogAddWhiskey] = useState(false);
  const [openDialogEditWhiskey, setOpenDialogEditWhiskey] = useState(false);
  const [openDialogDeleteWhiskey, setOpenDialogDeleteWhiskey] = useState(false);
  const [isEditSuccess, setIsEditSuccess] = useState(false)

  const getWhiskeys = async () => {
    try {
      const { status, data } = await axios.get(
        "http://193.122.148.31:3700/api/public/Whiskeys/get"
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
    getWhiskeys();
  }, [isEditSuccess]);
  return (
    <div>
      <Dialog
        tooltip="Add New Item"
        dialogtitle="Add New Item"
        dialogcontent={
          <AddNewWhiskeys
            data={selectedData}
            handleClose={() => setOpenDialogAddWhiskey(false)}
            handleSuccess={() => setIsEditSuccess(!isEditSuccess)}
          />
        }
        maxWidth="sm"
        open={openDialogAddWhiskey}
        handleClose={() => setOpenDialogAddWhiskey(false)}
        handleOpen={() => setOpenDialogAddWhiskey(true)}
      />
      <Dialog
        tooltip="Edit Item"
        dialogtitle="Edit Item"
        dialogcontent={
          <EditWhiskey
            data={selectedData}
            handleClose={() => setOpenDialogEditWhiskey(false)}
            handleSuccess={() => setIsEditSuccess(!isEditSuccess)}
          />
        }
        maxWidth="sm"
        open={openDialogEditWhiskey}
        handleClose={() => setOpenDialogEditWhiskey(false)}
        handleOpen={() => setOpenDialogEditWhiskey(true)}
      />

      <Dialog
        tooltip="Delete Item"
        dialogtitle="Delete Item"
        dialogcontent={
          <DeleteWhiskeys
            data={selectedData}
            handleClose={() => setOpenDialogDeleteWhiskey(false)}
            handleSuccess={() => setIsEditSuccess(!isEditSuccess)}
          />
        }
        maxWidth="xs"
        open={openDialogDeleteWhiskey}
        handleClose={() => setOpenDialogDeleteWhiskey(false)}
        handleOpen={() => setOpenDialogDeleteWhiskey(true)}
      />

      <Table
        title="Whiskeys Table"
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
            title: "Price For 375ml",
            field: "price_375",
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
            title: "Price For 1000ml",
            field: "price_1000",
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
              setOpenDialogEditWhiskey(true);
            },
          },
          {
            icon: DeleteIcon,
            tooltip: "Delete Item",
            onClick: (event, rowData) => {
              setSelectedData(rowData);
              setOpenDialogDeleteWhiskey(true);
            },
          },

          {
            icon: EditIcon,
            tooltip: "Add Item",
            onClick: (event, rowData) => {
              setOpenDialogAddWhiskey(true);
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

export default WhiskeysScreens;
