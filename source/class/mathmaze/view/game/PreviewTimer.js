/**
 * Created by wind on 2016. 2. 25..
 */
qx.Class.define("mathmaze.view.game.PreviewTimer", {
    extend: qx.ui.container.Composite,

    /*
     *****************************************************************************
     STATICS
     *****************************************************************************
     */
    statics: {},

    /*
     *****************************************************************************
     CONSTRUCTOR
     *****************************************************************************
     */
    construct: function (layout) {
        this.base(arguments, layout || new qx.ui.layout.VBox());

        this.getLayout().set({
            alignX:"center",
            alignY:"middle"
        });

        this.set({
            backgroundColor:"green",
            width:556,
            height:828
        });
    },

    /*
     *****************************************************************************
     EVENTS
     *****************************************************************************
     */
    events: {
        "interval":"qx.event.type.Data"
    },

    /*
     *****************************************************************************
     PROPERTY
     *****************************************************************************
     */
    properties: {
        value:{
            apply:"_applyValue"
        }
    },

    /*
     *****************************************************************************
     MEMBERS
     *****************************************************************************
     */
    members: {
        _timer:null,
        __counter:null,
        _applyValue:function(value, old) {
            switch(value) {
                case -1:
                    this.stop();
                    break;
                case 0:
                    this.getChildControl("itemLabel").setValue("START!");
                    break;
                default:
                    this.getChildControl("itemLabel").setValue(value + "");
                    break;
            }

            this.add(this.getChildControl("itemLabel"));
        },
        _createChildControlImpl: function (id, hash) {
            var control;

            switch(id) {
                case "itemLabel":
                    control = new qx.ui.basic.Label();
                    control.set("font", "pt40");
                    break;
            }

            return control || this.base(arguments, id);
        },
        start:function(value) {
            this.setValue(value);
            this.stop();
            this._timer = new qx.event.Timer(1000);
            this._timer.addListener("interval", this._onInterval, this);
            this._timer.start();
        },
        stop:function() {
            if (this._timer) {
                this._timer.dispose();
                this._timer = null;
            }
        },
        _onInterval:function(e) {
            this.setValue(this.getValue() - 1);
            this.fireDataEvent("interval", this.getValue());
        }
    },

    /*
     *****************************************************************************
     DESTRUCT
     *****************************************************************************
     */
    destruct: function () {
        this.removeAllBindings();
        this.stop();
    }
});