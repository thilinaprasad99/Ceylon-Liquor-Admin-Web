import {
    Box,
    CardContent,
    DialogActions,
    DialogContent,
    Grid,
    Button,
    TextField,
    DialogTitle,
    DialogContentText,
  } from "@material-ui/core";
  import axios from "axios";
  import React, { useState, useEffect } from "react";
  import { notify } from "../../Componment/Common/Notify";
  import { useSnackbar } from "notistack";

const DeleteCategory = ({data,handleClose,handleSuccess}) => {
  const { enqueueSnackbar } = useSnackbar();
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


    const deleteCategory = async (id) => {
        setIsLoading(true);
        axios
          .delete(`http://193.122.148.31:3700/api/public/category/delete/${id}`)
          .then((response) => {
            const { data, status } = response;
            if (status !== 200) {
              throw new Error();
            } else {
              setIsSuccess(true);
              setIsLoading(false);
              notify(enqueueSnackbar, "SUCCESS");
              handleClose();
              handleSuccess();
            }
          })
          .catch((error) => {
            console.log(error);
            notify(enqueueSnackbar, "ERROR", "error");
            setIsSuccess(false);
            setError(JSON.stringify(error));
            setIsLoading(false);
          });
      };
    return (
        <div>
            
            <DialogTitle id="alert-dialog-title">{"Are You Sure Delete Item"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This Item Delete Permenetly Database
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
          Close
          </Button>
          <Button variant="contained"
              color="primary"
              disabled={isLoading}
          onClick={() => {
            deleteCategory(data.id);
          }}
          autoFocus>
              {isLoading ? "Loading..." : "Delete Category"}
          </Button>
        </DialogActions>
        </div>
    )
}

export default DeleteCategory
