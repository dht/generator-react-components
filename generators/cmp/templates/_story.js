import React from "react";

import { <%= componentName %> } from "./<%= componentName %>";

let data = {};

export default (storiesOf, mod, action) => {
    storiesOf("<%= componentName %>", mod)
        .add("Basic", () => <<%= componentName %> />);
};
