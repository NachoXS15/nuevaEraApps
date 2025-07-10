const categories = [
    "Historia",
    "Cultura General",
    "Gastronomia",
    "Actividades",
    "Imperdible",
    "Premio Sorpresa",
    "Pierde el turno",
    "Tira de nuevo",
    "Premio consuelo",
    "Libre",
    "Premio imperdible",
] as const;


export type Category = (typeof categories)[number];

const categoryContent: Record<Category, { title: string; message: string; action: string; block?: number, closeText: string }> = {
    "Premio Sorpresa": {
        title: "¡Felicidades!",
        message: "Has ganado un premio sorpresa. Habla con el controlador para más información.",
        action: "spin",
        closeText: "Cerrar"
    },
    "Historia": {
        title: "Pregunta de Historia",
        message: "Responde esta pregunta sobre la historia mundial. ¿Listo?",
        action: "redirect",
        closeText: "Jugar de nuevo",
        block: 1
    },
    "Pierde el turno": {
        title: "¡Oh no!",
        message: "Has perdido tu turno. Mejor suerte la próxima vez.",
        action: "spin",
        closeText: "Cerrar"
    },
    "Cultura General": {
        title: "Pregunta de Cultura General",
        message: "Responde una pregunta sobre cultura general. ¿Listo?",
        action: "redirect",
        closeText: "Jugar de nuevo",
        block: 2
    },
    "Tira de nuevo": {
        title: "¡Tira de nuevo!",
        message: "Tienes otra oportunidad para girar la ruleta.",
        action: "spin",
        closeText: "Cerrar"
    },
    "Gastronomia": {
        title: "Pregunta de Gastronomía",
        message: "Responde esta pregunta sobre comida y cocina. ¿Listo?",
        action: "redirect",
        block: 3,
        closeText: "Jugar de nuevo"
    },
    "Premio consuelo": {
        title: "Premio Consuelo",
        message: "Habla con el controlador para recibir tu premio consuelo.",
        action: "spin",
        closeText: "Cerrar"
    },
    "Actividades": {
        title: "Pregunta de Actividades",
        message: "Responde esta pregunta sobre actividades recreativas. ¿Listo?",
        action: "redirect",
        block: 4,
        closeText: "Jugar de nuevo"
    },
    "Imperdible": {
        title: "¡Imperdible!",
        message: "¡Atento a estas preguntas imposible de pasar por alto!",
        action: "redirect",
        block: 5,
        closeText: "Jugar de nuevo"
    },
    "Libre": {
        title: "Turno Libre",
        message: "Este turno es libre. Puedes descansar.",
        action: "spin",
        closeText: "Cerrar"
    },
    "Premio imperdible": {
        title: "Premio Imperdible",
        message: "Has ganado el premio más grande. ¡Felicidades!",
        action: "spin",
        closeText: "Cerrar"
    },
};

export {categories, categoryContent} 