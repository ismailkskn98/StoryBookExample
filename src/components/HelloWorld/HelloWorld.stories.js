import HelloWorld from './index.vue';

export default {
    title: 'Example/HelloWorld',
    component: HelloWorld,
};
export const titleFontSize = {
    render: (args) => ({
        components: { HelloWorld },
        setup() {
            return { args };
        },
        template: '<HelloWorld :="args" />',
    }),
    args: {
        msg: "İsmail",
    },
};