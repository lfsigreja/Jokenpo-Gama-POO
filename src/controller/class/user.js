const MachineOptions = require('./machine')
const inquirer = require('inquirer')
const options = require('../../data/index')

class User extends MachineOptions {
    constructor({ opt, name, selected }) {
        super({ opt });
        this._name = name
        this._selected = selected
        this._sort = this.sort()
    }

    set name(string) {
        this._name = string
    }

    get name() {
        return this._name
    }

    set selected(string) {
        this._selected = string
    }

    get selected() {
        return this._selected
    }

    logic() {
        if (this._selected === this._sort) {
            return `${this._name} você empatou! ${this._selected} e ${this._sort}`
        } else if (
            (this._selected === 'Pedra' && this._sort === 'Tesoura') ||
            (this.selected === "Papel" && this._sort === "Pedra") ||
            (this.selected === "Tesoura" && this._sort === "Papel")) {

            return `${this._name}, você ganhou. ${this._selected} e ${this._sort}`

        } else {
            return `${this._name}, você perdeu. ${this._selected} e ${this._sort}`
        }
    }

    game() {
        return inquirer
            .prompt([
                {
                    name: 'name',
                    message: 'Qual é o seu nome? ',
                    default: 'Jogador 1'
                },
                {
                    type: 'list',
                    name: 'Jokenpo',
                    message: 'Selecione uma destas opções: ',
                    choices: options
                }
            ]).then((answers) => {
                this._selected = answers.Jokenpo
                this._name = answers.name
                console.info(`O resultado é: ${this.logic()}`)
            })
    }
}

module.exports = User