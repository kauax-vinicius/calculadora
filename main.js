function Calculadora() {
this.display = document.querySelector('.input');
this.capturaClick = () => {
    document.addEventListener('click', evento => {
        const elemento = evento.target;
        if (elemento.classList.contains('button-num')) this.addNumDisplay(elemento);
        if (elemento.classList.contains('button-clear')) this.clearDisplay(elemento);
        if (elemento.classList.contains('button-apaga')) this.apagaNum(elemento);
        if (elemento.classList.contains('button-soma')) this.fazConta(elemento);
    });
    };
    this.fazConta = elemento => { this.display.value = eval(this.display.value) };
    this.apagaNum = elemento => { let valorDisplay = this.display.value; valorDisplay = valorDisplay.slice(0, -1); this.display.value = valorDisplay };
    this.clearDisplay = elemento => { this.display.value = ""; };
    this.addNumDisplay = elemento => { this.display.value += elemento.innerText; };

    this.inicia = () => {
        this.clearDisplay();
        this.capturaClick();
    };

}
const calculadora = new Calculadora();
calculadora.inicia();