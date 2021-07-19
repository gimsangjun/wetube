### NodeJs , npm , package.json

- NodeJs는 브라우저 밖에서 돌아가는 자바스크립트이다.
- 그래서 node index.js 를 치면 js파일을 실행시킬수 있다.
- [react](https://velog.io/@jini_eun/React-React.js%EB%9E%80-%EA%B0%84%EB%8B%A8-%EC%A0%95%EB%A6%AC)란? 프론트엔드 라이브러리
- [express](https://velog.io/@madpotato1713/JAVASCRIPT-express%EB%9E%80)란? nodejs를 사용하여 서버를 개발하고자 하는 개발자들을 위하여 서버를 쉽게 구성할수 있게 만든 프레임워크이다.

- npm: 여러사람들이 패키지를 만들어주는데 우리는 패키지를 가져다가 쓸수있다. 개발을 쉽게 만들어주니까, 그래서 npm을 사용하면 다른 누군가가 만들어 놓은 패키지를 쉽게 쓸수 있다.
- json: 프로그래머가 파일에 정보를 저장하기 위해 만든 방식 중 하나. 그냥 텍스트 파일일뿐이다.
- "scripts" 란? 내가 실행하고싶은것을 말함. 그래서 node index.js를 하는것을 npm이 하도록 만들 수있음(npm run ~~). 나중에는 서버를 시작하는 script, css를 압축하는 script, 웹사이틀 빌드하고 서버에 배포하는 script등등. 요점은 내가 만든 script를 터미널에서 쓸수 있다는 것이다.
- 처음 시작할때 npm init

### npmjs package express, package.json

- [npm](https://www.npmjs.com/) i express
- express 폴더의 pakcage.json파일을 보면 <u>dependencies가</u> 있는데 express가 작동되려면 필요한 패키지들을 말한다. 그래서 express다운로드받을때 자동으로 다운로드 된다.
- 체인처럼 패키지들이 서로를 필요로 한다. 그래서 자동으로 연결된다.
- npm이 똑똑해서 dependencies에 있는 모듈들을 자동으로 설치해준다. npm i만 해도
- 이래서 package.json이라는 파일이 중요하다. 프로젝트를 동작시킬때 필요한 모듈들이 어떤건지 정보를 담고 있기 때문이다.
- node_modules를 깃허브에 올릴필요가 없다. 이래서 중요한듯. 그래서 친구가 프로젝트를 열어서 npm i만 해주면 되는것이다.
- devDependencies에 추가되는 모듈들도 있는데 이것은 개발자에게 필요한 dependencies를 말하는 것이다. --save-dev 옵션을 주면 dev~에 추가된다.

### package-lock.json

- 나의 패키지들을 안전하게 관리해준다. 그래서 다른사람들도 npm i 만 하면 정확히 나랑 똑같은 버전을 다운로드 받게 된다. npm이 똑똑해서 다 관리 해준다.

### Babel

- nodeJS가 이해하지 못하는 최신코드를 [babel](https://babeljs.io/setup#installation)이 컴파일해줄것이다.
- touch babel.config.json , touch라는 명령어는 파일을 만들어 주는 명령어이다.
- "presets": ["@babel/preset-env"] 은 최신 자바스크립트를 쓸수 있는 플러그인이다.
- 최종적으로 babel-node를 설치하면 babel로 js파일을 최신문법으로 실행시킬수 있다.
  babel-node index.js
- [nodemon](https://shlee0882.tistory.com/231)은 우리가 만든 파일이 수정되는걸 감시해주며,알아서 재실행시켜주는 기능을 갖고있다. 그래서 npm run dev라는것을 계속 해줄 필요는 없음. [정식링크](https://www.npmjs.com/package/nodemon)

### server,callback

- 서버는 항상 켜져 있고, 인터넷에 연결돼있는 컴퓨터라고 할수 있다.
- request를 보내면 항상 답해준다.
- 서버는 listening중이고 너를 기다리고 있다.-> 서버가 사람들이 뭔가를 요청할 때까지 기다리게 해야한다.

```js
app.listen(PORT, handleListening); //서버가 만들어졌고, 서버에게 어떤 port를 listening할지 얘기해줘야한다.
```

- 뒤에 함수는 callback함수라고 하는데 시작할때 작동하는 함수라고 한다. 나중에 좀더 알아봐야할듯.

### request에 respond하는방법을 알아볼것이다.

- localhost:4000 를 웹페이즈에서 실행해보면 "Cannot GET /"이라는것이 뜬다.
- / 서버의 root, 혹은 첫 페이지를 의미한다. google.com === google.com/
- GET은 HTTP method이다, HTTP란? 우리가 서버와 소통하는방법, 서버가 서로 소통하는 방식이다. 그래서 주소에 접속하면 브라우저가 대신해서 http request를 만들어준다.
  즉 웹사이트에 접속하고 서버에 정보를 보내는 방법이다. get this page(페이지를 갖다줘)와 같은 의미이다. 웹사이트에 접속하려할때, 너가 직접 접속하는게 아니라, 너네 홈페이지를 가져다줘 라는 의미. 브라우저가 가져다 주는것이다.

```js
app.get("/", () => console.log("Somebody is trying to go home.")); //누가 root페이지에 요청을 보낸다면, 이 callback함수를 실행할것이다.
// 브라우저가 get requests를 보내고 있는 것이다. 하지만 이런식으로는 response를 하지 않기 때문에 계속 로딩중일것이다.

const handleHome = (req, res) => {
  console.log(req);
  return res.end(); // request를 보내면 return으로 response를 해줘야 하고, 이 메서드는 response를 끝내겠다는 것이다.
  return res.send("i still love you"); // 이렇게도 할수 있다. 이러면 브라우저가 글씨가 나온다.
};
// eventlistener에 브라우저가 공짜로 event라는 argument에 넣어주는것처럼, route handler에는 두개의 object가 있다.(request,response)
// 즉 home으로 get request가 오면, express는 handleHome에다가 두개의 object를 넣어주는 것이다.
// request object를 살펴보면 쿠키나 method같은 정보를 얻을수 있었다.
```

- [document](https://expressjs.com/ko/api.html#express) 메소드들에 대한 설명이 있따.
- 어떤 사이트에 접속할때마다 get request 생성하고, 이 get request에 응답하는 서버가 있어야 한다.
- [Route](https://dog-paw.tistory.com/entry/7-MEAN-%EC%8A%A4%ED%83%9D-Express-Route-%EC%A0%95%EC%9D%98) [Route](https://stylishc.tistory.com/120)
