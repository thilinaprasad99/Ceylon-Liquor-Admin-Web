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
  
  const AddNewBeer = ({ handleClose, handleSuccess }) => {
    const { enqueueSnackbar } = useSnackbar();
    const [error, setError] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [ename, setEname] = useState(null);
    const [sname, setSname] = useState(null);
    const [description, setDescription] = useState(null);
    const [price_120, setPrice_120] = useState(null);
    const [price_180, setPrice_180] = useState(null);
    const [price_190, setPrice_190] = useState(null);
    const [price_220, setPrice_220] = useState(null);
    const [price_240, setPrice_240] = useState(null);
    const [price_300, setPrice_300] = useState(null);
    const [price_330, setPrice_330] = useState(null);
    const [price_340, setPrice_340] = useState(null);
    const [price_350, setPrice_350] = useState(null);
    const [price_370, setPrice_370] = useState(null);
    const [price_400, setPrice_400] = useState(null);
    const [price_500, setPrice_500] = useState(null);
    const [price_600, setPrice_600] = useState(null);
    const [image, setImage] = useState(null);
  
    const addBeer = async (info) => {
      setIsLoading(true);
      axios
        .post("http://127.0.0.1:3700/api/public/beers/create", info)
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
                    label="Price For 120"
                    value={price_120}
                    variant="standard"
                    onChange={(e) => setPrice_120(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Price For 180"
                    value={price_180}
                    variant="standard"
                    onChange={(e) => setPrice_180(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Price For 190"
                    value={price_190}
                    variant="standard"
                    onChange={(e) => setPrice_190(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Price For 220"
                    value={price_220}
                    variant="standard"
                    onChange={(e) => setPrice_220(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Price For 240"
                    value={price_240}
                    variant="standard"
                    onChange={(e) => setPrice_240(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Price For 300"
                    value={price_300}
                    variant="standard"
                    onChange={(e) => setPrice_300(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Price For 330"
                    value={price_330}
                    variant="standard"
                    onChange={(e) => setPrice_330(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Price For 340"
                    value={price_340}
                    variant="standard"
                    onChange={(e) => setPrice_340(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Price For 350"
                    value={price_350}
                    variant="standard"
                    onChange={(e) => setPrice_350(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Price For 370"
                    value={price_370}
                    variant="standard"
                    onChange={(e) => setPrice_370(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Price For 400"
                    value={price_400}
                    variant="standard"
                    onChange={(e) => setPrice_400(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Price For 500"
                    value={price_500}
                    variant="standard"
                    onChange={(e) => setPrice_500(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Price For 600"
                    value={price_600}
                    variant="standard"
                    onChange={(e) => setPrice_600(e.target.value)}
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
                  addBeer({
                    ename,
                    sname,
                    description,
                    price_120,
                    price_180,
                    price_190,
                    price_220,
                    price_240,
                    price_300,
                    price_330,
                    price_340,
                    price_350,
                    price_370,
                    price_400,
                    price_500,
                    price_600,
                    image
                  });
                }}
              >
                {isLoading ? "Loading..." : "Add Beer"}
              </Button>
            </DialogActions>
          </Box>
        </form>
      </div>
    );
  };
  
  export default AddNewBeer;
  