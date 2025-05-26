const { app } = require('@azure/functions');

app.http('http_trigger', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        let numerosString = request.query.get('numeros') || "1,2,3,4,5"; // Valor por defecto si no se proporciona
        let numeros = numerosString.split(',').map(num => parseInt(num)).filter(num => !isNaN(num));
        
        let suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
        context.log(`Suma calculada: ${suma}`);

        return { 
            status: 200,
            body: `La suma de los números es: ${suma}`, 
        };
    }
});
