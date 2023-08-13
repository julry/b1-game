import { BoldText, Text, TextSmall } from './texts';
import { Modal } from './Modal';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 9px;
`;

const ItemIcon = styled.div`
  width: 38px;
  height: 38px;
  margin-right: 8px;
  background: url(${({$src}) => $src}) no-repeat 0 0 /cover;
`;

const ItemDesc = styled.div`
  background: url(${({$src}) => $src}) no-repeat 0 0 /cover;
  max-width: 155px;
  text-align: left;
  white-space: pre-line;
`;

const CountWrapper = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
`;

const Count = styled(BoldText)`
  font-size: 20px;
  margin-left: 10px;
`;

const XStyled = styled(BoldText)`
  font-size: 12px;
`;

export const InfoModal = ({ className, onClick, title, desc, items, children}) => (
    <Modal className={className} icon={!!onClick} onClick={onClick} btnType={'primary'} >
        <BoldText>{title}</BoldText>
        <br/>
        <Text>
            {desc}
        </Text>
        <br/>
        {items.map(item => (
            <ItemWrapper key={item.name}>
                <ItemIcon $src={item.src}/>
                <ItemDesc>
                    <TextSmall>
                        <b>{item.nameRu}{'\n'}</b>
                        {item.desc}
                    </TextSmall>
                </ItemDesc>
                <CountWrapper>
                    <XStyled> X </XStyled>
                    <Count>{item.amount}</Count>
                </CountWrapper>
            </ItemWrapper>
        ))}
        {children}
    </Modal>
)
