/**
 * Created by wind on 2016. 2. 25..
 */
/**
 * Created by wind on 2016. 2. 24..
 */

qx.Class.define("mathmaze.test.view.chapter.BoardItem", {
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
            this._object = new mathmaze.view.chapter.BoardItem();
        },
        tearDown: function() {
            this.base(arguments);
            this._findClass("mathmaze.view.chapter.BoardItem");
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
        "test : 2 : Lock": function() {
            this._object.setText("1");
            this._object.setStar(-1);
            this.getRoot().add(this._object);
            this.wait(1000, function() {
            });
        },
        "test : 3 : Now": function() {
            this._object.setText("2");
            this._object.setStar(0);
            this.getRoot().add(this._object);

            this.wait(1000, function() {
            });
        },
        "test : 4 : star 1": function() {
            this._object.setText("3");
            this._object.setStar(1);
            this.getRoot().add(this._object);
            this.wait(1000, function() {
            });
        },
        "test : 5 : star 2": function() {
            this._object.setText("4");
            this._object.setStar(2);
            this.getRoot().add(this._object);
            this.wait(1000, function() {
            });
        },
        "test : 6 : star 3": function() {
            this._object.setText("5");
            this._object.setStar(3);
            this.getRoot().add(this._object);
            this.wait(1000, function() {
            });
        },
        "test : 7 : star 10": function() {
            try {
                this._object.setText("5");
                this._object.setStar(4);
                this.getRoot().add(this._object);

                this.wait(1000, function() {
                    this.assertFalse()
                }, this);
            }
            catch(e) {

            }
        }
    }
});