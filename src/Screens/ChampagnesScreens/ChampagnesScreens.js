import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "../../Componment/Common/Table";
import Dialog from "../../Componment/Common/Dialog";
// import { IconButton, Button, Tooltip } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddNewChampagnes from "./AddNewChampagnes";
import EditChampagnes from "./EditChampagnes";
import DeleteChampagnes from "./DeleteChampagnes";

const ChampagnesScreens = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedData, setSelectedData] = useState({});
  const [openDialogAddChampagne, setOpenDialogAddChampagne] = useState(false);
  const [openDialogEditChampagne, setOpenDialogEditChampagne] = useState(false);
  const [openDialogDeleteChampagne, setOpenDialogDeleteChampagne] = useState(false);
  const [isEditSuccess, setIsEditSuccess] = useState(false)

  const getChampagne = async () => {
    try {
      const { status, data } = await axios.get(
        "http://localhost:3000/api/public/Champagnes/get"
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
    getChampagne();
  }, [isEditSuccess]);
  return (
    <div>
      <Dialog
        tooltip="Add New Item"
        dialogtitle="Add New Item"
        dialogcontent={
          <AddNewChampagnes
            data={selectedData}
            handleClose={() => setOpenDialogAddChampagne(false)}
            handleSuccess={() => setIsEditSuccess(!isEditSuccess)}
          />
        }
        maxWidth="sm"
        open={openDialogAddChampagne}
        handleClose={() => setOpenDialogAddChampagne(false)}
        handleOpen={() => setOpenDialogAddChampagne(true)}
      />
      <Dialog
        tooltip="Edit Item"
        dialogtitle="Edit Item"
        dialogcontent={
          <EditChampagnes
            data={selectedData}
            handleClose={() => setOpenDialogEditChampagne(false)}
            handleSuccess={() => setIsEditSuccess(!isEditSuccess)}
          />
        }
        maxWidth="sm"
        open={openDialogEditChampagne}
        handleClose={() => setOpenDialogEditChampagne(false)}
        handleOpen={() => setOpenDialogEditChampagne(true)}
      />

      <Dialog
        tooltip="Delete Item"
        dialogtitle="Delete Item"
        dialogcontent={
          <DeleteChampagnes
            data={selectedData}
            handleClose={() => setOpenDialogDeleteChampagne(false)}
            handleSuccess={() => setIsEditSuccess(!isEditSuccess)}
          />
        }
        maxWidth="xs"
        open={openDialogDeleteChampagne}
        handleClose={() => setOpenDialogDeleteChampagne(false)}
        handleOpen={() => setOpenDialogDeleteChampagne(true)}
      />

      <Table
        title="Champagnes Table"
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
              setOpenDialogEditChampagne(true);
            },
          },
          {
            icon: DeleteIcon,
            tooltip: "Delete Item",
            onClick: (event, rowData) => {
              setSelectedData(rowData);
              setOpenDialogDeleteChampagne(true);
            },
          },

          {
            icon: EditIcon,
            tooltip: "Add Item",
            onClick: (event, rowData) => {
              setOpenDialogAddChampagne(true);
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

export default ChampagnesScreens;
