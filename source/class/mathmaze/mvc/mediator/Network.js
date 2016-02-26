/**
 * Created by Wind on 7/27/15.
 */

/**
 * @ignore(moment)
 */

qx.Class.define("roomchatclient.mvc.mediator.Network", {
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
        NAME: "Network"
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
                roomchatclient.ApplicationFacade.DO_CONNECT_SERVER,
                roomchatclient.ApplicationFacade.DO_CONNECT_SERVER_FAIL,

                roomchatclient.ApplicationFacade.SEND_MESSAGE,

                roomchatclient.ApplicationFacade.SEND_LOGIN,
                roomchatclient.ApplicationFacade.SEND_CREATE_ROOM,
                roomchatclient.ApplicationFacade.SEND_DESTROY_ROOM,
                roomchatclient.ApplicationFacade.SEND_JOIN_ROOM,
                roomchatclient.ApplicationFacade.SEND_LEAVE_ROOM,
                roomchatclient.ApplicationFacade.SEND_FREEZE_ROOM,
                roomchatclient.ApplicationFacade.SEND_RECOMMEND_ROOM,
                roomchatclient.ApplicationFacade.SEND_BAN_ROOM,
                roomchatclient.ApplicationFacade.SEND_CHANGE_ROOM_INFO
            ];
        },
        handleNotification: function (notification) {
            var facade = roomchatclient.ApplicationFacade.getInstance();
            var proxy = facade.retrieveProxy("Network");

            switch (notification.getNotificationName()) {
                case roomchatclient.ApplicationFacade.DO_CONNECT_SERVER:
                    proxy.connect(notification.getBody().host, notification.getBody().port);
                    break;
                case roomchatclient.ApplicationFacade.DO_CONNECT_SERVER_FAIL:
                    break;

                case roomchatclient.ApplicationFacade.SEND_MESSAGE:
                    proxy.sendMessage(notification.getBody());
                    break;
                case roomchatclient.ApplicationFacade.SEND_LOGIN:
                    proxy.sendLogin(notification.getBody());
                    break;
                case roomchatclient.ApplicationFacade.SEND_CREATE_ROOM:
                    proxy.sendCreateRoom(notification.getBody());
                    break;
                case roomchatclient.ApplicationFacade.SEND_DESTROY_ROOM:
                    proxy.sendDestroyRoom(notification.getBody());
                    break;
                case roomchatclient.ApplicationFacade.SEND_JOIN_ROOM:
                    proxy.sendJoinRoom(notification.getBody());
                    break;
                case roomchatclient.ApplicationFacade.SEND_LEAVE_ROOM:
                    proxy.sendLeaveRoom(notification.getBody());
                    break;
                case roomchatclient.ApplicationFacade.SEND_FREEZE_ROOM:
                    proxy.sendRoomFreeze(notification.getBody());
                    break;
                case roomchatclient.ApplicationFacade.SEND_RECOMMEND_ROOM:
                    proxy.sendRoomRecommend(notification.getBody());
                    break;
                case roomchatclient.ApplicationFacade.SEND_BAN_ROOM:
                    proxy.sendRoomBan(notification.getBody());
                    break;
                case roomchatclient.ApplicationFacade.SEND_CHANGE_ROOM_INFO:
                    proxy.sendRoomChangeInfo(notification.getBody());
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