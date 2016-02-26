/**
 * Created by wind on 2016. 2. 24..
 */

qx.Class.define("mathmaze.test.view.Main", {
    extend: mathmaze.test.LayoutTestCase,
    /*
     *****************************************************************************
     CONSTRUCTOR
     *****************************************************************************
     */
    construct: function () {
        this.base(arguments);
    },

    members :{
        setUp: function() {
            this.base(arguments);
            this._object = new mathmaze.view.Main();
        },
        tearDown: function() {
            this.base(arguments);
            this._findClass("mathmaze.view.Main");
        },

        /*
         ---------------------------------------------------------------------------
         TESTS
         ---------------------------------------------------------------------------
         */
        "test : 1 : create": function() {
            this.getRoot().add(this._object);

            this.wait(1000, function() {
            });
        }
    }
});