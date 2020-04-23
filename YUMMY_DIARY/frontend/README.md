This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

실행 가능한 스크립트 명령어

### `npm start`

개발자 모드로 실행한다<br />
브라우저에서 다음 주소로 접속할 수 있다.(겹치는 포트 사용시 자동으로 다음 포트로 할당된다) [http://localhost:3000](http://localhost:3000).

수정할 때마다 다시 로드해서 변경사항을 확인할 수 있다.<br />
콘솔에서 에러 사항을 볼 수 있다.

### `npm run build`

배포를 위해 `build` 폴더를 생성한다.<br />


파일 최적화가 진행되고 파일명이 해시되어 저장된다.<br />

## Used Library

사용한 라이브러리

### `react-router-dom`

각 컴포넌트를 주소를 이용해 이동할 수 있게 해준다.<br />

> npm install react-router-dom

### `@material-ui`

다양한 UI를 포함한 라이브러리로 쉽게 화면을 구성할 수 있게 해준다. <br />


> npm install @material-ui/core<br />
> npm install @material-ui/icons <br />
> npm install @material-ui/labs <br />

### `axios`

통신 기능 제공<br/>

> npm install axios<br/>

### `react-slick`

리액트용 Carousel component 제공<br />

> npm install react-slick<br />

별도의 css를 사용하기 위해 index.html 에 아래 내용을 삽입해야함<br />

> ```html
> <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
> 
> <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
> ```

### `react-beautiful-dnd`

drag and drop 컴포넌트와 컨텍스트 제공<br/>

> npm install react-bueatiful-dnd<br />

### `use-position`

현재위치를 가지고 올 수 있는 html5 제공 기능을 리액트에서 사용하기 쉬운 hooks 형태로 제공<br/>

> npm install use-position<br/>



