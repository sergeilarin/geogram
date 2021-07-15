import { storageService } from './async-storage.service.js';
// const gStorys = require('../data/story.json')


const STORYS_KEY = 'storys';
const gStorys = [{
    "_id": "s101",
    "txt": "Best trip ever",
    "imgUrl": "http://some-img",
    "createdAt": 123543452,
    "by": {
        "_id": "u101",
        "fullname": "Ulash Ulashi",
        "imgUrl": "http://some-img"
    },
    "loc": {
        "lat": 11.11,
        "lng": 22.22,
        "name": "Tel Aviv"
    },
    "comments": [
        {
            "id": "c1001",
            "by": {
                "_id": "u105",
                "fullname": "Bob",
                "imgUrl": "http://some-img"
            },
            "txt": "good one!",
            "likedBy": [
                {
                    "_id": "u105",
                    "fullname": "Bob",
                    "imgUrl": "http://some-img"
                }
            ]
        },
        {
            "id": "c1002",
            "by": {
                "_id": "u106",
                "fullname": "Dob",
                "imgUrl": "http://some-img"
            },
            "txt": "not good!"
        }
    ],
    "likedBy": [
        {
            "_id": "u105",
            "fullname": "Bob",
            "imgUrl": "http://some-img"
        },
        {
            "_id": "u106",
            "fullname": "Dob",
            "imgUrl": "http://some-img"
        }
    ],
    "tags": ["fun", "kids"]
}]


export const storyService = {
    query,
    getById,
    remove,
    save
}
function query() {
    return storageService.query(STORYS_KEY)
    .then(stories => {
        if(!stories.length) {
            stories = gStorys
        }
        return stories
    })
}

function getById(id) {
    return storageService.get(STORYS_KEY, id)
}
function remove(storyId) {
    return storageService.remove(STORYS_KEY, storyId)
}

function save(story) {
    if (story._id) {
        return storageService.put(STORYS_KEY, story)
    } else {
        return storageService.post(STORYS_KEY, story)
    }
}
