 

export interface Owner{
    id:string;
    firstName:string;
    lastName:string;
    title:string;
    email:string;

}


export class Article{
    id:string;
    text:string;
    tags:Array<string>;
    image:string;
    owner:Owner;
    publishDate:string;
    likes:number;
}




        // "owner": {
        //     "id": "b7rf3uChfwFsOWoUB686",
        //     "lastName": "Dubois",
        //     "picture": "https://randomuser.me/api/portraits/women/11.jpg",
        //     "firstName": "Cléa",
        //     "title": "miss",
        //     "email": "clea.dubois@example.com"
        //   },
        //   "id": "LfncXUomey78DvkFY3Ma",
        //   "image": "https://img.dummyapi.io/photo-1535008652995-e95986556e32.jpg",
        //   "publishDate": "2020-05-21T15:53:26.275Z",
        //   "text": "Random man walking with his dogs man and dogs on the seashore",
        //   "tags": [
        //     "human",
        //     "ocean",
        //     "nature"
        //   ],
        //   "link": "https://www.instagram.com/takemeoutphotography/",
        //   "likes": 15
        // }