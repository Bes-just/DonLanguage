import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'
// mock数据
import {viteMockServe} from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		viteMockServe({
			mockPath:'./src/mock',
		}),
		AutoImport({
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			resolvers: [ElementPlusResolver()],
		}),
		ElementPlus({
			useSource: true
		})
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src')
		}
	},
	server: {
		port: 3000,
		open: true,
		cors: true,
		proxy:{
			'/api':{
				target:'http://localhost:2000',
				changeOrigin:true,
				rewrite:(path) => path.replace(/^\/api/,"")
			}
		}
	}
})
