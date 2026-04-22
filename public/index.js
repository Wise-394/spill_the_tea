const openMemberDialog = document.querySelector("#openMemberDialog");
const memberDialog = document.querySelector("#memberDialog");
const closeMemberDialog = document.querySelector("#closeMemberDialog");

openMemberDialog.addEventListener("click", () => {
  memberDialog.showModal();
});

closeMemberDialog.addEventListener("click", () => {
  memberDialog.close();
});
