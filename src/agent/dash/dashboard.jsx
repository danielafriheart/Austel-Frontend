import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Outlet } from 'react-router';
import Nav from './components/navbar';
import { useEffect } from 'react'
import Tooltip from '@mui/material/Tooltip';

// Icon
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import ForumTwoToneIcon from '@mui/icons-material/ForumTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import GroupsIcon from '@mui/icons-material/Groups';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LogoutIcon from '@mui/icons-material/Logout';
import DescriptionIcon from '@mui/icons-material/Description';
import { Link } from 'react-router-dom';
import VillaIcon from '@mui/icons-material/Villa';
// import { ListItemButton } from '@mui/material';



const drawerWidth = 200;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 0.0625em)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 0.0625em)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);


export default function MiniDrawer() {
    useEffect(() => {
        document.title = 'Austel | My Dashboard'
    })


    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    // For selected icons
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <Box sx={{ display: 'flex' }}>

            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar className='flex'>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className="flex justify-between w-[100%] items-center">
                        <Link to='/dashboard/home' className='font-bold'>Austel</Link>
                        <Nav />
                    </div>
                </Toolbar>
            </AppBar>

            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                {/* List */}
                <List>
                    <ListItem button component={Link} to='/dashboard/home'
                        selected={selectedIndex === 1}
                        onClick={(e) => handleListItemClick(e, 1)}
                    >
                        <Tooltip title='Overview' placement='right' arrow>
                            <ListItemIcon>
                                <DashboardTwoToneIcon />
                            </ListItemIcon>
                        </Tooltip>
                        <ListItemText primary='Overview' />
                    </ListItem>

                    <ListItem button component={Link} to='/dashboard/tenants'
                        selected={selectedIndex === 2}
                        onClick={(e) => handleListItemClick(e, 2)}
                    >
                        <Tooltip title='Tenants' placement='right' arrow>
                            <ListItemIcon>
                                <GroupsIcon />
                            </ListItemIcon>
                        </Tooltip>
                        <ListItemText primary='Tenants' />
                    </ListItem>

                    <ListItem button component={Link} to='/dashboard/properties'
                        selected={selectedIndex === 3}
                        onClick={(e) => handleListItemClick(e, 3)}
                    >
                        <Tooltip title="Properties" placement='right' arrow>
                            <ListItemIcon>
                                <VillaIcon />
                            </ListItemIcon>
                        </Tooltip>
                        <ListItemText primary='Properties' secondary='Structure' />
                    </ListItem>

                    <ListItem button component={Link} to='/dashboard/payments'
                        selected={selectedIndex === 4}
                        onClick={(e) => handleListItemClick(e, 4)}
                    >
                        <Tooltip title="Payment" placement='right' arrow>
                            <ListItemIcon>
                                <CreditCardIcon />
                            </ListItemIcon>
                        </Tooltip>
                        <ListItemText primary='Payment' secondary='Structure' />
                    </ListItem>

                    <ListItem button component={Link} to='/dashboard/message'
                        selected={selectedIndex === 5}
                        onClick={(e) => handleListItemClick(e, 5)}
                    >
                        <Tooltip title="Messages" placement="right" arrow>
                            <ListItemIcon>
                                <ForumTwoToneIcon />
                            </ListItemIcon>
                        </Tooltip>
                        <ListItemText primary='Messages' />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button component={Link} to="/dashboard/logs"
                        selected={selectedIndex === 6}
                        onClick={(e) => handleListItemClick(e, 6)}
                    >
                        <Tooltip title="Activity Logs" placement="right" arrow>
                            <ListItemIcon>
                                <LogoutIcon />
                            </ListItemIcon>
                        </Tooltip>
                        <ListItemText primary="Activity Logs" />
                    </ListItem>

                    <ListItem button component={Link} to="/dashboard/letters"
                        selected={selectedIndex === 7}
                        onClick={(e) => handleListItemClick(e, 7)}
                    >
                        <Tooltip title="Letters" placement="right" arrow>
                            <ListItemIcon>
                                <DescriptionIcon />
                            </ListItemIcon>
                        </Tooltip>
                        <ListItemText primary='Letters' />
                    </ListItem>

                    <ListItem button component={Link} to='/dashboard/settings'
                        selected={selectedIndex === 8}
                        onClick={(e) => handleListItemClick(e, 8)}
                    >
                        <Tooltip title="Settings" placement="right" arrow>
                            <ListItemIcon>
                                <SettingsTwoToneIcon />
                            </ListItemIcon>
                        </Tooltip>
                        <ListItemText primary='Settings' />
                    </ListItem>
                </List>
            </Drawer>

            <div className='p-3 w-screen '>
                <DrawerHeader />
                <Typography paragraph className='p-0 w-full bg-[#FBFBFB]'>
                    <Outlet />
                </Typography>
            </div>
        </Box >
    );
}
