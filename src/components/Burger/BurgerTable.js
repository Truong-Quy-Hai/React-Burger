import { useDispatch, useSelector } from "react-redux";
import burgerDec from "../../redux/Actions/BurgerActions/burgerDec";
import burgerInc from "../../redux/Actions/BurgerActions/burgerInc";
import burgerComponentsSelector from "../../redux/Selector/burgerComponentsSelector";
import { Button } from "../StyledComponents/Button";
import { Flex } from "../StyledComponents/Flex";
import { TableColumn, TableHeader } from "../StyledComponents/TableColumn";
import { TableRow } from "../StyledComponents/TableRow";

export default () => {
  const burgerComponents = useSelector(burgerComponentsSelector);
  const dispatch = useDispatch();

  return (
    <table style={{ width: "100%" }}>
      <thead>
        <TableRow className="light">
          <TableHeader>Thức ăn</TableHeader>
          <TableHeader style={{ textAlign: "center" }}>Tăng / Giảm</TableHeader>
          <TableHeader>Giá</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {burgerComponents.map((component, index) =>
          index === 0 || index === burgerComponents.length - 1 ? null : (
            <TableRow className="light" key={index}>
              <TableColumn style={{ textTransform: "capitalize" }}>
                {component.name}
              </TableColumn>
              <TableColumn>
                <Flex className="jcc">
                  <Button
                    className="ji"
                    backgroundColor="#1ee01e"
                    color="#fff"
                    style={{ marginRight: 5 }}
                    onClick={() => {
                      dispatch(burgerInc(component.name));
                    }}
                  >
                    +
                  </Button>
                  <Button
                    className="ji"
                    backgroundColor="#ff0000"
                    color="#fff"
                    onClick={() => {
                      dispatch(burgerDec(component.name));
                    }}
                    disabled={component.quantity === 1}
                  >
                    -
                  </Button>
                </Flex>
              </TableColumn>
              <TableColumn>${component.price * component.quantity}</TableColumn>
            </TableRow>
          )
        )}
      </tbody>
      <tfoot>
        <TableRow className="light">
          <TableColumn></TableColumn>
          <TableColumn colSpan="2" style={{ position: "relative" }}>
            <span style={{ position: "relative", left: 100 }}>Tổng tiền:</span>
            <span style={{ position: "relative", left: 110, fontWeight: 700 }}>
              $
              {burgerComponents.reduce(
                (acc, { price, quantity }) => acc + price * quantity,
                0
              )}
            </span>
          </TableColumn>
        </TableRow>
      </tfoot>
    </table>
  );
};
