// ---- Menu
export interface intMenu {
    tipo: string;
    clases: string;
    icon?: any;
}

// ---- Educacion
interface intItemsEdu {
    nombre: string;
}
export interface intEducacion {
    univ: string;
    items: intItemsEdu[];
}

// ---- Habilidades
export interface intHabilidades {
    imagen: string;
    nombre: string;
    descripcion: string;
}

// ---- Contacto
export interface intContacto {
    titulo: string;
    subtitulo: string;
    clases: string;
    icon?: any;
}

// ---- TODO
export interface intJSON {
    contacto: intContacto[];
    educacion: intEducacion[];
    habilidades: intHabilidades[];
    menu: intMenu[];
}