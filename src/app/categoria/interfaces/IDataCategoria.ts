export interface IDataCategoria {
    isExitoso: boolean;
    resultado: Categoria[];
    mensjae:   string;
}

export interface Categoria {
    categoriaId:     number;
    nombreCategoria: string;
    fechaCaptura:    string;
}
