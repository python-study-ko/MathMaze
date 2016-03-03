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
            alignY:"middle"
        });

        this.set({
            width:46,
            height:46,
            maxWidth:46,
            maxHeight:46
        });

        this.set("star", -1);
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
            init:"",
            check:"String",
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
                case "lock":
                    control = new qx.ui.basic.Image("mathmaze/lock.png");
                    control.set({
                        scale:true,
                        width:22,
                        height:28
                    });
                    break;
                case "lockImage":
                    control = new qx.ui.basic.Image("mathmaze/lock.png");
                    control.set({
                        scale:true,
                        width:22,
                        height:28
                    });
                    break;
                case "unlock":
                    control = new qx.ui.container.Composite(new qx.ui.layout.VBox());

                    control.getLayout().set({
                        alignX:"center",
                        alignY:"middle"
                    });

                    control.set({
                        backgroundColor:"transparent",
                        width:46,
                        height:46,
                        maxWidth:46,
                        maxHeight:46
                    });
                    control.add(this.getChildControl("label"));
                    control.add(this.getChildControl("starLayout"));
                    break;
                case "label":
                    control = new qx.ui.basic.Label();
                    control.set({
                        backgroundColor:"transparent",
                        font:"pt16",
                        textColor:"red"
                    });
                    break;
                case "starLayout":
                    control = new qx.ui.container.Composite(new qx.ui.layout.HBox(1));
                    control.getLayout().set({
                        alignX:"center"
                    });
                    control.set("backgroundColor","transparent");

                    for (var i = 0; i < this.self(arguments).statCount; ++i) {
                        control.add(this.getChildControl(qx.lang.String.format("star#%1", [i])));
                    }
                    break;

                case "star":
                    control = new qx.ui.basic.Image();
                    control.set({
                        scale:true,
                        width:10,
                        height:9
                    });
                    break;
            }

            return control || this.base(arguments, id);
        },
        _applyText:function(value, old) {
            this.getChildControl("label").set("value", value);
        },
        _applyStar:function(value, old) {
            switch (value) {
                case -1:
                    this._changeViewLock();
                    break;
                case 0:
                    this._changeLockViewNow();
                    break;
                default:
                    this._changeViewUnlock();
                    break;
            }
        },
        _changeViewLock:function() {
            this.set("backgroundColor", "white");
            this.add(this.getChildControl("lock"));

            if (this.hasChildControl("unlock")) {
                this.remove(this.getChildControl("unlock"));
                this.getChildControl("unlock").dispose();
            }
        },
        _changeViewUnlock:function() {
            this.set({
                backgroundColor:"brown"
            });
            this.getChildControl("label").set("value", this.get("text"));
            for (var i = 0; i < this.self(arguments).statCount; ++i) {
                if (i < this.get("star")) {
                    this.getChildControl(qx.lang.String.format("star#%1", [i])).set("source", "mathmaze/star.png");
                }
                else {
                    this.getChildControl(qx.lang.String.format("star#%1", [i])).set("source", "mathmaze/unStar.png");
                }
            }

            if (this.hasChildControl("lock")) {
                this.remove(this.getChildControl("lock"));
                this.getChildControl("lock").dispose();
            }

            this.add(this.getChildControl("unlock"));
        },
        _changeLockViewNow:function() {
            this.set("backgroundColor", "white");
            this.getChildControl("label").set("value", this.get("text"));
            this.getChildControl("starLayout").hide();

            if (this.hasChildControl("lock")) {
                this.remove(this.getChildControl("lock"));
                this.getChildControl("lock").dispose();
            }

            this.add(this.getChildControl("unlock"));
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