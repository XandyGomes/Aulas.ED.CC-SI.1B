export default class Stack{
    #data //vetor privado

    constructor(){
        this.#data = [] //vetor vazio
    }

    //método para inserção no vetor
    push(val){
        this.#data.push(val)
    }

    //método para remoção do vetor
    pop(){
        return this.#data.pop()
    }

    //método para consultar o topo da pilha (útimo)
    peek(){
        return this.#data[this.#data.length - 1]
    }


}