import axios from 'axios'
export default {
    getPostData: function () {
        console.log("data")
        return new Promise((resolve, reject) => {
            axios.get('https://jsonplaceholder.typicode.com/posts').then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            })
        })
    }
}