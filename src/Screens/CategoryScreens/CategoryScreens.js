import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "../../Componment/Common/Table";
import Dialog from "../../Componment/Common/Dialog";
// import { IconButton, Button, Tooltip } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddNewCategory from "./AddNewCategory";
import EditCategory from "./EditCategory";
import DeleteCategory from "./DeleteCategory";

const CategoryScreens = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedData, setSelectedData] = useState({});
  const [openDialogAddCategory, setOpenDialogAddCategory] = useState(false);
  const [openDialogEditCategory, setOpenDialogEditCategory] = useState(false);
  const [openDialogDeleteCategory, setOpenDialogDeleteCategory] = useState(false);
  const [isEditSuccess, setIsEditSuccess] = useState(false)

  const getCategorys = async () => {
    try {
      const { status, data } = await axios.get(
        "http://193.122.148.31:3700/api/public/category/get"
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
    getCategorys();
  }, [isEditSuccess]);
  return (
    <div>
      <Dialog
        tooltip="Add New Item"
        dialogtitle="Add New Item"
        dialogcontent={
          <AddNewCategory
            data={selectedData}
            handleClose={() => setOpenDialogAddCategory(false)}
            handleSuccess={() => setIsEditSuccess(!isEditSuccess)}
          />
        }
        maxWidth="sm"
        open={openDialogAddCategory}
        handleClose={() => setOpenDialogAddCategory(false)}
        handleOpen={() => setOpenDialogAddCategory(true)}
      />
      <Dialog
        tooltip="Edit Item"
        dialogtitle="Edit Item"
        dialogcontent={
          <EditCategory
            data={selectedData}
            handleClose={() => setOpenDialogEditCategory(false)}
            handleSuccess={() => setIsEditSuccess(!isEditSuccess)}
          />
        }
        maxWidth="sm"
        open={openDialogEditCategory}
        handleClose={() => setOpenDialogEditCategory(false)}
        handleOpen={() => setOpenDialogEditCategory(true)}
      />

      <Dialog
        tooltip="Delete Item"
        dialogtitle="Delete Item"
        dialogcontent={
          <DeleteCategory
            data={selectedData}
            handleClose={() => setOpenDialogDeleteCategory(false)}
            handleSuccess={() => setIsEditSuccess(!isEditSuccess)}
          />
        }
        maxWidth="xs"
        open={openDialogDeleteCategory}
        handleClose={() => setOpenDialogDeleteCategory(false)}
        handleOpen={() => setOpenDialogDeleteCategory(true)}
      />

      <Table
        title="Categorys Table"
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
            title: "Category Screens",
            field: "screen",
            headerStyle: {
              fontWeight: "bold",
            },
          },

          {
            title: "Category Image",
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
              setOpenDialogEditCategory(true);
            },
          },
          {
            icon: DeleteIcon,
            tooltip: "Delete Item",
            onClick: (event, rowData) => {
              setSelectedData(rowData);
              setOpenDialogDeleteCategory(true);
            },
          },

          {
            icon: EditIcon,
            tooltip: "Add Item",
            onClick: (event, rowData) => {
              setOpenDialogAddCategory(true);
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

export default CategoryScreens;
