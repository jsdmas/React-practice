# eslint & pritter 설정

1. eslint 설치 & 초기화

```
npm init @eslint/config
```

위 설정시 eslintrc 파일 생성 ( 패키지는 자동으로 devdependencies로 설치 )

2. pritter 설정

```
npm i prettier -D
```

프리티어 설치

3. eslint 플러그인 패키지 설치

```
eslint-config-prettier
eslint-import-resolver-typescript
eslint-plugin-import
eslint-plugin-jsx-a11y
eslint-plugin-prettier
eslint-plugin-react-hooks
eslint-plugin-simple-import-sort
```

- eslint-config-prettier : 프리티어와 eslint 설정 충돌을 방지하기 위한 패키지
- eslint-import-resolver-typescript : typescript에서 모듈 경로를 해석하여 정확한 위치에서 모듈을 가져올 수 있도록 도와줍니다.
- eslint-plugin-import : 모듈과 모듈경로 관련 규칙을 제공하는 플러그인
- eslint-plugin-jsx-a11y : 웹 접근성을 개선하기 위해 JSX 요소에 대한 정적 분석을 수행합니다.
- eslint-plugin-prettier : Prettier와 ESLint를 통합하여 코드 포맷팅과 관련된 규칙을 자동으로 적용할 수 있도록 도와줍니다.
- eslint-plugin-react-hooks : React Hooks를 사용할 때 권장되는 규칙을 지정하고 정적 분석을 수행하는 플러그인입니다.
- eslint-plugin-simple-import-sort : import 문을 정렬하여 가독성을 향상시키는 도구입니다. (모듈의 상대적인 경로나 패키지를 구분하여 정렬하는 기능을 제공)

# useRducer

![](https://github.com/jsdmas/react-usereducer-useMemo-pracitce/assets/105098581/d2e46bec-dea6-4671-9e14-75b004293ac3)
![](https://github.com/jsdmas/react-usereducer-useMemo-pracitce/assets/105098581/4ae42d64-d643-47d6-b10a-ad28a6569e97)
![](https://github.com/jsdmas/react-usereducer-useMemo-pracitce/assets/105098581/f4d55967-13f1-4414-a47d-6fc85f40a28a)

# useMemo
