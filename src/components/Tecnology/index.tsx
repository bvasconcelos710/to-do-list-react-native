import React from 'react';
import { useState } from 'react';
import { Text, View } from 'react-native';

import { Button } from '../../components/Button';

import { styles } from './styles';
import { Tecnologia } from '../../model/technology';

interface TecnologyProps {
    tecnologia: Tecnologia;
    remove: (tecnologia: Tecnologia) => void;
    done: (tecnologia: Tecnologia) => void;
}

export function Tecnology({ tecnologia, remove, done }: TecnologyProps) {
    {/*
        const [checkout, setCheckout] = useState(false);

    function handleCheck() {
        setCheckout(!checkout);
        tecnologia.concluida = true;
    }
*/}

    const nameTecnologyStyle = tecnologia.concluida ? styles.nameTecnologyCheckout : styles.nameTecnology;
    const iconTitle = tecnologia.concluida ? 'checkout' : 'check';


    return (
        <View style={styles.container}>
            <Button title={iconTitle} onPress={() => done(tecnologia)} />
            <Text style={nameTecnologyStyle}>{tecnologia.nome}</Text>
            <Button title='-' onPress={() => remove(tecnologia)} />
        </View>
    );
};
