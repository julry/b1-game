import styled from 'styled-components';

const TYPE_TO_COLOR = {
    primary: '#FFFFFF',
    secondary: '#FFFFFF',
    primaryOutlined: '#397834',
    secondaryOutlined: '#875310',
};

const TYPE_TO_BG = {
    primary: '#4AA851',
    secondary: '#F09217',
    primaryOutlined: '#FFFFFF',
    secondaryOutlined: '#FFFFFF',
};

const TYPE_TO_HOVER_BG = {
    primary: '#397834',
    secondary: '#875310',
    primaryOutlined: '#C9DEC8',
    secondaryOutlined: '#F0D7B7',
};

const TYPE_TO_GRADIENT = {
    primary: 'linear-gradient(180deg, #43BC4B 0%, #43BC4B 50%, #52974D 51%, #52974D 100%)',
    secondary: 'linear-gradient(180deg, #FFB14B 0%, #FFB14B 50%, #B87217 51%, #B87217 100%)',
    primaryOutlined: 'linear-gradient(180deg, #43BC4B 0%, #43BC4B 50%, #397834 51%, #397834 100%)',
    secondaryOutlined: 'linear-gradient(180deg, #FFB14B 0%, #FFB14B 50%, #875310 51%, #875310 100%)',
}

const TYPE_TO_MIN_WIDTH = {
    primary: '130px',
    secondary: '104px',
    primaryOutlined: '130px',
    secondaryOutlined: '104px',
};

const ButtonStyled = styled.button`
  cursor: pointer;
  color: ${({$type}) => TYPE_TO_COLOR[$type]};
  background: ${({$type}) => TYPE_TO_BG[$type]};
  height: 38px;
  font-size: 16px;
  font-weight: 700;
  padding: 0 13px;
  outline: none;
  border: 4px solid;
  min-width: ${({$type}) => TYPE_TO_MIN_WIDTH[$type]};
  border-image-slice: 1;
  border-image-source:${({$type}) => TYPE_TO_GRADIENT[$type]};
  transition: background-color 0.3s;
  // &:hover {
  //   background: ${({$type}) => TYPE_TO_HOVER_BG[$type]};
  // }

  &:active {
    background: ${({$type}) => TYPE_TO_HOVER_BG[$type]};
  }
  
  @media screen and (max-width: 320px) {
    height: 30px;
    font-size: 14px;
  }
`;

export const Button = (props) => <ButtonStyled $type={props.type} {...props} />