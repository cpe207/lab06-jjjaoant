// const axios = require("axios");
import axios from "axios";

/* assign interface/type to the function definition properly */
const getTodo = async (todoId: number) => {
  try {
    const todoresponse = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const tododata = todoresponse.data;

    const userId = tododata.userId;
    const userresponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userdata = userresponse.data;

    const result = {
      owner : userdata.name,
      title : tododata.title,
      completed : tododata.completed,
    };
    return result;
  } catch (error) {
    return "INVALID TODO ID";
  }
};

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;
