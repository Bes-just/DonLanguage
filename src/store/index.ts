import { createPinia } from "pinia";
// 数据持久化插件
import piniaPluginPersist from 'pinia-plugin-persist'

const store = createPinia();
store.use(piniaPluginPersist)

export default store
