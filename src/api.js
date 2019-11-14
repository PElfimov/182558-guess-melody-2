import axios from "axios";


const configureAPI = axios.create({
  baseURL: `https://htmlacademy-react-2.appspot.com/guess-melody`,
  timeout: 1000 * 5,
  withCredentials: true,
});

export default configureAPI;
