// @ts-check
import { test, expect } from '../fixtures/toDoPage.js';
import { ToDoPage } from '../pages/toDoPage';
import testData from '../utils/toDoitems.json'

test.beforeEach(async ({ page }) => {
  // Go to the To Do MVC site
  await page.goto('https://todomvc.com/examples/react/dist/');
});

test('TC001: Validate user can successfully add multiple to do items', async ({ page }) => {
  let toDo = new ToDoPage(page);
  const title1 = testData[0].task
  const title2 = testData[1].task
  await toDo.addItem(title1);
  await toDo.addItem(title2);
  const items = await toDo.list.allTextContents()
  await expect(items).toHaveLength(2)
  await expect(items[0]).toContain(title1)
  await expect(items[1]).toContain(title2)
});
test.only('TC002: Validate a user can remove an item', async ({ page }) => {
  let toDo = new ToDoPage(page);
  let s = 0
  while (s < testData.length) {
    await toDo.addItem(`${s + 1}: ${testData[s].task}`)
    let itemCountText = await toDo.getItemCountText()
    expect(itemCountText).toBe(`${s + 1} ${(s+1 === 1?'item':'items')} left!`)
    s++
  }
  await toDo.removeFirstItem()
  

})

