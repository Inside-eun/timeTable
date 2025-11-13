# 2025 원더리벳 페스티벌

2025년 11월 14일~16일 고양 킨텍스에서 개최되는 원더리벳 페스티벌의 타임테이블과 아티스트별 유튜브 영상을 보여주는 React 웹 애플리케이션입니다.

## 기능

- 📅 3일간의 페스티벌 타임테이블 표시 (11/14 금 ~ 11/16 일)
- 🎵 아티스트 클릭 시 대표곡 유튜브 영상 자동 재생
- 🎬 아티스트당 3곡씩 순차 재생 (자동 넘김)
- 📱 반응형 디자인 (모바일, 태블릿, 데스크톱)
- 🌏 한일 아티스트 라인업 (BUMP OF CHICKEN, SPYAIR, 10CM, NORAZO 등)

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```

## 아티스트 데이터 수정

`src/data.ts` 파일에서 아티스트 정보를 수정할 수 있습니다:

```typescript
{
  id: 1,
  name: '아티스트 이름',
  time: '공연 시간',
  day: 'Day 1 (11/14 금)',
  genre: '장르',
  youtubeVideos: ['영상ID1', '영상ID2', '영상ID3']
}
```

**YouTube 영상 ID 찾는 방법:**
- 영상 URL에서 `v=` 뒤의 값을 사용하세요.
- 예: `https://www.youtube.com/watch?v=gdZLi9oWNZg` → `gdZLi9oWNZg`

**⚠️ 주의:** 일부 아티스트(CUTIE STREET, THREEE, NOMELON NOLEMON 등)는 `'placeholder1'` 같은 임시 값이 들어있습니다. 이 부분은 실제 유튜브 영상 ID로 교체해주세요!

## 기술 스택

- React 18
- TypeScript
- Vite
- react-youtube

