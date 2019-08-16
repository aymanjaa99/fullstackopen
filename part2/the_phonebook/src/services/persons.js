import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(res => {
    return res.data;
  });
};

const create = newObj => {
  const request = axios.post(baseUrl, newObj);
  return request.then(res => {
    return res.data;
  });
};

const remove = id => {
  console.log("DELETED");
  return axios.delete(baseUrl + "/" + id);
};
export default { getAll: getAll, create: create, delete: remove };
