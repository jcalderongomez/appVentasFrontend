export interface IDataProducto {
    isExitoso: boolean;
    resultado: Producto[];
    mensjae:   string;
}

export interface Producto {
    productoId:   number;
    nombre:       string;
    descripcion:  string;
    cantidad:     number;
    precio:       number;
    fechaCaptura: string;
    categoriaId:  number;
    categoria:    null;
}
