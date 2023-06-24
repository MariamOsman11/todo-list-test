const cleartasksDone = () => {
  const allTasks = [{
    description: 'Buy Groceries',
    completed: false,
    id: 0,
  },
  {
    description: 'Pay Electric Bill',
    completed: true,
    id: 1,
  },
  {
    description: 'Practice JavaScript',
    completed: false,
    id: 2,
  },
  {
    description: 'Finish BlockChain Project',
    completed: true,
    id: 3,
  },
  ];
  const store = [];
  allTasks.forEach((data) => {
    if (data.completed === false) {
      store.push(data);
    }
  });
  let Q = 1;
  for (let i = 0; i < store.length; i += 1) {
    store[i].id = Q;
    Q += 1;
  }
  return store;
};
export default cleartasksDone;