module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
            dev: {
                files: {
                    'material-typography.css': 'main.scss'
                },
                options: {
                    sourceMap: true,
                    sourceComments: true
                }
            },
            dist: {
                files: {
                    'material-typography.min.css': 'main.scss'
                },
                options: {
                    outputStyle: 'compressed'
                }
            }
        },
        watch: {
            sass: {
                files: ['*.scss'],
                tasks: ['sass:dev', 'sass:dist']
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
}