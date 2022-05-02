import React from 'react';

import {
    TouchableOpacityProps,
    TouchableOpacity,
    ColorValue,
    Text,
    ActivityIndicator
} from 'react-native';

import { AntDesign } from "@expo/vector-icons";

import { styles } from './styles';

type Props = TouchableOpacityProps & {
    title: string,
    color: ColorValue,
    isLoading?: boolean,
    backgroundColor: ColorValue,
    icon?: React.ComponentProps<typeof AntDesign>['name'];
}

export function Button({
    title,
    color,
    isLoading = false,
    backgroundColor,
    icon,
    ...rest
}: Props) {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor }]}
            activeOpacity={0.7}
            {...rest}
        >
            {isLoading
                ? <ActivityIndicator color={color} />
                : <>
                    <AntDesign name={icon} size={24} style={styles.icon} />

                    <Text style={[styles.title, { color }]}>
                        {title}
                    </Text>
                </>
            }
        </TouchableOpacity>
    );
}