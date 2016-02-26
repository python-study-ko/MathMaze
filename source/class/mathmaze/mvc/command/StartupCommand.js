/**
 * Created by peach1 on 2015. 8. 27..
 */

qx.Class.define("mathmaze.mvc.command.StartupCommand", {
    extend: mvc.patterns.command.SimpleCommand,
    implement : [
        mvc.interfaces.ICommand
    ],

    /*
     *****************************************************************************
     CONSTRUCTOR
     *****************************************************************************
     */
    construct: function () {
        this.base(arguments);
    },

    /*
     *****************************************************************************
     MEMBERS
     *****************************************************************************
     */
    members: {
        execute:function(notification) {
        }
    },

    /*
     *****************************************************************************
     DESTRUCT
     *****************************************************************************
     */
    destruct: function () {
    }
});