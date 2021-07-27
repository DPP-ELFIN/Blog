import Vue from 'vue'
import { 
	Button,
	Container,
	Header,
	Aside,
	Main,
	Input,
	MessageBox ,
	 Message,
	  Notification,
	  Select,
	  Option,
	  RadioGroup,
	  Radio
 } from 'element-ui'

Vue.use(Button)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Input)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.use(Select)
Vue.use(Option)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.prototype.$message = Message
