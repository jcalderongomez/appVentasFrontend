export interface IDataUsuario {
    isExitoso: boolean;
    resultado: Usuario[];
    mensjae:   string;
}

export interface Usuario {
    usuarioId:    number;
    nombre:       string;
    apellido:     string;
    email:        string;
    password:     string;
    fechaCaptura: string;
}