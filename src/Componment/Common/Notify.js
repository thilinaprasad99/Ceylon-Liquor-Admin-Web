export const notify = (enqueueSnackbar, msg, variant = "success") =>
  enqueueSnackbar(msg, {
    variant,
    anchorOrigin: {
      vertical: "top",
      horizontal: "center",
    },
  });
