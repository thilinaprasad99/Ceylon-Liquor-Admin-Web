import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "../../Componment/Common/Table";
import Dialog from "../../Componment/Common/Dialog";
// import { IconButton, Button, Tooltip } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import DeleteVodkas from "./DeleteVodkas";
import EditVodkas from "./EditVodkas";
import AddNewVodkas from "./AddNewVodkas";

const VodkasScreens = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedData, setSelectedData] = useState({});
  const [openDialogAddVodka, setOpenDialogAddVodka] = useState(false);
  const [openDialogEditVodka, setOpenDialogEditVodka] = useState(false);
  const [openDialogDeleteVodka, setOpenDialogDeleteVodka] = useState(false);
  const [isEditSuccess, setIsEditSuccess] = useState(false)

  const getVodka = async () => {
    try {
      const { status, data } = await axios.get(
        "http://150.136.82.183:3700/api/public/Vodkas/get"
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
    getVodka();
  }, [isEditSuccess]);
  return (
    <div>
      <Dialog
        tooltip="Add New Item"
        dialogtitle="Add New Item"
        dialogcontent={
          <AddNewVodkas
            data={selectedData}
            handleClose={() => setOpenDialogAddVodka(false)}
            handleSuccess={() => setIsEditSuccess(!isEditSuccess)}
          />
        }
        maxWidth="sm"
        open={openDialogAddVodka}
        handleClose={() => setOpenDialogAddVodka(false)}
        handleOpen={() => setOpenDialogAddVodka(true)}
      />
      <Dialog
        tooltip="Edit Item"
        dialogtitle="Edit Item"
        dialogcontent={
          <EditVodkas
            data={selectedData}
            handleClose={() => setOpenDialogEditVodka(false)}
            handleSuccess={() => setIsEditSuccess(!isEditSuccess)}
          />
        }
        maxWidth="sm"
        open={openDialogEditVodka}
        handleClose={() => setOpenDialogEditVodka(false)}
        handleOpen={() => setOpenDialogEditVodka(true)}
      />

      <Dialog
        tooltip="Delete Item"
        dialogtitle="Delete Item"
        dialogcontent={
          <DeleteVodkas
            data={selectedData}
            handleClose={() => setOpenDialogDeleteVodka(false)}
            handleSuccess={() => setIsEditSuccess(!isEditSuccess)}
          />
        }
        maxWidth="xs"
        open={openDialogDeleteVodka}
        handleClose={() => setOpenDialogDeleteVodka(false)}
        handleOpen={() => setOpenDialogDeleteVodka(true)}
      />

      <Table
        title="Vodkas Table"
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
            title: "Price For 357ml",
            field: "price_357",
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
            title: "Price For 700ml",
            field: "price_700",
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
              setOpenDialogEditVodka(true);
            },
          },
          {
            icon: DeleteIcon,
            tooltip: "Delete Item",
            onClick: (event, rowData) => {
              setSelectedData(rowData);
              setOpenDialogDeleteVodka(true);
            },
          },

          {
            icon: EditIcon,
            tooltip: "Add Item",
            onClick: (event, rowData) => {
              setOpenDialogAddVodka(true);
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

export default VodkasScreens;
