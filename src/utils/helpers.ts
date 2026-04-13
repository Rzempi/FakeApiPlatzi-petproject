// ======================
// PERFORMANCE HELPERS
// ======================

export function createStartMark() {
    return performance.mark('request-start');
}

export function createEndMark() {
    return performance.mark('request-end');
}