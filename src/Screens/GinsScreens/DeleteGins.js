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

const DeleteGins = ({data,handleClose,handleSuccess}) => {
  const { enqueueSnackbar } = useSnackbar();
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


    const deleteGin = async (id) => {
        setIsLoading(true);
        axios
          .delete(`http://localhost:3000/api/public/Gins/delete/${id}`)
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
            deleteGin(data.id);
          }}
          autoFocus>
              {isLoading ? "Loading..." : "Delete Gins"}
          </Button>
        </DialogActions>
        </div>
    )
}

export default DeleteGins
