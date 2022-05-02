import React, { useState } from 'react';

import {
    Alert,
    Keyboard,
    TextInput,
    View
} from 'react-native';
import { api } from '../../services/api';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from './styles';

export function SendMessageForm() {
    const [message, setMessage] = useState('');
    const [sendingMessage, setSendingMessage] = useState(false);

    async function handleMessageSubmit() {
        const messageFormatted = message.trim();


        if (messageFormatted.length > 0) {
            setSendingMessage(true);

            await api.post('/messages', { message: messageFormatted });

            setMessage('');
            Keyboard.dismiss();
            setSendingMessage(false);

            Alert.alert('Mensagem enviada com sucesso!');

        }
        else {
            Alert.alert('Escreva a mensagem para enviar.');
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                multiline
                value={message}
                maxLength={140}
                style={styles.input}
                onChangeText={setMessage}
                keyboardAppearance='dark'
                editable={!sendingMessage}
                placeholderTextColor={COLORS.GRAY_PRIMARY}
                placeholder='Qual a sua expectativa para o evento?'
            />
            <Button
                color={COLORS.WHITE}
                title='Enviar Mensagem'
                isLoading={sendingMessage}
                onPress={handleMessageSubmit}
                backgroundColor={COLORS.PINK}
            />
        </View>
    );
}