console.log(dayjs());
const grabDateContainer = document.querySelector(".date");
console.log(grabDateContainer);

const dateObject = dayjs();

grabDateContainer.innerText = dateObject;
