export function getSerializerPromise(localForageInstance) {
    if (getSerializerPromise.result) {
        return getSerializerPromise.result;
    }
    if (!localForageInstance || typeof localForageInstance.getSerializer !== 'function') {
        Promise.reject(new Error(
            'localforage.getSerializer() was not available! ' +
            'localforage v1.4+ is required!'));
    }
    getSerializerPromise.result = localForageInstance.getSerializer();
    return getSerializerPromise.result;
}

export function executeCallback(promise, callback) {
    if (callback) {
        promise.then(function(result) {
            callback(null, result);
        }, function(error) {
            callback(error);
        });
    }
}
