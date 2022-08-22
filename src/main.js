//按需引入
import { banner} from './banner'
//默认引入
import tabs from './tabs'
banner()
tabs()

//webpack默认只能去打包js文件和json文件
//  如果说想去扩展webpack的打包能力，需要下载对应的lader
//1.引入css文件，直接引入整个文件
import '../src/styles/index.css'
//引入less
import '../src/styles/index.less'
import '../src/app.vue'