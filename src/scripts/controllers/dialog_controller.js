import NotificationDialog from '@/components/dialog_components/notification_dialog';


function notificationShow(message,type,onClick=null){
    NotificationDialog.show({message:message,type:type,onClick:onClick});
}

export {notificationShow};