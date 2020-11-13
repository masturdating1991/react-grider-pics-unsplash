import axios from 'axios'


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID dpY1YToCUBJWVwF1uy4MhOnlFHBHILsF5NQfomeOv1I'
    }
})