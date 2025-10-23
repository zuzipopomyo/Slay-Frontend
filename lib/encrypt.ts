// import * as CryptoJS from "crypto-js";
// import { SignJWT } from "jose";

// /**
//  *Jwt token generate
//  * @returns {string} JWT token
//  */
// export const generateJwtToken = async (data: { id: string; email: string }) => {
//   const secretKey = process.env.JWT_SECRET;

//   if (!secretKey) {
//     throw new Error("Missing NEXT_PUBLIC_API_KEY");
//   }

//   const secret = new TextEncoder().encode(secretKey);

//   const token = await new SignJWT(data!)
//     .setProtectedHeader({ alg: "HS256" })
//     .setIssuedAt()
//     .setExpirationTime("1h")
//     .sign(secret);

//   return token;
// };

// /**
//  * Encrypt data using AES-256
//  * @returns {string} encrypted data
//  */

// export default function encrypt(data: string): string {
//   try {
//     const key = CryptoJS.enc.Utf8.parse(process.env.HMAC_SECRET!);

//     const encrypted = CryptoJS.AES.encrypt(data, key, {
//       mode: CryptoJS.mode.ECB,
//       padding: CryptoJS.pad.Pkcs7,
//     });

//     return (encrypted.ciphertext ?? "").toString(CryptoJS.enc.Hex);
//   } catch (e) {
//     console.error(e);
//     return "";
//   }
// }
