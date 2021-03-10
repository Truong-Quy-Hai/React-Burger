import React from "react";
import { useSelector } from "react-redux";
import burgerSelector from "../../redux/Selector/burgerComponentsSelector";
import BurgerComponent from "./BurgerComponent";

const Burger = ({ style }) => {
  const burgerComponents = useSelector(burgerSelector);
  return (
    <div
      style={{
        width: 254,
        ...style,
      }}
    >
      {burgerComponents.reduce((acc, component) => {
        const { src, style } = component;
        let numOfComponents = component.quantity;
        while (numOfComponents) {
          acc.push(
            <BurgerComponent key={acc.length} src={src} style={style} />
          );
          numOfComponents--;
        }
        return acc;
      }, [])}
    </div>
  );
};

export default Burger;
