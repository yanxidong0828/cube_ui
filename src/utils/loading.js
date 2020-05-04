import Loading from "../components/loading"
const  loadable =(asyncFunction) =>{
     const component =()=> ({
       component:asyncFunction(),
       loading:Loading
     })
     //组件是一个对象  最终会返回一个组件，组件需要有render 通过render在去渲染一个异步组件
     return {
       render(h){
         return h(component)
       }
     }

}
 export  default loadable
