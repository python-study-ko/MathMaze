/**
 * Created by Wind on 7/27/15.
 */

qx.Class.define("mathmaze.ApplicationFacade", {
    extend: mvc.patterns.Facade,
    implement : mvc.interfaces.IFacade,

    /*
     *****************************************************************************
     STATICS
     *****************************************************************************
     */
    statics: {
        getInstance:function() {
            if (this._instance == null) {
                this._instance = new this();
            }
            return this._instance;
        },

        removeInstance:function() {
            if (this._instance) {
                this._instance.dispose();
                this._instance = null;
            }
        },

        hasInstance:function() {
            return this._instance != null;
        },


        // Application
        /**
         * 클라이언트의 시작을 알림.
         */
        STARTUP:"STARTUP",

        APPEND_VIEW_MAIN:"APPEND_VIEW_MAIN",
        APPEND_VIEW_SPLASH:"APPEND_VIEW_SPLASH",
        REMOVE_VIEW_SPLASH:"REMOVE_VIEW_SPLASH",
        APPEND_VIEW_STAGE:"APPEND_VIEW_STAGE",
        REMOVE_VIEW_STAGE:"REMOVE_VIEW_STAGE",
        APPEND_VIEW_GAME:"APPEND_VIEW_GAME",
        REMOVE_VIEW_GAME:"REMOVE_VIEW_GAME",

        // 빈 명령
        EMPTY:"EMPTY"
    },
    /*
     *****************************************************************************
     STATICS
     *****************************************************************************
     */

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
     EVENTS
     *****************************************************************************
     */
    events: {
    },

    /*
     *****************************************************************************
     PROPERTY
     *****************************************************************************
     */
    properties: {
        root:{
            init:null
        }
    },

    /*
     *****************************************************************************
     MEMBERS
     *****************************************************************************
     */
    members: {
        _initializeController:function() {
            this.base(arguments);

            this.registerCommand(mathmaze.ApplicationFacade.STARTUP, mathmaze.mvc.command.StartupCommand);
        },
        _initializeModel:function() {
            this.base(arguments);

            // proxy 등록
            this.registerProxy(new mathmaze.mvc.proxy.Main);
        },
        _initializeView:function() {
            this.base(arguments);

            // mediator 등록
            this.registerMediator(new mathmaze.mvc.mediator.Main(null, new mathmaze.view.Main));
        },
        startUp:function(root) {
            root.add(this.retrieveMediator("Main").get("viewComponent"));

            this.sendNotification(mathmaze.ApplicationFacade.STARTUP);
            this.sendNotification(mathmaze.ApplicationFacade.APPEND_VIEW_SPLASH);
        }
    },

    destruct: function () {
    }
});