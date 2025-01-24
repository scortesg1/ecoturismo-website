import { createHash } from 'crypto';

function getReference() {
    const date = new Date();
    const dateFormatted = date.toISOString().split('T')[0].replace(/-/g, ''); 
    const hours = date.getHours().toString().padStart(2, '0');
    const min = date.getMinutes().toString().padStart(2, '0');
    const sec = date.getSeconds().toString().padStart(2, '0');
    const numbersRandom = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');

    
    return `Wompi-${dateFormatted}-${hours}-${min}-${sec}-${numbersRandom}`;
}

async function getIntegrity(reference: string, amount: string, currency: string, secret: string) {
    const stringConcatenated = `${reference}${amount}${currency}${secret}`;
    
    if (typeof window !== 'undefined') {
        const encodedText = new TextEncoder().encode(stringConcatenated);
        const hashBuffer = await window.crypto.subtle.digest('SHA-256', encodedText);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    } else {
        return createHash('sha256')
            .update(stringConcatenated)
            .digest('hex');
    }
}

export {
    getReference,
    getIntegrity,
};