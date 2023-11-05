import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa"
import { useMediaQuery } from "react-responsive"
import React, { useState, useRef } from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Slide } from '@mui/material';
import styles from "./header.module.css"
import { Link } from "react-router-dom";
import style from "../../index.module.css"
import logo from "../../image/synaps-logo-2@2x.png"
import "../../App.css"

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [state, setState] = useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Slide direction="right" in={state[anchor]} style={{ backgroundColor: "#000", color: "#fff", width: "460px", height: "200vh", top: "0", position: "fixed" }} mountOnEnter unmountOnExit>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onKeyDown={toggleDrawer(anchor, false)}
        style={{ backgroundColor: "#000", color: "#fff" }}
      >
        <div className={styles.sidebarHeader}>
          <div className={styles.logoText}>
            <img className={styles.logo} alt="" src={logo} />
            <div className={styles.logoTextContainer}>
              <span className={styles.logoTextSynaps}>Synaps</span>
              <span className={styles.logoTextSolutions}>Solutions</span>
            </div>
          </div>
          <Button onClick={toggleDrawer('left', false)} className={styles.btnclose}>
            <FaTimes />
          </Button>
        </div>
        <Divider className={styles.sidebarDivider} />
        <List>
          <ListItem className={styles.listItem} disablePadding style={{ backgroundColor: "#000", color: "#fff" }} >
            <Slide direction="right" in={state[anchor]} mountOnEnter unmountOnExit>
              <ListItemButton className={styles.listItemButton} component={Link} to="/">
                <ListItemText className={styles.headerli} primary="Home" />
              </ListItemButton>
            </Slide>
          </ListItem>
          <ListItem className={styles.listItem} disablePadding style={{ backgroundColor: "#000", color: "#fff" }}>
            <Slide direction="right" in={state[anchor]} mountOnEnter unmountOnExit>
              <ListItemButton className={styles.listItemButton} component={Link} to="/services">
                <ListItemText className={styles.headerli} primary="Services" />

              </ListItemButton>
            </Slide>
          </ListItem>
          <ListItem className={styles.listItem} disablePadding style={{ backgroundColor: "#000", color: "#fff" }}>
            <Slide direction="right" in={state[anchor]} mountOnEnter unmountOnExit>
              <ListItemButton className={styles.listItemButton} component={Link} to="/about" >
                <ListItemText className={styles.headerli} primary="About Us" />
              </ListItemButton>
            </Slide>
          </ListItem>

          <ListItem className={styles.listItem} disablePadding style={{ backgroundColor: "#000", color: "#fff" }}>
            <Slide direction="right" in={state[anchor]} mountOnEnter unmountOnExit>
              <ListItemButton className={styles.listItemButton} component={Link} to="#contact" style={{ backgroundColor: "#000" }}>
                <ListItemText className={styles.headerli} primary="Contact" />
              </ListItemButton>
            </Slide>
          </ListItem>
          <ListItem className={styles.listItem} disablePadding style={{ backgroundColor: "#000", color: "#fff" }}>
            <Slide direction="right" in={state[anchor]} mountOnEnter unmountOnExit>
              <ListItemButton className={styles.listItemButton} component={Link} to="/portfolio" style={{ backgroundColor: "#000" }}>
                <ListItemText className={styles.headerli} primary="Portfolio" />
              </ListItemButton>
            </Slide>
          </ListItem>
        </List>

      </Box>
    </Slide>
  );

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "100%";
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }

  return (
    <>
      <div>
        <Desktop>
          {/* <div className={style.frameChild7} /> */}

          <Link to='/'> <img className={style.synapsLogo2} alt="" src={logo} />
            <div className={style.synapsSolutions}>
              <span>{`Synaps `}</span>
              <span className={style.innovation}>Solutions</span>
            </div>
          </Link>
          <div id="header">
            <Button className={styles.fabars} onClick={toggleDrawer('left', true)}><FaBars /></Button>
            <Drawer
              anchor="left"
              open={state['left']}
              onClose={toggleDrawer('left', false)}
              transitionDuration={300}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}

            >
              <div>
                {list('left')}
              </div>
            </Drawer>
          </div>
        </Desktop>
      </div>
      <div>
        <Mobile>
          <div id="contactus">
            {/* <div className={style.frameChild7} /> */}
            <Link to='/'>
              <div><img className={style.synapsLogo2} alt="" src={logo} /></div>
              <div className={style.synapsSolutions}>
                <span>{`Synaps `}</span>
                <span className={style.innovation}>Solutions</span>
              </div>
            </Link>
            <nav id="navbar" className="navbar">
              <div id="mySidenav" className="sidenav">
                <div> <a to="javascript:void(0)" className="closebtn" onClick={closeNav}><FaTimes /></a></div>
                <div className="ul">
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/services">Services</Link>
                  <Link to="/portfolio">Portfolio</Link>
                  <li class="dropdown list-unstyled"><a href="#"><span>Drop Down</span> <FaChevronDown /></a>
                    <ul className="list-unstyled ">
                      <li className="text-center"><a href="#">Drop Down 1</a></li>
                      <li className="text-center"><a href="#">Deep Drop Down 1</a></li>
                      <li className="text-center"><a href="#">Deep Drop Down 2</a></li>
                      <li className="text-center"><a href="#">Deep Drop Down 3</a></li>
                      <li className="text-center"><a href="#">Deep Drop Down 4</a></li>
                      <li className="text-center"><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li>

                  <Link to='/contact'>Contact</Link>
                </div>
              </div>
            </nav>
            <span className={styles.span1} style={{ fontSize: '30px', cursor: 'pointer', marginLeft: "320px", color: "#fff" }} onClick={openNav}><FaBars /></span>
          </div>

        </Mobile >

      </div>
    </>
  )
}

export default Header
