const getStoreDb = () => {
  const storeAppStr = localStorage.getItem("appList");
  if (storeAppStr) {
    const storeAppData = JSON.parse(storeAppStr).map((id) => Number(id));
    return storeAppData;
  } else {
    return [];
  }
};

const addToStoreDb = (id) => {
  const storeData = getStoreDb();
  id = Number(id);
  if (storeData.includes(id)) {
    return;
  } else {
    storeData.push(id);
    localStorage.setItem("appList", JSON.stringify(storeData));
  }
};

const removeFromStoreDb = (id) => {
  id = Number(id);
  const storeData = getStoreDb();
  const updated = storeData.filter((appId) => appId !== id);
  localStorage.setItem("appList", JSON.stringify(updated));
};

export { addToStoreDb, getStoreDb, removeFromStoreDb };
