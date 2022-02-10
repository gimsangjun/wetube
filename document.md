### NodeJs , npm , package.json

- NodeJs는 브라우저 밖에서 돌아가는 자바스크립트이다. nodeJS는 브라우저가 아닌곳에서 JS를 실행시켜주는 엔진이다.
- 그래서 node index.js 를 치면 js파일을 실행시킬수 있다.
- [NodeJS는 벡엔드인가요 프론트엔드인가요](https://okky.kr/article/546877)
  > NodeJS는 자바스크립트를 브라우저 외의 환경에서 구동할 수 있게 해주는 엔진입니다.
  > NodeJS 환경에 express 등의 프레임워크를 구동하면 서버가 될 수 있고
  > NodeJS 환경으로 React를 제작하면 프론트엔드가 됩니다
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

- 나의 패키지들을 안전하게 관리해준다. 그래서 다른사람들도 npm i 만 하면 정확히 나랑 똑같은 버전을 다운로드 받게 된다.(나의 package.json파일을 가지고있는 상태여야한다.) npm이 똑똑해서 다 관리 해준다.

### Babel

- nodeJS가 이해하지 못하는 최신코드를 [babel](https://babeljs.io/setup#installation)node가 컴파일해줄것이다. 검색키워드 babel install 맨위 게시물.
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

- 서버가 내 컴퓨터 전체를 listen할수는 없다. 이미 많은 프로그램들이 port들을 통해서 소통하고있다. 4000번을 쓰는게 백앤드에서는 관례이다. 나중에는 이 port가 이미쓰고있다고 에러가 생길수도 있다.
- 뒤에있는 함수가 [callback](https://dalkomit.tistory.com/65)함수라고 하는지는 모르겠는데(이 함수는 listening이 시작되면 호출되는 함수이다.),
  무엇인가 일을 다른 객체에게 시키고, 그일이 끝나는것을 기다리는게 아니라, 나를 다시 부를때까지 내할일 하고있는것..., 비동기 방식이라고한다. -> 뒤에더 자세하게 설명한거있음

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
  // 이러한것들을 한줄로 쓰면 return을 생략해도된다.
};
// eventlistener에 브라우저가 공짜로 event라는 argument에 넣어주는것처럼, route handler에는 두개의 object가 있다.(request,response)
// 즉 home으로 get request가 오면, express는 handleHome에다가 두개의 object를 넣어주는 것이다.
// request object를 살펴보면 쿠키나 method같은 정보를 얻을수 있었다.
```

- [document](https://expressjs.com/ko/api.html#express) 메소드들에 대한 설명이 있다. 여기에 있는게 전부이다.
- 어떤 사이트에 접속할때마다 get request 생성하고, 이 get request에 응답하는 서버가 있어야 한다.
- [Route](https://dog-paw.tistory.com/entry/7-MEAN-%EC%8A%A4%ED%83%9D-Express-Route-%EC%A0%95%EC%9D%98)route는 그냥 url이라고 보면될듯하다. 경로! [Route](https://stylishc.tistory.com/120) - router는 handler로 URL을 정돈하는 것이다.

### middleware ~=== controller , next()

```js
const gossipMiddleware = (req, res, next) => {
  console.log("I`m in the miiddle!");
  console.log(`Someone is going to ${req.url}`);
  next(); //express next()를 보고 다음함수인 handleHome을 호출할것이다.
  // 그래서 이런식으로 보면 handleHome은 final ware가 되는것이다.
  // 모든 controller가 middleware가 될수있다는 사실을 알고 있으셈.
  // middleware는 request에 응답하는것이 아닌 지속시켜주는것이다.
};

const handleHome = (req, res) => {
  return res.send("I love middlewares");
};
// next는 다음 함수를 실행시켜준다.

app.get("/", gossipMiddleware, handleHome); // 이런식으로 연결되어있어야 next()를 했을때 다음함수로 이동한다.
```

- [expressjs.com](https://expressjs.com/ko/guide/using-middleware.html)
- 중간에 있는 소프트웨어를 의미한다. 브라우저가 뭔가를 request를 하면 서버가 response를 해준다. 이 사이에 middleware가 있는 것이다. 모든 handler가 middleware이다.
- handler라는 말대신 controller라는 말을 이제부터 쓸것이다. controller에는 사실
  req,res 두개말고 인자가 하나 더있다. 그게바로 다음함수를 가르키는 next이다.
- 함수를 controller라고 생각해도될듯하다.
- next()를 사용해야 middleware라고한다. 없으면 middleware라고할수없다. 연결이 끊어지기 때문이다. controller와 middleware가 거의 같은 의미로 쓰인다.
- 마지막 controoler에는 next를 관습적으로 쓰지 않는다.

### app.use()

- 어떤 url에도 작동하는 middleware를 만들수 있게 해준다.
- 즉, 모든 route에서 이 함수를 사용 하는 것이다.
- app.get()보다 높은위치에 둬야 모든 route에서 작동을 한다.
- 순서가 중요하다. 시각화 하는 방법은 연결이 위에서부터 차례대로 온다고 생각하자.

### middleware morgan

- [morgan](https://www.npmjs.com/package/morgan) nodejs용 request logger middleware이다.
- morgan함수를 호출하면, 내가 설정한대로 middleware를 return해준다. 함수를 리턴해주는것이다.!(다섯가지옵션이 있다. 소스코드들도 볼수있는데 한번보면 좋을듯. 문서도.)
- app.use(~~) callback함수이기때문에, renderg해준뒤에 실행된다.

### router란?

- 내가 작업중인 주제를 기반으로 URL을 그룹화 해준다.

```js

//글로벌 라우터
/ -> Home
/join -> Join
/login -> Login
/search -> Search
// 논리상으로는 user/login인데 예외상황으로 URL을 깔끔하게하고, 짧게한다.
// 결론은 URL을 깔끔하게하기위해 예외상황을 둘수있다.
//유저 라우터
/users/edit -> Edit user
/users/delete -> Delete user
//비디오 라우터
/videos/watch -> Watch Video
/videos/edit -> Edit Video
/videos/delete -> Delete Video
/videos/comments -> Comment on a video
/videos/comments/delete -> Delete A Comment of a Video

/delete-users -> /users/delete //이런식으로 바꾸어 관리를 쉽게 할수있다. 코드가 한곳에 너무모여있으면 복잡하니까
/users //를만들고 그뒤에 URL을 추가해주는것이다.
```

- [routing](http://expressjs.com/en/starter/basic-routing.html) :특정 엔드포인트(특정경로에 == URL)에 애플리케이션이 응답하는 방식을 결정하는것을 말함.
- express에서 제공하는 (express.router)[https://expressjs.com/ko/guide/routing.html]를 이용하면 모듈로써 쉽게 관리할수있다. url이 어떻게 시작하는지에 따라 나누는 방법이다.(공통 시작부분으로 그룹화)
- url을 그룹으로 정리하지 않으면 힘들어지니까.

```js
//server.js
app.use(logger);
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);
// Router들은 따로 파일을 만들어서 모듈화 해주었다.
```

- /videos로 경로로오면 videoRouter로 일단 들어간뒤, 거기서다시(videoRouter.js파일에서,하나씩 쪼개서 모둘화 해줬으니까) /watch, /edit을 찾아 이동한다.

### controller == function

- router파일안에는 router파일만 있어야하기때문에 controller(function)폴더를 또 따로 만들어 줄것이다.
- 나중에는 데이터베이스등 여러가지를 넣어야하기 때문에 분리하는게 좋다.
- router는 결국 controller(function)을 사용하는 입장이다.
- 결국, 생각해보니 router라는 개념이 나온것도 모두 한파일에 놔두기에는 너무 복잡해지니 세세하게 나눈듯 하다.
- 링크(주소)로 이동하면 그 주소의 컨트롤러(함수)가 실행된다는 것을 알고있어야한다.

### export import

- 내 프로젝트의 파일들은 모두다 독립적이기때문에 export을 해야만 공유할수 있다.

```js
//globalRouter.js
globalRouter.get("/", handleHome);

export default globalRouter;
// default의 뜻은 다른 파일에서 import를 할때
// import aijewfi from "./routers/globalRouter"; 이런식으로 이름을 마음대로할수있다. 하지만 헷갈릴수있기때문에 대부분 똑같게 한다.
```

- export default: 위처럼 default를 하면 하나밖에 export를 하지못한다. 여러개를 할려면? [Link](https://ko.javascript.info/import-export) 대부분 여러개를 export한다.
- export default 인경우에는 import할때 이름을 마음대로 할수 있지만, export를 여러개를 해야할경우 정확히 그 이름으로 설정해주어야한다.
- (DB부분에 적어놓은거 가져옴. )import export를 보면서 다음에 내가 다른 언어를 보면 이렇게할수있을까 라는 생각이들었다 -> 계속고민해봣는데 너무 어렵게 생각한듯하다. 모두그냥 한 파일에 적을수 있는데, 그러면 너무 어지러우니까 따로따로 쪼개서 하는거고 그것을 단지 연결만 시켜줬을뿐이라고 생각하기로 했다.

### import와 require의 차이점

- [Link](https://www.delftstack.com/ko/howto/javascript/javascript-import-vs-require/) : require()는 CommonJS를 사용하는 node.js문이지만, import()는 ES6에서만 사용, 하지만 import는 babel-node를 이용해서 ES6문법을 사용할수 있는듯.

### Plannig Routes

- 어떤기능이 필요한가에 따라서 미리 계획을 세워줘야됌. README.md파일에 미리 정리하면서 니꼬는 함.(커맨드키 + 클릭 하면 링크로 파일이 새로열린다. import부분 링크+ 함수도 정의되어 있는데로 이동한다.)

### URL Parameters

- URL에 변수를 포함시키게해준다. 모든 동영상마다 router를 추가해줄수는 없기때문에

```js
videoRouter.get("/:id/edit", edit);
// id이듯 potato이듯 상관없다. :가 필요하다.
// express한테 변수라는것을 알려주려면 :가 필요하다.
//constroller에서
console.log(req.params); // 또는 console.log(req.params.id);
// 이런식으로하면 express가 받아들이다는 것을 알수 있다.
// 라우터에서 :id의 위치가 중요하다. 맨위에 있으면 무엇을하든 무조건 변수로 받아들이기때문이다.
```

- [expressjs](http://expressjs.com/en/guide/routing.html) -> 정규식으로도 선택할수있다.
- 여기서 :id를 해주면 변수로 쓸수있다.(피라미터라고 한다.-> req.params할때 그 값을 의미한다.)
- 이렇게 표시하는건 express한테 이게 변수라는걸 알려주길 원해서이다.

### 정규식(regular expression)

- [regular expression](https://chrisjune-13837.medium.com/%EC%A0%95%EA%B7%9C%EC%8B%9D-%ED%8A%9C%ED%86%A0%EB%A6%AC%EC%96%BC-%EC%98%88%EC%A0%9C%EB%A5%BC-%ED%86%B5%ED%95%9C-cheatsheet-%EB%B2%88%EC%97%AD-61c3099cdca8) [expressjs](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions): 문자열로부터 특정 정보를 추출해내는 방법이다.모든 프로그래밍언어에 존재한다. 특정조건을 만족하는 string을 담을수 있는 container같은 느낌이다.
- 정규표현식으로 연습할수 있는 곳 [Link](https://regexr.com/)
- [stackoverflow](https://stackoverflow.com/questions/15228901/express-js-filter-a-number-and-a-string-in-the-url/15229495) 검색키워드 express url only number
- [stackoverflow](https://stackoverflow.com/questions/34095126/express-router-id) 검색키워드 express /:id
- express문서에서 /:id 에 대한 내용을 찾아보니 [Link](http://expressjs.com/ko/api.html#req) 여기있었음. 이 내용은 express에만 해당되는것인가?

```js
videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);
```

- id라는것을 그대로 둔 이유: 이름을 얻기위해서
- \의 의미, 이것은 단순한 문자가 아니라는것을 알려주기위해서

### Express template

- controller(function)에서 html을 return하는방법이다.
- [Pug](https://www.zerocho.com/category/NodeJS/post/578c64621e3613150037d3b3) (구 Jade) - 가장 유요한 템플릿중 하나. 공식 [npm](npmjs.com/package/pug) 여기서 보는게 좋은듯 간단한 문법(Syntax)도 볼수있어서.
- express에게 이제부터 사용할 뷰 엔진은 pug라고 말을 해주어야한다.
- [expressjs](https://expressjs.com/ko/4x/api.html#app)에서 Application Settings( app.set() )을 보면 property에 view engine이라고 있다.
- 1단계 pug 설치(npm i pug) <br>
  2단계 pug를 뷰 엔진으로 설정(app.set("view engine", "pug")) <br>
  3단계 실제로 pug파일을 생성한다.
- expressjs에서 문서를 보면 views에서 default로 process.cwd() + "/views" 라고 적혀있는데, cwd의 뜻은 current working directory이다. 즉, 현재 폴더에서 views에서 기본적으로 파일을 찾겠다는 것이다.
- 이제 pug파일을 렌더링해주어야하는데 하는 방법은, res.redner("파일이름")이다.
- 하지만 에러가 생길거임. 실제로 파일은 wetube/src/views에 있기때문에(wetube/views)에서 찾으니 안보이는거임.(에러를 꼼꼼히 읽어서 뭐가 문제인지 아는게 중요한듯.)
- 해결방법은 디폴트값을 수정해주는것임. app.set("views", process.cwd() + "/src/views");
- [렌더링](https://velog.io/@ru_bryunak/%EB%A0%8C%EB%8D%94%EB%A7%81%EC%9D%B4%EB%9E%80)이란? html파일을 받아 브라우저에 뿌려주는 과정.

### pug Interplation 보간법 Escape ,HTML Entity

```js
doctype html
html(lang="ko")
    head
        title Wetube
    body
        h1 Welcome to Wetube
        footer &copy; #{new Date().getFullYear()} Wetube
```

- 위에서 #{}이런식(h1=pageTitle 이렇게쓰면 variable로 인식한다. 하지만 중간에 다른 string을 끼워놓을수 없다.) 으로 중간에 Jscode 를 껴놓는것을 [보간법](https://pugjs.org/language/interpolation.html)이라고 한다. Pug 보간법[또 다른 링크](https://sodocumentation.net/pug/topic/9565/interpolation-with-pug)

-그리고 &copy등은 [HTML Entity](https://www.zerocho.com/category/HTML&DOM/post/587f50b1308ed50018a00d51)라고한다.(좋은사이트인거같다.) 특수문자를 표현하기위해 사용한다.

### pug partials

- 반복되는 부분을 파일로 쪼개서 쉽게 불러올수 있다.!
- [공식문서](https://pugjs.org/api/getting-started.html) [includes](https://pugjs.org/language/includes.html)를 눌러보면 다른파일을 포함시킬수있는 방법이 있다.(이런식으로 문서를 읽는 방법을 잘 배워야 할거 같다.)
- 첫번째 이것으로 알수 있는점은 깔끔한 html을 작성하도록 해준다는 것이다. <br>
  두번째 우리의 html에 자바스크립트를 포함시킬수 있다는 점.
  세번째 우리가 반복하지 하지않고 한번에 모든 템플릿을 업데이트할수 있다는 점이다.
- 프로그래머들은 반복되는것을 싫어하기 때문에(게으르기때문에) 더 반복되는것을 줄일수 있다. 아래에서 반복된다.

### pug Template Inheritance (상속)

- [상속](https://pugjs.org/language/inheritance.html)이 왜 쓰냐면은, 일종의 베이스 틀을 만들어 주기때문이다. 계속 베이스가 반복되기때문에 그것마저 줄여줄려고 상속이라는것을 쓰는것이다.
- 모든파일이 베이스부터 확장해 나가는것이다.
- 하지만 여기서 끝나는게 아니라 block이라는 개념도 알아야 한다. -> 무언가를 집어 넣을수 있는곳. 다른 pug파일이 채워놓을수 있는곳. 공식 문서를 보면 알수 있다.
- res.render("",{})는 2가지 인수를 받는데 하나는 view 이름이고 하나는 템플릿에 보낼 변수이다. express 문서를 보면 변수를 보낼수 있다고 나와있고, Interplation(보간법)와 활용해서 express에서 변수의 값을 넘길수 있다.(렌더링하는과정에서)

### pug conditionals,iteration

- doc에 너무 자세히 잘나와있어서 설명안해도 될듯.
- [conditionals](https://pugjs.org/language/conditionals.html) 조건문
- [iteration](https://pugjs.org/language/iteration.html) 반복
- [mixin](https://pugjs.org/language/mixins.html) 똑똑한 partial이다. 데이터를 받을 수 있는 일종의 미리 만들어진 HTML block이라 볼수 있다. [컴포넌트](https://mommoo.tistory.com/55)의 재사용을 위해서 만들어진듯. 유튜브를 보면 비디오에 댓글, 평점, 좋아요 등등이 하나의 컴포넌트라고 생각하고, 그것들을 일일히 copy paste하기에는 게으르니, 반복을 줄이기위해, 그리고 코드의 재사용을 하기위해서.

### MVP css

- HTML 태그에 몇가지 기본스타일을 입혀준다. [Link](https://andybrewer.github.io/mvp/)
- 너무 못생긴상태로 하면 좀 그러니까 뭐라도 입힌것이다. 그냥 임시방편정도.

### 텍스트와 variable을 섞는법

```js
a((href = "/video/" + video.id));
a((href = `/video/ + ${video.id}`));

const { id } = req.params;
const id = req.params.id; // ES6방식
```

- [req.parms](https://wooooooak.github.io/web/2018/11/10/req.params-vs-req.query/) 어떤것을 클릭했을때 어떤 objcet 클릭되어있는지 확인하는 용도로 사용할수 있을듯.

### ternary operator

- [Link](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) js에서 제공되는 연산자이다.

```js
h3 #{video.views} #{video.views === 1 ? "view" : "views" }
```

### 절대경로(absoulte url)와 상대경로(relative url)

-제일앞에 /가있으면 절대경로, 무조건 루트에서 시작. 없으면 상대경로 뒷부분만 바뀜 <br>
a(href="/edit")--->localhost:4000/edit <br>
a(href="edit")--->localhost:4000/videos/edit <br>
a(href=`${video.id}/edit`)--->localhost:4000/videos/1/edit

> watch.pug에서
> href="edit"의 상대 경로가 왜 videos/edit으로 가나요??
> 현재 경로가 videos/:id이므로 videos/:id/edit으로 가야하는거 아닌가요??
>
> > No, it does not add to the path, it changes the last path.

### POST와 GET

```js
block content
    h4 Change Titie of video
    form(method="POST")
        input(name="title" placeholder="Viedo Title" value=video.title,required)
        input(value="Save",type="submit")
```

- HTTP method
- GET 과 POST 는 HTTP 메서드로 클라이언트에서 서버로 무언가를 요청할 때 사용한다.
- get과 post의 차이 [Link](https://noahlogs.tistory.com/35) get을 통한 요청은 URL주소끝에 파라미터로 포함되어 전송. 이부분을 쿼리 스트링(query string)이라한다.
- [form태그](https://www.nextree.co.kr/p8428/) 기본적으로 method는 GET으로 되어있음.
  <br> GET은 데이터를 요청할경우 씀, 우리가 네이버검색하거나 유튜브검색할때 씀. URL끝에 붙어서 눈에보임. -> 보안에 취약
  <br> POST은 데이터를 처리할경우 씀.로그인할때나 유튜브 제목수정 등에 쓰임. 기본적으로 post를 보내는 주소는 자기주소와 같음. action으로 수정가능.
  <br> 즉 form태그의 method는 form과 back end사이의 정보전송에 관한 방식이다. 착각하지말아야 할것, post도 request를 받으면 response 해줘야한다는 것.

### POST를 받았을때 back end에서 처리하는 방법

```js
videoRouter.get("/:id(\\d+)/edit", getEdit);
videoRouter.post("/:id(\\d+)/edit", postEdit);
// 이런식으로 짧게 쓸수도 있다.
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);

// postEdit에서 id값은 어디서 가져오는것이냐? videoRouter의 :id에서 가져오는것이다.
export const postEdit = (req, res) => {
  const { id } = req.params; // URL :id parameter를 의미한다.
  const { title } = req.body; // form안에있는 value의 javascript representation이다.
  console.log(req.body); // 어떤 것을 받았는지 확인하고싶은데 undefined이라고 뜸.
  //왜 express application은 form을 어떻게 다루는지 모른다.
  console.log(title);
  // 아래와같이는 안된다고했는데 되긴된다.
  // const video = videos[id - 1];
  // video.title = title;
  const video = videos[id - 1];
  return res.redirect(`/videos/${id}`);
};
```

- express application이 form을 어떻게 다룸? -> [doc](https://expressjs.com/ko/4x/api.html#express.urlencoded) express.urlencoded라는 게 form의 value을 이해하게 해준다.
- HTML post사용할때 유의할점. input에 name 설정을 해주지 않으면 데이터가 전송되지 않는다.
- redirect이 url로 연결.
- 계속 강의를 들으면서 느낀점은 문서를 보는게 중요하다는것이다. 뭔가 프로젝트를 하기전에 문서를 대략 읽어보는게 좋을거같고, 평소에도 보는게 좋을듯하다.
  > req.body는 get request 값은 받아올 수 없나요?
  > post request 로 전송된 값만 객체로 받아올 수 있는건가요?
  >
  > > req.body is only with POST :) <br>
  > > Not really, is just that only in POST we can send data. Not on GET

### DATABASE mongoDB,mongoose

- mongoDB: 일반적으로는 sql베이스인데 doucment-based이다. 프로그래머처럼 object로 생각한다. JSON-like-document -> packag.json처럼 저장
- 설치방법 mongoDB -> docs -> server -> installation -> [community edition](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
- 잘 설치됬는지 확인장법 mongod입력. mongo를 치면 mongo쉘에 입장가능.(node도 치면 똑같이 들어감.)
- [mongoose](https://mongoosejs.com/): node.js 와 mongoDB를 이어주는 다리(상호작용해주기위해 사용), 자바스크립트로 적으면 mongoose가 mongoDB에게 전해준다.
- object(data들)를 생성하면 자동으로 id를 부여해준다.
- test할때 데이터 지우는법 : db.\_collection_name.remove({})

```js
//db.js
import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/wetube", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); // 앞에있는것은 내 로컬호스트이다. mongo를칠때 보면 얻을수있다. 뒤에 wetube는 이제부터 여기에 연결하겠다는 의미이다(아직 생성은 안되었다.). 뒤에있는것은 옵션인데 경고를 해줘서 옵션을 추가해주었다.

const db = mongoose.connection;
const handleOpen = () => console.log("✅ Conected to DB");
const handleError = (error) => console.log("DB Error", error);
db.on("error", handleError); //여러번 발동가능
db.once("open", handleOpen); //한번만 발동
//server.js
import "./db"; //db파일을 임포스해줌으로써 내 서버가 mongo에 연결이 된다. 데이터베이스를 import해준게아니라 db설정파일?을 import해준것이다. import해준순간 자동적으로 실행된다.
```

- CRUD, create, read , upload ,delete

### models폴더 Video.js -> Video Model

- database가 알아야 할것은 데이터가 어떻게 생겼는가에 대한것. 구체적인 값이 아니라
- 그래서 우리가 설명을 해주어야됌. video라는 객체에 어떤 데이터들이 필요한지.
- 이러한 생김새를 schema라고 여기서 부른다. 스키마라는것은 붕어빵틀? 정도라도 생각하면될듯

```js
//Video.js
import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date,
  hashtags: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
});

const Video = mongoose.model("Video", videoSchema);
// 첫번째 인자는 해당 collection의 단수적 표현을 나타내는 문자열이다. 실제 collection의 이름은 videos로 자동변환되어 사용된다.
export default Video;

//server.js
import "./db"; //이 db에 연걸할게요
import "./models/Video"; // 붕어빵틀
```

- import export를 보면서 다음에 내가 다른 언어를 보면 이렇게할수있을까 라는 생각이들었다 -> 계속고민해봣는데 너무 어렵게 생각한듯하다. 모두그냥 한 파일에 적을수 있는데, 그러면 너무 어지러우니까 따로따로 쪼개서 하는거고 그것을 단지 연결만 시켜줬을뿐이라고 생각하기로 했다.
- moogoose의 링크들 [Link1](https://poiemaweb.com/mongoose) [Link2](https://dhddl.tistory.com/173)
- validation: number부분에 string을 넣으면 그부분이 포함되지않은채 만들어진다는것을 알수있다.(올바르지않은 데이터를 저장하고싶지않으니까) 어느정도 보호된가는것을 알수 있다.

<br>
### init.js -> import가 너무많아 기능별로 분리

```js
import "./db";
import "./models/Video";
```

- server.js에는 server와 관련된 express만
- 위와같은 형식의 import를 엄청많이하게될텐데 그러면 좀 복잡해지니 분리하겠다.

> server.js 에서
> const PORT = 4000;
> const handleListening = () =>
> console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`);
> app.listen(PORT, handleListening);
> 부분을 init.js 로 옮겼는데, 이 부분도 server 에 관련된 코드가 아닌가요?
> or
> app.listen(PORT, handleListening); 는 just 서버가 실행되고 있는지 확인만 하고 handleListening 함수를 callback 해주는 건가요?
> (그렇다면 서버를 열어주는 것은 const app = express(); 부분인가요?)
>
> > 답 .listen() is the code that opens the port to listen for connections.

<br>

### (db에서 나옴) callback과 promise

- database가 종료되거나, 바쁘거나 등등, database가 js가 존재하기때문
- <br>
  [비동기처리란?](https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/)
  특정 코드의 연산이 끝날 때까지 코드의 실행을 멈추지 않고 다음 코드를 먼저 실행하는 자바스크립트의 특성을 의미. 그래서 이 문제를 해결하기위해서 callback함수를 사용-> 오래된 방법임.
- [promise](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/) : 비동기 처리에 사용되는 객체 즉, 비동기 처리의 문제를 해결하기위해 사용되는 객체이다. 해결하기위해서!
- [async & await](https://joshua1988.github.io/web-development/javascript/js-async-await/)
  callback의 최신버전, 계속 기달려준다. 직관적이기때문에 javascript가 어디서 기다리는지 바로알수있음.(순서대로 위에서부터 아래로실행됌.)
- [Promise와 async/await 차이점](https://velog.io/@pilyeooong/Promise%EC%99%80-asyncawait-%EC%B0%A8%EC%9D%B4%EC%A0%90)
- [try catch문](https://skmagic.tistory.com/157) : error를 다루기위해 사용, try부분을 실행하다가 오류가 발생하면 error객체에 error가 저장됌. catch부분이 실행됌. 그냥 언어차원에서 제공하는것. 라이브러리가 아니라
  <br>

### 왜 callback함수에 error argument가 껴있느냐?

- [Stackoverflow](https://stackoverflow.com/questions/31375728/node-js-callback-function-error-parameter-explanation)
- [Link](http://thenodeway.io/posts/understanding-error-first-callbacks/) : 콜백의 첫번째 매개변수에 에러 객체를 사용.일종의 코딩약속 [Link](https://www.hanumoka.net/2018/11/02/javascript-20181102-javascript-error-first-callback-pattern/)

<br>

### hashtags -> split()

- "#hello,#hi,#lalala".split(",") -> array로 리턴해준다.
- 문자열을 배열로 변환 [split함수](https://hianna.tistory.com/377)
- "food,movies,music".split(",").map(word => `#${wrod}`) 이런식으로도 가능
- 모든 배열의 값에 function을 실행하는 [map함수](https://velog.io/@daybreak/Javascript-map%ED%95%A8%EC%88%98)

<br>

### 데이터베이스에 저장

- 두가지방법이 있음

```js
export const postUpload =  async (req, res) => {const { title, description, hashtags } = req.body;
// object를 만들어 준후 저장
  const video = new Video({
  ...
  });
  await video.save(); // 데이터베이스는 자바스크립트 밖에있어서 이런식으로 처리해주어야한다.
  return res.redirect("/");
};
// create를 써서 그 과정을 생략하게 해줌
await Video.create({
    title,
    description,
    createdAt: Date.now(),
    hashtags: hashtags.split(",").map((word) => `#${word}`),
    meta: {
      views: 0,
      rating: 0,
    },
  });

```

- [save(),create()](https://mongoosejs.com/docs/documents.html) documnet.save() ,model.create()
- model과 document의 차이, 내가 생각하기론 model은 빵틀이고, documnet는 빵이다.
- 그런다음 moogo shell 에가서 show dbs를 하면 wetube라는 카테로기에 생긴것을 알수있다.(저장되었다는 의미임).
- show dbs -> use wetube -> show collections(doc의 묶음) -> db.videos.find() --->help치면 명령어들 나옴
- 데이터베이스 초기화방법-> 아예 삭제시키는법
  > How to reset DB
  > on cmd(console), enter mongo ,use dbName; , db.dropDatabase();

<br>

### Video.js

```js
//Video.js
const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});
```

- [스키마옵션들](https://mongoosejs.com/docs/schematypes.html) + maxlength를 설정할때 upload.pug파일(사용자를 위한)과 Video.js파일 둘다 설정을 해주어야한다. pug파일은왜 하냐면 그냥 html태그를 삭제 시켜서 제한을 풀어버릴수있기때문이다.
- required : 꼭 필요하다. date.now에서 괄호가 없는경우, ()가 있으면 바로실행되기때문에 불렀을 때 실행시키게 하기위해서.
- default값을 지정하면 따로 doc를 만들때 내가 값을 넣지 않아도 자동으로 디폴트값으로 지정해준다. 이런식으로 default값을 지정하면, 코드를 좀더 줄여나갈수있다.

<br>

### exec()

```js
export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id).exec();
  return res.render("watch", { pageTitle: `Watching`, video });
};
```

- exec() : promise를 리턴해주는것인데 async % await 를 쓰고있어서 신경안써도된다.

<br>

### 내가 찾는 video가 없을 경우

```js
// videoController.js
export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    // 먼저 에러를 처리해준다. 404.pug를 만들어 처리해줌. db에서 오류가 나는게 아니라 그냥 없어서 그런거기때문에 try catch문을 사용하는게 아닌듯.
    return res.renser("404", { pagetitle: "Video no found." });
  }
  return res.render("watch", { pageTitle: video.title, video });
};
```

<br>

### .join() startWith()

```js
// edit.pug
// 수정을 할건데 수정할칸에 value를 지정해주고 싶다.(원래 원본값을 넣어놓고싶다.)
// 그런데 video.jastags출력해보면 배열이기때문에 배열형태로 나오는데 그배열을 형태를 바꿔주기 위해 join()사용한다.
input(
  (placeholder = "Hashtags, separated by comma."),
  required,
  (type = "text"),
  (name = "hashtags"),
  (value = video.hashtags.join())
);

/// videoController.js
video.hashtags = hashtags
  .split(",")
  .map((word) => (word.startsWith("#") ? word : `#${word}`));
await video.save();
```

- [join()](https://www.codingfactory.net/10450) : 배열의 원소를 연결하여 하나의 값으로 만들기
- [startWith("#")](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith) : 어떤 문자열이 특정 문자로 시작하는지 확인하여 결과를 true 혹은 false로 반환합니다.

<br>

### moonse, Video.exists(), Video.findByIdAndUpdate()

```js
// exists() 객체를 불러오지않고, 그 데이터가 존재하는지만 확인하여 true false를 리턴.
const video = await Video.findById(id);
const video = await Video.exists({ _id: id });
// findByIdAndUpdate() 찾은과 동시에 업데이트를 해준다.
await Video.findByIdAndUpdate(id, {
  title,
  description,
  hashtags: hashtags
    .split(",")
    .map((word) => (word.startsWith("#") ? word : `#${word}`)),
});
```

- 공식문서에서 메서드들의 기능들을 보면서 어떻게해야 내 코드에 잘 쓸수있는지 잘 살펴보는게 중요한듯.
- video와 Video는 차이가있다. video은 데이터를 담은 객체이고, Video는 모델이다.

<br>

### monose Middleware

- express Middleware처럼 중간에 그냥 어떤것을 하기위해 넣는것이다. 여라가지방면으로 쓰일수있다.
- 위의 hashtags를 보면 string으로 넘어온것을 array로 바꿔주기위해 저렇게 하고있는데 저것을 없애기 위해서 Middleware를 사용한다.

```js
//Video.js
videoSchema.pre("save", async function () {
  this.hashtags = this.hashtags[0]
    .split(",")
    .map((word) => (word.startsWith("#") ? word : `#${word}`));
});
```

- [공식문서](https://mongoosejs.com/docs/middleware.html)

### static function

- [공식문서](https://mongoosejs.com/docs/guide.html)
- 위에 처럼 미들웨어를 사용해서 처리를 할수도있지만, Video.create처럼 내가 직접 함수를 만들어서 쓸수도 있다. model에 함수를 추가하는것이다.

<br>

### search 부분 만들기 - req.body와 req.query

- GET 과 POST 는 HTTP 메서드로 클라이언트에서 서버로 무언가를 요청할 때 사용한다.
- post와 get의차이 [Link](https://noahlogs.tistory.com/35) GET을 통한 요청은 URL 주소 끝에 파라미터로 포함되어 전송되며, 이 부분을 쿼리 스트링 (query string) 이라고 부른다.
  (이 게시물 잘확인해봐야할듯 기초에 대해 많이있는듯? HTTP에 대해서 많이 공부해봐야할듯.)
- get을 통해서 search를 만든다.
- req.body는 post로 보내면 body에 내용이 실린다.
- req.query는 URL에 실린 데이터를 가져오겠다.

<br>

### search 부분 만들기 - regular Expreesion을 이용한 구현

- regular expression을 이용해 내 쿼리에 옵션을 추가할수 있다. mongoose가 아니라 mongodb가 해주는 것이다.
- 검색키워드 : mongoose find regular expreesion [stackoverflow](https://stackoverflow.com/questions/9824010/mongoose-js-find-user-by-username-like-value) [Link](https://lunker91.tistory.com/entry/Mongoose-regex-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)
- 검색키워드 : mongoose regular expression 생성자, Regular expression 생성자는 js에서 제공하는 기능이다. [Link](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- js에서 $ 의미 : [Link](https://eotkd4791.github.io/javascript/JavaScript15/) document.getElementById() 의 줄임말로쓰인다.

```js
// 여기서 왜 @regex를 했을까?
videos = await Video.find({
  title: {
    $regex: new RegExp(keword, "i"),
  },
});
// 그냥 바로이렇게하면되는데
videos = await Video.find({
      title: new RegExp(keyword, "i"),
    }),

// find의 공식문서를 보니, parameter에 mongodb selector라고 하는데 추측해본것으로, mongodb에서 쓰는 방식을 그대로 쓸수 있다는 뜻인거 같다. 그래서 추측하건데, js와 mongodb를 섞어서 쓴거같다.
// 여기서 깨달은점은 공식문서를 꼼꼼히 읽는게 중요한거같다.(parameter 등등.)
title: {
        $regex: keyword, $options: "i"
  }

```

- $regex를 왜 해준것일까? 그냥 생략해도될텐데, 무슨 의미인지 찾기 힘들다. ->[Link](https://docs.mongodb.com/manual/reference/operator/query/regex/#examples) mongodb에서 쓰이는 것을 그대로 가져온듯하다.
  <br>

* 검색키워드 : mongodb 단어만 포함되도 [Link](https://whitenode.tistory.com/entry/mongodb%EC%97%90%EC%84%9C-%EB%AC%B8%EC%9E%90%EC%97%B4-%EA%B2%80%EC%83%89-%EC%BF%BC%EB%A6%AC)

- [Model.find()](https://mongoosejs.com/docs/api/model.html#model_Model.find)를 보면
  filter 부분의 예시를 보면 $gte: 18 이런게 있는데 이게 뭐지하고 검색 -> [mongodb 쿼리옵션](https://fors.tistory.com/403) 이라는 것을 알수있다. -> 아 필터부분에 mongodb처럼 써도 되구나 라는것을 알수있다. -> 그러면 mongodb에 필터부분에 있는 다른것들을 써도되겟구나. 이런식으로 정리하면서 해야할듯.

```js
// 그래서 mongodb에 있는 or이라는 옵션도 써보앗다.
const exists = await User.exists({ $or: [{ username }, { email }] });
```

- 쿼리 논리연산자 비교연산자 [Link](https://www.zerocho.com/category/MongoDB/post/57a17d114105f0a03bc55f74) 검색키워드 : mongodb 두개중 하나만 -> 나중에는 논리연산자 비교연산자 같은 단어를 써야할듯 싶다.
- 무엇인가 정규표현식에 대한 이해가 살짝 떨어진다 내일 다시 검색해봐야겟다. 문자열처리하는데, 그 조건에 해당되면 무조건 그 값 전체를 리턴?하는느낌.

<br>

### password를 DB에 저장할때, 암호화해야한다. 해싱(hashing)

- 그냥 저장하면 안된다.
- 해싱(hashing) : 일방향함수라 절대 되돌릴수 없다. 입력을 하면 출력값이 나오는데 출력값을 가지고 입력값을 알수가 없다. -> 이런걸 컴퓨터과학에서 deterministic function(결정적 함수)라고 한다. 항상 똑같이 나오니까
- 해싱을 해주는 라이브러리 [bcrype](https://www.npmjs.com/package/bcrypt) , rainbow table에 의한 공격을 막아준다. 해싱뿐만아니라 compare도 해준다.
- 무엇인가 어떤필요한 기능을 해주는 라이브러리를 찾을때, js가 기반이아니라, 서버가 기반이어야하는듯? 무엇이 base이 인지 잘 알아야할거같다. nodejs에 이것저것 붙여서 쓰는거니까.

<br>

### status code (HTTP 중요개념)

- 계정생성을 테스트할때 post로 usrename과 password가 200으로 응답을한다면, 자동으로 브라우저에서 아이디를 저장한다. 하지만 나는 이메일이 겹쳐진상태이기때문에 계정이 생성이 안되는 상황이라서 저장하면안된다. 이부분을 처리해줄것이다.
- [HTTP status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
- 400 -> bad request
- 알맞은 상태코드를 보내는것은 중요하다. 웹사이트의 히스토리를 저장하는데, 200(정상)이 뜨면 무조건 히스토리에 저장하기때문이다. 브라우저에게 상황을 알려줘야한다.
- [stackoverflow](https://stackoverflow.com/questions/6959017/tell-web-browser-that-login-failed-so-it-doesnt-ask-to-remember-the-password) 나랑똑같은 문제를 겪고있다.

<br>

### 쿠키 cookie , session

- [쿠키와 세션](https://interconnection.tistory.com/74) 둘다 id값을 가지고있는것인데, 정보를 가지고있는 주체가 서버인가 클라이언트인가의 차이이다. 브라우저를 구별하기 위한 id이다. 쿠키를 사용해서 어떤 브라우저를 위한 session id인지 알수잇다. ex)로그인 계속유지

- [express-session](https://ocsusu.tistory.com/55) +[Link](https://velopert.com/406):
  express-session 은 Express 프레임워크에서 세션을 관리하기 위해 필요한 미들웨어, 알아서 세션을 만들어준다. (express session npm 사이트의 note를 살펴보면 좋을듯.)
- 세션에다가 정보를 담을수 있다는 사실이 중요., 세션이 오브젝트 형식으로 저장되서, req.session.potato += 1; 이런식으로 가능하다.
- 따로 아직 처리를 안해줘서, 서버를껏다키면 다 사라진다. -> 나중에 기억할수있게 DB에 저장할것이다.
- Session store : 우리가 session을 저장하는곳이다. req.sessionStore, sessionstore에 모든 세션이 저장됌.

<br>

### 세션을 다른페이지에도 전달하기 - Logged In User part Two(로그인된 유저)

- console.log(res) -> locals를 비어있는 object를 발견할수있다. 이것을 가지고 templates와 data를 공유할수있다. global이라서 다른 템플릿에서도 쓸수있다.(locals object는 이미 모든 pug template에 import된 object이다.) -> res.render로 넘겨주지않아도된다.
- pug파일이 locals object에 그냥접근할수있다.(locals은 자동적으로 views로 import된다.)) -> 이것을 가지고 logged기능을 구현!
- [locals](https://darrengwon.tistory.com/487)

<br>

### session에 대한 궁금점, 왜 req.session인가 + res.locals

```js
// 이모든게 새로고침한번할때마다 위에서 아래까지 코드를 흙고간다고 생각해야됌.
// 브라우저랑 서버랑 따로 생각해야됌.
// server.js
app.use(
  // 먼저 세션id를 할당, 있으면 그대로 진행. 세션이기때문에 데이터는 서버에서관리함. 브라우저에 저장되지않음. sessionstore에 모든 세션(서버)이 저장됌.
  session({
    secret: "Hello!",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(localsMiddleware);
app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

//userController.js  postEdit
// 세션 user를 보내야하는데 왜  request에 저장하는걸까? 답은 아래에 적어놓음.
export const postLogin = async (req, res) => {
  ....
  //session id에 해당하는 데이터가 저장되는거임. 세션마다 다르다는 사실이 중요.
req.session.loogedIn = true;
req.session.user = user;
return res.redirect("/"); //홈으로 이동한순간 또 새로고침이 되는거임(코드는 위에서부터 아래로읽음)
}

// middlewares.js
export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "Wetube";
  res.locals.loggedInuser = req.session.user;
  next(); // 이 함수만 실행하게 아니기때문이고 뒤에도 app.use가 있기때문이다.
};
```

- session은 서버에서 관리하기때문에, 새로고침하여도 사라지지않는다.(따로 db에 처리안해주면 서버가 꺼지면 사라진다. 메모리에 임시저장되어있기때문에) 세션id만 동일하다면 그 세션을 다시 사용할수있다. -> 저장을 위해 req.session을 사용한다.(req.sessionstore에 모두저장되어있다.)
- res는 딱 뭔가 데이터를 보낼때만 사용한다.
- 템플렛에서도 데이터를 쓸수있게 res.locals이용한다. [res.locals 활용하여 전역에서 사용 가능한 변수 만들기](https://darrengwon.tistory.com/487)

<br>

### connect-mongo

- session을 db에 저장하기위함.
- [express-session](https://www.npmjs.com/package/express-session)의 warining을 살펴보면 session strorage는 MemoryStore, is purposely not designed for a production environment.(그냥임시적으로 메모리스토어에 저장.)
- [Compatible Session Stores](https://www.npmjs.com/package/express-session#compatible-session-stores)을 보면 connect-mongo가 있는걸을 볼수있음.

<br>

### 모든 방문자의 session을 DB에 저장한다면..

- 로그인하지않은 모든 방문자(+ 봇)를 DB에 저장하는것은 좋지 않은 생각이다. 로그인한 사용자만 저장하도록 하자.

```js
app.use(
  session({
    secret: "Hello!",
    resave: false,
    saveUninitialized: false, // 새로운 세션이 있는데, 수정된 적이 없을 때.
    // 이설정이 무엇을 하는거냐면, 세션을 수정할때만 세션을 DB에 저장(userController에서 수정함.)하고 쿠키를 넘긴다.
    store: MongoStore.create({ mongoUrl: "mongodb://127.0.0.1:27017/wetube" }),
  })
);
```

<br>

### cookie property Expiration and Secrets

- [expires and max-age](https://ko.javascript.info/cookie) : 유효일자와 만료기간.
- Secrets : DBURL이나, API key, cookie_secret같은것은 공개되지 않기때문에 따로 파일을 만들어줘서 관리한다. 관습적으로 변수명은 대문자로 사용한다. .gitignore에 추가해줘서 업로드 되지않게한다. [Link](https://sistinafibel.github.io/2019/07/18/Node-%ED%99%98%EA%B2%BD%EB%B3%80%EC%88%98%EB%A5%BC-%EA%B4%80%EB%A6%AC%ED%95%98%EB%8A%94-.env%ED%8C%8C%EC%9D%BC-%EB%A7%8C%EB%93%A4%EA%B8%B0.html)
- [dotenv](https://www.npmjs.com/package/dotenv) 을 활용해서 환경변수를 관리 할것이다.
  가장먼저 해줘야한다. require방식으로 사용하면 사용하는 모든파일마다 require을 붙여줘야한다. import를 하면 그렇게 안해도된다.[Link](https://www.daleseo.com/js-dotenv/)
- 왜 import할때 import "dotenv/config"; 일까? config라는 파일이 있음 찾아보니까. 그래서인듯.

<br>

### github로 로그인 구현하기

- [Link](https://tldud2404.tistory.com/41) 우리가 할려는 일련의 과정들이 정말 알기쉽게 정리되어있다.
- [문서](https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps)
- github.com/settings/apps을 들어간다. OAuth Apps를 눌러준다.
- 흐름을 보면, github로그인창으로 이동 로그인 -> 코드값을 내가지정한 URL로 보내줌(코드값 요청 GET) -> 코드값을 가지고 github에 다시보냄(POST) 엑세스토큰으로 바꿈. -> access_token으로 Github API를 사용해 user의 정보를 가져올거임.

```js
a(href="https://github.com/login/oauth/authorize?client_id=9fac726866be2ff14f36&allow_signup=false") Continue with Github &rarr;
// 이렇게 긴것을 줄이기위해서 이런식으로 만든다.
a(href="/users/github/start") Continue with Github &rarr;
// 저 URL로 가면 startGithubLogin function이 실행되고 redirect해준다. 이런식으로 할수있을지 몰랐다.

//userController.js
export const startGithubLogin = (req, res) => {
  const baseUrl = "https://github.com/login/oauth/authorize";
  const config = {
    client_id: "710e3bf684d455e2a0df",
    allow_signup: false,
    scope: "read:user user:email",
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseurl}?${params}`;
  return res.redirect(finalUrl);
};

```

- GET으로 요청을 보낼때 ? & 이런 것을 쓴다.
- scope parameter는 이런정보를 원한다라는것을 알려주는 parameter이다.
- [URL과 URLSearchParams](https://www.zerocho.com/category/HTML&DOM/post/5b3ae84fb3dabd001b53b9ab) : URL의 구성요소와 Seacr부분을 다루는 URLSearchParams(브라우저 차원에서 제공)

```js
export const finishGithubLogin = async (req, res) => {
  // 유저가 승인하면 /github/finish?code=xxxx 라는 덧붙여진 내용을 받을거임
  // 이게 code는 유저가 승인했다고알려주는거임. 이 코드를 가지고 엑세스토큰요청.
  const baseUrl = "https://github.com/login/oauth/access_token";
  const config = {
    client_id: process.env.GH_CLIENT,
    client_secret: process.env.GH_SECRET,
    code: req.query.code,
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;
  //엑세서토큰 요청후 .json() 변환. 엑세스 토큰 : github API와 상호작용할때 쓸거임.
  const data = await fetch(finalUrl, {
    method: "POST",
    headers: {
      Accept: "application/json", //json형식으로 데이터를 받기위함. 공식문서를 보니 Accept header에 저런식으로 하면된다고함.
    },
  });
  const json = await data.json(); // 바로 사용을 못해서 변환시켜줘야한다.
  console.log(json);
  res.send(JSON.stringify(json)); // 프론트엔드에서 보기위해.
};
```

- fetch란? [Link1](https://itkjspo56.tistory.com/115) then : 이 요청 끝나면 이것좀 해주라. [Link2](https://ljtaek2.tistory.com/130) 서버로 요청을 보내고 응답을 받을수있도록함. API를 사용할때 자주쓰는듯.
- fetch가 필요한데 fetch는 브라우저에만 존재하고, 서버엔 없어서 따로 설치해줘야한다.->
  [node-fetch](https://www.npmjs.com/package/node-fetch) -> 자바스크립트와 Nodejs가 다른 플랫폼이라는 것을 알수있음.
- [.json()](<https://wooooooak.github.io/javascript/2018/11/25/fetch&json()/>) : // 바로 사용을 못해서 변환시켜줘야한다.
- [req.query와 req.parmas](https://wooooooak.github.io/web/2018/11/10/req.params-vs-req.query/)

<br>

### Oauth와 REST API

- [Oauth](https://showerbugs.github.io/2017-11-16/OAuth-%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C) 다른플랫폼으로 로그인할수있게 만들어 주는 산업 표준 프로토콜, [문서](https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps)
- [REST API](https://gmlwjd9405.github.io/2018/09/21/rest-and-restful.html) 컴퓨터 프로그램간 서로 정보를 교환할수있게. [문서](https://docs.github.com/en/rest/reference/users)
- [Oauth](https://tldud2404.tistory.com/41) 뭔가 친절하게 설명이 되어있다.
- client secrets 내가 Oatuh app을 사용할 때 쓰는 비밀번호 같은것.
- Github Login part Five : 두개의 관계를 생각해본다면, Oauth를 이용하면 로그인할려는 사용자의 access token을 얻을수 있고, 그 토큰을 가지고 REST API를 이용해서 email를 받아오는것인가? -> "친절하게 설명되어있다" 곳에 링크를 클릭해보아라.

```js
// userController.js , finishGithubLogin
// private안 경우 보이지 않아서 email데이터 REST API이용해서 요청
const emailData = await (
  await fetch(`${apiUrl}/user/emails`, {
    headers: {
      Authorization: `token ${access_token}`,
    },
  })
).json();
// emaildata중 primary true것과 verified과 true인 것을 요청
const email = emailData.find(
  (email) => email.primary === true && email.verified === true
);
if (!email) {
  return res.redirect("/login");
}
```

<br>

### Logout 구현

```js
//   /users/logout 주소로 이동하면, 유저라우터에서 로그아웃인 라우터로 이동하고 컨트롤러인 logout를 실행한다.

//링크(주소)로 이동하면 그 주소의 컨트롤러(함수)가 실행된다는 것을 알고있어야한다.

//userController.js
export const logout = (req, res) => {
  req.session.destroy();
  return res.redirect("/");
};
```

- session을 없애버려야한다.

<br>

### Edit profile의 문제점

- loggedInUser에 접근하려는데 로그인되어있지않으면 생기는 에러
- 로그인돼 있지 않은사람들은 접근할수 없게 만들어야함 (/users/edit) -> redirect해줘야함. 몇몇 route를 보호해주는 middle을 만들어야함.

```js
//middlewares.js
export const protectorMiddleware = (req, res, next) => {
  if (req.session.loggedIn) {
    return next();
  } else {
    return res.redirect("/login");
  }
};
//userRouter.js
userRouter.route("/edit").all(protectorMiddleware).get(getEdit).post(postEdit);
```

### req에서 가져온 변수 새로운 변수에 넣기.

```js
const {
  session: {
    user: { _id, username: sessionUsername, email: sessionEmail },
  },
  body: { name, email, username, location },
} = req;
```

- 원본을 왼쪽으로 두고, 새로 할당하는것을 오른 쪽에 둬야하는듯.

<br>

### views가 점점 많아지면서 분류하기위해서..

- views/usersd 폴더를 만들어줬음. extends ../base 이런식으로 해줘야함. 폴더를 들어갔기때문에.

<br>

### 파일업로드하기 multer.js

- express.js에서 파일 업로드를 처리하기 위한 미들웨어인 [multer](https://www.npmjs.com/package/multer) -> req.file에 접근가능하게 만들어서 넘겨줌.

```js
//edit-profile.pug
form(method="POST", enctype="multipart/form-data") // enctype 우리 form이 다르게 encode될거란 의미. encoding type
        label(for="avatar") Avatar
        input(type="file", id="avatar", name="avatar", accept="image/*")

//userControoler.js , postEdit() , 이러한 문법도 있다.
avatarUrl: file ? file.path : avatarUrl, // 업로드한 파일이 있으면, file.path를 지정해주고, 아니면 기존에 로그인되어있는데 avatarUrl을 지정해준다.

// edit-profile.pug , 맨앞에 /을 붙여준이유 앞붙여주면 상대경로가되서 절대경로로 만들기위해.
img(src="/" + loggedInUser.avatarUrl, width="100", height="100")
// 이렇게 에러가 생기는데, 왜냐하면 localhost:4000/uploades/avtarUrl 이 없기때문이다.  Url에 있는 모든것들이 router에 있어야하는게 없어서 그렇다. 이미지를 요청하는것도 url로 하는거라 그런가보다.

//middlewares.js , 파일업로드를 위한 미들웨어. 각각 아바타폴더와 비디오폴더에 넣을려고.
export const videoUpload = multer({
  dest: "uploads/videos/",
  limits: {
    fileSize: 10000000,
  },
});

// videoRouter.js
videoRouter
  .route("/upload")
  .all(protectorMiddleware)
  .get(getUpload)
  .post(videoUpload.single("video"), postUpload); //videoUpload는 mideeware.js에 있는 미들웨어이다. path가 아니라 middleware이다. +  multer에게 파일을 여기에 저장하겠다고 알려주는것이다. 그리고 postUpload에게 파일에 대한 정보를 넘겨주고, express.js의 app.post의 인자를 보면 app.post(path, callback [, callback ...])인데ㅡ router처리를 해줬음으로, path이 사라지고 나머지부분은 다 callback함수이다. + 그리고 "multer"가 "req.file"을 제공해준다.

```

- [label태그란]? label은 폼의 양식에 이름 붙이는 태그, id값이 같으면 연결됌. [label 태그는 양식 입력 창의 요소들을 위한 캡션](https://neul-carpediem.tistory.com/266)
- [<input> 태그의 accept 속성](http://tcpschool.com/html-tag-attrs/input-accept) : <input> 태그의 accept 속성은 서버로 업로드할 수 있는 파일의 타입을 명시
- [enctype이 뭐야?](https://kasterra.github.io/what-is-multipart-form-data/)
- 주의할점 : DB에는 업로드할 파일의 위치만 저장하는것이고 실제파일은 내 컴퓨터에 저장하는것이다. 절대 DB에 파일저장을 하지않는다. DB는 그런용도로 쓰는게아니다. 파일은 아마존의 하드드라이브 같은데에 원본을 저장하면된다.
- Express에게 만약 누군가 /uploads로 가려고 핟나면, uploads폴더의 내용을 보여주라.

<br>

### static, 이미지를 요청하면 처리해줌.

- 검색키워드 express image serve [Link](https://expressjs.com/ko/starter/static-files.html)
- [정적(static) 파일 서비스 하기](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=pjok1122&logNo=221545195520)
- Express한테 사람들이 이 폴더 안에 있는 파일들을 볼수있게 해달라고 요청

```js
//serever.js
app.use("/uploads", express.static("uploads"));
// uploads경로에 요청하면, uploads폴더에있는것을 준다.
```

<br>

### html video

```js
//watch.pug
video((src = "/" + video.fileUrl), controls);
```

- [Link](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Video) controls속성을 주면 소리 조절(volume), 동영상 탐색(seek), 일시 정지(pause)/재시작(resume)을 할 수 있는 컨트롤러를 제공합니다.

<br>

### user와 video를 연결하기

- video에게는 owenr의 \_id를 , user에게는 video의 \_id를(object id)
- [mongoose populate](https://mongoosejs.com/docs/populate.html)

```js
//Video.js
owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
```

- [검색키워드 mongoose type obecjectid](https://mongoosejs.com/docs/schematypes.html#objectids) : mongoose.Schema.Types.ObjectId에 대하여
- [mongoose populate](https://velog.io/@ehgks0000/populate) 한 스키마의 데이터를 다른 스키마의 id같은것으로 지정을 한다면, ref와 populate를 통해 find를 할때 자동으로 mongoose가 다른 스키마에서 찾은 object데이터를 그대로(원본그대로) 넣어준다. populate를 하지 않으면 object자체를 주지 않는다.

```js
const video = await Video.findById(id);
const owner = await User.findById(video.owner);
//윗부분을 줄이기 위해서 아래와 같은 기능을 만든 듯. 뭐가 중복된다싶으면 검색을해서 줄여야할듯.

const video = await Video.findById(id).populate("owner");
// 이렇게하면 video에서 owner부분에 스키마 상으로는 id만 들어가지만, find로 return해준 데이터는 id뿐만아니라 전체가 다 들어간다.
```

<br>

### mongoose document와 model의 차이

- [Link](https://mongoosejs.com/docs/documents.html) : model은 document의 subclass이다

```js
const MyModel = mongoose.model("Test", new Schema({ name: String }));
const doc = new MyModel();

doc instanceof MyModel; // true
doc instanceof mongoose.Model; // true
doc instanceof mongoose.Document; // true
```

### 데이터베이스(db) 지울일이 있을때

```js
mongo
use wetube
db.users.remove({})
db.videos.remove({})
db.sessions.remove({})
```

<br>
<br>
<br>
<br>
<br>
<br>

### front-end, webpack , Sass

- [공식](https://webpack.js.org/concepts/#entry)
- [webpack](https://velog.io/@yon3115/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%ED%95%84%EC%88%98-Webpack%EC%9D%B4%EB%9E%80) : 모든파일을 모아서 압축 변형시켜준다.일일히 따로 보내면 데이터적인 비용이 많이들기때문. 그과정에서 우리가 작성한 코드들을 모든 브라우저가 이해할수 있는 코드로 뱉어내준다.(그래서 ES6문법인 코드를 로더해주는 babel-loader를 쓴다.)
- 대부분 webpack을 잘 안 쓴다. 이미 포함되어 있는 툴을 쓴다. 대부분 리엑트 같은것들은 이미 내장되어있어서 직접 사용할 일은 거의 없다. 그래도 업계표준이라 알아두면 좋다.
- webpack cli를 이용해서 콘솔에서 webpack을 사용할수있음.
- webpack.config.js 파일을 줘야됌. webpack이 읽을(이 파일을 전환시켜달라고 하는거임.)
- babel-loader : [webpack](https://jeonghwan-kim.github.io/js/2017/05/15/webpack.html)에 쓰이는 loader. ES6 문법을 ES5문법으로
- client폴더는 우리가 코딩할 폴더이고, assets 폴더는 브라우저가 접근해서 볼 폴더임.
  우리가 webpack을 실행하면(npm run assets) assets폴더에 웹팩으로 처리가 된 하나의 파일이 만들어진다.(쪼갤수도 있다.)
- assets폴더에 웹팩으로 처리된 프론트엔드의 js,scss파일등이 있음.
- assets폴더가 있는지 express는 모르기때문에 알려줘야됌. -> css파일을 요구한다. (base.pug에서 요청하는것을 볼수있음.)
- [Multiple Entry Points](https://webpack.js.org/concepts/output/#multiple-entry-points) 내가 쪼갠 js파일마다 assets폴더에 각각 쪼개진 상태로 넣기. 검색키워드 : express webpack output filename differently
- 프론트엔드에 js파일을 추가할때마다(client/js/) webpack에도 알려줘야됌. 그래랴 인식함.

```js
app.use("/static", express.static("assets")); // 앞에있는 인자는 그냥 접근하기위한 것이고, 실제 폴더명은 다를수있다.
```

<br>

# 중요한 질문, 리액트와 pug의 차일이 무엇이냐?

- 리액트와 pug의 차이는? [Link](https://www.inflearn.com/questions/72824) 좋은글이다.
- webpack이 잘 이해가 가지않는다. 파일을 변형시켜서 통합시키는거라면, 이미만들어놓은 pug파일들은 어떻게 해야하나? 여기서는 프론트엔드(css만 처리할거기때문에 상관이없나?)
  -> [서버/클라이언트 템플릿엔진](https://imgzon.tistory.com/97)의 차이이다. +[Link](https://cceeun.tistory.com/163) +[Link](https://insight-bgh.tistory.com/252)

### SassyCSS

- 보통 Sassycss를 가져다가 css로 변환시킨다. css를 조금더 세련되게 작성하는 코드인듯
- [짧은설명](https://yunzema.tistory.com/269) [공홈](https://sass-lang.com/guide) : 이 문법을 쓸려면 또 로더가 필요하다.
- 첫번째 loader(sass-loader)는 sass를 가져다가 일반 css로 변형. 두번째(css-loader)는 폰트같은것을 불러올때 css에 굉장히 유용하게 쓰일 loader. 마지막(style-loader), 변환한 css를 웹사이트에 적용시킬 loader이다.(webpack.config.js) [Link](https://webpack.js.org/loaders/sass-loader/) 로더는 마지막에서부터 실행되기때문에 순서가 거꾸로이다.

### MiniCssExtractPlugin

- [플러그인](https://joshua1988.github.io/webpack-guide/concepts/plugin.html#plugin)이란? 플러그인(plugin)은 웹팩의 기본적인 동작에 추가적인 기능을 제공하는 속성
- [MiniCssExtractPlugin](https://github.com/webpack-contrib/mini-css-extract-plugin)은 css파일을 분리해주는 녀석이다.
- 파일을 분리시켜주기위해서기떄문에 main.js파일도 분리시켜줘야한다. 그 방법은 webpack.config.js파일을 보면된다.
- style-loader이라는 loader를 사용하면, javascript코드가 css파일을 읽는데,
  우리는 css파일 따로, js파일 따로 웹팩으로 번들화 시키고싶다. 한번에 할 경우 js 로딩을 기다려야하기 때문이다. 그래서 MiniCssExcractPlugin.loader를 사용한다.

### nodemon.json

- 프론트엔드쪽 파일을 고칠때마다 nodemon이 재시작되는 경우가 생김. 그래서 nodemon.json파일을 이용해서 ignore할거임.

```js
//package.json파일
"scripts": {
  "dev": "nodemon --exec babel-node src/init.js",
  "assets": "webpack --config webpack.config.js"
},

// 이런식으로 바꿀수있다. webpack은 기본적으로 webpack.configuraiton.js파일을 기본적으로찾고, nodemon.json파일을 찾는다.
"scripts": {
  "dev:server": "nodemon",
  "dev:assets": "webpack"
},
```

<br>

## scss부분 보면서 느낀점

- 두가지규칙 첫번쨰 home, join, login, search같은 template을 만들었다면 screen폴더에 screen파일을 만드는것이다. 두번째 mixin이나 partial파일을 만들었다면, componenets 폴더에 파일을 만들어야한다는것이다.
- screens안에는 home이랑 search같은걸 넣을것이다. URL이라고 보면된다.
- component는 header나 footer같은 것이다.(즉 공유되는 것들을 넣는것이다.) 파일을 직접봐보면된다.
- 유튜브를 클론할것이기떄문에 유튜브 색깔(색깔코드)을 그대로 가져올수있는 도구가있다.
- reset.scss[https://meyerweb.com/eric/tools/css/reset/] : margin이나 이런것들을 모두 0으로 만들어준다.
- pug파일을 구조화시킬때(partial이나 mixin으로 생성) scss에도 같은이름의 파일(component폴더)들을 만들어놓는다.
- [font awesome](https://markettraders.kr/font-awesome/)을 사용하면 유튜브 아이콘등을 사용할수있다. 사용할떄는 pug의 문법을 보면서 어떻게 쓰는지 보면될듯.
- video배치는 grid를 활용했다. shared.scss와 video.scss,home.scss를 보면된다. 이런식으로 파일을 세세하게 나누는것을 잘보면 좋을듯 하다.
- css 문법 : [:not()](https://developer.mozilla.org/ko/docs/Web/CSS/:not)

  <br>

- 보면서 느낀점. 라우터랑 css와 만찬가지로 한가지에 파일에 모든 필요한 import를 처리하는게 파일보는게 깔끔하고 좋은듯.(js도 마찬가지인듯) 라우터(라우터파일에 기본적인 import다해놓음.)도 이제 느낀건데, import를 정리해놔서
  따로 다른파일마다 동일된 import를 해줄필요가 없었음(css도 마찬가지, styles.scss)
- css도 하나의 클래스처럼 css를 할수잇다는것을 알수잇음. 클래스안에 img, btn등등
- edit-profile.pug, forms.scss, edit-profile.scss을 보면 좋을듯. 각각의 구성요소마다 css를 어떻게 넣는지, 어떻게 파일을 나눴는지를 알수있음. base.pug에서 통합적으로 styles.scss(static정적파일 요청 개념은 위에)에 요청한다.(styles.scss는 모든 scss파일을 import을 한 상태이다.)
- 결론적으로 styles.scss는 모든 scss파일 import 그래서 base.pug에서 요청을 한번만 되게 해줌, server.js와 각각의 라우터들도 import를 한다.(라우터와 server.js에 에 대해 확실한 개념정리가 필요한듯.) 그래서 뭔가 파일을 보기쉽게 해주었다.

<br>

### video player만들기 , 여러다른파일들을 webpack으로 포함시키는 방법

- 지금 현재코드에 하나의 main.js가 있는데, video를 볼때만 videoplayer 코드가 로드가 되면 좋아서(홈화면에서는 비디오를 볼수가 없으니까 videoplayer코드(js)를 가져오면 안좋다. ), 파일을 쪼갤것이다.
- [Link](https://velog.io/@khw970421/Webpack-5%EC%9E%A5-output-%EC%97%AC%EB%9F%AC%ED%8C%8C%EC%9D%BC-%EB%B2%88%EB%93%A4%EB%A7%81)
- [공홈](https://webpack.js.org/concepts/output/) 검색키워드 webpack multi output

<br>

### videoPlayer만들기

- 공식문서에 [MediaElement](https://developer.mozilla.org/ko/docs/Web/API/HTMLMediaElement) 잘 나와있다.
- videoPlayer.js파일을 보면 거의 바닐라JS랑 똑같다.
- 무엇인가 백엔드쪽의 js랑 프론트쪽의 js랑 다르다. 프론트쪽은 이미 전달받은 html에서 버튼클릭같은것으로(이벤트들을) 이것저것 다루는것 같다. 백엔드쪽은 어떻게 생긴 html을 전달할것인가? 이런 개념정도. 한번 html넘겨주면 끝이다. 이정도?(프론트엔드 라이브러리를 쓰면 또 다름)
- 이렇게 비디오플레이어 만드는 과정은, 일단 필요한 버튼(기능)들을 만들고 -> 버튼이 작동하게 만들고 -> 예쁘게 css처리하는과정으로 한다.
- [event handler envet argumnet](https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers) + [이벤트에대하여](https://webclub.tistory.com/340)
- [js input range](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range) 이것을 보면 어떤 이벤트들을 다룰수 잇는지 볼수있다. 여기서는 change(마우스를 딱 놓을떄 발생) input(마우스 움직이는 대로 발생) 가있다.
- range, button, checkbox등등 각각의 요소마다 생기는 이벤트들이 다르다. [html 요소](https://heropy.blog/2019/05/26/html-elements/)
- 비디오의 메타 데이터 : metadata란? video빼고 다른 것(움직이는거 말고)을 말한다. 그래서 이 함수가 실행되야 비디오의 총 시간을 알수있다. [video의 전체 길이 가져오기](https://m.blog.naver.com/ivory82/220096880567) + [StackOverFlow](https://stackoverflow.com/questions/40763057/trying-to-get-full-video-duration-but-returning-as-nan/40763111)
  > JS에서 eventlistener을 추가하기 전에 video가 전부 로딩이 되어서, handleLoadedMetadata() 가 아예 불러지지 않을 수 있습니다.
  > 해결법은 videoPlayer.js 끝부분 쯤에 하단의 코드를 붙여넣는 것입니다.
  > if (video.readyState == 4) {
  > handleLoadedMetadata();
  > }
  > video.readyState가 4라는 뜻은 video가 충분히 불러와져서 사용이 가능하다는 뜻입니다. 자세한 정보는 https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/readyState 참고하세요.
- 이 현상에 대해서 간단하게 정리해서 블로그 글도 하나 올려 보았습니다. 참고 원하시는 분들은 참고하세요. [게시물](https://kasterra.github.io/inconsistent-event-firing-with-html5-video/)
- video 흘러가는 시간을 표현하기위해서 date() 포맷을 이용해 표현할거임. 왜? 따로 라이브러리를 import할 필요도 없고, 584초같은 길이의 동영상이 있을때 자동으로 분 초 로 쪼개주니까
- [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API) API형태로 제공한다고 한다.
- [setTimeout, clearTinmeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) video의 controls(버튼들)을 조작하기위해
- [font awesome 아이콘 사용법](https://uxgjs.tistory.com/186)
- [아이콘 숨기기 opacity](https://developer.mozilla.org/ko/docs/Web/CSS/opacity) 투명도를 나타낸다.
- [scss "&" 의미](https://99geo.tistory.com/5) 처음에는 css에 존재하는 문법인 줄 알았는데 scss에 존재하는거였음.
- video-player 를 보면서 어떻게 css활용하는지 보면좋을듯.

<br>

### 조회수기능과 api

- 백엔드가 템플릿까지 렌더링하고잇는데 이 방식을 바꿔볼거임.
- 즉, url이 바뀌지않고 조회수가 늘어나게.
- 우리가 만든 api에 요청을보낼거임. (videoPlayer.js의 handleEnded)
- [data attribute](https://velog.io/@yunsungyang-omc/HTML-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%86%8D%EC%84%B1-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-data-attribute) : 백엔드에서 렌더링 video id를 얻을려고, 여기서 알수있는점은 백엔드가 그냥 html그 자체만 렌더링해준다는 사실이다.
- [sendStatus와 status는 다르다.](https://expressjs.com/ko/api.html#res.sendStatus) status만 쓸경우에는 render를 해줘야 의미가있는데(render안해주면 계속 pending함), sendStatus는 그냥 상태코드만 보내고 연결을 끊는다. (videoController.js registerView)
- [fetch함수](https://www.daleseo.com/js-window-fetch/) 백엔드와 정보를 교환하기위해

<br>

### Recorder, recoder.js

- [API](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) 또 제공함. 그냥 preview처럼 미리보기만 제공하는거임 보여주기만하고 저장이안됌.
- 프론트엔드에서 async&await를 사용할려면 [regenerator-runtime](https://www.npmjs.com/package/regenerator-runtime)을 깔아야함.
- [srcObject](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject)
- 내가 혼자한다면 어떻게 알수있을까 -> [Link](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element) 여기서 단서를 얻어가면서 하는게아니면 힘들듯. 공식 API문서에서 가이드를 누르면 뜸.
- ondataavailable : 녹화를 시작하면 그 데이터를 어떻게 이용할지를 미리 정하는 듯. 녹화가 종료되면 발생되는 이벤트
- [removeEventListener](https://developer.mozilla.org/ko/docs/Web/API/EventTarget/removeEventListener)을 이런식으로 이용할수 있다.
- createObejectURL 그냥 파일을 가리키고 있는 URL이라고 생각하면편함(그 파일에 접근할수 있게). 브라우저메모리에서만 가능한 URL을 만들어준다. 브라우저상에 존재하고 브라우저에서만 파일에 접근할수 있다. 브라우저가 파일을 보여주는 방법임.
- 다운로드버튼을 만들어볼거임 사실 오른쪽클릭해서 하면되긴하는데 내가 직접 만들어서 사용자에게 제공할거임. a태그를 이용해서 할수있는 이유가 뭘까? video가 url형식으로 접근할수있어서 인듯. [stackoverflow](https://stackoverflow.com/questions/29900551/how-to-add-a-download-video-button-to-html5-player/29965788) 검색키워드 : html5 video create download button , [추가적인 링크](https://miaow-miaow.tistory.com/83)
- FFmpeg : webm파일을 mp4파일로 바꿀거임. 비디오에 관한 모든것을 할수있음.
  하지만 실행하며녀 백엔드에서 실행해야하는데 그건 비싸다.
- [WebAssembly](https://developer.mozilla.org/ko/docs/WebAssembly) : 실행비용이 큰 프로그램들을 브라우저에서 실행할수있다. c로 이루어진 ffmpeg를 실행시킬수 있다. 다른언어로 이루어진것을 js에서 실행. 보통은 백엔드에서만 사용이 가능했는데, 프론트엔드에서도 쓸수있어졌다.
- 이 두가지가 결합된 [ffmpeg.wasm](https://ffmpegwasm.netlify.app/#demo) 사용할것이다. 사용자의 컴퓨터를 가지고 할거임. 가상의 컴퓨터를 브라우저에서 실행하는 그런느낌. 물론 프론트엔드에서이다. 사실 많이 어렵다. 그냉 접해보는정도로 만족해야할듯.
- 에러가 너무많음
  > >

1. 다른분들은 되시는지 모르겠지만 최신버전으로 설치하니 전 400 에러 나네요.
   npm install @ffmpeg/ffmpepg@0.9.7 @ffmpeg/core@0.8.5
   로 설치하니 제대로 실행됩니다.

2. Uncaught ReferenceError: createFFmpegCore is not defined at HTMLScriptElement.eventHandler (getCreateFFmpegCore.js:101))

1️⃣ server.js
app.use("/convert", express.static("node_modules/@ffmpeg/core/dist"));
2️⃣ recorder.js
const ffmpeg = createFFmpeg({
corePath: "/convert/ffmpeg-core.js",
log: true,
});

3. Uncaught (in promise) ReferenceError: SharedArrayBuffer is not defined
   이건
   app.use((req, res, next) => {
   res.header("Cross-Origin-Embedder-Policy", "require-corp");
   res.header("Cross-Origin-Opener-Policy", "same-origin");
   next();
   });
   [링크](https://stackoverflow.com/questions/64962224/how-to-use-ffmpeg-wasm-in-firefox-without-getting-the-sharedarraybuffer) 나중에 더 많이 알게되면 다시보는게 좋을듯.
   <br>

누가또 정리해놈 4. 버전 달라서 에러났을때 ✅
-> 니코쌤 사용하시는 버전 설치
npm install @ffmpeg/core@0.8.5
npm install @ffmpeg/ffmpeg@0.9.7
recorder.js에
corePath: "https://unpkg.com/@ffmpeg/core@0.8.5/dist/ffmpeg-core.js" 붙여쓰기

sharedArrayBuffer 에러났을때 ✅
-> 질문해주신 분 이슈에서 니코쌤의 답변 참고해서 되었습니다
링크: https://nomadcoders.co/wetube/lectures/2776/issues/1707
📌니코쌤의 답변:
Add this before your routers.

app.use((req, res, next) => {
res.header("Cross-Origin-Embedder-Policy", "require-corp");
res.header("Cross-Origin-Opener-Policy", "same-origin");
next();
});

And add crossorigin to the github avatar in header.pug

img.header\_\_avatar(src=loggedInUser.avatarUrl,crossorigin)

니코쌤 짱 Nico teacher is the Best👍 화이팅합시당

- [HTTP 구조 및 핵심 요소](https://velog.io/@teddybearjung/HTTP-%EA%B5%AC%EC%A1%B0-%EB%B0%8F-%ED%95%B5%EC%8B%AC-%EC%9A%94%EC%86%8C)
  읽어보면 좋을듯.
- [Blob 블롭](https://m.blog.naver.com/magnking/220950061851)
- [buffer](https://lienkooky.tistory.com/93) 아직여기까지 이해가 잘안감.

<br>

### 썸네일

- 썸네일인 이미지파일과 비디오파일 2가지를 보내야됌. 이전에 express에서 파일을 처리하기위해 multer라는것을 썻는데, 그중에 fields라는것으로 구별할수있음. [multer](https://www.npmjs.com/package/multer) 주의할점은 req.files에 저장됌. req.file아니라.
- recorder.js에서 영상과 썸네일을 만들고 video.pug form에서 post를 한뒤 router에서 multer미들웨어를 거쳐서 videoController에서 postupload함수를 쓴다.

### flash message

- 사용자에게 message를 남길수있음. session에 근거.
- 템플릿에서 사용할수있게 , messages라는 locals를 사용하게 해준다.

```js

```

- 니꼬 해답. [Link](https://nomadcoders.co/wetube/lectures/2794/issues/1556)

<br>

# 댓글창 만들기. 중요한 내용이 많이나옴. 프론트엔드가 큰 object를 백엔드로 보낼떄

- 지금까지 프론트엔드(client)에서 백엔드로 보내는 방법을 배우지 못했음. 뭔가 바로 client까지 가지않고 pug와 라우터선에서 처리했다고 해야할까..
- 사실 fetch를 통해 url로 보낼수 있다. 클라이언트와 백엔드가 통신하는것의 중간역할이 api이다.
- req.params은 잘 작동하는데 req.body 출력하면 아무것도 없다. 서버가 이해할만한것을 보내지 않았기 때문이다.
- 프론트엔드가 백엔드에 데이터를 주는것은 [fetch](https://www.daleseo.com/js-window-fetch/)(fetch 사용법)인 듯.
- 데이터를 주고받을때 JSON으로 통일을 시켜줘야 서로가 읽고 보낼수있다.
- fetch request를 보내면(network에서 무엇을 보냈고, 받았는지 확인가능.) 쿠키를 포함해서 여러가지 정보를 보낸다. 그중에서 쿠키를 통해 어떤 세션(session)에서 보냈는지 확인이 가능하다.

```js
// req.params은 잘 작동하는데 req.body 출력하면 아무것도 없다. 서버가 이해할만한것을 보내지 않았기 때문이다. -> JSON으로 바꿔주지 않았기 때문이다.
const handleSubmit = (event) => {
  event.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value;
  const videoId = videoContainer.dataset.id;
  fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    body: {
      text,
    },
  });
};

// fetch부분을 이런식으로 바꿔주면 된다.
fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    body: {
      text,
    headers: {
      "Content-Type": "application/json", // express에게 이건 json이라고 알려주는것이다.
    },
    body: JSON.stringify({ text }),
  });

// server.js, json파일을 보냈으니 object로 바꿔줘는 미들웨어이다.
app.use(express.json());

```

- [javascript - Express 및 Fetch로 POST 요청 본문 가져 오기](https://www.python2.net/questions-1131541.htm), 강의에서는 body paser를 쓰지않았다.

> (BIG 중요 포인트) 요약:

1. [fetch](https://ljtaek2.tistory.com/130)로 백엔드에 요청을 보낼 때에
   method: "POST",
   headers: {},
   body: {},

URL과 더불어 이 세 가지를 덧붙여야 한다.

2. headers에는 이 요청의 세부 사항을 명시하며, body에는 실질적인 컨텐츠가 포함된다.

3. 따로 명시하지 않을 시에 모든 body의 컨텐츠는 Text File로서 전송되고 받아 인식된다.

4. 특히 body: { ... }, 이런 식으로 자바스크립트 오브젝트를 넘겨줄 시 외부에서 이 오브젝트는 [object Object]라는 의미 없는 문자열로 변환된다.

5. 오브젝트와 그 안의 세부 변수 목록들을 넘겨주고 싶을 시, JSON이라는 규약에 의거한 오브젝트 내의 모든 기록을 텍스트화하여 넘겨주어야 하는데, 이때 JSON.stringify({ ... }) 라는 편리한 자체 표준 함수를 사용하면 된다.

6. 덧붙여 headers 안에 "Content-Type": "application/json"이라는 명시를 해 주어 전송된 텍스트가 JSON파일임을 백엔드에 인식시켜 준다.

7. 백엔드에 (이를테면 express를 사용 중이라면) app.use(express.json()); 미들웨어를 추가해주어 자체 내에서 JSON.parse("..."); JSON파일을 다시 자바스크립트 오브젝트로 변환해주는 표준 함수로 요청 body 내의 컨텐츠를 디코딩하는 작업을 한다.

<br>

### req.flash error

```js userController.js
export const logout = (req, res) => {
  req.session.destroy(); //이렇게 했더니 sessions이 필요하닥 에러가 뜸.
  req.flash("info", "Bye Bye");
  return res.redirect("/");
};
```

- 자꾸 로그아웃하면 undefined에러가 뜨고 햇더니 req.flash() 을 지웠더니 에러가 싹다 사라짐 그냥 너무 헛수고한듯. 나중에 이문제에 대해 검색해봐야할듯.

### 느낀점

- 문서들을 처음보면 예제들이 잇는데 이게 무엇을 의미하는지 검색해보면서 정리하면 큰 도움이 될듯. 문서뿐만 아니라 남의 코드들도.
- 뭔가 코딩은 반복되는 부분을 줄이고,이거는 있을법한 건데하면 있고, 복잡해보이면 나누고 이게 중요한듯 하다.
- 뭔가 이해가 잘 안간다 싶으면 직접 해보는게 중요한거같다. 왜 이렇게 했지? 이렇게 하면 안되나?
- 문서를 읽을때 pameter에 어떤것이 들어가는지도 잘 보는게 중요할거같다. (mongoose find의 pameter에 mongodb selector를 쓸수잇는것처럼.) 즉 꼼꼼히 읽어보자.
- 무엇인가 어떤필요한 기능을 해주는 라이브러리를 찾을때, js가 기반이아니라, 서버가 기반이어야하는듯? 무엇이 base이 인지 잘 알아야할거같다. nodejs에 이것저것 붙여서 쓰는거니까.
- 기능별로 파일들을 어떤식으로 분리하고, import하는지를 잘 배워야 할거 같다.
- 오류가 있는지 판단할려면 서버상의 콘솔에서 오류가 있는지, 브라우저상에서 콘솔로그를 보고, 데이터가 잘 fetch되는지 확인할려면 browser에서 network를 보면 될 듯 하다.

### 프로그래머들에게 바이블인책 clean code 에서 니꼬가 배운것

- 일단은 코드를 작성하고 더러워도 상관없음.
- 코드를 작성한 시간만큼 코드를 정리를 하는데에 시간을 쓰는거임

### 사용한것들

- Server: nodejs, express, npm <-> npx란? + babel ,morgan, express-session , connect-mongo , dotenv , node-fetch , multer
- Template: pug
- DB: mongoDB, monsgoose
- xcode란?
- front-end , webpack, wepack-cli , babel-loader(webpack)+ css-loader + style-loder, mini-css-extract-plugin , font-awesome , regenerator-runtime , express-flash

### 어떠한것을 만들떄 어떤 스택,기술을 사용할것인지에대해 알아야할듯. 그럴려면 어떤 스택,기술등이 필요한지 정리해봐야할듯.클론코딩할때도 어떤 스택,기술이 사용되었는지 확인하는게 좋을듯. 프레임워크 공부방법도 알아보면좋을듯.

### 다른사람이 한것

- https://github.com/junghyuntaek/taektube/tree/master/src
