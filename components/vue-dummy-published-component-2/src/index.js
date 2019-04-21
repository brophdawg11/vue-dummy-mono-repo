import DummyComponent2 from './DummyComponent2.vue';

function install(Vue) {
    if (install.installed) {
        return;
    }
    install.installed = true;
    Vue.component('DummyComponent2', DummyComponent2);
}

const plugin = {
    install,
};

let GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
}

if (GlobalVue) {
    GlobalVue.use(plugin);
}

DummyComponent2.install = install;

export default DummyComponent2;
