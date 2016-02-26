/**
 * Created by peach1 on 2015. 12. 2..
 */

qx.Class.define("roomchatclient.mvc.mediator.PacketProcessor", {
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
        NAME: "PacketProcessor"
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
                roomchatclient.ApplicationFacade.RECEIVE_MESSAGE,
                roomchatclient.ApplicationFacade.RECEIVE_ROOM_LIST,
                roomchatclient.ApplicationFacade.RECEIVE_REFRESH,
                roomchatclient.ApplicationFacade.RECEIVE_ABUSE_LIST,
                roomchatclient.ApplicationFacade.RECEIVE_LOBBY_MEMBER_LIST,
                roomchatclient.ApplicationFacade.RECEIVE_LOBBY_JOIN_USER,
                roomchatclient.ApplicationFacade.RECEIVE_LOBBY_LEAVE_USER,

                roomchatclient.ApplicationFacade.RECEIVE_LOGIN,
                roomchatclient.ApplicationFacade.RECEIVE_CREATE_ROOM,
                roomchatclient.ApplicationFacade.RECEIVE_JOIN_ROOM,
                roomchatclient.ApplicationFacade.RECEIVE_ROOM_JOIN_USER,
                roomchatclient.ApplicationFacade.RECEIVE_ROOM_LEAVE_USER,
                roomchatclient.ApplicationFacade.RECEIVE_FREEZE_ROOM,
                roomchatclient.ApplicationFacade.RECEIVE_ADDBAN,
                roomchatclient.ApplicationFacade.RECEIVE_RECOMMEND,
                roomchatclient.ApplicationFacade.RECEIVE_CHANGE_ROOM_INFO,


                roomchatclient.ApplicationFacade.MAKE_LOGIN,
                roomchatclient.ApplicationFacade.MAKE_MESSAGE,
                roomchatclient.ApplicationFacade.MAKE_CREATE_ROOM,
                roomchatclient.ApplicationFacade.MAKE_DESTROY_ROOM,
                roomchatclient.ApplicationFacade.MAKE_JOIN_ROOM,
                roomchatclient.ApplicationFacade.MAKE_LEAVE_ROOM,
                roomchatclient.ApplicationFacade.MAKE_FREEZE_ROOM,
                roomchatclient.ApplicationFacade.MAKE_RECOMMEND_ROOM,
                roomchatclient.ApplicationFacade.MAKE_BAN_ROOM,
                roomchatclient.ApplicationFacade.MAKE_CHANGE_ROOM_INFO,


                roomchatclient.ApplicationFacade.GET_ROOM_LIST,
                roomchatclient.ApplicationFacade.GET_LOBBY_MEMBER_LIST
            ];
        },

        handleNotification: function (notification) {
            var facade = roomchatclient.ApplicationFacade.getInstance();
            var proxy = facade.retrieveProxy("PacketProcessor");

            switch (notification.getNotificationName()) {
                case roomchatclient.ApplicationFacade.RECEIVE_MESSAGE:
                    proxy.onReceiveMessage(notification.getBody().value);
                    break;

                case roomchatclient.ApplicationFacade.RECEIVE_ROOM_LIST:
                    proxy.onReceiveRoomList(notification.getBody().value);
                    break;
                case roomchatclient.ApplicationFacade.RECEIVE_LOBBY_MEMBER_LIST:
                    proxy.onReceiveLobbyMemberList(notification.getBody().value);
                    break;
                case roomchatclient.ApplicationFacade.RECEIVE_REFRESH:
                    proxy.onReceiveRefresh(notification.getBody().value);
                    break;
                case roomchatclient.ApplicationFacade.RECEIVE_ABUSE_LIST:
                    proxy.onReceiveAbuseList(notification.getBody().value);
                    break;
                case roomchatclient.ApplicationFacade.RECEIVE_LOBBY_JOIN_USER:
                    proxy.onReceiveLobbyJoinUser(notification.getBody().value);
                    break;
                case roomchatclient.ApplicationFacade.RECEIVE_LOBBY_LEAVE_USER:
                    proxy.onReceiveLobbyLeaveUser(notification.getBody().value);
                    break;



                case roomchatclient.ApplicationFacade.RECEIVE_LOGIN:
                    proxy.onReceiveLogin(notification.getBody().value);
                    break;
                case roomchatclient.ApplicationFacade.RECEIVE_CREATE_ROOM:
                    proxy.onReceiveCreateRoom(notification.getBody().value);
                    break;
                case roomchatclient.ApplicationFacade.RECEIVE_JOIN_ROOM:
                    proxy.onReceiveJoinRoom(notification.getBody().value);
                    break;
                case roomchatclient.ApplicationFacade.RECEIVE_ROOM_JOIN_USER:
                    proxy.onReceiveRoomJoinUser(notification.getBody().value);
                    break;
                case roomchatclient.ApplicationFacade.RECEIVE_ROOM_LEAVE_USER:
                    proxy.onReceiveRoomLeaveUser(notification.getBody().value);
                    break;
                case roomchatclient.ApplicationFacade.RECEIVE_FREEZE_ROOM:
                    proxy.onReceiveFreezeRoom(notification.getBody().value);
                    break;
                case roomchatclient.ApplicationFacade.RECEIVE_ADDBAN:
                    proxy.onReceiveAddBan(notification.getBody().value);
                    break;
                case roomchatclient.ApplicationFacade.RECEIVE_RECOMMEND:
                    proxy.onReceiveRecommend(notification.getBody().value);
                    break;
                case roomchatclient.ApplicationFacade.RECEIVE_CHANGE_ROOM_INFO:
                    proxy.onReceiveChangeRoomInfo(notification.getBody().value);
                    break;



                case roomchatclient.ApplicationFacade.MAKE_LOGIN:
                    proxy.makeLogin(notification.getBody().value);
                    break;
                case roomchatclient.ApplicationFacade.MAKE_MESSAGE:
                    proxy.makeMessage(notification.getBody().value);
                    break;
                case roomchatclient.ApplicationFacade.MAKE_CREATE_ROOM:
                    proxy.makeCreateRoom(notification.getBody().value);
                    break;
                case roomchatclient.ApplicationFacade.MAKE_DESTROY_ROOM:
                    proxy.makeDestroyRoom(notification.getBody().value);
                    break;
                case roomchatclient.ApplicationFacade.MAKE_JOIN_ROOM:
                    proxy.makeJoinRoom(notification.getBody().value);
                    break;
                case roomchatclient.ApplicationFacade.MAKE_LEAVE_ROOM:
                    proxy.makeLeaveRoom(notification.getBody().value);
                    break;
                case roomchatclient.ApplicationFacade.MAKE_FREEZE_ROOM:
                    proxy.makeFreezeRoom(notification.getBody().value);
                    break;
                case roomchatclient.ApplicationFacade.MAKE_RECOMMEND_ROOM:
                    proxy.makeRecommendRoom();
                    break;
                case roomchatclient.ApplicationFacade.MAKE_BAN_ROOM:
                    proxy.makeBanRoom(notification.getBody().value);
                    break;
                case roomchatclient.ApplicationFacade.MAKE_CHANGE_ROOM_INFO:
                    proxy.makeChangeRoomInfo(notification.getBody().value);
                    break;


                case roomchatclient.ApplicationFacade.GET_ROOM_LIST:
                    proxy.getChatRoomList();
                    break;
                case roomchatclient.ApplicationFacade.GET_LOBBY_MEMBER_LIST:
                    proxy.getChatLobbyMemberList();
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