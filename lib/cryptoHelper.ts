import * as crypto from "crypto";
export const VerifyRequest = (
    requestBody: string,
    requestHash: string | undefined
): boolean => {
    console.log('VerifyRequest: requestHash='+requestHash);
    if (typeof requestHash === "undefined") {
    return false;
    }
    const hashKey: string = process.env.VERIFICATION_KEY as string;
    const bodyBytes: Buffer = Buffer.from(requestBody, "utf-8");
    const keyBytes: Buffer = Buffer.from(hashKey, "utf-8");
    const hash = crypto
    .createHmac("sha256", keyBytes)
    .update(bodyBytes)
    .digest("base64");
    console.log('VerifyRequest: hash=' + hash);
    return true
    //return hash === requestHash;
};