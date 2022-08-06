export interface IDataCliente {
    isExitoso: boolean;
    resultado: Cliente[];
    mensjae:   string;
}

export interface Cliente {
    clienteId: number;
    nombre:    string;
    apellido:  string;
    direccion: string;
    email:     string;
    telefono:  string;
    rfc:       string;
    usuarioId: number;
    usuario:   null;
}
