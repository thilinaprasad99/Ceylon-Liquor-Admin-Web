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

const EditBeers = ({data, handleClose, handleSuccess}) => {
    const { enqueueSnackbar } = useSnackbar();
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [ename, setEname] = useState(data.ename);
    const [sname, setSname] = useState(data.sname);
    const [description, setDescription] = useState(data.description);
    const [price_120, setPrice_120] = useState(data.price_120);
    const [price_180, setPrice_180] = useState(data.price_180);
    const [price_190, setPrice_190] = useState(data.price_190);
    const [price_220, setPrice_220] = useState(data.price_220);
    const [price_240, setPrice_240] = useState(data.price_240);
    const [price_300, setPrice_300] = useState(data.price_300);
    const [price_330, setPrice_330] = useState(data.price_330);
    const [price_340, setPrice_340] = useState(data.price_340);
    const [price_350, setPrice_350] = useState(data.price_350);
    const [price_370, setPrice_370] = useState(data.price_370);
    const [price_400, setPrice_400] = useState(data.price_400);
    const [price_500, setPrice_500] = useState(data.price_500);
    const [price_600, setPrice_600] = useState(data.price_600);
    const [image, setImage] = useState(data.image);
  const [id, setId] = useState(data.id);


  const editBeer = async (info) => {
    setIsLoading(true);
    axios
      .patch("http://150.136.82.183:3700/api/public/beers/update", info)
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
                    label="Price For 120"
                    defaultValue={data.price_120}
                    variant="standard"
                    onChange={(e) => setPrice_120(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Price For 180"
                    defaultValue={data.price_180}
                    variant="standard"
                    onChange={(e) => setPrice_180(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Price For 190"
                    defaultValue={data.price_190}
                    variant="standard"
                    onChange={(e) => setPrice_190(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Price For 220"
                    defaultValue={data.price_220}
                    variant="standard"
                    onChange={(e) => setPrice_220(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Price For 240"
                    defaultValue={data.price_240}
                    variant="standard"
                    onChange={(e) => setPrice_240(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Price For 300"
                    defaultValue={data.price_300}
                    variant="standard"
                    onChange={(e) => setPrice_300(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Price For 330"
                    defaultValue={data.price_330}
                    variant="standard"
                    onChange={(e) => setPrice_330(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Price For 340"
                    defaultValue={data.price_340}
                    variant="standard"
                    onChange={(e) => setPrice_340(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Price For 350"
                    defaultValue={data.price_350}
                    variant="standard"
                    onChange={(e) => setPrice_350(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Price For 370"
                    defaultValue={data.price_370}
                    variant="standard"
                    onChange={(e) => setPrice_370(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Price For 400"
                    defaultValue={data.price_400}
                    variant="standard"
                    onChange={(e) => setPrice_400(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Price For 500"
                    defaultValue={data.price_500}
                    variant="standard"
                    onChange={(e) => setPrice_500(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Price For 600"
                    defaultValue={data.price_600}
                    variant="standard"
                    onChange={(e) => setPrice_600(e.target.value)}
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
                editBeer({
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
                    image,
                  id,
                });
              }}
            >
              {isLoading ? "Loading..." : "Edit Arrack"}
            </Button>
          </DialogActions>
        </Box>
      </form>
        </div>
    )
}

export default EditBeers
