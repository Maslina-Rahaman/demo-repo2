import axios from 'axios'

// const url = 'https://demo-project-memories.herokuapp.com/posts'
//const url='http://localhost:5000/posts'

const API=axios.create({baseURL:'http://localhost:5000'})

// API.interceptors.request.use((req)=>{
//     if( localStorage.getItem('profile')){
//         req.headers.Authorization= `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
//     }
//  return req;
// })
// export const fetchOptionLists = ()=>API.get('/reports');
// export const fetchReport=(formData)=>API.post('/reports',formData); 

export const fetchOptionLists = ()=>API.get('/dropdownlist');

export const signIn = (formData)=>API.post('/user/signin',formData) ;
export const signUp = (formData)=> axios.post('/user/signup',formData) ;