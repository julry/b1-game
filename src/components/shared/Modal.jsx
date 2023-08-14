import styled from 'styled-components';
import { Button } from './Button';
import modalBorder from '../../assets/images/modalBorder.svg';
import modalBorderSecondary from '../../assets/images/modalBorderSecondary.svg';
import rect from '../../assets/images/rect.svg';
import rectSec from '../../assets/images/rectSecondary.svg';
import icon from '../../assets/images/doneIcon.svg';
import { FlexWrapper } from './FlexWrapper';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  padding: 0 min(6.6vw, 25px);
`;

const ModalStyled = styled(FlexWrapper)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #FFFFFF;
  min-height: 324px;
  width: 320px;
  text-align: center;
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
    background: url(${({$type}) => $type === 'primary' ? modalBorder : modalBorderSecondary}) 0 0;
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
  background: url(${({$type}) => $type === 'primary' ? rect : rectSec}) no-repeat center center;
`;

const Icon = styled.div`
  width: 31px;
  height: 24px;
  background: url(${icon}) no-repeat 0 0 /cover;
`;

export const Modal = ({className, children, icon, btnText, btnType, onClick, type = 'primary'}) => {
    return (
        <ModalWrapper>
            <ModalStyled className={className} $type={type}>
                {children}
                {(!!icon || !!btnText) && <ButtonStyled
                    $bg={icon}
                    type={btnType}
                    onClick={onClick}
                >
                    {icon ? <Icon/> : btnText}
                </ButtonStyled>}
                <StyledBlock style={{top: '16px', left: '32px'}} $type={type}/>
                <StyledBlock style={{top: '32px', left: '16px'}} $type={type}/>
                <StyledBlock style={{top: '16px', right: '30px'}} $type={type}/>
                <StyledBlock style={{top: '32px', right: '14px'}} $type={type}/>
                <StyledBlock style={{bottom: '14px', left: '32px'}} $type={type}/>
                <StyledBlock style={{bottom: '30px', left: '16px'}} $type={type}/>
                <StyledBlock style={{bottom: '14px', right: '30px'}} $type={type}/>
                <StyledBlock style={{bottom: '30px', right: '14px'}} $type={type}/>
            </ModalStyled>
        </ModalWrapper>
    )
}