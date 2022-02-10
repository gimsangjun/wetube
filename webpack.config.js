// 구식 js코드밖에 못쓴다.
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const BASE_JS = "./src/client/js/";

module.exports = {
    // entry -> 소스코드 내가 바꾸고싶은 코드
    entry: {  //여기에 있는 코드들이 ES6문법으로 적혀있기때문에 babel-loader로 변환하는것이다.
    main: BASE_JS + "main.js", // videoPlayer.js코드가 특정 URL에서만 보이게 하고싶다.
    videoPlayer: BASE_JS + "videoPlayer.js",
    recorder: BASE_JS + "recorder.js",
    commentSection: BASE_JS + "commentSection.js",
    },
    plugins: [ //css파일을 분리해주는 녀석.
    new MiniCssExtractPlugin({
        filename: "css/styles.css",
        }),
    ],
    output: {
        filename: "js/[name].js", //파일 이름은 이렇게 해주면 폴더가 생기면서 파일이 생성된다. css파일과 분리를 하기위해서.
        path: path.resolve(__dirname, "assets"), //작업이 끝난후에 여기에 저장해줘.
        clean: true, //output folder를 build를 하기전에 clean해준다.
    },
    module: {
        rules: [
            { //특정 종류의 파일들에게 변형을 적용시키는 법 
                test: /\.js$/, //모든 자바스크립트 파일을 몇가지 변환시키고싶다.
                use: { //babel-loader라는 loader로 가공하겠다.
                    loader: "babel-loader", //bael-loader를 사용하기 위해서는 npm i -D babel-loader
                    options: {
                        presets: [["@babel/preset-env", { targets: "defaults" }]],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"], // 역순으로부터 전개된다.
            },
        ],
    }
};