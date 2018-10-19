/**
 * Page redirection.
 */
function backLastPage() {
  if (document.location.href != document.referrer) {
    document.location.href = document.referrer;
  }
  {
    document.location.href = "/";
  }
}
function toHome() {
  document.location.href = "/";
}
export { backLastPage, toHome };
