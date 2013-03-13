module.exports = function( grunt ) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '// Backbone.Epoxy <%= pkg.version %>\n// (c) 2013 Greg MacWilliam\n// Freely distributed under the MIT license\n// http://epoxyjs.org\n'
			},
			epoxy: {
				src: '<%= pkg.name %>.js',
				dest: '<%= pkg.name %>.min.js'
			}
		}
	});
	
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.registerTask("default", ["uglify"]);
};