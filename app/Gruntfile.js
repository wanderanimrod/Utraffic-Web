module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        watch: {
            files: [
                'components/**/*.js',
                'components/**/*.html',
                'models/**/*.js'
            ],
            tasks: ['browserify']
        },
        browserify: {
            dist: {
                files: {
                    'build/app.js': ['components/**/*.js', 'models/**/*.js']
                },
                options: {
                    transform: [require('stringify')()]
                }
            }
        },
        karma: {
            unit: {
                configFile: 'spec/karma.conf.js'
            }
        }
    });

    grunt.registerTask('build', [
        'browserify'
    ]);

    grunt.registerTask('default', [
        'browserify',
        'karma'
    ]);
};