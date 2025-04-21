class ToDoPage{
    constructor(page){
        this.page = page
        this.inputField = page.getByTestId('text-input')
        this.list = page.getByTestId('todo-item')
    }

    async addItem (title){
        await this.inputField.fill(title);
        await this.inputField.press('Enter');
    }
}

module.exports = {ToDoPage}