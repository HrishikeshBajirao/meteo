export const sendResponse = (res, code, contentType, content) => {
    res.statusCode = code
    res.setHeader('Content-Type', contentType)
    
    if (typeof content === "object" && !Buffer.isBuffer(content)) {
        res.end(JSON.stringify(content));
    } else {
        res.end(content);
    }
}