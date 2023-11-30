import Switcher from './index.vue'

export default {
    title: 'Example/Switchers',
    component: Switcher,
};

export const SwitcherBtn = {
    render: (args) => ({
        components: { Switcher },
        setup() {
            return { args };
        },
        template: '<Switcher :="args" />'
    }),
    args: {
        activeText: "Aktif text",
        passiveText: "Passive text"
    }
}