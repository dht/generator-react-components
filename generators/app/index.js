"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
    prompting() {
        // Have Yeoman greet the user.
        this.log(
            yosay(
                `Welcome to the wonderful ${chalk.red(
                    "generator-react-cmp"
                )} generator!`
            )
        );

        const prompts = [
            {
                type: "confirm",
                name: "someAnswer",
                message: "Would you like to enable this option?",
                default: true
            }
        ];

        return this.prompt(prompts).then(props => {
            // To access props later use this.props.someAnswer;
            this.props = props;
        });
    }

    writing() {
        this.fs.copyTpl(
            this.templatePath("index.html"),
            this.destinationPath("public/index.html"),
            { title: "Templating with Yeoman" }
        );
    }

    install() {
        this.installDependencies();
    }
};
