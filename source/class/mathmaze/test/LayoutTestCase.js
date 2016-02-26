/**
 * Created by wind on 2016. 2. 25..
 */
/**
 * Created by wind on 2016. 2. 24..
 */

qx.Class.define("mathmaze.test.LayoutTestCase", {
    extend: qx.test.ui.LayoutTestCase,
    include: [qx.dev.unit.MMock, qx.dev.unit.MRequirements],
    /*
     *****************************************************************************
     CONSTRUCTOR
     *****************************************************************************
     */
    construct: function () {
        this.base(arguments);
    },

    members :{
        _object:null,
        setUp: function() {
            this.base(arguments);
        },
        tearDown: function() {
            this.getRoot().removeAll();
            this._object.dispose();
        },

        /*
         ---------------------------------------------------------------------------
         TESTS
         ---------------------------------------------------------------------------
         */
        _findClass:function(className) {
            var regObject = qx.core.ObjectRegistry.getRegistry(),
                objKeys = Object.keys(regObject);

            for (var i = 0; i < objKeys.length; i++) {
                if (className === regObject[objKeys[i]].classname) {
                    this.assert(className, "해제안됨");
                    break;
                }
            }
        }
    }
});