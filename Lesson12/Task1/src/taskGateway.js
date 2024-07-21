const baseUrl = 'https://669781f802f3150fb66de387.mockapi.io/users';

export const createTask = taskData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  }).then(responce => {
    if (!responce.ok) {
      throw new Error('Faild to create task');
    }
  });
};

export const fetchTasksList = () => {
  return fetch(baseUrl)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
    .then(tasksList => tasksList.map(({ _id, ...task }) => ({ id: _id, ...task })));
};

export const updateTask = (taskId, taskTada) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;utc-8',
    },
    body: JSON.stringify(taskTada),
  }).then(responce => {
    if (!responce.ok) {
      throw new Error('Faild to create task');
    }
  });
};

export const deleteTask = taskId => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  }).then(responce => {
    if (!responce.ok) {
      throw new Error('Failed to delete task');
    }
  });
};
