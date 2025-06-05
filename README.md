## 성능 개선 보고서
### 📌 초기 성능 측정 결과   

📊 **Core Web Vital 성능 측정 결과**   
<br>
<img width="857" alt="스크린샷 2025-06-05 오전 11 57 55" src="https://github.com/user-attachments/assets/5599470e-8a86-4924-af5d-ff4ff6487250" />

<br>

📊 **PageSpeed Insights 성능 측정 결과**
- https://pagespeed.web.dev/analysis/https-front-5th-chapter4-2-basic-three-vercel-app/6zhabhr2be?form_factor=mobile

<br>

<p float="left">
  <img src="https://github.com/user-attachments/assets/e9a9651e-403c-4058-8651-ca432a956515" width="45%" />
  <img src="https://github.com/user-attachments/assets/c1d9b441-4dd6-4aef-914e-87be7ef5fff5" width="45%" />
</p>


  
<br><br>

## Lighthouse 점수 이해
❗️ **Lighthouse이란?**   
Google에서 개발한 웹 성능 및 품질 분석 도구로, 웹사이트를 진단하고 개선할 수 있도록 다양한 점수를 제공합니다.   

<br>

✅ **Lighthouse 점수 구성**
| 항목                            | 설명                                  | 가중치 (Performance 점수 내) |
| ----------------------------- | ----------------------------------- | ---------------------- |
| **Performance**               | 페이지 로딩 속도와 Core Web Vitals 기반 UX 평가 | ✅ 포함                   |
| **Accessibility**             | 스크린리더, 색상 대비 등 사용자 접근성 평가           | ❌ 비포함                  |
| **Best Practices**            | 보안, 코드 오류, API 사용 등 권장사항 준수         | ❌ 비포함                  |
| **SEO**                       | 검색 엔진 최적화 기본 요소 점검                  | ❌ 비포함                  |
| **Progressive Web App (PWA)** | 오프라인 사용, 설치 가능 여부 등 PWA 조건 평가       | ❌ 비포함                  |

<br>

🎯 **가장 중요한 항목: Performance 주요 지표 점수**   
| 지표                                 | 설명                    | 점수 반영 비율 |
| ---------------------------------- | --------------------- | -------- |
| **LCP** (Largest Contentful Paint) | 가장 큰 콘텐츠가 로드되는 시간     | 25%      |
| **TBT** (Total Blocking Time)      | 메인 스레드가 사용자 입력을 막는 시간 | 30%      |
| **CLS** (Cumulative Layout Shift)  | 예기치 않은 레이아웃 변경        | 15%      |
| **FCP** (First Contentful Paint)   | 첫 번째 콘텐츠가 나타나는 시간     | 10%      |
| **Speed Index**                    | 콘텐츠가 시각적으로 표시되는 속도    | 10%      |
| **TTI** (Time to Interactive)      | 페이지가 완전히 상호작용 가능한 시점  | 10%      |

<br>

📘 **다른 항목 부가 설명**   
| 항목                    | 주요 점검 요소                                                            | 설명                              |
| --------------------- | ------------------------------------------------------------------- | ------------------------------- |
| **1. Accessibility**  | - 버튼 접근성<br>- ARIA 속성<br>- 색상 대비 등                                  | 시각장애인 및 스크린리더 사용자 친화성 평가        |
| **2. Best Practices** | - HTTPS 사용 여부<br>- 콘솔 오류 확인<br>- 안전한 코드 작성 (deprecated API 사용 금지 등) | 보안, 안정성, 최신 웹 표준 준수 여부 평가       |
| **3. SEO**            | - `<title>` 태그 존재<br>- 메타 설명<br>- 이미지에 `alt` 태그 등                   | 기본적인 검색 엔진 최적화 요소 확인            |
| **4. PWA**            | - 서비스 워커 등록 여부<br>- 오프라인 지원 여부<br>- 설치 가능 여부                        | Progressive Web App 기준 충족 여부 평가 |


<br><br>

## 📓 Core Web Vital 이해
❗️ **Core Web Vital이란?**   
Google이 웹사이트의 사용자 경험(UX)을 측정하기 위해 정의한 핵심 성능 지표입니다. 검색 순위에도 영향을 주는 중요한 요소로, 웹 페이지의 로딩 속도, 반응성, 시각적 안정성을 중심으로 평가합니다.

<br>

✅ **Core Web Vitals의 3가지 주요 지표**
| 지표                                    | 설명                                                                             | 기준             |
| ------------------------------------- | ------------------------------------------------------------------------------ | -------------- |
| **LCP**<br>(Largest Contentful Paint) | 사용자가 페이지를 불러올 때 \*\*가장 큰 콘텐츠 요소(이미지, 텍스트 등)\*\*가 화면에 표시되기까지 걸리는 시간             | ✅ **2.5초 이하**  |
| **FID**<br>(First Input Delay)        | 사용자가 페이지에서 \*\*처음으로 상호작용(클릭, 탭 등)\*\*을 했을 때, 브라우저가 그 상호작용을 처리할 수 있을 때까지 걸리는 시간 | ✅ **100ms 이하** |
| **CLS**<br>(Cumulative Layout Shift)  | 페이지 내 요소들이 **예기치 않게 움직이는 정도** (버튼, 이미지 등이 로딩 중 밀리는 현상 등)                       | ✅ **0.1 이하**   |

<br>

🛠 **주요 지표에 대한 설명과 개선 방법**   
1️⃣ 🚀 LCP (Largest Contentful Paint)   
- 측정 대상: 위쪽 뷰포트 안의 가장 큰 이미지나 텍스트 블록
- 영향 요소
   - 느린 서버 응답
   - CSS, JavaScript 차단
   - 이미지 최적화 부족   
- 개선 팁   
   - 서버 응답 속도 개선 (예: CDN 사용)
   - 중요한 콘텐츠 우선 로딩
   - 이미지 포맷 최적화 (WebP 등)
   - lazy-loading 사용 제한

<br>

2️⃣ ⚡️ FID (First Input Delay)   
- 측정 대상: 사용자가 클릭하거나 입력할 때, 이벤트 처리 시작까지의 지연 시간   
- 영향 요소
  - 메인 스레드 블로킹
  - 과도한 JavaScript 실행
- 개선 팁
   - 코드 스플리팅(분할)
   - 비동기 JS 로딩 (async, defer)
   - 웹 워커 사용

 <br>

 3️⃣ 🎯 CLS (Cumulative Layout Shift)   
- 측정 대상: 페이지 로딩 도중 시각적 요소가 예기치 않게 움직이는 정도   
- 영향 요소
   - 이미지나 광고에 크기 지정 안함
   - 폰트 변경
- 개선 팁
   - 이미지/비디오에 width와 height 명시
   - 폰트 지연 로딩 최소화 (font-display: swap)
   - 애니메이션이나 광고 위치 고정














 



