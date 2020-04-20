# SSAFY Bigdata project | A103

### 1. 팀원 역할

- 팀장: 박민식
- 백엔드: 김지희, 오동현
- 프론트엔드: 김한솔, 박민식, 윤도희
- GIT 관리 담당: 윤도희
- JIRA 관리 담당: 오동현



### 2. 프로젝트 개요

#### | 프로젝트 목표

협업 필터링 기법으로 구현한 추천 시스템의 결과물을 웹 서비스 형태로 만들어 제공한다. Django와 React를 활용하여 웹 서버와 클라이언트를 모두 구현하여 REST 방식으로 통신하도록 하고, 회원가입, 로그인, 리뷰 보기/작성 등 기본적인 웹 서비스 기능을 구현한다.

- Javascript, Node.js 학습
- REST(Representational State Transfer) 스타일 학습 및 적용
- Numpy, Scipy, Scikit-learn, Surprise 라이브러리 학습 및 적용
- Django 백엔드 학습 및 구축
- React 프론트엔드 학습 및 구축
- 유사도(Similarities) 학습 및 구현
- 협업 필터링(Collaborative Filtering) 알고리즘 학습 및 구현



#### | 맛집추천 서비스 시장조사

- 다이닝코드
- 네이버 플레이스
- SEE HOW YOU EAT



#### | 서비스 컨셉 및 개요

- 서비스명: YUMMY DIARY
- 서비스 컨셉: 맛집 추천 + 푸드 다이어리
- 서비스 로고:

![YUMMY DIARY](YUMMY DIARY.png)



### 3. ERD

![yummy_diary_ERD](yummy_diary_ERD.png)



### 4. Sequence Diagram

#### | 고객여정지도

```mermaid
sequenceDiagram
	participant main as 메인 페이지
	participant login as 회원가입/로그인 페이지
	participant search as 검색결과 페이지
	participant store as 가게상세/리뷰 페이지(모달)
	participant mypage as 마이 페이지
	Note over main: default page
	Note over store: 리뷰 포함
	main ->> login : 1. 회원가입/로그인
	login -->> main : 2. 회원가입/로그인 완료 시 메인화면으로 리턴
	alt 3. 배너/추천 클릭 or 직접 검색
	main ->> store : 배너 또는 추천 클릭하여 가게 상세 페이지 확인
	else
	main ->> search : 검색결과 페이지로 이동
	search ->> store : 검색결과 중 클릭하면 상세페이지 또는 모달로 확인
	else
	main ->> mypage : 마이페이지 내 다이어리 작성 및 맛집평가 리스트 확인
	end
	
```



#### | 회원가입/로그인

```mermaid
sequenceDiagram
	participant u as 사용자
	participant f as 프론트엔드
	participant b as 백엔드
	participant d as DB
	Note over u: default page
	main ->> login : 1. 회원가입/로그인
	login -->> main : 2. 회원가입/로그인 완료 시 메인화면으로 리턴
	alt 3. 배너/추천 클릭 or 직접 검색
	main ->> store : 배너 또는 추천 클릭하여 가게 상세 페이지 확인
	else
	main ->> search : 검색결과 페이지로 이동
	search ->> store : 검색결과 중 클릭하면 상세페이지 또는 모달로 확인
	end

```





### 5. Wireframe

참고링크: [OvenLink](https://ovenapp.io/project/qfxMC5NrUIRdlrPexdxMWkboxz45zxKn#Edwc0)