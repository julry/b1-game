import styled from 'styled-components';
import bg from '../../assets/images/bgCommon.svg';
import logo from '../../assets/images/logo.svg';
import { FlexWrapper } from './FlexWrapper';

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const Background = styled.div`
  position: absolute;
  inset: 0;
  background: url(${bg}) 0 0 /cover;
  z-index: 1;

  @media screen and (min-width: 500px) {
    background-size: contain;
  }
`;

const Content = styled(FlexWrapper)`
  position: absolute;
  inset: 0;
  z-index: 2;
`;

const Logo = styled.div`
  position: absolute;
  top: min(29px, 7.7vw);
  right: calc((100% - 320px) / 2);
  background: url(${logo}) no-repeat 0 0 /contain;
  width: 38px;
  height: 38px;

  @media screen and (max-width: 320px) {
    right: 20px;
  }

  @media screen and (min-width: 480px) {
    right: 35px;
  }
`;

export const BackgroundScreen = (props) => (
    <Wrapper>
        <Background>
            {props.isLogo && <Logo/>}
        </Background>
        <Content className={props.className}>
            {props.children}
        </Content>
    </Wrapper>
);
