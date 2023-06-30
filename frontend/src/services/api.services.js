import axios from "axios";

const fetch = async (route, setter) => {
  axios
    .get(`http://localhost:6001/api/${route}`)
    .then((res) => {
      setter(res.data);
    })
    .catch((error) => console.error("error from api.services.fetch", error));
};

export default fetch;
