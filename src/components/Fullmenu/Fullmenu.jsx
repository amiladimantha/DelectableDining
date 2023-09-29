import React from "react";
import { Modal, Button } from "antd";
import './Fullmenu.css';
import { SubHeading, MenuItem } from "../../components";
import { data } from "../../constants";

const Fullmenu = ({ visible, onCancel }) => {
  return (
    <Modal
      title="Full Menu"
      open={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
      ]}
      className="full-menu"
    >

<div className="app__sMenu flex__center section__padding" id="menu">
      <div className="app__sMenu-title">
        <SubHeading title="Pick your favourites" />
        <h1 className="headtext__cormorant">Menu</h1>
      </div>
  
      <div className="app__sMenu-menu">
        <div className="app__sMenu-menu_wine  flex__center">
          <p className="app__sMenu-menu_heading">Wine & Beer</p>
          <div className="app__sMenu_menu_items">
            {data.wines.map((wine, index) => (
              <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
            ))}
          </div>
        </div>
  
        <div className="app__sMenu-menu_cocktails  flex__center">
          <p className="app__sMenu-menu_heading">Cocktails</p>
          <div className="app__sMenu_menu_items">
            {data.cocktails.map((cocktail, index) => (
              <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
            ))}
          </div>
        </div>

        <div className="app__sMenu-menu_cocktails  flex__center">
          <p className="app__sMenu-menu_heading">Cuisines</p>
          <div className="app__sMenu_menu_items">
            {data.cuisines.map((cuisines, index) => (
              <MenuItem key={cuisines.title + index} title={cuisines.title} price={cuisines.price} tags={cuisines.description} />
            ))}
          </div>
        </div>
      </div>

    </div>

    </Modal>
  );
};

export default Fullmenu;
