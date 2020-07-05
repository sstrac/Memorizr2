export const log = (data) => { console.log(data) }

export function invertJSONObject(jsonObject) {
    let newObj = {}
    let keys = Object.keys(jsonObject)
    let values = Object.values(jsonObject)
    for (let i = 0; i < keys.length; i++) {
        newObj[values[i]] = keys[i]
    }
    return newObj
}

// export const getNoteLetter = (note, scale) => {
//     if (scale[note].length > 2)
//         return scale[note][0].concat(scale[note][1])
//     else (scale[note].length == 2)
//     return scale[note][0]
// }

export const IMAGES = {
    './assets/keys/CM/C4.png': require('./assets/keys/CM/C4.png'),
    './assets/keys/CM/D4.png': require('./assets/keys/CM/D4.png'),
    './assets/keys/CM/E4.png': require('./assets/keys/CM/E4.png'),
    './assets/keys/CM/F4.png': require('./assets/keys/CM/F4.png'),
    './assets/keys/CM/G4.png': require('./assets/keys/CM/G4.png'),
    './assets/keys/CM/A4.png': require('./assets/keys/CM/A4.png'),
    './assets/keys/CM/B4.png': require('./assets/keys/CM/B4.png'),
    './assets/keys/CM/C5.png': require('./assets/keys/CM/C5.png'),
    './assets/keys/CM/D5.png': require('./assets/keys/CM/D5.png'),
    './assets/keys/CM/E5.png': require('./assets/keys/CM/E5.png'),
    './assets/keys/CM/F5.png': require('./assets/keys/CM/F5.png'),
    './assets/keys/CM/G5.png': require('./assets/keys/CM/G5.png')
}