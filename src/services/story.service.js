import { storageService } from './async-storage.service.js';
// const gStories = require('../data/story.json')


const STORIES_KEY = 'stories';
const gStories = [{
    "_id": "s101",
    "txt": "Best trip ever",
    "imgUrl": "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
    "createdAt": 123543452,
    "by": {
        "_id": "u101",
        "username": "Muko",
        "fullname": "Ulash Ulashi",
        "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg"
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
},
{
    "_id": "s102",
    "txt": "Yooohoooo",
    "imgUrl": "https://i.pinimg.com/originals/38/b0/4c/38b04ccb0dbdb3bb822f0e607d4da8da.jpg",
    "createdAt": 1576543452,
    "by": {
        "_id": "u122",
        "username": "masha18",
        "fullname": "masha li",
        "imgUrl": "https://goop-img.com/wp-content/uploads/2020/06/Mask-Group-2.png"
    },
    "loc": {
        "lat": 11.11,
        "lng": 22.22,
        "name": "Tel Aviv"
    },
    "comments": [
        {
            "id": "c1008",
            "by": {
                "_id": "u108",
                "fullname": "Puki",
                "imgUrl": "http://some-img"
            },
            "txt": "love it!",
            "likedBy": [
                {
                    "_id": "u105",
                    "fullname": "Bob",
                    "imgUrl": "http://some-img"
                }
            ]
        },
        {
            "id": "c1003",
            "by": {
                "_id": "u103",
                "fullname": "momo",
                "imgUrl": "http://some-img"
            },
            "txt": "lol "
        }
    ],
    "likedBy": [
        {
            "_id": "u105",
            "fullname": "Bob",
            "imgUrl": "http://some-img"
        },
        {
            "_id": "u102",
            "fullname": "sob",
            "imgUrl": "http://some-img"
        },
        {
            "_id": "u106",
            "fullname": "Dob",
            "imgUrl": "http://some-img"
        }
    ],
    "tags": ["fun", "kids"]
},{
    "_id": "s50",
    "txt": "My new car",
    "imgUrl": "https://www.automobilemag.com/uploads/sites/11/2017/12/Shelby-GT-500CR-front-three-quarter-01.jpg",
    "createdAt": 1599993452,
    "by": {
        "_id": "u50",
        "username": "mononoke",
        "fullname": "princess mononoke",
        "imgUrl": "https://images8.alphacoders.com/997/thumb-1920-997783.jpg"
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
},{
    "_id": "s80",
    "txt": "Burger season is back and a burger wouldn’t be complete without a great beer",
    "imgUrl": "https://cdn.craftbeer.com/wp-content/uploads/How-to-Pair-Beers-For-Summer.jpg",
    "createdAt": 1626193452,
    "by": {
        "_id": "u122",
        "username": "masha18",
        "fullname": "masha li",
        "imgUrl": "https://goop-img.com/wp-content/uploads/2020/06/Mask-Group-2.png"
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
            "txt": "Yaaami",
            "likedBy": [
                {
                    "_id": "u105",
                    "fullname": "Bob",
                    "imgUrl": "http://some-img"
                }
            ]
        },
        {
            "id": "c1004",
            "by": {
                "_id": "u104",
                "fullname": "Didi",
                "imgUrl": "http://some-img"
            },
            "txt": "i want some too..."
        }
    ],
    "likedBy": [
        {
            "_id": "u111",
            "fullname": "momo",
            "imgUrl": "http://some-img"
        },
        {
            "_id": "u112",
            "fullname": "david",
            "imgUrl": "http://some-img"
        },
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
},{
    "_id": "s90",
    "txt": "North American workers in the logging industry",
    "imgUrl": "https://cdn.agriland.ie/uploads/2019/05/Forestry-Knowledge-Transfer-Group-KTG-Scheme-2019-800x720.jpg",
    "createdAt": 1626300452,
    "by": {
        "_id": "u90",
        "username": "jack",
        "fullname": "lumberjack",
        "imgUrl": "https://previews.123rf.com/images/photosvit/photosvit1701/photosvit170101778/69876116-angry-man-or-brutal-lumberjack-bearded-hipster-with-beard-and-moustache-in-red-checkered-shirt-shave.jpg"
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
},{
    "_id": "s70",
    "txt": "sprint 4 be like",
    "imgUrl": "https://i.pinimg.com/474x/62/1d/10/621d1058e5c677210bf6a71d2ccdbe0e.jpg",
    "createdAt": 1626409452,
    "by": {
        "_id": "u70",
        "username": "stewie",
        "fullname": "stewie griffin",
        "imgUrl": "https://spng.subpng.com/20190228/es/kisspng-stewie-griffin-peter-griffin-lois-griffin-brian-gr-homer-duff-pocket-t-shirt-rarestapparel-5c7791349314d2.5454867415513398286025.jpg"
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
},{
    "_id": "s60",
    "txt": "Best trip ever",
    "imgUrl": "https://www.fodors.com/wp-content/uploads/2019/01/take-a-vacation.jpg",
    "createdAt": 123543452,
    "by": {
        "_id": "u60",
        "username": "Muko",
        "fullname": "Ulash Ulashi",
        "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg"
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
},
]


export const storyService = {
    query,
    getById,
    remove,
    save
}
function query() {
    return storageService.query(STORIES_KEY)
        .then(stories => {
            if (!stories.length) {
                stories = gStories
            }
            localStorage.setItem(STORIES_KEY, JSON.stringify(stories))
            return stories
        })
}

function getById(id) {
    return storageService.get(STORIES_KEY, id)
}
function remove(storyId) {
    return storageService.remove(STORIES_KEY, storyId)
}

function save(story) {
    if (story._id) {
        return storageService.put(STORIES_KEY, story)
    } else {
        return storageService.post(STORIES_KEY, story)
    }
}
