/**
 * Created by peach1 on 2015. 12. 8..
 */

qx.Class.define("mathmaze.mvc.mediator.Main", {
    extend: mvc.patterns.Mediator,
    implement: [
        mvc.interfaces.IMediator
    ],

    /*

     *****************************************************************************
     STATICS

     *****************************************************************************
     */
    statics: {
        NAME: "Main"
    },

    /*
     *****************************************************************************
     CONSTRUCTOR
     *****************************************************************************
     */
    construct: function (mediatorName, viewComponent) {
        this.base(arguments, mediatorName || this.self(arguments).NAME, viewComponent);
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
    },

    /*
     *****************************************************************************
     MEMBERS
     *****************************************************************************
     */
    members: {
        listNotificationInterests: function () {
            return [
                mathmaze.ApplicationFacade.APPEND_VIEW_SPLASH
            ];
        },

        handleNotification: function (notification) {
            var facade = mathmaze.ApplicationFacade.getInstance(),
                proxy = facade.retrieveProxy('Main');

            switch (notification.getNotificationName()) {
                case mathmaze.ApplicationFacade.APPEND_VIEW_SPLASH:
                    this.getViewComponent().add(this.getViewComponent().getChildControl("splash"));
                    break;
                case mathmaze.ApplicationFacade.APPEND_VIEW_STAGE:
                    break
            }
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