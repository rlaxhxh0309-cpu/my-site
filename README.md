# 홍길동 자기소개 사이트

순수 HTML, CSS, JavaScript로 만든 한 페이지짜리 자기소개 웹사이트입니다. npm이나 빌드 도구는 사용하지 않습니다.

**사이트 주소:** http://내아이디.github.io/my-site/

## 파일 구성

```
my-site/
├── index.html   # 페이지 구조 (헤더, 메뉴, 소개, 좋아하는 것, 연락처, 푸터)
├── style.css    # 전체 스타일과 애니메이션
├── script.js    # 동작 스크립트
├── .gitignore   # Git 추적 제외 목록
└── README.md
```

## 실행 방법

별도 설치 없이 `index.html`을 브라우저로 열면 됩니다.

```bash
# 또는 간단한 로컬 서버로 실행
npx serve .
```

### 배포 주소에서 보기

GitHub Pages로 배포하면 위의 사이트 주소에서 바로 볼 수 있습니다. 배포 설정은 GitHub 저장소의 Settings → Pages에서 확인하세요.

## 섹션

- **헤더:** 이름, 한 줄 소개, 상단 메뉴(소개 / 좋아하는 것 / 연락처)
- **소개:** 자기소개 내용
- **좋아하는 것 3가지:** 세로로 쌓인 카드 3개
- **연락처:** 이메일 주소
- **푸터:** 저작권 표시

## 수정할 부분

- 이름, 한 줄 소개, 소개 문단: `index.html`
- 좋아하는 것 항목: `index.html`의 `.like-card`
- 이메일 주소: `index.html`의 `#contact` 섹션 (현재 `hong@example.com`은 임시 주소)
- 색과 레이아웃: `style.css`

## 참고

- `.gitignore`에 `.env`, `.env.*`(단 `.env.example`은 제외), `*.log`, `.DS_Store`, `Thumbs.db`, `node_modules/`가 등록되어 있습니다.
