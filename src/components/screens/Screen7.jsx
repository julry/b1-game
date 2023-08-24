import styled from 'styled-components';
import { useState } from 'react';
import { useProgress } from '../../hooks/useProgress';
import { reachMetrikaGoal } from '../../utils/reachMetrikaGoal';
import { openIntership } from '../../utils/openIntership';
import { Modal } from '../shared/Modal';
import { BackgroundScreen } from '../shared/BackgroundScreen';
import { Text } from '../shared/texts';
import { Button } from '../shared/Button';

const ButtonStyled = styled(Button)`
  margin: 16px auto 20px;
  max-width: 194px;

  &:disabled {
    opacity: 0.6;
  }

  &:nth-of-type(2) {
    margin-top: 20px;
  }
`;

const InputRadioButton = styled.input`
  display: none;
`;

const RadioIconStyled = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  background: white;
  border: 1px solid #B1B1B1;
  border-radius: 3px;
  margin-right: 10px;
`;

const InputStyled = styled.input`
  max-width: 250px;
  margin: min(3.733vw, 20px) auto ${({$isCorrect}) => $isCorrect ? 'min(2.933vw, 11px)' : 0};
  outline: none;
  border: 1px solid ${({$isCorrect, value}) => !!value ? $isCorrect ? '#444042' : '#ff2d01' : '#B1B1B1'};
  background: #FFFFFF;
  border-radius: 5px;
  width: 100%;
  padding: 7px 10px;
  font-size: 14px;
  transition: border 300ms;
  color: ${({$isCorrect}) => $isCorrect ? '#444042' : '#ff2d01'};
  height: 32px;

  &::placeholder {
    color: #B1B1B1;
  }

  &:active {
    border-color: #444042;
  }
`;

const RadioButtonLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: 'Motserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 8px;
  max-width: 250px;
  width: 100%;
  margin: 0 auto;
  text-align: left;
  transition: color 300ms;
  color: ${({$checked}) => $checked ? '#444042' : '#B1B1B1'};

  & ${InputRadioButton}:checked + ${RadioIconStyled} {
    border-color: #444042;
  }

  & ${InputRadioButton}:checked + ${RadioIconStyled}:after {
    content: '';
    position: absolute;
    top: 5.5px;
    left: 4px;
    background-color: #4AA851;
    display: inline-block;
    width: 2px;
    height: 6px;
    transform: rotate(-39deg);
    border-radius: 4px;
  }

  & ${InputRadioButton}:checked + ${RadioIconStyled}:before {
    content: '';
    position: absolute;
    background-color: #4AA851;
    display: inline-block;
    width: 2px;
    height: 9px;
    left: 7.5px;
    top: 3px;
    transform: rotate(32deg);
    border-radius: 4px;
  }
`;

const ErrorText = styled.p`
  font-size: 11px;
  color: #ff2d01;
  margin: 5px 0;
`;

const Link = styled.a`
  color: inherit;
`;

const ModalStyled = styled(Modal)`
  min-height: 520px;

  @media screen and (max-width: 320px) {
    min-height: 471px;
  }
`;

export const Screen7 = () => {
    const [email, setEmail] = useState('');
    const [isAgreed, setIsAgreed] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [isCorrect, setIsCorrect] = useState(true);
    const {next} = useProgress();

    const emailRegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const sendData = () => {
        setIsSending(true);
        reachMetrikaGoal('email');

        const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdaVr-4R_moI4F13aqbKAeAEVu7Sp0_Orh0ai414es9l3R8xA/formResponse';
        const EMAIL_ID = 'entry.1077786449';
        const formData = new FormData();

        formData.append(EMAIL_ID, email);

        const myInit = {
            method: 'POST',
            mode: 'no-cors',
            body: formData
        };
        const myRequest = new Request(GOOGLE_FORM_ACTION_URL, myInit);

        fetch(myRequest).then(() => {
            next();
        }).finally(() => {
            setIsSending(false);
        });
    };

    const handleBlur = () => {
        if (email.match(emailRegExp) || !email) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    const handleChange = (e) => {
        setIsCorrect(true);
        setEmail(e.target.value);
    };

    const handleInterClick = () => {
        reachMetrikaGoal('lvl3_intership');
        openIntership();
    }

    return (
        <BackgroundScreen>
            <ModalStyled btnType={'secondary'} type={'secondary'}>
                <Text>
                    Не откладывай карьеру {'\n'}на потом — давай к нам {'\n'}уже сейчас!
                </Text>
                <ButtonStyled type={'secondaryOutlined'} onClick={handleInterClick}>На стажировку</ButtonStyled>
                <Text>
                    {
                        'И принимай участие\nв розыгрыше — оставляй свои контакты, ' +
                        'а мы случайным образом\nдо 30 ноября выберем тех, кто получит крутой \nмерч от Б1!'
                    }
                </Text>
                <InputStyled
                    value={email}
                    placeholder="example@mail.ru"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    $isCorrect={isCorrect}
                />
                {!isCorrect && <ErrorText>Введи корректный e-mail</ErrorText>}
                <RadioButtonLabel $checked={isAgreed}>
                    <InputRadioButton
                        type="checkbox"
                        value={isAgreed}
                        checked={isAgreed}
                        onChange={() => setIsAgreed(prevAgreed => !prevAgreed)}
                    />
                    <RadioIconStyled/>
                    <span>
                        Я согласен(а) на <Link href={'https://fut.ru/personal_data_policy/'} target="_blank">
                        обработку персональных данных</Link> {'\n'}и получение информационных сообщений
                    </span>
                </RadioButtonLabel>
                <ButtonStyled
                    type={'secondary'}
                    onClick={sendData}
                    disabled={!isAgreed || !isCorrect || !email || isSending}
                >
                    Участвовать
                </ButtonStyled>
            </ModalStyled>
        </BackgroundScreen>
    );
};
