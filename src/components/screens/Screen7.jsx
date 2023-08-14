import { Modal } from '../shared/Modal';
import { BackgroundScreen } from '../shared/BackgroundScreen';
import { Text, BoldText } from '../shared/texts';
import { Button } from '../shared/Button';

export const Screen7 = () => {
    return (
        <BackgroundScreen>
            <Modal btnText={'Круто!'} btnType={'secondary'}>
                <Text>
                    Не откладывай карьеру на потом — давай к нам уже сейчас!
                </Text>
                <Button type={'secondaryOutlined'}>На стажировку</Button>
                <Text>
                    И принимай участие в розыгрыше — оставляй свои контакты, а мы случайным образом выберем тех, кто получит крутой мерч от Б1!
                </Text>
                <input />
                <input />
                <Button type={'secondaryOutlined'}>Участвовать</Button>
            </Modal>
        </BackgroundScreen>
    )
}