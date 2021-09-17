import {
    Box,
    CardContent,
    DialogActions,
    DialogContent,
    Grid,
    Button,
    TextField,
  } from "@material-ui/core";
  import axios from "axios";
  import React, { useState, useEffect } from "react";
  import { notify } from "../../Componment/Common/Notify";
  import { useSnackbar } from "notistack";
  
  const AddNewVodkas = ({ handleClose, handleSuccess }) => {
    const { enqueueSnackbar } = useSnackbar();
    const [error, setError] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [ename, setEname] = useState(null);
    const [sname, setSname] = useState(null);
    const [description, setDescription] = useState(null);
    const [price_357, setPrice_357] = useState(null);
    const [price_700, setPrice_700] = useState(null);
    const [price_750, setPrice_750] = useState(null);
    const [image, setImage] = useState(null);
  
    const addVodka = async (info) => {
      setIsLoading(true);
      axios
        .post("http://150.136.82.183:3700/api/public/Vodkas/create", info)
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
                    value={ename}
                    variant="standard"
                    onChange={(e) => setEname(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Sinhala Name"
                    value={sname}
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
                    value={description}
                    variant="filled"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Price For 357"
                    value={price_357}
                    variant="standard"
                    onChange={(e) => setPrice_357(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Price For 700"
                    value={price_700}
                    variant="standard"
                    onChange={(e) => setPrice_700(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Price For 750"
                    value={price_750}
                    variant="standard"
                    onChange={(e) => setPrice_750(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Image"
                    value={image}
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
                  addVodka({
                    ename,
                    sname,
                    description,
                    price_357,
                    price_700,
                    price_750,
                    image,
                  });
                }}
              >
                {isLoading ? "Loading..." : "Add Vodkas"}
              </Button>
            </DialogActions>
          </Box>
        </form>
      </div>
    );
  };
  
  export default AddNewVodkas;
  