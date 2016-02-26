/**
 * Created by wind on 2016. 2. 24..
 */
qx.Class.define("mathmaze.view.game.ItemBox", {
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

            type:"uncheck",
            width:30,
            height:30,
            maxWidth:30,
            maxHeight:30
        });
    },

    /*
     *****************************************************************************
     EVENTS
     *****************************************************************************
     */
    events: {},

    /*
     *****************************************************************************
     PROPERTY
     *****************************************************************************
     */
    properties: {
        positionX:{
            init:0,
            check:"qx.lang.Type.isNumber(value)&&value>=0"
        },
        positionY:{
            init:0,
            check:"qx.lang.Type.isNumber(value)&&value>=0"
        },
        type:{
            init:"uncheck",
            check:["start", "check", "uncheck", "end"],
            apply:"_applyType"
        },
        text:{
            init:"",
            check:"String",
            apply:"_applyText"
        },
        value:{
            group:["positionX", "positionY", "type", "text"],
            mode : "shorthand"
        }
    },

    /*
     *****************************************************************************
     MEMBERS
     *****************************************************************************
     */
    members: {
        _applyType:function(value, old) {
            switch(value) {
                case "start":
                    this.set("backgroundColor", "brown");
                    break;
                case "check":
                    this.set("backgroundColor", "red");
                    break;
                case "uncheck":
                    this.set("backgroundColor", "white");
                    break;
                case "end":
                    this.set("backgroundColor", "orange");
                    break;
            }

        },
        _applyText:function(value, old) {
            var control = this.getChildControl("itemLabel");
            this.add(control);
            control.set("value", value + "");
        },
        _createChildControlImpl: function (id, hash) {
            var control;

            switch(id) {
                case "itemLabel":
                    control = new qx.ui.basic.Label();
                    control.set("font", "pt18");
                    break;
                case "selectStage":
                    break;
            }

            return control || this.base(arguments, id);
        },
        clone:function() {
            var result = new mathmaze.view.game.ItemBox();
            result.setValue(this.get("positionX"), this.get("positionY"), this.get("type"), this.get("text"));
            return result;
        },
        toString:function() {
            return qx.lang.String.format("%1_%2_%3_%4", [this.get("positionX"), this.get("positionY"), this.get("type"), this.get("text")]);
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