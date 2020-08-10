import crypto from "crypto";

const generateUniqueKey = () => {
    return crypto.randomBytes(8).toString('base64');
}

export default generateUniqueKey;