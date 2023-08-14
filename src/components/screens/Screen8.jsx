import styled from 'styled-components';
import { BackgroundScreen } from '../shared/BackgroundScreen';
import person from '../../assets/images/commonPerson3.svg';
import dialog from '../../assets/images/dialog.svg';
import { Text, BoldText } from '../shared/texts';


const PersonWrapper = styled.div`
  margin-top: auto;
  width: 177px;
  height: 368px;
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
  bottom: 378px;
  left: 25px;
  background: url(${dialog}) no-repeat 0 0 /cover;
  padding: 23px 50px 20px 35px;
`;

export const Screen8 = () => {
    return (
        <BackgroundScreen isLogo>
            <PersonWrapper>
                <DialogWrapper>
                    <BoldText>
                        Ты в конкурсе!
                    </BoldText>
                    <br />
                    <Text>Если ты победишь, то мы отправим тебе всю информацию на указанную почту. Будь начеку!</Text>
                </DialogWrapper>
                <Person/>
            </PersonWrapper>
        </BackgroundScreen>
    )
}