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

### Plannig Routes

- 어떤기능이 필요한가에 따라서 미리 계획을 세워줘야됌. README.md파일에 미리 정리하면서 니꼬는 함.(커맨드키 + 클릭 하면 링크로 파일이 새로열린다. import부분 링크+ 함수도 정의되어 있는데로 이동한다.)

### URL 에 변수를 포함시키게 해준다. URL Parameters

```js
videoRouter.get("/:id/edit", edit);
// id이듯 potato이듯 상관없다. :가 필요하다.
//constroller에서
console.log(req.params); // 또는 console.log(req.params.id);
// 이런식으로하면 express가 받아들이다는 것을 알수 있다.
// 라우터에서 :id의 위치가 중요하다. 맨위에 있으면 무엇을하든 무조건 변수로 받아들이기때문이다.
```

- [expressjs](http://expressjs.com/en/guide/routing.html) -> 정규식으로도 선택할수있다.
- 여기서 :id를 해주면 변수로 쓸수있다.(피라미터라고 한다.-> req.params할때 그 값을 의미한다.)
- 이렇게 표시하는건 express한테 이게 변수라는걸 알려주길 원해서이다.

### 정규식(regular expression)

- [regular expression](https://chrisjune-13837.medium.com/%EC%A0%95%EA%B7%9C%EC%8B%9D-%ED%8A%9C%ED%86%A0%EB%A6%AC%EC%96%BC-%EC%98%88%EC%A0%9C%EB%A5%BC-%ED%86%B5%ED%95%9C-cheatsheet-%EB%B2%88%EC%97%AD-61c3099cdca8) [expressjs](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions): 문자열로부터 특정 정보를 추출해내는 방법이다.모든 프로그래밍언어에 존재한다.
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

-제일앞에 /가있으면 절대경로, 무조건 루트에서 시작. <br>
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
- [form태그](https://www.nextree.co.kr/p8428/) 기본적으로 method는 GET으로 되어있음.
  <br> GET은 데이터를 요청할경우 씀, 우리가 네이버검색하거나 유튜브검색할때 씀. URL끝에 붙어서 눈에보임. -> 보안에 취약
  <br> POST은 데이터를 처리할경우 씀.로그인할때나 유튜브 제목수정 등에 쓰임.
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

### exec()

```js
export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id).exec();
  return res.render("watch", { pageTitle: `Watching`, video });
};
```

- exec() : promise를 리턴해주는것인데 async % await 를 쓰고있어서 신경안써도된다.

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

### monose Middleware

- express Middleware처럼 중간에 그냥 어떤것을 하기위해 넣는것이다.
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

### 느낀점

- 문서들을 처음보면 예제들이 잇는데 이게 무엇을 의미하는지 검색해보면서 정리하면 큰 도움이 될듯. 문서뿐만 아니라 남의 코드들도.
- 뭔가 코딩은 반복되는 부분을 줄이고,이거는 있을법한 건데하면 있고, 복잡해보이면 나누고 이게 중요한듯 하다.

### 프로그래머들에게 바이블인책 clean code 에서 니꼬가 배운것

- 일단은 코드를 작성하고 더러워도 상관없음.
- 코드를 작성한 시간만큼 코드를 정리를 하는데에 시간을 쓰는거임

### 사용한것들

- Server: nodejs, express, npm <-> npx란? + babel ,morgan
- Template: pug
- DB: mongoDB, monsgoose
- xcode란?

### 어떠한것을 만들떄 어떤 스택,기술을 사용할것인지에대해 알아야할듯. 그럴려면 어떤 스택,기술등이 필요한지 정리해봐야할듯.클론코딩할때도 어떤 스택,기술이 사용되었는지 확인하는게 좋을듯. 프레임워크 공부방법도 알아보면좋을듯.
