import topBurger from "../../assets/images/topBurger.png";
import mustard from "../../assets/images/mustard.png";
import meat from "../../assets/images/meat.png";
import tomato from "../../assets/images/tomato.png";
import salad from "../../assets/images/salad.png";
import botBurger from "../../assets/images/botBurger.png";

const initialState = {
  burgerComponents: [
    {
      name: "top bread",
      src: topBurger,
      style: {
        height: "85px",
        backgroundSize: "225px 85px",
      },
      price: 10,
      quantity: 1,
    },
    {
      name: "mustard",
      src: mustard,
      style: {
        height: "50px",
        backgroundSize: "225px 50px",
      },
      price: 2,
      quantity: 1,
    },
    {
      name: "meat",
      src: meat,
      style: {
        height: "67px",
        backgroundSize: "254px auto",
      },
      price: 18,
      quantity: 1,
    },
    {
      name: "tomato",
      src: tomato,
      style: {
        height: "31px",
        backgroundSize: "233px auto",
        backgroundPosition: "left",
      },
      price: 5,
      quantity: 1,
    },
    {
      name: "salad",
      src: salad,
      style: {
        height: "50px",
        backgroundPosition: "left",
        backgroundSize: "249px auto",
      },
      price: 4,
      quantity: 1,
    },
    {
      name: "bot bread",
      src: botBurger,
      style: {
        height: "51px",
        backgroundSize: "224px auto",
      },
      price: 10,
      quantity: 1,
    },
  ],
};

export const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "burger/inc": {
      const name = action.payload;
      const burgerComponents = state.burgerComponents.map((component) => {
        return component.name === name
          ? { ...component, quantity: component.quantity + 1 }
          : component;
      });
      return {
        ...state,
        burgerComponents,
      };
    }
    case "burger/dec": {
      const name = action.payload;
      const burgerComponents = state.burgerComponents.map((component) => {
        return component.name === name
          ? {
              ...component,
              quantity: component.quantity - 1 > 0 ? component.quantity - 1 : 1,
            }
          : component;
      });
      return {
        ...state,
        burgerComponents,
      };
    }
    default:
      return state;
  }
};
