//menu lateral del amdministrador
import React from 'react';
import clsx from 'clsx';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { useState,useEffect } from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import{ menu}from '../styles/menu'
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const Menu= ({View,Views,comments}) =>{
  const Menu = menu();
  const classes = useStyles();
  const [menu_item,setMenu_item]=useState(0);
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

if(Views!==menu_item){
  setMenu_item(Views)
}
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(Menu.cont,classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <img className={Menu.logo} src="https://res.cloudinary.com/dfaaqkh9d/image/upload/v1636915471/logo/WhatsApp_Image_2021-11-14_at_11.24.16_AM_qsjcej.png"/>
      </List>
     
      <List>
      <Divider className={Menu.item_div} />
        {['Resumen',
         'Publicar',
         'Publicados',
         'Comentarios',
         'Ventas','pendientes','Novedades'].map((text, index) => (
          <>
          <ListItem className={
            menu_item === index ?
             Menu.Cont_active : 
             Menu.cont_item}
             onClick={()=>[setMenu_item(index ),View(index)]} button key={index}>
            <ListItemIcon  className={
              menu_item === index ?
                menu_item === 0 ? Menu.active0:
                menu_item === 1 ? Menu.active1:
                menu_item === 2 ? Menu.active2:  
                menu_item === 4 ? Menu.active4: 
                menu_item === 5 ? Menu.active5:
                menu_item === 6 && Menu.active6:
                Menu.item}>{index  === 0 ? <Icon>poll</Icon> : 
                index  ===1? <Icon>calendar_today</Icon>:
                index  ===2? <Icon>done_all</Icon>:
                index  ===3?  
                 <> 
              <Badge badgeContent={comments} color="secondary">
                <Icon className={menu_item===3?Menu.active3: Menu.item}>forum</Icon>
              </Badge>
              </>: 
                index  === 4 ? <Icon>paid</Icon>:
                index  === 5 ? <Icon>timer</Icon>:
                index  === 6 &&<Icon>card_giftcard</Icon>
                }
                </ListItemIcon>
            <ListItemText className={Menu.item} primary={text} />
          </ListItem>
          <Divider className={Menu.item_div} />
          </>
        ))}
      </List>
      
   
    </div>
  );

  return (
    <div className={Menu.bar} >
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
                <IconButton onClick={toggleDrawer(anchor, true)} color="primary" aria-label="add to shopping cart">
                <Icon>menu</Icon>
      </IconButton>
          <Drawer  anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
export default Menu;