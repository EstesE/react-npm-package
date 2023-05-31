// module.exports = {
//     //   stories: ['./*.stories.js'],
//     stories: ['./**/*.stories.@(js|jsx|ts|tsx)'],
//     // stories: ['./Component.stories.js'],
//     framework: {
//         name: '@storybook/react-webpack5',
//         options: {}
//     },
//     docs: {
//         autodocs: true
//     }
// };


const config = {
    stories: ['./**/*.stories.@(js|jsx)'],
    addons: [],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    features: {
        interactionsDebugger: true,
    },
    docs: {
        autodocs: true,
    },
    staticDirs: ["../public"],
}

export default config;