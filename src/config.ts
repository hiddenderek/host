let port = {
    port: typeof process != "undefined" ? (process?.env?.PORT || 8010) : 8010,
    hostname: "localhost"
}

export default port

