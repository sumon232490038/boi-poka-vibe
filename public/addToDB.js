import { toast } from "react-toastify";
const getDataFromLC = () => {
  const getData = localStorage.getItem("Whshlist");
  if (getData) {
    const stringData = JSON.parse(getData);
    return stringData;
  } else {
    return [];
  }
};
// const getDataFromLC1 = () => {
//   const getData = localStorage.getItem("Mark as read");
//   if (getData) {
//     const stringData = JSON.parse(getData);
//     return stringData;
//   } else {
//     return [];
//   }
// };

const addWhshlistDataLC = (id) => {
  const LcData = getDataFromLC();
  if (LcData.includes(id)) {
    toast("this is already exist");
  } else {
    LcData.push(id);
    const makeString = JSON.stringify(LcData);
    localStorage.setItem("Whshlist", makeString);
    toast("This book is added in listbooks");
  }
};
// const addMarkAsDataLC = (id) => {
//   const LcData = getDataFromLC1();
//   if (LcData.includes(id)) {
//     console.log("this is alredy exsiet");
//   } else {
//     LcData.push(id);
//     const makeString = JSON.stringify(LcData);
//     localStorage.setItem("Mark as read", makeString);
//   }
// };

export { addWhshlistDataLC, getDataFromLC };
