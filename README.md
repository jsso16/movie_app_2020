# 전소진 201930231
## movie_app_2020
React JS Fundamentals Course 2020 

## 11월 06일
> 영화 앱 스타일링하기
1. App 컴포넌트와 Movie 컴포넌트에 HTML 추가하기
→ App 컴포넌트 : 컴포넌트가 반환할 JSX 바깥쪽을 section으로 감싼다. <br>
→ Movie 컴포넌트 : 컴포넌트가 반환할 JSX를 div로 감싼다.
2. 영화 포스터 이미지 추가하기
→ 전체 태그에 div 태그를 추가한 후, img 태그를 그 아래 추가하여 src 속성과 alt 속성에 각각 props를 전달한다.
3. Movie 컴포넌트 정리하기 - id props 지우기
4. App.css / Movie.css 파일을 생성한 후 컴포넌트에 각각 import하기
> 영화 앱 전체 모습 수정하기
1. Movie 컴포넌트에 genres props 넘겨주기
2. App 컴포넌트 / Movie 컴포넌트 수정하기
→ Movie 컴포넌트에서 genres의 props와 prop-type을 추가한 후, App 컴포넌트에서 undefined로 넘어온 부분을 수정한다.
3. class 속성 이름을 className으로 바꿔주기
※ 이름을 바꿔주어야 하는 이유는?
HTML의 class와 자바스크립트의 class라는 이름이 겹치면 React가 혼란스러울 수 있기 때문이다. <br>
이와 유사한 예를 하나 더 이야기한다면 label문의 for element가 있다.
4. 영화 장르 출력하기 - map() 함수 사용
5. key props 추가하기
→ key값으로 사용하기에 적당한 id값이 없다면 새롭게 만들어내야 하는데, map() 함수에 2번째 매개변수를 지정할 경우 배열의 index값을 반환해주는 기능이 있다. 따라서 이 기능을 이용하여 배열의 인덱스를 key props로 활용할 수 있다.

## 10월 30일
> 영화 데이터 화면에 그리기
1. 객체에 있는 키에 조금 더 효율적으로 접근하기 위해서는 구조 분해 할당을 사용한다.
2. setState를 사용하면 데이터를 저장할 수 있다.
3. ES6에서는 객체의 키와 대입할 변수의 이름이 같다면 코드를 축약할 수 있다.
4. isLoading state의 값을 true에서 false로 업데이트하면 실행화면을 변하게 할 수 있다.
> Movie 컴포넌트 만들기
1. state가 필요하지 않은 컴포넌트는 함수형 컴포넌트로 작성한다.
2. 컴포넌트에서 넘어와야 하는 영화 데이터를 정의하고, 관리하기 위해서는 prop-types를 사용한다.
3. propTypes를 작성하려면 Number는 PropType.number.isRequired로, String은 PropType.string.isRequired로 작성한다.
4. json 파일로 이루어진 평점을 기준으로 내림차순으로 영화 데이터를 정렬해 보여주는 기능은 axios.get()을 이용하면 된다.
5. 컴포넌트를 그리기 위해서는 map() 함수를 사용한 다음, return을 이용하여 컴포넌트의 값을 반환해준다. <br>
→ 이때 Movie 컴포넌트를 반드시 import 해주어야 하며, 컴포넌트를 이용해 함수를 반환하도록 해주어야 함
6. isRequired로 설정한 props는 무조건 모두 전달해주어야 한다.
7. key props는 유일해야 함으로 API에서 넘겨주는 id값을 사용한다.


## 10월 16일
> 클래스형 컴포넌트의 일생 알아보기
1. constructor() 함수
→ constructor 실행 후 render 실행
2. componentDidMount() 함수
→ render 실행 후 componentDidMount 실행
3. componentDidUpdate() 함수
→ 화면이 새로 그려지게 되면 실행
4. componentDidUnmount() 함수
> App 컴포넌트 비우기(영화 앱 만들기 워밍업) <br>
> 데이터 로딩 상태 표시해주기
- isLoading state 특징
1. 앱이 실행(mount)되는 초기에는 무조건 로딩 상태이기 때문에 값은 true이다.
2. 삼항연산자로 로딩 상태를 알려주는 문장을 만들 수 있다.
3. 강제로 false로 바꿔서 로딩 현상을 구현할 수 있다.
> 영화 API 사용해보기
- API 특징
1. 특정 주소를 입력하면 그 주소에 맞는 결과를 보내준다.
2. 조건도 붙일 수 있도록 제공한다.
3. API를 사용하려면 axios를 설치 후 import하여야 한다.
4. 이때, componentDidUnmount() 함수에서 axios.get() 함수의 인자에 URL을 전달하여 API를 호출한다.
- async, await
1. 자바스크립트에서 시간이 필요하다는 것을 알리기 위해서 사용되는 키워드이다.
2. 시간이 필요하다는 것을 알리려면 async를 () 앞에 붙이고, 실제 시간이 필요한 대상인 axios.get() 함수에는 await를 붙인다.

## 10월 07일
> 앱에 prop-types 도입하기 - 음식 데이터에 rating 추가하기
1. prop-type을 사용하기 위해서는 prop-types를 설치해야 한다.
2. prop-types를 적용할 때는 import를 사용하고, 컴포넌트명.propTypes에 객체를 적어주면 된다. 
3. prop-types는 컴포넌트가 전달받은 props가 원하는 값인지 확인해 주는 역할을 한다.
4. .isRequired는 '필요하다'라는 뜻으로 props가 필수가 아니라면 붙이지 않아도 된다.
5. 컴포넌트의 값이 숫자형일 경우 number를, 자료형일 경우에는 String을 사용하면 된다.
6. props는 동적 데이터를 다루지 못한다.
> state로 숫자 증감 기능 만들어보기 <br>
> 숫자 증감 기능을 제대로 만들어보기 - setState() 함수 사용하기
- state 특징
1. state는 동적 데이터를 사용한다.
2. state는 클래스형 컴포넌트에서 사용할 수 있는 개념이다.
3. state = {};로 정의한다.
4. 객체 형태의 데이터이다.
5. state를 사용하려면 반드시 클래스형 컴포넌트 안에서 소문자를 이용하여 state라고 적어야 한다.
6. state는 직접 변경하면 안된다.
→ 원래 React는 state가 변경되면 render()를 다시 실행하여 변경된 state를 화면에 보여주지만 state를 직접 변경하면 render() 함수를 다시 실행해 주지 않는다.
7. 간접적으로 변경하기 위해서는 setState() 함수를 사용한다.
→ setState() 함수를 사용하면 state를 변경할 수 있고, 바뀐 state의 데이터만 업데이트 해준다.
- onClick 속성을 사용하여 버튼을 누르면 동작하도록 하기
- 숫자 증감 기능을 개선시키기 위해 current 사용하기
- 클래스 상속받기
1. 클래스를 상속받기 위해서는 extends React.Component를 붙여야 한다.
2. 클래스형 컴포넌트가 되려면 App 클래스는 리액트가 제공하는 컴포넌트 클래스를 반드시 상속받아야 한다.
- render() 함수 사용해보기
1. 클래스형 컴포넌트는 render()함수가 JSX를 반환한다.
2. React는 클래스형 컴포넌트의 render()함수를 자동으로 실행시켜준다.

## 09월 25일
> 배열을 이용하여 비슷한 컴포넌트를 여러 개 만들어 효율적으로 출력하기 <br>
> map 함수로 컴포넌트를 여러 개 만들어보기
- map 함수 특징
1. 배열에 있는 원소들을 하나씩 꺼내준다.
2. 반환값을 배열로 반환해 준다.
3. 배열의 원소가 1개씩 전달되면서 함수가 반복하여 실행된다.
4. 이미지를 출력하기 위해서는 <img> 태그를 사용한다.
5. 리스트의 각 원소는 유일한 "key" prop을 가져야 한다.
6. React의 원소들은 유일해야 하므로 배열의 원소에 id값을 추가한다.
7. id는 컴포넌트가 서로 다르다는 것을 알려주는 값이다.
> 컴포넌트에 이미지 출력하기
1. 이미지를 삽입할 때는 import를 사용한다.
2. 이미지에는 alt 속성을 무조건 추가해주어야 한다.
3. 상대 경로로 이미지를 삽입할 때는 src폴더 내부에 이미지를 저장해주어야 한다.
4. import 외에도 상대 경로 삽입 방법에는 require를 사용하는 방법이 있다.

## 09월 18일
> React 기초개념(컴포넌트, JSX, props) <br>
> 컴포넌트가 무엇인지 알아보고, JSX 및 props를 학습함
1. JSX는 단지 HTML과 자바스크립트를 조합한 문법이다.
2. 컴포넌트 이름의 첫자는 반드시 대문자로 시작해야 한다.
3. 컴포넌트의 데이터를 전달할 때는 props를 사용한다.
4. 점 연산자를 대신해서 ES6의 구조 분해 할당을 사용할 수 있다.
5. React는 다수의 컴포넌트로 이루어져 있으나, 최종적으로는 하나의 컴포넌트만 사용 가능하다.

## 09월 11일
> 필요하지 않은 파일 삭제 및 폴더 정리 후 일부 파일(index.js, App.js) 수정하기 <br>
> React의 동작 원리 알아보기 <br>
> Dothome의 index 파일 수정하기 <br>
> readme.md 수정 후 Github에 push하기