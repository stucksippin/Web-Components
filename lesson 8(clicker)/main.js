class ClickCounter extends HTMLElement {
    constructor() {
        super();
        this.clickCount = 0;
        this.render();
        this.log('Компонент создан');
    }

    connectedCallback() {
        this.render();
        const clickButton = this.querySelector('#clickButton');
        clickButton.addEventListener('click', this.incrementCounter.bind(this));

        const resetButton = this.querySelector('#resetButton');
        resetButton.addEventListener('click', this.resetCounter.bind(this));

        this.log('Компонент подключен');
    }

    disconnectedCallback() {

        const clickButton = this.querySelector('clickButton');
        clickButton.removeEventListener('click', this.incrementCounter.bind(this));

        const resetButton = this.querySelector('#resetButton');
        resetButton.removeEventListener('click', this.resetCounter.bind(this));

        this.log('Компонент отключен');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.log(`Атрибут ${name} изменен. Старое значение: ${oldValue}, новое значение: ${newValue}`);
    }

    static get observedAttributes() {
        return ['some-attribute']
    }

    render() {
        this.innerHTML = `
    <div>
    <button id='clickButton'>Кликни меня</button>
    <button id='resetButton'>Сбросить</button> 
    <p>Количество кликов: ${this.clickCount}</p> 
    </div>
    `;
        // Добавляем обработчики событий для кнопок

        const clickButton = this.querySelector('#clickButton');
        clickButton.addEventListener('click', this.incrementCounter.bind(this));

        const resetButton = this.querySelector('#resetButton');
        resetButton.addEventListener('click', this.resetCounter.bind(this));
    }

    incrementCounter() {
        this.clickCount++;
        this.dispatchEvent(new Event('clickCountUpdated'));
        this.render();
        this.log('Количество кликов увеличено');
    }

    resetCounter() {
        this.clickCount = 0;
        this.render();
        this.log('Счетчик сброшен');
    }

    log(message) {
        console.log(`[$[this.tagName] $(message)`);
    }
}
customElements.define('click-counter', ClickCounter);
