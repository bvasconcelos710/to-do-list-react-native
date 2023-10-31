import React, { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Alert, Image } from 'react-native';

import { Tecnology } from '../../components/Tecnology';
import { Button } from '../../components/Button';

import { styles } from './styles';
import { Tecnologia } from '../../model/technology';
import clipboard from '../../../assets/Clipboard.png';


export function Home() {
    const [tecnologia, setTecnologia] = useState('');
    const [tecnologias, setTecnologias] = useState([] as Tecnologia[]);

    function addTecnologia() {
        if (tecnologias.some(tec => tec.nome === tecnologia) || tecnologia === '') {
            Alert.alert('Error', 'Tecnologia ja existe ou não foi digitada');
        } else {
            setTecnologias([...tecnologias, { nome: tecnologia, concluida: false }]);
        }
        setTecnologia('');
    }

    function removeTecnologia(tec: Tecnologia) {
        Alert.alert('Remove', `Deseja realmente remover ${tec}`, [
            {
                text: 'sim',
                onPress: () => {
                    setTecnologias(tecnologias.filter(item => item.nome !== tec.nome));
                }
            }, {
                text: 'não'
            }
        ])
    }

    function handleDone(tec: Tecnologia) {
        setTecnologias((tecnologia) => tecnologia.map((tecnologia) => {
            tecnologia.nome === tec.nome ? (tecnologia.concluida = !tecnologia.concluida) : null
            return tecnologia
        }))

    }

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Minhas Tecnologias</Text>

                <View style={styles.containerInput}>
                    <TextInput
                        style={styles.input}
                        placeholder='Insira uma nova tecnologia'
                        placeholderTextColor='#808080'
                        onChangeText={text => setTecnologia(text)}
                        value={tecnologia}
                    />
                    <Button
                        title='+' onPress={addTecnologia}
                    />
                </View>
            </View>
            <View style={styles.tecnologysContainer}>
                <View style={styles.info}>
                    <View style={styles.row}>
                        <Text style={styles.created}> Criadas </Text>
                        <View style={styles.counterView}>
                            <Text style={styles.counterText} >
                                {tecnologias.length}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.done}> Concluídas </Text>
                        <View style={styles.counterView}>
                            <Text style={styles.counterText}>
                                {tecnologias.filter(tec => tec.concluida).length}
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.containerList}>

                    {
                        tecnologias.length === 0 ? (

                            <View style={styles.viewEmpty}>
                                <Image source={clipboard} style={styles.emptyLogo}></Image>
                                <Text style={styles.listEmpty}>

                                    Você ainda não tem tecnologias cadastradas.

                                </Text>
                            </View>
                        ) : (
                            tecnologias.map(item => (
                                <Tecnology key={item.nome} tecnologia={item} remove={() => removeTecnologia(item)} done={() => handleDone(item)} />
                            ))
                        )
                    }
                    {/*  <FlatList
                      data={tecnologias}
                      keyExtractor={tecnologia =>tecnologia}
                      renderItem={({item})=>(<Tecnology key={item} name={item} remove={() => removeTecnologia(item)}  done={() => handleDone(item)}/>)}
                      ListEmptyComponent={()=>(
                      <Text style={styles.listEmpty}>Adicione tecnologias.
                      </Text>
                     )} */}

                </View>

            </View>


        </>
    )
}