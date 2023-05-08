import styled from "styled-components";
import Countdown from "react-countdown";
export function Count() {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <Container>
        <div className="container-countdown">
          <div className="contendor-imagen">
            <img src="../assets/logo.png" alt="" />
          </div>
          <div className="countdown-container">
            <span className="element-count">{days}: </span>
            <span className="element-count">{hours}: </span>
            <span className="element-count">{minutes}: </span>
            <span className="element-count">{seconds} </span>
          </div>
        </div>
      </Container>
    );
  };
  return <Countdown date={"2023-07-01"} renderer={renderer} />;
}
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #191a1b;
  .container-countdown {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fcfcfc;
    .contendor-imagen {
      margin-bottom: 10px;

      img {
        width: 200px;
      }
    }
    .countdown-container {
      font-size: 30px;
      margin-left: 30px;
      .element-count{
        margin-right: 20px;
      }
    }
  }
`;
