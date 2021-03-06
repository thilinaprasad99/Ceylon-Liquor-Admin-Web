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

const EditTequilas = ({data, handleClose, handleSuccess}) => {
    const { enqueueSnackbar } = useSnackbar();
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [ename, setEname] = useState(data.ename);
  const [sname, setSname] = useState(data.sname);
  const [description, setDescription] = useState(data.description);
  const [price_750, setPrice_750] = useState(data.price_750);
  const [price_700, setPrice_700] = useState(data.price_700);
  const [price_1000, setPrice_1000] = useState(data.price_1000);
  const [image, setImage] = useState(data.image);
  const [id, setId] = useState(data.id);


  const editTequila = async (info) => {
    setIsLoading(true);
    axios
      .patch("http://150.136.140.225:3700/api/public/Tequilas/update", info)
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
                  label="Description"
                  multiline
                  maxRows={4}
                  defaultValue={data.description}
                  variant="filled"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="Price For 750"
                  defaultValue={data.price_750}
                  variant="standard"
                  onChange={(e) => setPrice_750(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="Price For 700"
                  defaultValue={data.price_700}
                  variant="standard"
                  onChange={(e) => setPrice_700(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="Price For 1000"
                  defaultValue={data.price_1000}
                  variant="standard"
                  onChange={(e) => setPrice_1000(e.target.value)}
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
                editTequila({
                  ename,
                  sname,
                  description,
                  price_750,
                  price_700,
                  price_1000,
                  image,
                  id,
                });
              }}
            >
              {isLoading ? "Loading..." : "Edit Tequilas"}
            </Button>
          </DialogActions>
        </Box>
      </form>
        </div>
    )
}

export default EditTequilas
