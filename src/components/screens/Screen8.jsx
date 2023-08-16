import styled from 'styled-components';
import { BackgroundScreen } from '../shared/BackgroundScreen';
import person from '../../assets/images/commonPerson3.svg';
import dialog from '../../assets/images/dialog.svg';
import { Text, BoldText } from '../shared/texts';
import { Button } from '../shared/Button';


const PersonWrapper = styled.div`
  margin-top: auto;
  width: 177px;
  height: min(348px, 92.8vw);
  overflow: hidden;
  margin-left: 25px;

  @media screen and (max-height: 640px) {
    height: min(280px, 75vw);
  }
`;

const Person  = styled.div`
  width: 177px;
  height: 517px;
  background: url(${person}) no-repeat 0 0 /cover;
`;

const DialogWrapper = styled.div`
  position: absolute;
  white-space: pre-line;
  width: 308px;
  height: 247px;
  bottom: min(340px, 90.6vw);
  left: 25px;
  background: url(${dialog}) no-repeat 0 0 /cover;
  padding: 23px 50px 20px 35px;

  @media screen and (max-height: 640px) {
    bottom: min(280px, 75vw);
  }
  
  @media screen and (max-width: 320px) {
    padding: 20px 35px;
    width: 265px;
    height: 212px;
  }

  @media screen and (max-width: 300px) {
    padding: 15px 18px;
    width: 250px;
    height: 200px;
  }
  
`;

const TextStyled = styled.p`
  font-size: 14px;
  
  @media screen and (max-width: 320px) {
    font-size: 12px;
  }
`;

const Title = styled(BoldText)`
  font-size: 18px;
  margin-bottom: min(10px, 2.6vw);
  
  @media screen and (max-width: 320px) {
    font-size: 14px;
  }
`;

const ButtonStyled = styled(Button)`
  margin-top: min(11px, 2.933vw);
`;

export const Screen8 = () => {
    return (
        <BackgroundScreen isLogo>
            <PersonWrapper>
                <DialogWrapper>
                    <Title>
                        Ты участвуешь{'\n'}в конкурсе!
                    </Title>
                    <TextStyled>Если ты победишь, то мы отправим тебе всю информацию на указанную почту. Будь начеку!</TextStyled>
                    <ButtonStyled type={'primaryOutlined'}>На стажировку</ButtonStyled>
                </DialogWrapper>
                <Person/>
            </PersonWrapper>
        </BackgroundScreen>
    )
}