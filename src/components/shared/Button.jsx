import styled from 'styled-components';

const TYPE_TO_COLOR = {
    primary: '#FFFFFF',
    secondary: '#397834',
    primarySecond: '#FFFFFF',
    secondarySecond: '#875310',
};

const TYPE_TO_BG = {
    primary: '#4AA851',
    secondary: '#FFFFFF',
    primarySecond: '#875310',
    secondarySecond: '#FFFFFF',
};

const TYPE_TO_HOVER_BG = {
    primary: '#397834',
    secondary: '#C9DEC8',
    primarySecond: '#875310',
    secondarySecond: '#F0D7B7',
};

const TYPE_TO_GRADIENT = {
    primary: 'linear-gradient(180deg, #43BC4B 0%, #43BC4B 50%, #52974D 51%, #52974D 100%)',
    secondary: 'linear-gradient(180deg, #43BC4B 0%, #43BC4B 50%, #397834 51%, #397834 100%)',
    primarySecond: 'linear-gradient(180deg, #FFB14B 0%, #FFB14B 50%, #B87217 51%, #B87217 100%)',
    secondarySecond: 'linear-gradient(180deg, #FFB14B 0%, #FFB14B 50%, #875310 51%, #875310 100%)',
}

const ButtonStyled = styled.button`
  color: ${({$type}) => TYPE_TO_COLOR[$type]};
  background: ${({$type}) => TYPE_TO_BG[$type]};
  height: 38px;
  font-size: 16px;
  font-weight: 700;
  padding: 0 13px;
  outline: none;
  border: 4px solid;
  border-image-slice: 1;
  border-image-source:${({$type}) => TYPE_TO_GRADIENT[$type]};
  
  &:hover {
    background: ${({$type}) => TYPE_TO_HOVER_BG[$type]};
  }
`;

export const Button = (props) => <ButtonStyled $type={props.type} {...props} />