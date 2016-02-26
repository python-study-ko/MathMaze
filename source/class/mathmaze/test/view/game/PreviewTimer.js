/**
 * Created by wind on 2016. 2. 25..
 */

qx.Class.define("mathmaze.test.view.game.PreviewTimer", {
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
            this._object = new mathmaze.view.game.PreviewTimer();
        },
        tearDown: function() {
            this.base(arguments);
            this._findClass("mathmaze.view.game.PreviewTimer");
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
        "test : 2 : start": function() {
            this.getRoot().add(this._object);
            this._object.addListener("interval", function(e) {
                this.info(e.getData());
                switch (e.getData()) {
                    case 0:
                        e.getCurrentTarget().stop();
                        break;
                    default:
                        break;
                }
            }, this);
            this._object.start(3);
            this.wait(5000, function() {});
        },
        "test : 3 : setValue 3": function() {
            this.getRoot().add(this._object);
            this._object.setValue(3);

            this.wait(1000, function() {});
        },
        "test : 4 : setValue 0": function() {
            this.getRoot().add(this._object);
            this._object.setValue(0);

            this.wait(1000, function() {});
        }
    }
});