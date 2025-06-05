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

<br>

### 🛠 성능 개선
- **Performance**   
  Performance 지표는 아래의 Lighthouse에서 정리한 것과 같이 다양한 지표로 측정하므로 대표적으로 아래와 같은 것들을 개선하였습니다.
  - 이미지 개선
    - JPG 및 PNG 형식의 이미지를 WebP 포맷으로 압축 변환하여 전체 이미지 용량 축소
    - srcset을 이용한 반응형 이미지 적용
    - 이미지 고정 크기 지정 및 반응형은 aspect ratio를 이용하여 비율로 크기 지정
    - 시각장애인이 스크린 리더를 통해 접근성을 높이기 위하여 이미지에 alt 작성   
    <img width="408" alt="스크린샷 2025-06-05 오후 2 32 07" src="https://github.com/user-attachments/assets/df0044aa-4642-4948-81ee-13f472c51f0a" />   

  <br>

  - 스크립트 개선
    - defer, async를 이용하여 스크립트의 병목지점을 줄이고 비동기 처리 
    ```html
      <!-- Google Tag Manager -->
      <script async>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PKK35GL5');
      </script>
      <script defer type="text/javascript" src="//www.freeprivacypolicy.com/public/cookie-consent/4.1.0/cookie-consent.js" charset="UTF-8"></script>
    ```
    [defer, async 적용 전]
    <img width="835" alt="스크린샷 2025-06-02 오전 11 45 29" src="https://github.com/user-attachments/assets/97731b06-5687-46b1-9233-cf6c24b1fc74" />
    
    [defer, async 적용 후]
    <img width="836" alt="스크린샷 2025-06-02 오후 12 00 51" src="https://github.com/user-attachments/assets/5fe3ff93-67df-492b-ba73-d759aff7e5b3" />
    
    products api 호출 시점이 빨려졌고, 다른 스크립트도 로드 시점이 빨라진 것을 확인할 수 있습니다.

  <br>
  
  - TBT 원인 개선
    <img width="945" alt="스크린샷 2025-06-02 오후 3 54 25" src="https://github.com/user-attachments/assets/00301634-5bf0-487d-b3ae-611eb5cdff58" />   
    ```javascript
      // Simulate heavy operation. It could be a complex price calculation.
      // for (let i = 0; i < 10000000; i++) {
      //   const temp = Math.sqrt(i) * Math.sqrt(i);
      // }
    ```
    위의 첨부 이미지처럼 사용 안하는데 성능을 저해하고 있으므로 주석처리하여 제거
<br>

- **Accessibility**   
  Accessibility 지표는 색상 대비, 폰트 크기, 그리고 헤딩 태그 h1 ~ h5의 DOM 순서가 Accessibility 점수에 영향을 준다는 점을 확인하고, 이를 기준에 맞게 개선하였습니다.
  
  <img width="800" alt="스크린샷 2025-06-05 오후 2 13 42" src="https://github.com/user-attachments/assets/16343f91-76ad-461f-b4d2-556f08a79c44" />   
  <img width="800" alt="스크린샷 2025-06-05 오후 2 15 27" src="https://github.com/user-attachments/assets/020ffc14-4aeb-4d6b-82f8-c10bb4a025ee" />

  위의 첨부된 이미지와 같이 h1부터 h5까지의 태그 순서를 논리적으로 조정하고, 기존의 연한 색상을 더 진한 색상으로 변경하여 접근성 점수를 향상시켰습니다.

<br>

- **Best Practices**   
  Best Practices 지표는 HTTPS 사용 여부, 콘솔 오류, 안전한 코드(depreacted Api 사용 금지) 등을 측정하기 떄문에 해당 문제 부분을 찾고 개선하였습니다.

  <br>

  <img width="450" alt="스크린샷 2025-06-02 오후 8 05 50" src="https://github.com/user-attachments/assets/5fc25463-4c62-4450-9611-fc7f38ae1de4" />
   
  위의 첨부 이미지에서 https가 빠졌다고 했으므로 해당 부분을 찾아 아래와 같이 //www.freeprivacypolicy.com -> https://freeprivacypolicy.com 으로 코드 변경 후 개선
  ```html
    <script defer type="text/javascript" src="https://freeprivacypolicy.com/public/cookie-consent/4.1.0/cookie-consent.js" charset="UTF-8"></script>
    <script defer type="text/javascript" charset="UTF-8">
          window.addEventListener('load', function() {
              if (window.cookieconsent) {
                  cookieconsent.run({
                      "notice_banner_type": "simple",
                      "consent_type": "express",
                      "palette": "light",
                      "language": "en",
                      "page_load_consent_levels": ["strictly-necessary"],
                      "notice_banner_reject_button_hide": false,
                      "preferences_center_close_button_hide": false,
                      "page_refresh_confirmation_buttons": false,
                      "website_name": "Performance Course"
                  });
              } else {
                  console.warn('Cookie consent script not loaded');
              }
          });
    </script>
  ```

<br>

- **SEO**   
  SEO 지표는 시멘틱 태그 및 메타 태그 관련 요소에 영향을 받으므로, 해당 요소들을 적절히 추가하여 점수를 개선할 수 있습니다.   
  ```html
    <!-- SEO 메타 태그 추가 -->
    <meta name="description" content="Discover our premium collection of VR headsets including Apple, PlayStation, and Oculus. Shop the latest virtual reality technology with competitive prices and worldwide shipping.">
    <meta name="keywords" content="VR headset, virtual reality, Apple headset, PlayStation VR, Oculus, tech shop">
    <meta name="author" content="Tech Shop">
  
    <meta property="og:title" content="Home - Tech Shop | VR Headsets">
    <meta property="og:description" content="Explore our premium VR headset collection. Find the perfect virtual reality device for gaming, entertainment, and professional use.">
    <meta property="og:image" content="https://your-domain.com/images/og-image.jpg">
    <meta property="og:url" content="https://your-domain.com">
  
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Home - Tech Shop | VR Headsets">
    <meta name="twitter:description" content="Explore our premium VR headset collection. Find the perfect virtual reality device for gaming, entertainment, and professional use.">
  ```
  
<br>

### 🔥 성능 개선 측정 결과  
위의 성능 개선들을 다 적용한 성능 개선 후 측정 결과입니다.   

<br>

📊 **Core Web Vital 성능 측정 결과**   
<br>
<img width="856" alt="스크린샷 2025-06-05 오후 2 43 13" src="https://github.com/user-attachments/assets/995ab495-dfb9-4bcb-8a0e-0a5136d1001b" />   

<br>

📊 **PageSpeed Insights 성능 측정 결과**
- https://pagespeed.web.dev/analysis/https-front-5th-chapter4-2-basic-three-vercel-app/2ca5e2jbfj?form_factor=mobile

<br>

<p float="left">
  <img src="https://github.com/user-attachments/assets/f1eab3f5-d011-47ec-b86c-18aeaa2c4652" width="45%" />
  <img src="https://github.com/user-attachments/assets/a15bc7ef-05df-429e-a678-e46dbe0a8bba" width="45%" />
</p>

<br>

## 😃 보고서 최종 결과
📊 **Core Web Vital 성능 비교 결과**  
| 항목              | 개선 전      | 개선 후    |
|-------------------|--------------|------------|
| **Performance**    | 🟠 72%          | 🟢 100%       |
| **Accessibility**  | 🟠 82%          | 🟢 100%       |
| **Best Practices** | 🟠 75%          | 🟢 100%       |
| **SEO**            | 🟠 82%          | 🟢 100%       |
| **LCP**            | 🔴 14.78s       | 🟢 1.43s      |
| **INP**            | 🟢 N/A          | 🟢 N/A        |
| **CLS**            | 🟢 0.011        | 🟢 N/A        |

<br>

📊 **PageSpeed Insights 성능 데스크탑 비교 결과**
| 항목              | 개선 전      | 개선 후    |
|-------------------|--------------|------------|
| **Performance**    | 🟠 56%          | 🟢 100%       |
| **Accessibility**  | 🟠 81%          | 🟢 100%       |
| **Best Practices** | 🟠 96%          | 🟢 96%       |
| **SEO**            | 🟠 82%          | 🟢 100%       |
| **FCP** (First Contentful Paint) | 🟢 0.6s        | 🟢 0.2s       |
| **LCP** (Largest Contentful Paint) | 🔴 3.0s        | 🟢 0.7s       |
| **TBT** (Total Blocking Time)     | 🟠 190ms       | 🟢 0ms        |
| **CLS** (Cumulative Layout Shift) | 🔴 0.477       | 🟢 0          |
| **Speed Index**                   | 🟢 1.2s        | 🟢 0.3s       |

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














 



