# localforage-memoryStorageDriver

A **volatile**, in memory storage driver for [localForage](https://github.com/mozilla/localForage).

**The stored data are lost after a page reload.**
Originally designed for unit-testing (especially SPAs) and as a fallback for environmets without any storage APIs.

This driver serializes the stored items, so that
* it works consistently compared to the "native" localForage driver
* modifications of retrieved (complex) objects do not affect the stored items.

## Requirements

* [localForage](https://github.com/mozilla/localForage) v1.4.0+

## Example

```js
localforage.defineDriver(memoryStorageDriver).then(function() {
  return localforage.setDriver(memoryStorageDriver._driver);
}).then(function() {
  console.log('Active driver: ' + localforage.driver());
  return localforage.setItem('test1', 'value1');
}).then(function() {
  console.log('setItem(\'test1\', \'value1\')');
  return localforage.getItem('test1');
}).then(function(value) {
  console.log('getItem(\'test1\') => ' + value);
  return localforage.clear();
})
```
