export const sendResponse = (res, code, contentType, content) => {
    res.statusCode = code
    res.setHeader('Content-Type', contentType)
    res.end(content)
}