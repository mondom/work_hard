'use strict'

const objects = [{ name: "object1" }, { name: "object2" }, { name: "object3" }];
 
objects[0].ref = objects[1];
objects[1].ref = objects[2];
 
function garbageCollect(objects) {
    const reachableObjects = new Set();
    const stack = [objects[0]];
 
    while (stack.length > 0) {
        const currentObj = stack.pop();
        reachableObjects.add(currentObj);
 
        for (const key in currentObj) {
            if (
                typeof currentObj[key] === "object" &&
                currentObj[key] !== null &&
                !reachableObjects.has(currentObj[key])
            ) {
                stack.push(currentObj[key]);
            }
        }
    }
 
    for (let i = 0; i < objects.length; i++) {
        if (!reachableObjects.has(objects[i])) {
            delete objects[i];
        }
    }
 
    console.log("Pozostałe obiekty:");
    for (const obj of objects) {
        if (obj !== undefined) {
            console.table(obj);
        }
    }
}
 
garbageCollect(objects);