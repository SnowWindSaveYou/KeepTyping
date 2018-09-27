import NotificationDialog from '@/components/dialog_components/notification_dialog';
import LoginDialog from '@/components/dialog_components/login_dialog';


function notificationShow(message,type,onClick=null){
    NotificationDialog.show({message:message,type:type,onClick:onClick});
}


function LoginShow(onClick=null){
    LoginDialog.show({onClick:onClick});
}

export {notificationShow,LoginShow};