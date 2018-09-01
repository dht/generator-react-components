// @flow
import React, { Component } from "react";
import "./<%= componentName %>.css";
import PropTypes from "prop-types";

type props = {};

const defaultProps = {
};

export const <%= componentName %> = (props:props) => {
        return (
            <div className="<%= componentName %>-container">
                <%= componentName %>
            </div>
        );
}

<%= componentName %>.defaultProps = defaultProps;

<%= componentName %>.contextTypes = {
    i18n: PropTypes.object
};

export default <%= componentName %>;
