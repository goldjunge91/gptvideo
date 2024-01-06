//export default {
//    testMatch: ["**/src/app/**/*.test.[jt]s?(x)"],
//    preset: 'ts-jest',
//    testEnvironment: 'node',
//};
//module.exports = {
//    testMatch: ["**/src/app/**/*.test.[jt]s?(x)"],
//    preset: 'ts-jest',
//    testEnvironment: 'node',
//  };
module.exports = {
    testMatch: ["**/src/app/**/*.test.[jt]s?(x)"],
    preset: 'ts-jest',
    testEnvironment: 'node',
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.jest.json'
        }
    }
};