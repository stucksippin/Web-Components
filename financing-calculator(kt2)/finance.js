class FinancialCalculator extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML =
      `
      <style>
      form {
          margin-bottom: 1rem;
      }

      label {
          display: block;
          margin-bottom: 0.5rem;
      }

      input {
          width: 100 px;
      </style>
      <div>
          <form>
          <label for="loan-amount">Сумма кредита:</label>
          <input type="number" id="loan-amount" required>

          <label for="interest-rate">Процентная ставка:</label>
          <input type="number" id="interest-rate" required>

          <label for="loan-term">Срок кредита (в месяцах):</label>
          <input type="number" id="loan-term" required>

          <button type="submit">Рассчитать</button>
          </form>
          <div id="results">
          <p>Ежемесячный платеж: <span id="monthly-payment"></span></p>
          <p>Общая сумма: <span id="total-amount"></span></p>
          <p>Общий процент: <span id="total-interest"></span></p>
      </div>`
  }

  connectedCallback() {
    console.log('Компонент подключен')
    this.shadowRoot.querySelector('form').addEventListener('submit', this.calculateLoan.bind(this));
  } disconnectedCallback() {
    console.log('Компонент отключен')
  }
  calculateLoan(event) {
    event.preventDefault();
    const loanAmount = parseFloat(this.shadowRoot.querySelector('#loan-amount').value);
    const interestRate = parseFloat(this.shadowRoot.querySelector('#interest-rate').value);
    const loanTerm = parseInt(this.shadowRoot.querySelector('#loan-term').value);

    const monthlyInterestRate = (interestRate / 100) / 12;
    const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanTerm));
    const totalAmount = monthlyPayment * loanTerm;
    const totalInterest = totalAmount - loanAmount;


    this.shadowRoot.querySelector('#monthly-payment').textContent = monthlyPayment.toFixed(0);
    this.shadowRoot.querySelector('#total-amount').textContent = totalAmount.toFixed(0);
    this.shadowRoot.querySelector('#total-interest').textContent = totalInterest.toFixed(0);

  }
}
customElements.define('financial-calculator', FinancialCalculator);