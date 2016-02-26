/**
 * Created by peach1 on 2015. 12. 19..
 */

qx.Class.define("roomchatclient.mvc.mediator.UserSelectPopupMenu", {
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
        NAME: "UserSelectPopupMenu"
    },

     /*
     
*****************************************************************************
     CONSTRUCTOR
     
*****************************************************************************
     */
    construct: function (mediatorName, viewComponent) {
        this.base(arguments, mediatorName, viewComponent);

        if (!mediatorName) {
            this.setMediatorName(this.self(arguments).NAME);
        }

        viewComponent.addListener("executeRoomExpel", function(e) {
            roomchatclient.ApplicationFacade.getInstance().sendNotification(roomchatclient.ApplicationFacade.MAKE_BAN_ROOM, {value:e.getData()});
        }, this);
        viewComponent.addListener("executeRoomDestroy", function(e) {
            roomchatclient.ApplicationFacade.getInstance().sendNotification(roomchatclient.ApplicationFacade.MAKE_DESTROY_ROOM, {value:e.getData()});
        }, this);
        viewComponent.addListener("executeOpenPopup", function(e) {
            roomchatclient.ApplicationFacade.getInstance().sendNotification(roomchatclient.ApplicationFacade.ALERT_POPUP, e.getData());
        }, this);
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

            ];
        },

        handleNotification: function (notification) {

            switch (notification.getNotificationName()) {
                default:
                    break;
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