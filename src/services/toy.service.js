import { storageService } from "./async-storage.service"
import { utilService } from "./util.service"

export const toyService = {
    getById,
    remove,
    save,
    query,
}

const STORAGE_KEY = 'toys'


const labels = ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor"]

const gToys = [
    { _id: utilService.makeId(), name: "Talking Doll", price: 123, labels: ["Doll", "Battery Powered", "Baby"], createdAt: 1631031801011, inStock: true },
    { _id: utilService.makeId(), name: "Baby Doll", price: 254, labels: ["Doll", "Battery Powered", "Baby"], createdAt: 1631031801011, inStock: true },
    { _id: utilService.makeId(), name: "Dino Doll", price: 254, labels: ["Doll", "Battery Powered", "Baby"], createdAt: 1631031801011, inStock: true },
    { _id: utilService.makeId(), name: "Robot Doll", price: 254, labels: ["Doll", "Battery Powered", "Baby"], createdAt: 1631031801011, inStock: true },
    { _id: utilService.makeId(), name: "Scary Doll", price: 235, labels: ["Doll", "Battery Powered", "Baby"], createdAt: 1631031801011, inStock: true },
]
function query() {
    return storageService.query(STORAGE_KEY).then(toys => {
        if (!toys || !toys.length) {
            storageService.postMany(STORAGE_KEY, gToys)
            toys = gToys
        }
        return toys
    })
}


function getById(toyId) {


    const toy = storageService.get(STORAGE_KEY, toyId).then(toy => toy.reviews ? toy : ({ ...toy, reviews: [{ name: 'omer', text: 'good toy love it', rate: 4 }, { name: 'dekel', text: 'bad toy and scary', rate: 1 }, { name: 'eldad', text: 'love this toy my dog aet him', rate: 4 }] }))
    console.log(toy);
    return toy

}

function remove(toyId) {
    return storageService.remove(STORAGE_KEY, toyId)
}

function save(toy) {
    if (toy._id) {
        return storageService.put(STORAGE_KEY, toy)
    } else {
        return storageService.post(STORAGE_KEY, toy)
    }
}

