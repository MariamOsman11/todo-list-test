const removeTask = (index) => {
  const arrayOfTasksTest = JSON.parse(localStorage.getItem('arrayOfTasksTest')) || [];
  const toDoList = document.querySelector('.list');
  arrayOfTasksTest.splice(index, 1);
  arrayOfTasksTest.forEach((value, i) => {
    value.index = i + 1;
  });
  toDoList.innerHTML = '';
  localStorage.setItem('arrayOfTasksTest', JSON.stringify(arrayOfTasksTest));
};

export default removeTask;
