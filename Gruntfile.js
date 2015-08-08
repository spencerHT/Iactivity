module.exports = function(grunt) {
    grunt.initConfig({

        // 获取 packag.json 的信息
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                stripBanners: true,
                banner: '/*! <%=pkg.name%>-<%=pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            bulid: {
                src: 'javascripts/login.js',
                dest: 'bulid/<%=pkg.name%>-<%=pkg.version%>.js.min.js'
            }
        },

        jshint: {
            bulid: [ 'Gruntfile.js', 'javascripts/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        }

    });
    // 告诉grunt我们将使用插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // 告诉grunt我们执行命令的时候要干什么（注意先后顺序）
    grunt.registerTask('default',['jshint', 'uglify']);
}