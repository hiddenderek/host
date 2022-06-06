let port = {
    port: typeof process != "undefined" ? (process?.env?.PORT || 8010) : 8010,
    authPort: typeof process != "undefined" ? (process?.env?.PORT || 8020) : 8020,
    hostname: "localhost"
}

export default port

