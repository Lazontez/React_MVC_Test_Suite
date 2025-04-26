class ToDoPage {
    constructor(page) {
        this.page = page
        this.inputField = page.getByTestId('text-input')
        this.list = page.getByTestId('todo-item')
        this.toDoCount = page.locator('.todo-count')
        this.items = page.locator('.todo-list li')
        this.deleteBtn = this.page.locator('.destroy')

    }

    async addItem(title) {
        await this.inputField.fill(title);
        await this.inputField.press('Enter')
    }
    async removeFirstItem() {
        const firstItem = this.items.nth(0);
        await firstItem.scrollIntoViewIfNeeded();
        await firstItem.hover(); 
        const deleteButtonForFirstItem = firstItem.locator('.destroy'); 
        await deleteButtonForFirstItem.waitFor({ state: 'visible' });
        await deleteButtonForFirstItem.click();
    }
    async getItemCountText() {
        return await this.toDoCount.textContent()
    }
}

module.exports = { ToDoPage }