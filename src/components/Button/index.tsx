import React from 'react';
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons'

import { styles } from './styles';


interface Props extends TouchableOpacityProps {
    title: string;

}
export function Button({ title, ...rest }: Props) {
    let backgroundColorButton;
    if (title === 'check' || title === 'checkout' || title === '-') {
        backgroundColorButton = 'transparent'
    } else {
        backgroundColorButton = "#1E6F9F";
    }

    let icon;
    let corIcon;
    if (title === '-') {
        icon = "trash-can-outline";
        corIcon = "#F2F2F2";
    } else if (title === 'check') {
        icon = "checkbox-blank-circle-outline";
        corIcon = "#1E6F9F";
    } else if (title === 'checkout') {
        icon = "check-circle-outline";
        corIcon = "#8284FA";
    } else {
        icon = "plus-circle-outline";
        corIcon = "#F2F2F2";
    }



    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: backgroundColorButton }]} {...rest}>
            <Text style={styles.textButton}>
                <MaterialCommunityIcons
                    name={icon}
                    size={22}
                    color={corIcon}
                />

            </Text>
        </TouchableOpacity>
    )
}