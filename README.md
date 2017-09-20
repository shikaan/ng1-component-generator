# ng1-component-generator

Yet another component generator for AngularJS <= 1.4

## Installation and usage

Installation:

    npm install -g ng1-component-generator

Usage:

    Usage: ng1-component-generator [options] <component>

    Options:

        -V, --version         output the version number
        -p, --path [value]    Destination path [./src/app]
        -t, --tests           Add specs file?
        -m, --module [value]  Angular module name [app]
        -h, --help            output usage information

## What does this do?

This module quickly scaffolds an AngularJS component with template, controller 
and tests. 

## Why?

I have to deal with some legacy code on daily basis, so I found useful
to create a generator for my particular needs.

This lighten the weight of doing repetitve tasks and write boilerplate code.

Actually in AngularJS <= 1.4 you don't have _components_. This module ease the
migration to new AngularJS version by using the same naming convention adopted
in newer Angular. 

## Example

Launching

    ng1-component-generator -p ./example/app -m app -t header

Will create the following

    example
    └── app
        └── header
            ├── header.component.js
            ├── header.controller.js
            ├── header.controller.specs.js
            └── header.template.html

the content of which is directly available from this repo.

## Contributing

There are no tests and a lot of feature can be added. Here's a quick list:

 - service/factory/providers scaffolding;
 - module scaffolding;
 - directives scaffolding;

Any contribution will be apreciated.
