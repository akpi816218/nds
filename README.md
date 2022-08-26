# nds

## Docs

---

### `class NDSData`

Constructor: `new NDSData(object)`

Parameters:
| name | type | required | default |
| :----: | :------: | :------: | :---------: |
| object | Object | true | - |

Methods:

- `toJSONString()`: returns a String that can be converted to an Object with `JSON.parse()`.
- `toString()`: see `this.toJSONString()`.

Properties:
| name | type |
| :--: | :--: |
| key | String |
| values | Array |

---

### `async function Get(regexp, file)`

Parameters:
| name | type | required | default |
| :----: | :------: | :------: | :---------: |
| regexp | RegExp | false | `/[\s\S]*/` |
| file | String | false | .ndsf |

Returns: A Promise that resolves to an array of `NDSData` objects.

---

### `function GetSync(regexp, file)`

Parameters:
| name | type | required | default |
| :----: | :------: | :------: | :---------: |
| regexp | RegExp | false | `/[\s\S]*/` |
| file | String | false | .ndsf |

Returns: An array of `NDSData` objects.

---

### `async function Set(data, file)`

Parameters:
| name | type | required | default |
| :----: | :------: | :------: | :---------: |
| data | NDSData | true | - |
| file | String | false | .ndsf |

Returns: A Promise that resolves to an array of `NDSData` objects that represents the final contents of the written file.

---

### `async function SetSync(data, file)`

Parameters:
| name | type | required | default |
| :----: | :------: | :------: | :---------: |
| data | NDSData | true | - |
| file | String | false | .ndsf |

Returns: An array of `NDSData` objects that represents the final contents of the written file.
