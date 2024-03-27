import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { UndsenData, buteegduuniiData } from ".";
import { db } from "../../firebaseConfig";

const undsenData = collection(db, "undsen_data");
const buteegduun = collection(db, "buteegduun");
const ovchindata = [
  {
    id: 1,
    img: "https://firebasestorage.googleapis.com/v0/b/eruul-hool.appspot.com/o/img%2FuvchinTurul%2Fhodoodicon.png?alt=media&token=05e3e10a-1dc2-4749-bfca-9c2405e2432f",
    name: "Ходоод ",
  },
  {
    id: 2,
    img: "https://firebasestorage.googleapis.com/v0/b/eruul-hool.appspot.com/o/img%2FuvchinTurul%2Felegicon.png?alt=media&token=f45aadd1-34f6-4108-a51e-23b6f6017a48",
    name: "Элэг",
  },
  {
    id: 3,
    img: "https://firebasestorage.googleapis.com/v0/b/eruul-hool.appspot.com/o/img%2FuvchinTurul%2Fbooricon.png?alt=media&token=3cae492e-cc7f-4b20-895c-564cb9c8e742",
    name: "Бөөр",
  },
  {
    id: 4,
    img: "https://firebasestorage.googleapis.com/v0/b/eruul-hool.appspot.com/o/img%2FuvchinTurul%2Fzurhicon.png?alt=media&token=422f5215-03bd-4837-b241-7b4c7e56baa1",
    name: "Зүрх",
  },
  {
    id: 5,
    img: "https://firebasestorage.googleapis.com/v0/b/eruul-hool.appspot.com/o/img%2FuvchinTurul%2FbuduunGedesicon.png?alt=media&token=adfe808b-14d7-46e8-9d8c-19b468bb5433",
    name: " Бүдүүн гэдэс",
  },
  {
    id: 6,
    img: "https://firebasestorage.googleapis.com/v0/b/eruul-hool.appspot.com/o/img%2FuvchinTurul%2FnariinGedesicon.png?alt=media&token=54c75e73-5873-42e3-9199-816487297fd8",
    name: "Нарийн гэдэс",
  },
  {
    id: 7,
    img: "https://firebasestorage.googleapis.com/v0/b/eruul-hool.appspot.com/o/img%2FuvchinTurul%2Fsaharicon.png?alt=media&token=14d548d7-050c-45ed-808d-8cb48ad186db",
    name: "Сахар",
  },
];

export const getUvchinData = () => {
  return ovchindata;
};

export const getUndsenData = async () => {
  let data = [];
  const querySnapshot = await getDocs(undsenData);
  querySnapshot.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id });
  });
  return data;
};
export const getUndsenById = async (id) => {
  try {
    const q = query(buteegduun, where("type", "==", parseInt(id)));
    let data = [];
    const snapshot = await getDocs(q);
    console.log("    snapshot.size", snapshot.size);
    snapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      data.push({ ...doc.data(), id: doc.id });
    });
    return data;
  } catch (error) {
    console.log("getUndsenById", error);
  }
};

export const setAllUndsenData = async () => {
  try {
    const promises = UndsenData.map((data) => addDoc(undsenData, data));

    await Promise.all(promises);
    console.log("All data added");
  } catch (e) {
    console.error("setAllUndsenData: ", e);
  }
};
export const setAllButeegduun = async () => {
  try {
    const promises = buteegduuniiData.map((data) => addDoc(buteegduun, data));

    await Promise.all(promises);
    console.log("All data added");
  } catch (e) {
    console.error("setAllUndsenData: ", e);
  }
};
