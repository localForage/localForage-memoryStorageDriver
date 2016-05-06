# localforage-memoryStorageDriver

A volatile, in memory storage driver for [localForage](https://github.com/mozilla/localForage).

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
