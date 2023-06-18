import styled from "styled-components";
import Countdown from "react-countdown";
export function Count() {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <Container>
        <div className="background-image-container">
          <img
            className="background-image"
            src="https://i.gifer.com/IrBq.gif"
            alt=""
          />
        </div>
        <div className="container-countdown">
          <div className="contendor-imagen">
            <img
              src="https://media.discordapp.net/attachments/635830987011522560/1117614961007546378/ezgif.com-optimize_1.gif?width=524&height=498"
              alt=""
            />
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
  return <Countdown date={"2023-07-02T12:00:00"} renderer={renderer} />;
}
const Container = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #191a1b;

  .background-image-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .background-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .container-countdown {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fcfcfc;
    z-index: 1;
    .contendor-imagen {
      margin-bottom: 10px;

      img {
        width: 200px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
          rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
      }
    }
    .countdown-container {
      font-size: 30px;
      margin-left: 30px;
      .element-count {
        margin-right: 20px;
      }
    }
  }
`;
