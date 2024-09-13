type CategoryProps = {
    id?: string
    title: string
    color: string
}

export class Category {
    public id?: string
    public title: string
    public color: string

    constructor({id, color, title}: CategoryProps) { // parâmetro opcional deve ser passado por último
        this.id = id
        this.title = title
        this.color = color.toUpperCase() // teste para o hexadecimal ficar tudo MAIÚSCULO
    }
}