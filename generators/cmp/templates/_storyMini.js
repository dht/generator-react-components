import React from "react";

import { <%= componentName %> } from "./<%= componentName %>";

let data = {};

const getMethod = () => {
    return new Promise(resolve => {
        resolve(data);
    });
};

const postClock = () => {
    return new Promise(resolve => {
        resolve(true);
    });
};

export default (storiesOf, mod, action) => {
    storiesOf("<%= componentName %>", mod).add("Basic", () => (
        <<%= componentName %> getMethod={getMethod} postClock={postClock} />
    ));
};
