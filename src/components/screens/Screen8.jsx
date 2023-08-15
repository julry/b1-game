import styled from 'styled-components';
import { BackgroundScreen } from '../shared/BackgroundScreen';
import person from '../../assets/images/commonPerson3.svg';
import dialog from '../../assets/images/dialog.svg';
import { Text, BoldText } from '../shared/texts';


const PersonWrapper = styled.div`
  margin-top: auto;
  width: 177px;
  height: min(368px, 97.8vw);
  overflow: hidden;
  margin-left: 25px;
`;

const Person  = styled.div`
  width: 177px;
  height: 517px;
  background: url(${person}) no-repeat 0 0 /cover;
`;

const DialogWrapper = styled.div`
  position: absolute;
  width: 331px;
  height: 192px;
  bottom: min(378px, 97.8vw);
  left: 25px;
  background: url(${dialog}) no-repeat 0 0 /cover;
  padding: 23px 50px 20px 35px;
  
  @media screen and (max-width: 320px) {
    padding: 20px 25px;
    width: 270px;
    height: 157px;
  }
`;

const Title = styled(BoldText)`
  font-size: 20px;
  margin-bottom: min(10px, 2.6vw);
  
  @media screen and (max-width: 320px) {
    font-size: 16px;
  }
`;


export const Screen8 = () => {
    return (
        <BackgroundScreen isLogo>
            <PersonWrapper>
                <DialogWrapper>
                    <Title>
                        Ты в конкурсе!
                    </Title>
                    <Text>Если ты победишь, то мы отправим тебе всю информацию на указанную почту. Будь начеку!</Text>
                </DialogWrapper>
                <Person/>
            </PersonWrapper>
        </BackgroundScreen>
    )
}