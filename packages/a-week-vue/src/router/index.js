import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import DataBinding from '../views/DataBinding.vue'
import DataBindingHtml from '@/views/DataBindingHtml.vue'
import DataBindingInputText from '@/views/DataBindingInputText.vue'
import DataBindingInputNumber from '@/views/DataBindingInputNumber.vue'
import DataBindingTextarea from '@/views/DataBindingTextarea.vue'
import DataBindingSelect from '@/views/DataBindingSelect.vue'
import DataBindingCheckbox from '@/views/DataBindingCheckbox.vue'
import DataBindingRadio from '@/views/DataBindingRadio.vue'
import DataBindingAttribute from '@/views/DataBindingAttribute.vue'
import DataBindingButton from '@/views/DataBindingButton.vue'
import DataBindingClass from '@/views/DataBindingClass.vue'
import DataBindingStyle from '@/views/DataBindingStyle.vue'
import DataBindingList from '@/views/DataBindingList.vue'
import DataBindingVIf from '@/views/DataBindingVIf.vue'
import DataBindingEventClick from '@/views/DataBindingEventClick.vue'
import DataBindingEventChange from '@/views/DataBindingEventChange.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path:'/databinding',
        name: 'DataBinding',
        component: DataBinding
    },
    {
        path:'/databindinghtml',
        name: 'DataBindingHtml',
        component: DataBindingHtml
    },
    {
        path:'/databindinginputtext',
        name: 'DataBindingInputText',
        component: DataBindingInputText
    },
    {
        path:'/databindinginputnumber',
        name: 'DataBindingInputNumber',
        component: DataBindingInputNumber
    },
    {
        path:'/databindingtextarea',
        name: 'DataBindingTextArea',
        component: DataBindingTextarea
    },
    {
        path:'/databindingselect',
        name: 'DataBindingSelect',
        component: DataBindingSelect
    },
    {
        path:'/databindingcheckbox',
        name: 'DataBindingCheckbox',
        component: DataBindingCheckbox
    },
    {
        path:'/databindingradio',
        name: 'DataBindingRadio',
        component: DataBindingRadio
    },
    {
        path:'/databindingattribute',
        name: 'DataBindingAttribute',
        component: DataBindingAttribute
    },
    {
        path:'/databindingbutton',
        name: 'DataBindingButton',
        component: DataBindingButton
    },
    {
        path:'/databindingclass',
        name: 'DataBindingClass',
        component: DataBindingClass
    },
    {
        path:'/databindingstyle',
        name: 'DataBindingStyle',
        component: DataBindingStyle
    },
    {
        path:'/databindinglist',
        name: 'DataBindingList',
        component: DataBindingList
    },
    {
        path:'/databindingvif',
        name: 'DataBindingVIf',
        component: DataBindingVIf
    },
    {
        path:'/databindingeventclick',
        name: 'DataBindingEventClick',
        component: DataBindingEventClick
    },
    {
        path:'/databindingeventchange',
        name: 'DataBindingEventChange',
        component: DataBindingEventChange
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router