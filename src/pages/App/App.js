import Burger from "../../components/Burger/Burger";
import BurgerTable from "../../components/Burger/BurgerTable";
import { Col } from "../../components/StyledComponents/Col";
import { Container } from "../../components/StyledComponents/Container";
import { Flex } from "../../components/StyledComponents/Flex";
import { Row } from "../../components/StyledComponents/Row";
import "./App.css";

function App() {
  return (
    <div className="BurgerApp">
      <Container style={{ padding: "5vh 0" }}>
        <Row>
          <Col className="col-md-5">
            <Flex className="jce" style={{ paddingRight: "2rem" }}>
              <Burger />
            </Flex>
          </Col>
          <Col className="col-md-6">
            <h1
              style={{
                color: "#fff",
                backdropFilter: "blur(15px)",
                padding: "8px 16px",
                borderRadius: 5,
              }}
            >
              Chọn Thức Ăn
            </h1>
            <BurgerTable />
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
