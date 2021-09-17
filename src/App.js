import React from "react";
import AppTopBar from "./Componment/AppTopBar";
import AppRoute from "./Router/AppRoute";
import HomeScreens from "./Screens/HomeScreens";
import { SnackbarProvider } from "notistack";

const App = () => {
  const providerRef = React.useRef();
  return (
    <div>
      <SnackbarProvider ref={providerRef} maxSnack={4}>
        <AppRoute />
        <AppTopBar />
        <HomeScreens />
      </SnackbarProvider>
    </div>
  );
};

export default App;
