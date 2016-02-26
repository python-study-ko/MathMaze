/**
 * Created by wind on 2016. 2. 25..
 */
qx.Class.define("mathmaze.view.chapter.BoardItem", {
    extend: qx.ui.container.Composite,

    /*
     *****************************************************************************
     STATICS
     *****************************************************************************
     */
    statics: {
        statCount:3,
        colCount:5
    },

    /*
     *****************************************************************************
     CONSTRUCTOR
     *****************************************************************************
     */
    construct: function (layout) {
        this.base(arguments, layout || new qx.ui.layout.VBox());

        this.getLayout().set({
            alignX:"center",
            alignY:"bottom"
        });

        this.set({
            width:30,
            height:30,
            maxWidth:30,
            maxHeight:30
        })
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
        text:{
            apply:"_applyText"
        },
        star:{
            apply:"_applyStar"
        },
        values:{
            group:["text", "star"]
        }
    },

    /*
     *****************************************************************************
     MEMBERS
     *****************************************************************************
     */
    members: {
        _createChildControlImpl: function (id, hash) {
            var control;

            switch(id) {
                case "label":
                    control = new qx.ui.basic.Label();
                    control.set({
                        font:"pt16",
                        fontColor:"red"
                    });
                    break;
                case "starLayout":
                    control = new qx.ui.container.Composite(new qx.ui.layout.VBox());
                    control.getLayout().set({
                        alignX:"center"
                    });

                    for (var i = 0; i < this.self(arguments).statCount; ++i) {
                        control.add(this.getChildControl("star" + "#" + i));
                    }

                    break;

                case "star":
                    control = new qx.ui.basic.Image();
                    break;
            }

            return control || this.base(arguments, id);
        },
        _applyText:function(value, old) {

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