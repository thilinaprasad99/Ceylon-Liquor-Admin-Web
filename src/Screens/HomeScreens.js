import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ArracksScreens from './ArracksScreens/ArracksScreens';
import CategoryScreens from './CategoryScreens/CategoryScreens';
import BeersScreens from './BeersScreens/BeersScreens';
import WhiskeysScreens from './WhiskeysScreens/WhiskeysScreens';
import RumsScreens from './RumsScreens/RumsScreens';
import GinsScreens from './GinsScreens/GinsScreens';
import VodkasScreens from './VodkasScreens/VodkasScreens';
import WinesScreens from './WinesScreens/WinesScreens';
import ChampagnesScreens from './ChampagnesScreens/ChampagnesScreens';
import TequilasScreens from './TequilasScreens/TequilasScreens';
import BrandysScreens from './BrandysScreens/BrandysScreens';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100%',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const HomeScreens=()=> {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        style={{minWidth:200}}
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Category" {...a11yProps(0)} />
        <Tab label="Arracks" {...a11yProps(1)} />
        <Tab label="Beers" {...a11yProps(2)} />
        <Tab label="Whiskeys" {...a11yProps(3)} />
        <Tab label="Rums" {...a11yProps(4)} />
        <Tab label="Gins" {...a11yProps(5)} />
        <Tab label="Vodkas" {...a11yProps(6)} />
        <Tab label="Wines" {...a11yProps(7)} />
        <Tab label="Champagnes" {...a11yProps(8)} />
        <Tab label="Tequilas" {...a11yProps(9)} />
        <Tab label="Brandys" {...a11yProps(10)} />
      </Tabs>
      <TabPanel value={value} index={0}>
      <CategoryScreens/>
      </TabPanel>
      <TabPanel value={value} index={1} >
      <ArracksScreens/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <BeersScreens/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <WhiskeysScreens/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <RumsScreens/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <GinsScreens/>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <VodkasScreens/>
      </TabPanel>
      <TabPanel value={value} index={7}>
        <WinesScreens/>
      </TabPanel>
      <TabPanel value={value} index={8}>
        <ChampagnesScreens/>
      </TabPanel>
      <TabPanel value={value} index={9}>
        <TequilasScreens/>
      </TabPanel>
      <TabPanel value={value} index={10}>
        <BrandysScreens/>
      </TabPanel>
    </div>
  );
}

export default HomeScreens