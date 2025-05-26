import { jwtVerify, SignJWT } from "jose";

export async function CreateToken(email, id, role) {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const payload = { email, id, role };

    const token = await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setIssuer(process.env.JWT_ISSUER)          // issuer from env
        .setExpirationTime(process.env.JWT_EXPIRATION_TIME)
        .sign(secret);

    return token;
}

export async function VerifyToken(token) {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret, {
        issuer: process.env.JWT_ISSUER               // verify issuer explicitly
    });
    return payload;
}
