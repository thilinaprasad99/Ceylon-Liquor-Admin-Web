import axios from "axios";
import React, { useState, useEffect } from "react";
import { notify } from "../../Componment/Common/Notify";
import { useSnackbar } from "notistack";
import {
    Box,
    CardContent,
    DialogActions,
    DialogContent,
    Grid,
    Button,
    TextField,
  } from "@material-ui/core";

const EditCategory = ({data, handleClose, handleSuccess}) => {
    const { enqueueSnackbar } = useSnackbar();
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [ename, setEname] = useState(data.ename);
  const [sname, setSname] = useState(data.sname);
  const [screen, setScreen] = useState(data.screen);
  const [image, setImage] = useState(data.image);
  const [id, setId] = useState(data.id);


  const editCategory = async (info) => {
    setIsLoading(true);
    axios
      .patch("http://150.136.140.225:3700/api/public/category/update", info)
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
            <form>
        <DialogContent>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="English Name"
                  defaultValue={data.ename}
                  variant="standard"
                  onChange={(e) => setEname(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="Sinhala Name"
                  defaultValue={data.sname}
                  variant="standard"
                  onChange={(e) => setSname(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="Category Screen"
                  defaultValue={data.screen}
                  variant="filled"
                  onChange={(e) => setScreen(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="Image"
                  defaultValue={data.image}
                  variant="standard"
                  onChange={(e) => setImage(e.target.value)}
                />
              </Grid>
            </Grid>
          </CardContent>
        </DialogContent>
        <Box display="flex" justifyContent="end">
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              disabled={isLoading}
              onClick={() => {
                editCategory({
                  ename,
                  sname,
                  screen,
                  image,
                  id,
                });
              }}
            >
              {isLoading ? "Loading..." : "Edit Category"}
            </Button>
          </DialogActions>
        </Box>
      </form>
        </div>
    )
}

export default EditCategory
