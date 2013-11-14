module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  // This is an example task that does nothing apart from displaying a simple message
  grunt.registerTask('deploy', function() {
    grunt.log.ok('Deployment successful');
  });

};