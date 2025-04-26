import { test as base, expect } from '@playwright/test';
import { ToDoPage } from '../pages/toDoPage.js';

export const test = base.extend({
  toDoPage: async ({ page }, use) => {
    await page.goto('https://todomvc.com/examples/react/dist/');
    const toDo = new ToDoPage(page);
    await use(toDo);
  },
});

export { expect };
