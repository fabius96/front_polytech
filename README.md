# Jiny-Jekyll-Bootstrap
부트스트랩 CSS를 기반으로 제작된 지킬 템블릿 빌더 입니다.
사이트를 제작하기 위한 다양한 레이아웃과 기본 코드를 제공합니다.

## 부트스트랩 설치
부트스트랩을 설치합니다. 설치된 부트스트랩은 `assets/css/style.css`에 코드가 삽입되어 있습니다.
```
npm install
```

또한 `_scss`의 `main.scss`에서 커스텀 css 코드를 추가하여 빌드할 수 있습니다.

## 서버실행
서버를 실행하여 로컬호스트로 확인할 수 있습니다.
```
jekyll serve
```

깃허브에 코드를 배포할때에는 빌드를 하여 `sitemap.xml`파일을 같이 생성합니다.

```
jekyll build
```

## liquid
지킬은 liquid템플릿을 활용합니다. 
https://shopify.github.io/liquid/

## 환경설정
환경설정은 `_config.yml` 파일에 등록합니다. 등록된 설정값은 다음과 같이 템플릿에 적용할 수 있습니다.

```
{{site.layout.bgcolor}}
```
