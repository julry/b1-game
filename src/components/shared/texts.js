import styled from 'styled-components';

export const Text = styled.p`
  font-size: 16px;

  @media screen and (max-width: 320px) {
    font-size: 14px;
  }
`;

export const BoldText = styled(Text)`
  font-weight: 700;
`;

export const TextSmall = styled.p`
  font-size: 12px;

  @media screen and (max-width: 320px) {
    font-size: 11px;
  }
`;
