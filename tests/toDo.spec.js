// @ts-check
import { test, expect } from '@playwright/test';
import { ToDoPage} from '../pages/toDoPage';

test.beforeEach(async ({ page }) => {
  // Go to the To Do MVC site
  await page.goto('https://todomvc.com/examples/react/dist/');
});

test('TC001 Validate user can successfully add a to do item', async ({ page }) => {
  let toDo = new ToDoPage(page);
  const title = 'Get Milk'
  await toDo.addItem(title);
  const items = await toDo.list.allTextContents()
  await expect(items).toHaveLength(1)
  await expect(items[0]).toContain(title)
  
});
test('TC002 Validate user can successfully add multiple to do items', async ({ page }) => {
  let toDo = new ToDoPage(page);
  const title1 = 'Get Milk'
  const title2 = 'Get Eggs'
  await toDo.addItem(title1);
  await toDo.addItem(title2);
  const items = await toDo.list.allTextContents()
  await expect(items).toHaveLength(2)
  await expect(items[0]).toContain(title1)
  await expect(items[1]).toContain(title2)
});