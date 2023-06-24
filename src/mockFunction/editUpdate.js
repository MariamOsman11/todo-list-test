export const ListTasks = [{
  description: 'Buy Groceries',
  completed: false,
  id: 0,
},
{
  description: 'Pay Electric Bill',
  completed: false,
  id: 1,
},
{
  description: 'Practice JavaScript',
  completed: false,
  id: 2,
},
{
  description: 'Finish BlockChain Project',
  completed: false,
  id: 3,
},
];
export const checkBoxclicked = (index, value) => {
  if (value === true) {
    ListTasks[index - 1].completed = true;
  }
  return ListTasks;
};
export const editTaskDescription = (index, descript) => {
  ListTasks[index - 1].description = descript;
  return ListTasks;
};
