// @flow
import React, { Component } from "react";
import "./<%= componentName %>.css";
import PropTypes from "prop-types";

type props = {};

export class <%= componentName %><props> extends Component {
    static defaultProps: props = {
    };

    state = {};

    render() {
        return (
            <div className="<%= componentName %>-container">
                 <%= componentName %>
            </div>
        );
    }
}

<%= componentName %>.contextTypes = {
    i18n: PropTypes.object
};

export default <%= componentName %>;
