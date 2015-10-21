module.exports = function(grunt) {

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        sass: {
            options: {
                style: 'compressed'
            },
            main: {
                files: {
                    'static/styles/bootstrap.css': 'static/styles/bootstrap.scss'
                }
            }
        },

        watch: {
            sass: {
                files: 'static/styles/*.scss',
                tasks: ['sass:main']
            }
        }

    });

};
