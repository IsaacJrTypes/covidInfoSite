console.log(dayjs());
const currentDateContainer = document.querySelector(".current-date");
const shotDateContainer = document.querySelector(".shot-date");

const currentDateObject = dayjs().format('dddd, MMM D YYYY');
const shotDateObject = dayjs().subtract(14,'day').format('M / DD / YYYY');

currentDateContainer.innerText = currentDateObject;
shotDateContainer.innerText = shotDateObject;
