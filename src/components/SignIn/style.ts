import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const ContainerLogin = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: #111;
`;

export const WrapLogin = styled.div`
  width: 390px;
  background-color: #333;
  border-radius: 10px;
  overflow: hidden;
  padding: 77px 55px 33px 55px;
  box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.2);

  form {
    width: 100%;

    span {
      font-family: Nunito, sans-serif;
      display: block;
      font-size: 30px;
      color: azure;
      line-height: 1.2;
      text-align: center;

      img {
        width: 40px;
      }
    }

    .wrap-input {
      width: 100%;
      position: relative;
      border-bottom: 2px solid #adadad;
      margin-bottom: 37px;
    }

    .input {
      font-size: 15px;
      color: #fff;
      line-height: 1.2;
      border: none;
      display: block;
      width: 100%;
      height: 45px;
      background-color: transparent;
      padding: 0 5px;
      font-family: Nunito, sans-serif;
    }
  }
`;
