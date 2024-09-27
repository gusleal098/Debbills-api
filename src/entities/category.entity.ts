type CategoryProps = {
    _id?: string
    title: string
    color: string
}

export class Category {
    public _id?: string
    public title: string
    public color: string

    constructor({_id, color, title}: CategoryProps) { // parâmetro opcional deve ser passado por último
        this._id = _id
        this.title = title
        this.color = color.toUpperCase() // teste para o hexadecimal ficar tudo MAIÚSCULO
    }
}