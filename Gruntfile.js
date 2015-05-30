// jshint globals omitted for brevity
module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            files: ['GruntFile.js', 'app/*.js', 'app/**/*.js'],
            options: {
                curly: true,
                eqeqeq: true,
                globals: {
                    afterEach: true,
                    after: true
                }
            }
        },
        mocha: {
            all: {
                src: ["app/**/*.html"],
                options: {
                    mocha: {
                        ignoreLeaks: true
                    },
                    run: true
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha');
    grunt.registerTask('default', ['jshint', 'mocha']);
};