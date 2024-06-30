

export function decode_jwt(token){
    const parts = token.split('.');
    const decodedPayload = atob(parts[1]);
    const payloadObject = JSON.parse(decodedPayload);

    return payloadObject

}