module.exports = function (grunt) {
    "use strict";
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        bower: {
            install: {
                options: {
                    targetDir: "./lib",
                    layout: "byComponent",
                    install: true,
                    verbose: false,
                    cleanTargetDir: true,
                    cleanBowerDir: true,
                },
            },
        },
        uglify: {
            my_target: {
                options: {
                    sourceMap: true,
                    sourceMapName: "build/maus.min.map",
                },
                files: {
                    "build/maus.min.js": "src/maus.js",
                },
            },
        },
        mocha: {
            test: {
                src: ["test/index.html"],
            },
        },
        jshint: {
            all: ["Gruntfile.js", "src/maus.js", "test/test.js"],
            options: {
                jshintrc: true,
            },
        },
        yuidoc: {
            compile: {
                name: "<%= pkg.name %>",
                description: "<%= pkg.description %>",
                version: "2.2",
                url: "<%= pkg.homepage %>",
                options: {
                    paths: "src",
                    outdir: "yuidoc"
                }
            }
        },
        jsonlint: {
            sample: {
                src: "*.json"
            }
        }
    });
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-yuidoc");
    grunt.loadNpmTasks("grunt-jsonlint");
    grunt.loadNpmTasks("grunt-bower-task");
    grunt.loadNpmTasks("grunt-mocha");
};
