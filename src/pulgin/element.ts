import Vue from 'vue'
import {
    Input,
    Form,
    FormItem,
    Button,
    Message,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Table,
    TableColumn,
    Pagination,
    Divider,
    Backtop,
    DatePicker,
    Select,
    Option,
    Tabs,
    TabPane,
    Tag,
    TimeSelect,
    TimePicker,
    Switch,
    CheckboxGroup,
    CheckboxButton,
    Checkbox,
    RadioButton,
    RadioGroup,
    Radio,
	Image,
	Upload,
	 Dropdown,
	  DropdownMenu,
	  DropdownItem,
	  Dialog,
} from 'element-ui';
//Layout 布局隐藏
import 'element-ui/lib/theme-chalk/display.css';
Vue.use(Dialog);
Vue.use(Upload);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Image);
Vue.use(Button)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Divider)
Vue.use(Backtop)
Vue.use(DatePicker);
Vue.use(Select);
Vue.use(Option);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(TimePicker);
Vue.use(Switch);
Vue.prototype.$message = Message;