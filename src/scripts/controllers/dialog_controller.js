import NotificationDialog from "@/components/dialog_components/notification_dialog";
import LoginDialog from "@/components/dialog_components/login_dialog";

/**
 * Display notification dialog with message
 * @param {*} message
 * @param {*} type "warn","notice",ture, false, show different style of notice
 * @param {*} onClick what need to do when cancel notice
 */
function notificationShow(message, type, onClick = null) {
  NotificationDialog.show({ message: message, type: type, onClick: onClick });
}

/**
 * Show login dialog
 * @param {*} onClick
 */
function LoginShow(onClick = null) {
  LoginDialog.show({ onClick: onClick });
}

export { notificationShow, LoginShow };
