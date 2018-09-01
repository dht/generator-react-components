// @flow
import React from "react";
import PropTypes from "prop-types";

import { View, Text } from "react-native";

let styles;

type props = {};

const defaultProps = {
};

export const <%= componentName %> = (props:props, context) => {
    styles = styles || initStyles(context);

        return (
            <View style={styles.container}>
                <Text style={styles.text}>AspectImage</Text>
            </View>
        );
    }
}

<%= componentName %>.defaultProps = defaultProps;

const initStyles = ({ colors }) =>
    StyleSheet.create({
        container: {
            flex: 1
        },
        text: {
            fontSize: 14
        }
    });

<%= componentName %>.contextTypes = {
    colors: PropTypes.object,
    i18n: PropTypes.object
};

export default <%= componentName %>;
