import cleartasksDone from '../src/mockFunction/clearCompletetask.js';
import { checkBoxclicked, ListTasks, editTaskDescription } from '../src/mockFunction/editUpdate.js';

describe('Remove Completed Task', () => { // Arrange
  // Arrange
  document.body.innerHTML = `
    <div class="container">
        <h2>Today's To Do</h2>
        <input class="add-input" type="text" placeholder="Today's To Do" required>
        <i class="fas fa-plus fa-lg"></i>
        <ul class="list-Container" >
            <li>Marianna from Nairobi</li>
            <li>or Marianna from Jigjiga</li>
        </ul>
        <button class="clearBtn" type="submit">Clear all completed</button>
    </div>
    `;
  test('clear completed testing ..', () => {
    // Act - Call the edit function
    const clear = cleartasksDone();
    expect(clear).toHaveLength(2);
  });
  test('update the completed status ..', () => {
    checkBoxclicked(1, true);
    expect(ListTasks[1 - 1].completed).toBeTruthy();
    checkBoxclicked(3, true);
    expect(ListTasks[3 - 1].completed).toBeTruthy();
    checkBoxclicked(4, true);
    expect(ListTasks[4 - 1].completed).toBeTruthy();
  });
  test('Edit description ..', () => {
    editTaskDescription(1, 'Go to the Bank');
    expect(ListTasks[1 - 1].description).toMatch('Go to the Bank');
    editTaskDescription(2, 'Buy a new Laptop');
    expect(ListTasks[2 - 1].description).toMatch('Buy a new Laptop');
    editTaskDescription(4, 'Medetate for 1 hour');
    expect(ListTasks[4 - 1].description).toMatch('Medetate for 1 hour');
  });
});
