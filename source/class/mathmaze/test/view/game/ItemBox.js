/**
 * Created by wind on 2016. 2. 24..
 */

qx.Class.define("mathmaze.test.view.game.ItemBox", {
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
            this._object = new mathmaze.view.game.ItemBox();
        },
        tearDown: function() {
            this.base(arguments);
            this._findClass("mathmaze.view.game.ItemBox");
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
        },
        "test : 2 : setValue": function() {
            this.getRoot().add(this._object);
            this._object.setValue(1,1,"check", "11");

            this.wait(1000, function() {
            });
        },
        "test : 3 : setText": function() {
            this.getRoot().add(this._object);
            this._object.set("text", 10 + "");

            this.wait(1000, function() {
            });
        },
        "test : 4 : setType start": function() {
            this.getRoot().add(this._object);
            this._object.set("type", "start");

            this.wait(1000, function() {
            });
        },
        "test : 5 : setType end": function() {
            this.getRoot().add(this._object);
            this._object.set("type", "end");

            this.wait(1000, function() {
            });
        },
        "test : 6 : setType check": function() {
            this.getRoot().add(this._object);
            this._object.set("type", "check");

            this.wait(1000, function() {
            });
        },
        "test : 7 : setType uncheck": function() {
            this.getRoot().add(this._object);
            this._object.set("type", "uncheck");

            this.wait(1000, function() {
            });
        }
    }
});