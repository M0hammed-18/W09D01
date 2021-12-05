//In this file there is a problem, I will try to fix it and upload to github

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Task = () => {
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [check, setCheck] = useState("");

  useEffect(() => {
    gettask();
  }, []);
  useEffect(() => {
    const tokenn = localStorage.getItem("token");
    setCheck(tokenn);
    gettask();
  }, []);
  const gettask = async () => {
    const res = await axios.get(`${BASE_URL}/tasks`, {
      headers: {
        Authorization: `Bearer${check}`,
      },
    });
    setTask(res.data);
  };

  const addtask = async () => {
    await axios.post(
      `${BASE_URL}/task`,
      { task },
      {
        headers: {
          Authorization: `Bearer${check}`,
        },
      }
    );
    gettask(check);

    const updateTask = async (id) => {
      await axios.put(
        `${BASE_URL}/editTask/${id}`,
        {
          task: updateTask,
        },
        {
          headers: {
            Authorization: `Bearer ${check}`,
          },
        }
      );
      gettask(check);
    };

    const deleteTask = async (id) => {
      await axios.delete(`${BASE_URL}/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${check}`,
        },
      });
      gettask(check);
    };

    const logOut = () => {
      localStorage.clear();
      navigate("/login");
    };
    return (
      <div>
        <input
          onChange={(e) => setTask(e.target.value)}
          placeholder="new Task"
        />
        <button onClick={addtask}>Add</button>

        {tasks.map((item, i) => (
          <ul>
            <li key={i}>{item.task}</li>
            <div>
              <button  onClick={() => updateTask(task._id)}>
                Edit
              </button>
              <button  onClick={() => deleteTask(task._id)}>
                Delete
              </button>
            </div>
          </ul>
        ))}
        <button  onClick={logOut}>
          logout
        </button>
      </div>
    );
  };
};

export default Task;
