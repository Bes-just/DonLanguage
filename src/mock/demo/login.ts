import Mock from 'mockjs'
export default [
    {
        url:'/api/login',
        method:"post",
        response:() =>{
            return{
                code:200,
                message:'ok',
                data:{
                    'token':Mock.Random.string('lower',200)
                }
            }
        }
    }
]