import * as yup from 'yup';
import Rut from 'rut.js';

const RutValidation = (rut) => {
    if (!Rut.validate(rut)) {
        return false;
    }
    return true;
    };

export const Validations = yup.object().shape({
    nombre: yup
    .string()
    .required('El nombre es obligatorio'),
    rut: yup
    .string()
    //.matches(/^\d{1,2}\.\d{3}\.\d{3}-(\d|k|K)$/, 'RUT no válido, el formato debe ser: xx.xxx.xxx-x')
    .test('RUT no válido', RutValidation)
    .required('El RUT es obligatorio'),
    correo: yup
    .string()
    .email('Correo electrónico no válido')
    .required('El correo es obligatorio'),
    telefono: yup
    .string()
    .matches(/^\d{9}$/, 'Número de teléfono no válido'),
    contrasena: yup
    .string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es obligatoria'),
});