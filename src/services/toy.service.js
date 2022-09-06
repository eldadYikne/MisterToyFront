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
    { _id: utilService.makeId(), name: "Dino Doll", price: 254, labels: ["Doll", "Battery Powered", "Baby"], createdAt: 1631031801011, inStock: false },
    { _id: utilService.makeId(), name: "Robot Doll", price: 254, labels: ["Doll", "Battery Powered", "Baby"], createdAt: 1631031801011, inStock: true },
    { _id: utilService.makeId(), name: "Scary Doll", price: 235, labels: ["Doll", "Battery Powered", "Baby"], createdAt: 1631031801011, inStock: true },
]



function query(filterBy) {
    console.log('service', filterBy)
    return storageService.query(STORAGE_KEY).then(toys => {
        if (!toys || !toys.length) {
            storageService.postMany(STORAGE_KEY, gToys)
            toys = gToys
        }
        if (filterBy) {
            var { name, stock, sortBy } = filterBy
            toys = toys.filter(toy => toy.name.toLowerCase().includes(name.toLowerCase()))

            if (stock) {
                let filtered
                switch (stock) {
                    case 'all':
                        console.log('All')
                        return Promise.resolve(toys)
                    case 'true':
                        console.log('true')
                        filtered = toys.filter(toy => toy.inStock === true)
                        return Promise.resolve(filtered)


                    case 'false':
                        console.log('false')
                        filtered = toys.filter(toy => toy.inStock === false)
                        return Promise.resolve(filtered)

                    default: return toys
                }
            }
            if (sortBy) {
                let filtered
                switch (sortBy) {
                    case 'name':
                        console.log('name');

                       return toys.sort((a, b) => {
                            const nameA = a.name.toUpperCase();
                            const nameB = b.name.toUpperCase();
                            if (nameA < nameB) {
                                return -1;
                            }
                            if (nameA > nameB) {
                                return 1;
                            }
                        })
                    case 'price':
                        console.log('price');
                        return toys.sort((a, b) => a.price - b.price);
                    case 'created':
                        console.log('created');
                        return toys.sort((a, b) => a.createdAt - b.createdAt);

                    default: return toys

                }

            }



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
    if (toy.inStock === 'false') toy.inStock = false
    if (toy._id) {
        return storageService.put(STORAGE_KEY, toy)
    } else {
        return storageService.post(STORAGE_KEY, toy)
    }
}


