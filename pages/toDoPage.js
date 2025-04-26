class ToDoPage{
    constructor(page){
        this.page = page
        this.inputField = page.getByTestId('text-input')
        this.list = page.getByTestId('todo-item')       
        this.toDoCount = page.locator('.todo-count')
    }

    async addItem (title){
        await this.inputField.fill(title);
        await this.inputField.press('Enter');
    }
    async removeItem (title){
        const item = this.list.locator(`text=${title}`)
        await item.locator('button').click()
    }
    async getItemCountText(){

            return await this.toDoCount.textContent();
    }
}

module.exports = {ToDoPage}