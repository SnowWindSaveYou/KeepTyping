import React from "react";

/**
 * Format datetime from server
 * If date is today show time, if not show date
 * @param {*} dateStr
 */
function formateDate(dateStr) {
  var today = new Date();
  var date = new Date(dateStr);
  if (date.toLocaleDateString() === today.toLocaleDateString()) {
    return date.toLocaleTimeString();
  } else {
    return date.toLocaleDateString();
  }
}

/**
 * Process plan doc to react element
 * @param {*} doc
 */
function formateDoc(doc) {
  var doc_list = doc.split("\n");
  var doc_elements = [];

  doc_list.forEach((paragraph, i) => {
    doc_elements.push(<p key={i}>{paragraph}</p>);
  });
  return doc_elements;
}
/**
 * Format string list
 * @param {*} semiList
 */
function formateSemi(semiList) {
  var list = semiList.split(";");
  return list;
}

export { formateDate, formateDoc };
