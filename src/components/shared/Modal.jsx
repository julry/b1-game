import styled from 'styled-components';
import { Button } from './Button';
import test from '../../assets/images/test.svg';
import test1 from '../../assets/images/test1.svg';
import icon from '../../assets/images/doneIcon.svg';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  padding: 0 min(6.6vw, 25px);
`;

const ModalStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #FFFFFF;
  min-height: 324px;
  width: 320px;
  text-align: center;
  border: 1px solid green;
  padding: 50px 30px;
  white-space: pre-line;
  
  @media screen and (max-width: 320px) {
    width: 288px;
  }
  
  &::before {
    content:"";
    position: absolute;
    inset: 0;
    z-index: -2;
    pointer-events: none;
    background: url(${test}) 0 0;
    background-size: auto;
  }
  &::after {
    content:"";
    z-index: -1;
    position: absolute;
    top: 16px;
    left: 16px;
    bottom: 14.5px;
    right: 14.5px;
    background: white;
  }
`;

const ButtonStyled = styled(Button)`
  position: absolute;
  bottom: -19px;
  left: 50%;
  transform: translateX(-50%);
`;

const StyledBlock = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  ${({style}) => style}
  background: url(${test1}) no-repeat center center;
`;

const Icon = styled.div`
  width: 31px;
  height: 24px;
  background: url(${icon}) no-repeat 0 0 /cover;
`;

export const Modal = ({className, children, icon, btnText, btnType, onClick}) => {
    return (
        <ModalWrapper>
            <ModalStyled className={className}>
                {children}
                {(!!icon || !!btnText) && <ButtonStyled
                    $bg={icon}
                    type={btnType}
                    onClick={onClick}
                >
                    {icon ? <Icon/> : btnText}
                </ButtonStyled>}
                <StyledBlock style={{top: '16px', left: '32px'}}/>
                <StyledBlock style={{top: '32px', left: '16px'}}/>
                <StyledBlock style={{top: '16px', right: '30px'}}/>
                <StyledBlock style={{top: '32px', right: '14px'}}/>
                <StyledBlock style={{bottom: '14px', left: '32px'}}/>
                <StyledBlock style={{bottom: '30px', left: '16px'}}/>
                <StyledBlock style={{bottom: '14px', right: '30px'}}/>
                <StyledBlock style={{bottom: '30px', right: '14px'}}/>
            </ModalStyled>
        </ModalWrapper>
    )
}