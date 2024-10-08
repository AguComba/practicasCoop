const { z } = require('zod');

const Person = z.object({
    name: z
        .string('Nombre es requerido')
        .min(2, 'El nombre debe tener dos caracteres como minimo')
        .max(100, 'El nombre debe tener 100 caracteres como maximo'),
    edad: z
        .number()
        .int()
        .min(18, 'La edad debe ser mayor de 18')
});

module.exports = { Person };