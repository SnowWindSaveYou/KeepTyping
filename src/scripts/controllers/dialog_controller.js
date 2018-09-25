import NotificationDialog from '@/components/dialog_components/notification_dialog';


function notificationShow(message,type){
    NotificationDialog.show({message:message,type:type});
}

export {notificationShow};