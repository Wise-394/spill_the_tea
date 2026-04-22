const openMemberDialog = document.querySelector("#openMemberDialog");
const memberDialog = document.querySelector("#memberDialog");
const closeMemberDialog = document.querySelector("#closeMemberDialog");

openMemberDialog?.addEventListener("click", () => memberDialog.showModal());

closeMemberDialog?.addEventListener("click", () => memberDialog.close());

const openMessageDialog = document.querySelector("#openMessageDialog");
const messageDialog = document.querySelector("#messageDialog");
const closeMessageDialog = document.querySelector("#closeMessageDialog");

openMessageDialog?.addEventListener("click", () => messageDialog.showModal());

closeMessageDialog?.addEventListener("click", () => messageDialog.close());
