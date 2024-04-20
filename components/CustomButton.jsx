import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, isLoading, textStyles }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={`bg-secondary-200 min-h-[62px] rounded-xl justify-center items-center \
                ${containerStyles} ${isLoading ? 'opactiy-50' : ''}`}
            disabled={isLoading}
        >
            <Text className={`text-center text-primary text-lg font-psemibold ${textStyles}`}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton;