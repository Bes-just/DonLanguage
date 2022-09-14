import http from '../http/http'

export const getTreeMenus =async ()=> {
    const res = await http.get('/api/meunList')
    return res.result
}