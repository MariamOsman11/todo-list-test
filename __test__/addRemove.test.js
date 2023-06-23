import addTask from '../src/mockFunction/addTask.js';
import removeTask from '../src/mockFunction/removeTask.js';

describe('Add task', () => {
  test('Adding a task to DOM', () => {
    document.body.innerHTML = `
    <section class="main">
    <h1 class="heading">To Do List</h1>
    <div class="Container">
      <div class="subContainer">
        <p class="subContainerText">Today's to Do</p>
        <button type="button" class="btn" id="refreshBtn">
          <i class="fas fa-refresh recycle_icon"></i>
        </button>
      </div>
      <div>
        <div class="form">
          <input
            type="text"
            class="taskInput"
            placeholder="Add to your list..."
          />
          <button type="button" class="btn" id="addBtn">
            <i class="fa-sharp fa-solid fa-right-to-bracket"></i>
          </button>
        </div>
      </div>
      <div class="list" id="list"></div>
      <div>
        <button type="button" class="clearList" id="clearBtn">
          Clear All Completed
        </button>
      </div>
    </div>
  </section>
  `;
    const taskInput = document.querySelector('.taskInput');
    const list = document.querySelector('.list');
    taskInput.value = 'Rock';
    addTask(1);
    expect(list.children).toHaveLength(1);
  });
});

// Test for 'remove task'
describe('deleteTask', () => {
  test('Removing an item from DOM', () => {
    document.body.innerHTML = `
    <section class="main">
    <h1 class="heading">To Do List</h1>
    <div class="Container">
      <div class="subContainer">
        <p class="subContainerText">Today's to Do</p>
        <button type="button" class="btn" id="refreshBtn">
          <i class="fas fa-refresh recycle_icon"></i>
        </button>
      </div>
      <div>
        <div class="form">
          <input
            type="text"
            class="taskInput"
            placeholder="Add to your list..."
          />
          <button type="button" class="btn" id="addBtn">
            <i class="fa-sharp fa-solid fa-right-to-bracket"></i>
          </button>
        </div>
      </div>
      <div class="list" id="list"></div>
      <div>
        <button type="button" class="clearList" id="clearBtn">
          Clear All Completed
        </button>
      </div>
    </div>
  </section>
  `;
    removeTask(1);
    const toDoList = document.querySelector('.list');
    expect(toDoList.children).toHaveLength(0);
  });
});