"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

const toCamelCase = str => {
    return str
        .split("-")
        .map(word => word.slice(0, 1).toUpperCase() + word.slice(1))
        .join("");
};

module.exports = class extends Generator {
    prompting() {
        this.log(
            yosay(
                `Welcome to the supreme ${chalk.red(
                    "generator-react-component"
                )} generator!`
            )
        );

        const prompts = [
            {
                type: "input",
                name: "name",
                message: "Your component's name?"
            },
            {
                type: "confirm",
                name: "isClass",
                message: "Would you like a class Component?",
                default: true
            },
            {
                type: "confirm",
                name: "isRN",
                message: "Is it a React Native component?",
                default: true
            },
            {
                type: "confirm",
                name: "isMini",
                message: "Would you like a basic story?",
                default: true
            }
        ];

        return this.prompt(prompts).then(props => {
            this.props = props;
        });
    }

    writing() {
        const { name, isClass, isMini, isRN } = this.props;

        const componentName = toCamelCase(name);

        let dir = isRN ? "rn/" : "react/";
        let fileName = isClass ? "TimePicker.js" : "Timer.js";

        this.fs.copyTpl(
            this.templatePath(dir + "/" + fileName),
            this.destinationPath(`./${this.props.name}/${componentName}.js`),
            { componentName: componentName }
        );

        fileName = isMini ? "_storyMini.js" : "_story.js";

        this.fs.copyTpl(
            this.templatePath(fileName),
            this.destinationPath(`./${this.props.name}/_story.js`),
            { componentName: componentName }
        );

        // style for web React component
        if (!isRN) {
            this.fs.copyTpl(
                this.templatePath(dir + "/Timer.scss"),
                this.destinationPath(
                    `./${this.props.name}/${componentName}.scss`
                ),
                { componentName: componentName }
            );
        }
    }

    install() {}
};
