import React, { useState } from 'react';
import { Home, Search, Heart, User, ChevronLeft, MapPin, Camera, Check, Star, Clock, X, Navigation } from 'lucide-react';

// ========================================
// 상수 정의
// ========================================
const styleCategories = {
  male: [
    { name: '미니멀', emoji: '⬜' },
    { name: '캐주얼', emoji: '👕' },
    { name: '댄디', emoji: '🎩' },
    { name: '스트릿', emoji: '🛹' },
    { name: '아메카지', emoji: '🧢' },
    { name: '워크웨어', emoji: '🔧' },
    { name: '시티보이', emoji: '🌆' },
    { name: '클래식', emoji: '👔' },
  ],
  female: [
    { name: '미니멀', emoji: '⬜' },
    { name: '캐주얼', emoji: '👕' },
    { name: '페미닌', emoji: '🌸' },
    { name: '스트릿', emoji: '🛹' },
    { name: '로맨틱', emoji: '🎀' },
    { name: '빈티지', emoji: '📻' },
    { name: '모던', emoji: '🏙️' },
    { name: '클래식', emoji: '👔' },
  ]
};

const tpoCategories = {
  male: [
    { name: '데일리', emoji: '☀️' },
    { name: '출근/직장', emoji: '💼' },
    { name: '데이트', emoji: '💕' },
    { name: '모임', emoji: '🎉' },
    { name: '운동', emoji: '🏃' },
    { name: '여행', emoji: '✈️' },
  ],
  female: [
    { name: '데일리', emoji: '☀️' },
    { name: '출근/직장', emoji: '💼' },
    { name: '데이트', emoji: '💕' },
    { name: '모임', emoji: '🎉' },
    { name: '운동', emoji: '🏃' },
    { name: '여행', emoji: '✈️' },
  ]
};

const styleImages = {
  male: {
    '미니멀': '/sources/PC_male/minimal.jpg',
    '캐주얼': '/sources/PC_male/Casual.jpg',
    '댄디': '/sources/PC_male/dandy.jpg',
    '스트릿': '/sources/PC_male/street.jpg',
    '아메카지': '/sources/PC_male/amecasual.jpg',
    '워크웨어': '/sources/PC_male/workwear.jpg',
    '시티보이': '/sources/PC_male/cityboy.jpg',
    '클래식': '/sources/PC_male/classic.jpg',
  },
  female: {
    '미니멀': '/sources/PC_female/minimal.jpg',
    '캐주얼': '/sources/PC_female/casual.jpg',
    '페미닌': '/sources/PC_female/feminine.jpg',
    '스트릿': '/sources/PC_female/street.jpg',
    '로맨틱': '/sources/PC_female/romantic.jpg',
    '빈티지': '/sources/PC_female/vintage.jpg',
    '모던': '/sources/PC_female/modern.jpg',
    '클래식': '/sources/PC_female/classic.jpg',
  }
};

const tpoImages = {
  male: {
    '데일리': null,
    '출근/직장': null,
    '데이트': null,
    '모임': null,
    '운동': null,
    '여행': null,
  },
  female: {
    '데일리': null,
    '출근/직장': null,
    '데이트': null,
    '모임': null,
    '운동': null,
    '여행': null,
  }
};

const bodyGuides = [
  {
    label: '정면',
    img: '/sources/guide_front.jpg',
    desc: '다리를 모으고 정면을 응시하세요',
    bg: 'bg-blue-100'
  },
  {
    label: '측면',
    img: '/sources/guide_side.jpg',
    desc: '오른손을 배위에 올려놓은 자세에서 촬영을 진행하세요',
    bg: 'bg-purple-100'
  },
  {
    label: '후면',
    img: '/sources/guide_back.jpg',
    desc: '머리카락을 묶고 등을 보여주세요',
    bg: 'bg-pink-100'
  }
];

// ========================================
// 샘플 매장 데이터
// ========================================
const sampleShops = {
  '성수': [
    { id: 1, name: '라벨 스튜디오', director: '김민지', match: 95, distance: '5분', lat: 37.544, lng: 127.056, tags: ['#하체커버', '#미니멀'], styles: ['미니멀', '페미닌'], tpo: ['데이트', '출근/직장'] },
    { id: 2, name: '무드 클로젯', director: '박서연', match: 92, distance: '8분', lat: 37.546, lng: 127.058, tags: ['#데이트룩', '#로맨틱'], styles: ['로맨틱', '페미닌'], tpo: ['데이트', '모임'] },
    { id: 3, name: '어반 하우스', director: '이하은', match: 88, distance: '12분', lat: 37.542, lng: 127.054, tags: ['#캐주얼', '#데일리'], styles: ['캐주얼', '스트릿'], tpo: ['데일리', '여행'] },
    { id: 4, name: '소호 스타일', director: '최유진', match: 85, distance: '15분', lat: 37.548, lng: 127.052, tags: ['#빈티지', '#유니크'], styles: ['빈티지', '스트릿'], tpo: ['모임', '데일리'] },
  ],
  '연남': [
    { id: 5, name: '연남 셀렉트', director: '정수아', match: 93, distance: '3분', lat: 37.566, lng: 126.925, tags: ['#미니멀', '#출근룩'], styles: ['미니멀', '모던'], tpo: ['출근/직장', '데일리'] },
    { id: 6, name: '레트로 무드', director: '한지민', match: 89, distance: '7분', lat: 37.568, lng: 126.927, tags: ['#빈티지', '#레트로'], styles: ['빈티지', '로맨틱'], tpo: ['데이트', '모임'] },
    { id: 7, name: '모던 앳 연남', director: '송예진', match: 86, distance: '10분', lat: 37.564, lng: 126.923, tags: ['#모던', '#시크'], styles: ['모던', '미니멀'], tpo: ['출근/직장', '모임'] },
  ],
  '홍대': [
    { id: 8, name: '스트릿 홍대', director: '김태리', match: 91, distance: '5분', lat: 37.556, lng: 126.923, tags: ['#스트릿', '#힙'], styles: ['스트릿', '캐주얼'], tpo: ['데일리', '모임'] },
    { id: 9, name: '인디 클로젯', director: '이수현', match: 87, distance: '8분', lat: 37.558, lng: 126.925, tags: ['#유니크', '#인디'], styles: ['빈티지', '스트릿'], tpo: ['모임', '데이트'] },
  ],
  '강남': [
    { id: 10, name: '엘레강스', director: '박소연', match: 94, distance: '4분', lat: 37.498, lng: 127.028, tags: ['#오피스룩', '#세미정장'], styles: ['클래식', '모던'], tpo: ['출근/직장', '모임'] },
    { id: 11, name: '시크 앳 강남', director: '최지원', match: 90, distance: '6분', lat: 37.500, lng: 127.030, tags: ['#시크', '#미니멀'], styles: ['미니멀', '모던'], tpo: ['출근/직장', '데이트'] },
  ],
};

// ========================================
// 포트폴리오 이미지 (디렉터별)
// ========================================
// 사용법: public/sources/portfolio/ 폴더에 이미지를 넣고 경로 수정
const portfolioImages = {
  '김민지': [
    '/sources/portfolio/minji_1.jpg',
    '/sources/portfolio/minji_2.jpg',
    '/sources/portfolio/minji_3.jpg',
    '/sources/portfolio/minji_4.jpg',
    '/sources/portfolio/minji_5.jpg',
    '/sources/portfolio/minji_6.jpg',
  ],
  '박서연': [
    '/sources/portfolio/seoyeon_1.jpg',
    '/sources/portfolio/seoyeon_2.jpg',
    '/sources/portfolio/seoyeon_3.jpg',
    '/sources/portfolio/seoyeon_4.jpg',
    '/sources/portfolio/seoyeon_5.jpg',
    '/sources/portfolio/seoyeon_6.jpg',
  ],
  '이하은': [
    '/sources/portfolio/minji_1.jpg',
    '/sources/portfolio/minji_2.jpg',
    '/sources/portfolio/minji_3.jpg',
    '/sources/portfolio/minji_4.jpg',
    '/sources/portfolio/minji_5.jpg',
    '/sources/portfolio/minji_6.jpg',
  ],
  '최유진': [
    '/sources/portfolio/minji_1.jpg',
    '/sources/portfolio/minji_2.jpg',
    '/sources/portfolio/minji_3.jpg',
    '/sources/portfolio/minji_4.jpg',
    '/sources/portfolio/minji_5.jpg',
    '/sources/portfolio/minji_6.jpg',
  ],
  '정수아': [
    '/sources/AI_Model/AI_model2.jpg',
    '/sources/AI_Model/AI_model3.jpg',
    '/sources/AI_Model/AI_model4.jpg',
    '/sources/portfolio/minji_4.jpg',
    '/sources/portfolio/minji_5.jpg',
    '/sources/portfolio/minji_6.jpg',
  ],
  '한지민': [
    '/sources/AI_Model/AI_model5.jpg',
    '/sources/AI_Model/AI_model6.jpg',
    '/sources/AI_Model/AI_model7.jpg',
    '/sources/portfolio/minji_4.jpg',
    '/sources/portfolio/minji_5.jpg',
    '/sources/portfolio/minji_6.jpg',
  ],
  '송예진': [
    '/sources/portfolio/minji_1.jpg',
    '/sources/portfolio/minji_2.jpg',
    '/sources/portfolio/minji_3.jpg',
    '/sources/portfolio/minji_4.jpg',
    '/sources/portfolio/minji_5.jpg',
    '/sources/portfolio/minji_6.jpg',
  ],
  '김태리': [
    '/sources/portfolio/minji_1.jpg',
    '/sources/portfolio/minji_2.jpg',
    '/sources/portfolio/minji_3.jpg',
    '/sources/portfolio/minji_4.jpg',
    '/sources/portfolio/minji_5.jpg',
    '/sources/portfolio/minji_6.jpg',
  ],
  '이수현': [
    '/sources/portfolio/minji_1.jpg',
    '/sources/portfolio/minji_2.jpg',
    '/sources/portfolio/minji_3.jpg',
    '/sources/portfolio/minji_4.jpg',
    '/sources/portfolio/minji_5.jpg',
    '/sources/portfolio/minji_6.jpg',
  ],
  '박소연': [
    '/sources/portfolio/minji_1.jpg',
    '/sources/portfolio/minji_2.jpg',
    '/sources/portfolio/minji_3.jpg',
    '/sources/portfolio/minji_4.jpg',
    '/sources/portfolio/minji_5.jpg',
    '/sources/portfolio/minji_6.jpg',
  ],
  '최지원': [
    '/sources/portfolio/minji_1.jpg',
    '/sources/portfolio/minji_2.jpg',
    '/sources/portfolio/minji_3.jpg',
    '/sources/portfolio/minji_4.jpg',
    '/sources/portfolio/minji_5.jpg',
    '/sources/portfolio/minji_6.jpg',
  ],
  // 다른 디렉터도 같은 방식으로 추가
  // 이미지가 없으면 기본 플레이스홀더가 표시됨
};

// ========================================
// 검색어 분류 함수
// ========================================
const classifySearch = (query) => {
  const q = query.toLowerCase();

  const locations = ['성수', '연남', '홍대', '강남', '이태원', '압구정', '신사', '가로수길', '망원', '합정', '건대', '신촌'];
  const foundLocation = locations.find(loc => q.includes(loc));

  const nearbyKeywords = ['주변', '근처', '왔는데', '여기', '내 주변', '가까운', '지금', '근방'];
  const isNearby = nearbyKeywords.some(kw => q.includes(kw));

  const matchKeywords = ['맞는', '어울리는', '찾아줘', '추천', '잘 맞', '괜찮은'];
  const wantsMatch = matchKeywords.some(kw => q.includes(kw));

  const styleKeywords = ['미니멀', '캐주얼', '페미닌', '스트릿', '댄디', '로맨틱', '빈티지', '모던', '클래식'];
  const foundStyle = styleKeywords.find(s => q.includes(s));

  const tpoKeywords = ['데이트', '출근', '데일리', '모임', '운동', '여행', '하객', '소개팅', '면접'];
  const foundTPO = tpoKeywords.find(t => q.includes(t));

  const bodyKeywords = ['하체', '상체', '어깨', '허벅지', '종아리', '커버', '체형', '다리'];
  const foundBody = bodyKeywords.find(b => q.includes(b));

  if (foundLocation && isNearby) {
    return { type: 'NEARBY', location: foundLocation, query: q };
  }
  if (foundLocation && wantsMatch) {
    return { type: 'LOCATION_MATCH', location: foundLocation, query: q };
  }
  if (foundLocation) {
    return { type: 'LOCATION_MATCH', location: foundLocation, query: q };
  }
  if (isNearby) {
    return { type: 'NEARBY', location: null, query: q };
  }
  if (foundStyle || foundTPO || foundBody) {
    return { type: 'STYLE_SEARCH', style: foundStyle, tpo: foundTPO, body: foundBody, query: q };
  }
  return { type: 'NEARBY', location: null, query: q };
};

const filterShopsByStyle = (style, tpo, body) => {
  const allShops = Object.values(sampleShops).flat();
  return allShops.filter(shop => {
    if (style && shop.styles.includes(style)) return true;
    if (tpo && shop.tpo.includes(tpo)) return true;
    if (body && shop.tags.some(tag => tag.includes('커버') || tag.includes('체형'))) return true;
    return false;
  }).sort((a, b) => b.match - a.match);
};

// ========================================
// 메인 컴포넌트
// ========================================
const CustomerAppPrototype = () => {
  // 화면 상태
  const [currentScreen, setCurrentScreen] = useState('login');

  // 진단 상태
  const [diagnosisStep, setDiagnosisStep] = useState(1);
  const [bodyPhotos, setBodyPhotos] = useState([false, false, false]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [bodyAnalysisComplete, setBodyAnalysisComplete] = useState(false);
  const [facePhoto, setFacePhoto] = useState(false);
  const [colorAnalysisComplete, setColorAnalysisComplete] = useState(false);
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedStyles, setSelectedStyles] = useState([]);
  const [selectedTPO, setSelectedTPO] = useState([]);
  const [selectedShoppingStyle, setSelectedShoppingStyle] = useState(null);

  // 검색 상태 (추가)
  const [searchResult, setSearchResult] = useState(null);
  const [selectedShopPreview, setSelectedShopPreview] = useState(null);

  // 기타 상태
  const [selectedDirector, setSelectedDirector] = useState(null);

  // 체형 사진 토글
  const handleBodyPhotoToggle = (idx) => {
    const newPhotos = [...bodyPhotos];
    newPhotos[idx] = !newPhotos[idx];
    setBodyPhotos(newPhotos);
  };

  // 체형 분석 시작
  const handleBodyAnalysis = () => {
    if (bodyPhotos.filter(Boolean).length >= 3) {
      setIsAnalyzing(true);
      setTimeout(() => {
        setIsAnalyzing(false);
        setBodyAnalysisComplete(true);
      }, 2000);
    }
  };

  // 얼굴 촬영
  const handleFacePhoto = () => {
    if (!facePhoto) {
      setFacePhoto(true);
      setIsAnalyzing(true);
      setTimeout(() => {
        setIsAnalyzing(false);
        setColorAnalysisComplete(true);
      }, 2000);
    }
  };

  // 성별 선택
  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
    setSelectedStyles([]);
    setSelectedTPO([]);
  };

  // 스타일 토글
  const handleStyleToggle = (styleName) => {
    if (selectedStyles.includes(styleName)) {
      setSelectedStyles(selectedStyles.filter(s => s !== styleName));
    } else {
      setSelectedStyles([...selectedStyles, styleName]);
    }
  };

  // TPO 토글
  const handleTPOToggle = (tpoName) => {
    if (selectedTPO.includes(tpoName)) {
      setSelectedTPO(selectedTPO.filter(t => t !== tpoName));
    } else {
      setSelectedTPO([...selectedTPO, tpoName]);
    }
  };

  // 검색 실행 (추가)
  const handleSearch = (query) => {
    const result = classifySearch(query);
    setSearchResult(result);
    setSelectedShopPreview(null);
    setCurrentScreen('searchResult');
  };

  const showNav = ['home', 'map', 'director', 'booking'].includes(currentScreen);

  return (
    <div className="max-w-md mx-auto bg-black h-screen flex flex-col relative">
      <div className="flex-1 overflow-hidden">
        {currentScreen === 'login' && (
          <LoginScreen
            onStart={() => { setDiagnosisStep(1); setCurrentScreen('diagnosis'); }}
            onLogin={() => setCurrentScreen('home')}
          />
        )}

        {currentScreen === 'diagnosis' && (
          <DiagnosisScreen
            step={diagnosisStep}
            setStep={setDiagnosisStep}
            onBack={() => setCurrentScreen('login')}
            // Step 1 props
            bodyPhotos={bodyPhotos}
            onBodyPhotoToggle={handleBodyPhotoToggle}
            isAnalyzing={isAnalyzing}
            bodyAnalysisComplete={bodyAnalysisComplete}
            onBodyAnalysis={handleBodyAnalysis}
            // Step 2 props
            facePhoto={facePhoto}
            onFacePhoto={handleFacePhoto}
            colorAnalysisComplete={colorAnalysisComplete}
            // Step 3 props
            selectedGender={selectedGender}
            onGenderSelect={handleGenderSelect}
            selectedStyles={selectedStyles}
            onStyleToggle={handleStyleToggle}
            selectedTPO={selectedTPO}
            onTPOToggle={handleTPOToggle}
            // Step 4 props
            selectedShoppingStyle={selectedShoppingStyle}
            onShoppingStyleSelect={setSelectedShoppingStyle}
            onComplete={() => setCurrentScreen('home')}
          />
        )}

        {currentScreen === 'home' && (
          <HomeScreen
            onSearch={() => setCurrentScreen('search')}
            onMap={() => setCurrentScreen('map')}
          />
        )}

        {currentScreen === 'search' && (
          <SearchScreen
            onClose={() => setCurrentScreen('home')}
            onSearch={handleSearch}
          />
        )}

        {currentScreen === 'searchResult' && (
          <SearchResultScreen
            result={searchResult}
            onBack={() => setCurrentScreen('search')}
            onSelectShop={(shop) => {
              setSelectedDirector(shop);
              setCurrentScreen('director');
            }}
            selectedPreview={selectedShopPreview}
            onPreviewSelect={setSelectedShopPreview}
          />
        )}

        {currentScreen === 'map' && (
          <MapScreen
            onBack={() => setCurrentScreen('home')}
            onSelectDirector={(shop) => { setSelectedDirector(shop); setCurrentScreen('director'); }}
          />
        )}

        {currentScreen === 'director' && (
          <DirectorScreen
            director={selectedDirector}
            onBack={() => {
              if (searchResult) {
                setCurrentScreen('searchResult');
              } else {
                setCurrentScreen('map');
              }
            }}
            onBook={() => setCurrentScreen('booking')}
          />
        )}

        {currentScreen === 'booking' && (
          <BookingScreen
            director={selectedDirector}
            onBack={() => setCurrentScreen('director')}
            onHome={() => setCurrentScreen('home')}
          />
        )}
      </div>

      {showNav && <BottomNav currentScreen={currentScreen} onHome={() => setCurrentScreen('home')} />}
    </div>
  );
};

// ========================================
// 로그인 화면
// ========================================
const LoginScreen = ({ onStart, onLogin }) => (
  <div className="h-full overflow-y-auto bg-black flex flex-col justify-center px-6 py-10">
    <div className="text-center mb-10">
      <div className="text-white text-5xl font-black tracking-tight mb-1">Mit</div>
      <div className="text-zinc-500 text-xs tracking-widest uppercase">MEET & FIT</div>
      <div className="text-zinc-400 text-sm mt-6 leading-relaxed">
        쇼핑하지 마세요,<br/>
        <span className="text-white font-bold">디렉팅</span> 받으세요
      </div>
    </div>

    <div className="text-zinc-500 text-xs text-center mb-5 tracking-wide">간편 가입</div>

    <div className="space-y-2.5 mb-6">
      <button type="button" className="w-full bg-yellow-400 text-black py-4 rounded-lg font-semibold flex items-center justify-center gap-2">
        <span className="text-lg">💬</span>
        카카오로 시작하기
      </button>
      <button type="button" className="w-full bg-green-500 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2">
        <span className="text-lg font-bold">N</span>
        네이버로 시작하기
      </button>
    </div>

    <div className="flex items-center gap-4 my-6">
      <div className="flex-1 h-px bg-zinc-800" />
      <span className="text-zinc-600 text-xs">또는</span>
      <div className="flex-1 h-px bg-zinc-800" />
    </div>

    <div className="space-y-2.5 mb-4">
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">📧</span>
        <input
          type="email"
          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-4 pl-12 pr-4 text-white placeholder-zinc-600 focus:border-white focus:outline-none"
          placeholder="이메일"
        />
      </div>
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">🔒</span>
        <input
          type="password"
          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-4 pl-12 pr-4 text-white placeholder-zinc-600 focus:border-white focus:outline-none"
          placeholder="비밀번호"
        />
      </div>
    </div>

    <button
      type="button"
      onClick={onStart}
      className="w-full bg-white text-black py-4 rounded-lg font-bold text-base mb-8"
    >
      시작하기
    </button>

    <div className="text-center text-sm">
      <span className="text-zinc-500">이미 계정이 있으신가요? </span>
      <button type="button" onClick={onLogin} className="text-white font-semibold">
        로그인
      </button>
    </div>
  </div>
);

// ========================================
// 진단 화면 메인
// ========================================
const DiagnosisScreen = ({
  step, setStep, onBack,
  bodyPhotos, onBodyPhotoToggle, isAnalyzing, bodyAnalysisComplete, onBodyAnalysis,
  facePhoto, onFacePhoto, colorAnalysisComplete,
  selectedGender, onGenderSelect, selectedStyles, onStyleToggle, selectedTPO, onTPOToggle,
  selectedShoppingStyle, onShoppingStyleSelect, onComplete
}) => (
  <div className="h-full flex flex-col bg-black">
    {/* 헤더 - 고정 */}
    <div className="flex-shrink-0 p-5 border-b border-zinc-900">
      <div className="flex items-center gap-3 mb-4">
        <button
          type="button"
          onClick={() => step > 1 ? setStep(step - 1) : onBack()}
          className="text-white hover:bg-zinc-800 rounded-full p-1.5 transition"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="text-white font-bold text-lg">나만의 스타일 찾기</div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex-1 h-1 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
        <span className="text-zinc-500 text-xs">{step}/4</span>
      </div>
    </div>

    {/* 콘텐츠 - 스크롤 */}
    <div className="flex-1 overflow-y-auto">
      {step === 1 && (
        <Step1Content
          bodyPhotos={bodyPhotos}
          onToggle={onBodyPhotoToggle}
          isAnalyzing={isAnalyzing}
          bodyAnalysisComplete={bodyAnalysisComplete}
          onAnalysis={onBodyAnalysis}
          onNext={() => setStep(2)}
        />
      )}
      {step === 2 && (
        <Step2Content
          facePhoto={facePhoto}
          onFacePhoto={onFacePhoto}
          isAnalyzing={isAnalyzing}
          colorAnalysisComplete={colorAnalysisComplete}
          onNext={() => setStep(3)}
        />
      )}
      {step === 3 && (
        <Step3Content
          selectedGender={selectedGender}
          onGenderSelect={onGenderSelect}
          selectedStyles={selectedStyles}
          onStyleToggle={onStyleToggle}
          selectedTPO={selectedTPO}
          onTPOToggle={onTPOToggle}
          onNext={() => setStep(4)}
        />
      )}
      {step === 4 && (
        <Step4Content
          selectedShoppingStyle={selectedShoppingStyle}
          onSelect={onShoppingStyleSelect}
          onComplete={onComplete}
        />
      )}
    </div>
  </div>
);

// ========================================
// Step 1: 체형 분석
// ========================================
const Step1Content = ({ bodyPhotos, onToggle, isAnalyzing, bodyAnalysisComplete, onAnalysis, onNext }) => (
  <div className="p-5 space-y-6 pb-10">
    <div>
      <div className="text-white text-2xl font-bold mb-2">체형 촬영</div>
      <div className="text-zinc-400 text-sm">
        정확한 분석을 위해 <span className="text-blue-400 font-bold">가이드 사진</span>처럼 촬영해주세요.<br/>
        준비가 되면 카드를 눌러 체크해주세요.
      </div>
    </div>

    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex gap-3 items-start">
      <span className="text-2xl mt-0.5">💡</span>
      <div className="text-xs text-zinc-400 flex flex-col gap-1.5">
        <div>- 사진 사이즈가 <span className="text-blue-400 font-bold">16:9 가로비율</span>이어야 합니다.</div>
        <div>- <span className="text-blue-400 font-bold">밝은 곳</span>에서 촬영 해주세요.</div>
        <div>- 사진에 한 명만 들어가게 해주세요.</div>
        <div>- <span className="text-blue-400 font-bold">몸에 붙는 옷(요가복, 트레이닝복)</span>을 입고 촬영해주세요.</div>
      </div>
    </div>

    <div className="space-y-4">
      {bodyGuides.map((guide, idx) => (
        <div
          key={idx}
          onClick={() => onToggle(idx)}
          className={`relative overflow-hidden rounded-2xl border transition-all cursor-pointer ${
            bodyPhotos[idx]
              ? 'border-blue-500 bg-zinc-900 shadow-lg shadow-blue-900/20'
              : 'border-zinc-800 bg-zinc-900 hover:border-zinc-600'
          }`}
        >
          <div className="flex h-40">
            <div className={`w-32 flex-shrink-0 relative ${bodyPhotos[idx] ? 'bg-blue-900/30' : guide.bg}`}>
              {bodyPhotos[idx] ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-2 shadow-lg">
                    <Check size={24} className="text-white" strokeWidth={3} />
                  </div>
                  <span className="text-blue-300 text-xs font-bold">촬영 완료</span>
                </div>
              ) : (
                <>
                  <img
                    src={guide.img}
                    alt={guide.label}
                    className="w-full h-full object-cover opacity-90"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs text-center py-1 font-bold">
                    {guide.label} 예시
                  </div>
                </>
              )}
            </div>

            <div className="flex-1 p-4 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className={`font-bold text-lg ${bodyPhotos[idx] ? 'text-blue-400' : 'text-white'}`}>
                    {guide.label} 촬영
                  </span>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center border transition ${
                    bodyPhotos[idx] ? 'bg-blue-500 border-blue-500' : 'border-zinc-600'
                  }`}>
                    {bodyPhotos[idx] && <Check size={14} className="text-white" />}
                  </div>
                </div>
                <p className="text-zinc-500 text-xs leading-relaxed break-keep">{guide.desc}</p>
              </div>
              <div className={`text-xs font-bold mt-2 ${bodyPhotos[idx] ? 'text-blue-400' : 'text-zinc-600'}`}>
                {bodyPhotos[idx] ? '확인되었습니다' : '촬영 후 눌러주세요'}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {!bodyAnalysisComplete && (
      <button
        type="button"
        onClick={onAnalysis}
        disabled={bodyPhotos.filter(Boolean).length < 3}
        className={`w-full py-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${
          bodyPhotos.filter(Boolean).length >= 3
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
        }`}
      >
        {isAnalyzing ? (
          <><span className="animate-spin">⏳</span> 분석 중...</>
        ) : (
          '모두 촬영했어요 (분석 시작)'
        )}
      </button>
    )}

    {bodyAnalysisComplete && (
      <div>
        <div className="bg-green-950 border border-green-700 rounded-xl p-4 mb-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">✅</span>
            <span className="text-green-300 font-semibold">체형 분석 완료!</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-zinc-900 border border-yellow-500/30 rounded-lg p-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-yellow-400"></div>
              <div className="flex items-center gap-3">
                <span className="text-yellow-400 font-black text-lg">1순위</span>
                <span className="text-white font-bold text-lg">하체 볼륨형</span>
              </div>
              <span className="text-yellow-400 font-black text-xl">72%</span>
            </div>
            <div className="flex items-center justify-between bg-zinc-900/50 border border-zinc-800 rounded-lg p-3">
              <div className="flex items-center gap-3">
                <span className="text-blue-400 font-bold">2순위</span>
                <span className="text-zinc-300 font-semibold">상체 볼륨형</span>
              </div>
              <span className="text-blue-400 font-bold">20%</span>
            </div>
            <div className="flex items-center justify-between bg-zinc-900/30 border border-zinc-800 rounded-lg p-3">
              <div className="flex items-center gap-3">
                <span className="text-zinc-500 font-bold">3순위</span>
                <span className="text-zinc-500 font-medium">일자 체형</span>
              </div>
              <span className="text-zinc-600 font-bold">8%</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onNext}
          className="w-full py-4 rounded-xl font-bold bg-white text-black hover:bg-zinc-200 transition"
        >
          다음: 퍼스널 컬러 분석
        </button>
      </div>
    )}
  </div>
);

// ========================================
// Step 2: 퍼스널 컬러
// ========================================
const Step2Content = ({ facePhoto, onFacePhoto, isAnalyzing, colorAnalysisComplete, onNext }) => (
  <div className="p-5 space-y-6 pb-10">
    <div>
      <div className="text-white text-2xl font-bold mb-2">퍼스널 컬러 분석</div>
      <div className="text-zinc-400 text-sm">얼굴을 촬영하면 AI가 퍼스널 컬러를 분석해드려요.</div>
    </div>

    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex gap-3 items-start">
      <span className="text-2xl mt-0.5">💡</span>
      <div className="text-xs text-zinc-400 flex flex-col gap-2">
        <div>- 직사광선이 아닌 <span className="text-blue-400 font-bold">간접적인 자연광(창가)</span>에서 촬영해주세요.</div>
        <div>- <span className="text-blue-400 font-bold">노 메이크업</span> 상태에서 촬영 해주세요.</div>
        <div>- <span className="text-blue-400 font-bold">카메라 원 안에 얼굴</span>이 들어가게 해주세요.</div>
        <div>- <span className="text-blue-400 font-bold">단순하고 중립적인 배경(흰색 벽)</span> 앞에서 촬영하는 것이 좋습니다.</div>
      </div>
    </div>

    <div
      onClick={onFacePhoto}
      className={`rounded-xl p-6 flex flex-col items-center cursor-pointer transition ${
        facePhoto
          ? 'bg-purple-900 border-2 border-purple-500'
          : 'bg-zinc-900 border border-zinc-800 hover:border-zinc-600'
      }`}
    >
      <div className={`w-32 h-32 rounded-full flex items-center justify-center mb-4 ${
        facePhoto ? 'bg-purple-800' : 'bg-zinc-800'
      }`}>
        {facePhoto ? (
          <Check className="text-purple-300" size={40} />
        ) : (
          <Camera className="text-zinc-500" size={40} />
        )}
      </div>
      <div className="text-white font-semibold mb-1">
        {facePhoto ? '촬영 완료' : '얼굴 촬영'}
      </div>
      <div className="text-zinc-500 text-xs">
        {facePhoto ? '' : '탭하여 촬영'}
      </div>
    </div>

    {isAnalyzing && (
      <div className="bg-zinc-900 rounded-xl p-6 text-center border border-zinc-800">
        <div className="text-4xl mb-3 animate-pulse">🎨</div>
        <div className="text-white font-semibold mb-1">퍼스널 컬러 분석 중...</div>
        <div className="text-zinc-400 text-sm">잠시만 기다려주세요</div>
      </div>
    )}

    {colorAnalysisComplete && !isAnalyzing && (
      <>
        <div className="bg-green-950 border border-green-700 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">✅</span>
            <span className="text-green-300 font-semibold">퍼스널 컬러 분석 완료!</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-zinc-900 rounded-lg p-3">
              <div className="flex items-center gap-3">
                <span className="text-yellow-400 font-bold">1순위</span>
                <span className="text-white font-semibold">가을 웜톤</span>
              </div>
              <span className="text-blue-400 font-bold">85%</span>
            </div>
            <div className="flex items-center justify-between bg-zinc-900/50 border border-zinc-800 rounded-lg p-3">
              <div className="flex items-center gap-3">
                <span className="text-blue-400 font-bold">2순위</span>
                <span className="text-zinc-300 font-semibold">봄 웜톤</span>
              </div>
              <span className="text-blue-400 font-bold">10%</span>
            </div>
            <div className="flex items-center justify-between bg-zinc-900/30 border border-zinc-800 rounded-lg p-3">
              <div className="flex items-center gap-3">
                <span className="text-zinc-500 font-bold">3순위</span>
                <span className="text-zinc-500 font-medium">겨울 쿨톤</span>
              </div>
              <span className="text-zinc-600 font-bold">4%</span>
            </div>
          </div>
          <div className="mt-4">
            <div className="text-zinc-400 text-xs mb-2">어울리는 컬러</div>
            <div className="flex gap-2 flex-wrap">
              {['베이지', '브라운', '카키', '머스타드', '테라코타'].map(color => (
                <span key={color} className="bg-zinc-800 text-orange-300 text-xs px-2.5 py-1 rounded-full">{color}</span>
              ))}
            </div>
          </div>
          <div className="mt-4 bg-zinc-900 rounded-lg p-3">
            <div className="text-green-300 text-xs leading-relaxed">
              💡 가을 웜톤은 따뜻하고 깊이감 있는 컬러가 잘 어울려요.
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onNext}
          className="w-full py-4 rounded-xl font-bold bg-blue-600 text-white"
        >
          다음: 스타일 선호도
        </button>
      </>
    )}
  </div>
);

// ========================================
// Step 3: 스타일 선호도
// ========================================
const Step3Content = ({ selectedGender, onGenderSelect, selectedStyles, onStyleToggle, selectedTPO, onTPOToggle, onNext }) => {
  const currentStyleCategories = selectedGender ? styleCategories[selectedGender] : [];
  const currentTPOCategories = selectedGender ? tpoCategories[selectedGender] : [];

  return (
    <div className="p-5 space-y-6 pb-10">
      <div>
        <div className="text-white text-2xl font-bold mb-2">스타일 선호도</div>
        <div className="text-zinc-400 text-sm">좋아하는 스타일과 주로 옷 입는 상황을 선택해주세요.</div>
      </div>

      {/* 성별 선택 */}
      <div>
        <div className="text-zinc-400 text-sm mb-3">성별</div>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => onGenderSelect('male')}
            className={`rounded-xl p-4 transition flex items-center justify-center gap-2 ${
              selectedGender === 'male'
                ? 'bg-blue-600 border-2 border-blue-400'
                : 'bg-zinc-900 border border-zinc-800 hover:border-zinc-600'
            }`}
          >
            <span className="text-2xl">👨</span>
            <span className={`font-semibold ${selectedGender === 'male' ? 'text-white' : 'text-zinc-400'}`}>
              남성
            </span>
          </button>
          <button
            type="button"
            onClick={() => onGenderSelect('female')}
            className={`rounded-xl p-4 transition flex items-center justify-center gap-2 ${
              selectedGender === 'female'
                ? 'bg-pink-600 border-2 border-pink-400'
                : 'bg-zinc-900 border border-zinc-800 hover:border-zinc-600'
            }`}
          >
            <span className="text-2xl">👩</span>
            <span className={`font-semibold ${selectedGender === 'female' ? 'text-white' : 'text-zinc-400'}`}>
              여성
            </span>
          </button>
        </div>
      </div>

      {/* 선호 스타일 */}
      {selectedGender && (
        <div>
          <div className="text-zinc-400 text-sm mb-3">선호 스타일</div>
          <div className="grid grid-cols-2 gap-3">
            {currentStyleCategories.map(style => {
              const imageUrl = styleImages[selectedGender]?.[style.name];
              const isSelected = selectedStyles.includes(style.name);

              return (
                <button
                  type="button"
                  key={style.name}
                  onClick={() => onStyleToggle(style.name)}
                  className={`rounded-xl p-3 transition ${
                    isSelected
                      ? 'bg-blue-600 border-2 border-blue-400'
                      : 'bg-zinc-900 border border-zinc-800 hover:border-zinc-600'
                  }`}
                >
                  <div className={`w-full aspect-square rounded-lg mb-2 overflow-hidden ${
                    isSelected ? 'ring-2 ring-blue-400' : ''
                  }`}>
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={`${style.name} 스타일`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-zinc-800 flex flex-col items-center justify-center">
                        <span className="text-4xl mb-1">{style.emoji}</span>
                        <span className="text-zinc-600 text-xs">이미지 준비중</span>
                      </div>
                    )}
                  </div>
                  <div className={`text-center font-medium text-sm ${
                    isSelected ? 'text-white' : 'text-zinc-400'
                  }`}>
                    {style.name}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* TPO 선택 */}
      {selectedGender && (
        <div>
          <div className="text-zinc-400 text-sm mb-3">주로 옷 입는 상황 (TPO)</div>
          <div className="grid grid-cols-2 gap-3">
            {currentTPOCategories.map(tpo => {
              const imageUrl = tpoImages[selectedGender]?.[tpo.name];
              const isSelected = selectedTPO.includes(tpo.name);

              return (
                <button
                  type="button"
                  key={tpo.name}
                  onClick={() => onTPOToggle(tpo.name)}
                  className={`rounded-xl p-3 transition ${
                    isSelected
                      ? 'bg-purple-600 border-2 border-purple-400'
                      : 'bg-zinc-900 border border-zinc-800 hover:border-zinc-600'
                  }`}
                >
                  <div className={`w-full aspect-square rounded-lg mb-2 overflow-hidden ${
                    isSelected ? 'ring-2 ring-purple-400' : ''
                  }`}>
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={tpo.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-zinc-800 flex flex-col items-center justify-center">
                        <span className="text-4xl mb-1">{tpo.emoji}</span>
                        <span className="text-zinc-600 text-xs">이미지 준비중</span>
                      </div>
                    )}
                  </div>
                  <div className={`text-center font-medium text-sm ${
                    isSelected ? 'text-white' : 'text-zinc-400'
                  }`}>
                    {tpo.name}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 성별 미선택 시 안내 */}
      {!selectedGender && (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center">
          <span className="text-4xl mb-3 block">👆</span>
          <div className="text-zinc-400 text-sm">
            성별을 선택하면 스타일 옵션이 표시됩니다
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={onNext}
        disabled={!selectedGender || selectedStyles.length === 0 || selectedTPO.length === 0}
        className={`w-full py-4 rounded-xl font-bold transition ${
          selectedGender && selectedStyles.length > 0 && selectedTPO.length > 0
            ? 'bg-blue-600 text-white'
            : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
        }`}
      >
        다음: 쇼핑 스타일
      </button>
    </div>
  );
};

// ========================================
// Step 4: 쇼핑 스타일
// ========================================
const Step4Content = ({ selectedShoppingStyle, onSelect, onComplete }) => (
  <div className="p-5 space-y-6 pb-10">
    <div>
      <div className="text-white text-2xl font-bold mb-2">쇼핑 스타일</div>
      <div className="text-zinc-400 text-sm">편한 쇼핑 방식을 알려주세요.</div>
    </div>

    <div className="space-y-3">
      {[
        { id: 1, title: '적극 상담형', desc: '피팅하면서 디렉터님과 상담받고 싶어요', emoji: '💬' },
        { id: 2, title: '조용한 쇼핑형', desc: '혼자 조용히 둘러보고 싶어요', emoji: '🤫' },
        { id: 3, title: '필요시 도움형', desc: '필요할 때만 도움을 요청하고 싶어요', emoji: '🙋' },
        { id: 4, title: '빠른 쇼핑형', desc: '미리 준비된 옷을 빠르게 보고 싶어요', emoji: '⚡' }
      ].map(style => (
        <div
          key={style.id}
          onClick={() => onSelect(style.id)}
          className={`rounded-xl p-4 cursor-pointer transition ${
            selectedShoppingStyle === style.id
              ? 'bg-blue-900 border-2 border-blue-500'
              : 'bg-zinc-900 border border-zinc-800 hover:border-zinc-600'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">{style.emoji}</span>
            <div>
              <div className="text-white font-semibold">{style.title}</div>
              <div className="text-zinc-500 text-xs mt-1">{style.desc}</div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <button
      type="button"
      onClick={onComplete}
      disabled={!selectedShoppingStyle}
      className={`w-full py-4 rounded-xl font-bold transition ${
        selectedShoppingStyle
          ? 'bg-blue-600 text-white'
          : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
      }`}
    >
      진단 완료!
    </button>
  </div>
);

// ========================================
// 홈 화면
// ========================================
const HomeScreen = ({ onSearch, onMap }) => (
  <div className="h-full overflow-y-auto pb-24 bg-black">
    <div className="p-5 pb-6">
      <div className="text-zinc-400 text-sm mb-1">반가워요 👋</div>
      <div className="text-white text-2xl font-bold mb-6">정하님, 어서오세요!</div>

      <div
        onClick={onSearch}
        className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 cursor-pointer hover:border-zinc-600 transition"
      >
        <div className="flex items-center gap-3 mb-3">
          <Search className="text-blue-500" size={24} />
          <span className="text-zinc-400 text-base">이번엔 어떤 고민이 있으세요?</span>
        </div>
        <div className="flex gap-2 flex-wrap">
          <span className="bg-zinc-800 text-zinc-400 text-xs px-3 py-1.5 rounded-full">성수동 데이트룩</span>
          <span className="bg-zinc-800 text-zinc-400 text-xs px-3 py-1.5 rounded-full">하체 커버 코디</span>
          <span className="bg-zinc-800 text-zinc-400 text-xs px-3 py-1.5 rounded-full">출근룩 추천</span>
        </div>
      </div>
    </div>

    <div className="px-5 mb-6">
      <div className="bg-gradient-to-br from-blue-900 to-blue-950 rounded-2xl p-5 border border-blue-800">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-lg">✨</span>
            <span className="text-white font-semibold">나의 스타일 프로필</span>
          </div>
          <button type="button" className="text-blue-400 text-xs">수정</button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-zinc-900 rounded-xl p-3">
            <div className="text-zinc-500 text-xs mb-1">체형</div>
            <div className="text-white font-semibold text-sm">하체 볼륨형</div>
          </div>
          <div className="bg-zinc-900 rounded-xl p-3">
            <div className="text-zinc-500 text-xs mb-1">퍼스널 컬러</div>
            <div className="text-white font-semibold text-sm">가을 웜톤</div>
          </div>
          <div className="bg-zinc-900 rounded-xl p-3">
            <div className="text-zinc-500 text-xs mb-1">선호 스타일</div>
            <div className="text-white font-semibold text-sm">미니멀</div>
          </div>
          <div className="bg-zinc-900 rounded-xl p-3">
            <div className="text-zinc-500 text-xs mb-1">쇼핑 스타일</div>
            <div className="text-white font-semibold text-sm">적극 상담형</div>
          </div>
        </div>
      </div>
    </div>

    <div className="px-5 mb-6">
      <div className="text-white font-bold text-lg mb-4">빠른 검색</div>
      <div className="grid grid-cols-2 gap-3">
        <div onClick={onMap} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 cursor-pointer hover:border-zinc-600 transition">
          <div className="text-2xl mb-2">📍</div>
          <div className="text-white font-semibold text-sm">내 주변 매장</div>
          <div className="text-zinc-500 text-xs mt-1">현재 위치 기반</div>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 cursor-pointer hover:border-zinc-600 transition">
          <div className="text-2xl mb-2">❤️</div>
          <div className="text-white font-semibold text-sm">찜한 디렉터</div>
          <div className="text-zinc-500 text-xs mt-1">저장한 매장</div>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 cursor-pointer hover:border-zinc-600 transition">
          <div className="text-2xl mb-2">⭐</div>
          <div className="text-white font-semibold text-sm">인기 매장</div>
          <div className="text-zinc-500 text-xs mt-1">이번 주 HOT</div>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 cursor-pointer hover:border-zinc-600 transition">
          <div className="text-2xl mb-2">🆕</div>
          <div className="text-white font-semibold text-sm">신규 매장</div>
          <div className="text-zinc-500 text-xs mt-1">새로 입점</div>
        </div>
      </div>
    </div>

    <div className="px-5 mb-6">
      <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl p-5 border border-purple-700">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🤖</span>
          <div>
            <div className="text-white font-semibold mb-1">AI 스타일 추천</div>
            <div className="text-purple-200 text-sm mb-3">
              "하체 볼륨형 + 가을 웜톤"에 맞는<br/>성수동 매장 3곳을 찾았어요!
            </div>
            <button type="button" onClick={onMap} className="bg-white text-black px-4 py-2 rounded-lg font-semibold text-sm">
              바로 보기
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ========================================
// 검색 화면 (수정: onSearch 추가)
// ========================================
const SearchScreen = ({ onClose, onSearch }) => {
  const [query, setQuery] = useState('');

  // 메시지를 useState로 고정 (최초 렌더링 시에만 랜덤 선택)
  const [message] = useState(() => {
    const messages = [
      "이번엔 어떤 스타일이 고민이신가요?",
      "성수동 데이트, 완벽하게 준비해볼까요?",
      "비 오는 날, 기분 전환할 옷이 필요하신가요?",
      "나의 체형 단점을 커버하고 싶으신가요?"
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  const handleQuickSearch = (keyword) => {
    onSearch(keyword);
  };

  return (
    <div className="absolute inset-0 bg-black z-50 flex flex-col p-6">
      <div className="flex justify-end mb-10">
        <button type="button" onClick={onClose} className="p-4 -mr-4 text-zinc-400 hover:text-white transition font-bold text-lg">
          ✕ 닫기
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center -mt-20">
        <div className="text-center mb-8 space-y-2">
          <div className="text-blue-500 font-bold text-sm tracking-wide">WHAT ARE YOU LOOKING FOR?</div>
          <div className="text-white text-2xl font-bold leading-normal">
            정하님,<br/>{message}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="w-full relative mb-8">
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-500">
            <Search size={24} />
          </div>
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="예: 성수동 데이트룩, 하체 커버..."
            className="w-full bg-zinc-900 border-2 border-blue-600 rounded-2xl py-5 pl-14 pr-5 text-white text-lg placeholder-zinc-600 focus:outline-none"
          />
        </form>

        <div className="w-full">
          <div className="text-zinc-500 text-xs text-center mb-4">이렇게 물어보세요 💬</div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              '성수동에서 나랑 잘 맞는 매장',
              '연남동 왔는데 주변 매장 있어?',
              '데이트룩 추천해줘',
              '하체 커버되는 코디',
              '홍대 스트릿 패션',
              '출근룩 찾아줘'
            ].map((keyword, idx) => (
              <button
                type="button"
                key={idx}
                onClick={() => handleQuickSearch(keyword)}
                className="bg-zinc-800 text-zinc-300 px-4 py-2 rounded-full text-sm hover:bg-zinc-700 hover:text-white transition border border-zinc-700"
              >
                {keyword}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ========================================
// 검색 결과 화면 (새로 추가!)
// ========================================
const SearchResultScreen = ({ result, onBack, onSelectShop, selectedPreview, onPreviewSelect }) => {
  const getShops = () => {
    if (result.type === 'LOCATION_MATCH' && result.location) {
      return sampleShops[result.location] || [];
    }
    if (result.type === 'NEARBY') {
      if (result.location) {
        return sampleShops[result.location] || [];
      }
      return Object.values(sampleShops).flat().slice(0, 5);
    }
    if (result.type === 'STYLE_SEARCH') {
      return filterShopsByStyle(result.style, result.tpo, result.body);
    }
    return [];
  };

  const shops = getShops();

  const getTitle = () => {
    if (result.type === 'LOCATION_MATCH') {
      return `${result.location}동 매칭 매장`;
    }
    if (result.type === 'NEARBY') {
      return result.location ? `${result.location}동 주변 매장` : '내 주변 매장';
    }
    if (result.type === 'STYLE_SEARCH') {
      const parts = [];
      if (result.style) parts.push(result.style);
      if (result.tpo) parts.push(result.tpo);
      if (result.body) parts.push(result.body + ' 커버');
      return `${parts.join(' + ')} 전문 매장`;
    }
    return '검색 결과';
  };

  const getSubtitle = () => {
    if (result.type === 'LOCATION_MATCH') {
      return '나와 가장 잘 맞는 매장을 매칭률 순으로 보여드려요';
    }
    if (result.type === 'NEARBY') {
      return '반경 1km 내 매장을 거리순으로 보여드려요';
    }
    if (result.type === 'STYLE_SEARCH') {
      return `${shops.length}개 매장을 찾았어요`;
    }
    return '';
  };

  // Case 1 & 2: 지도 뷰
  if (result.type === 'LOCATION_MATCH' || result.type === 'NEARBY') {
    return (
      <div className="h-full flex flex-col bg-black">
        {/* 헤더 */}
        <div className="flex-shrink-0 p-5 border-b border-zinc-900">
          <div className="flex items-center gap-3">
            <button type="button" onClick={onBack} className="text-white">
              <ChevronLeft size={24} />
            </button>
            <div>
              <div className="text-white font-bold text-lg">{getTitle()}</div>
              <div className="text-zinc-500 text-xs">{getSubtitle()}</div>
            </div>
          </div>
        </div>

        {/* 지도 영역 */}
        <div className="relative h-72 bg-zinc-900 flex items-center justify-center">
          <div className="text-zinc-600 text-sm">🗺️ {result.location || '현재 위치'} 지도</div>

          {/* 반경 표시 (주변 검색일 때) */}
          {result.type === 'NEARBY' && (
            <div className="absolute inset-8 border-2 border-blue-500/30 rounded-full flex items-center justify-center">
              <div className="text-blue-400 text-xs">반경 1km</div>
            </div>
          )}

          {/* 핀들 */}
          {shops.map((shop, idx) => {
            const positions = [
              { top: '25%', left: '30%' },
              { top: '45%', left: '65%' },
              { top: '60%', left: '25%' },
              { top: '35%', left: '55%' },
            ];
            const pos = positions[idx % positions.length];
            const pinColor = shop.match >= 90 ? 'bg-green-500' : shop.match >= 80 ? 'bg-blue-500' : 'bg-purple-500';

            return (
              <button
                key={shop.id}
                type="button"
                onClick={() => onPreviewSelect(selectedPreview?.id === shop.id ? null : shop)}
                className={`absolute ${pinColor} text-white text-xs font-bold w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform ${
                  selectedPreview?.id === shop.id ? 'scale-125 ring-4 ring-white' : 'hover:scale-110'
                }`}
                style={{ top: pos.top, left: pos.left }}
              >
                {shop.match}%
              </button>
            );
          })}

          {/* 현재 위치 마커 */}
          {result.type === 'NEARBY' && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg" />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-red-400 whitespace-nowrap">내 위치</div>
            </div>
          )}
        </div>

        {/* 범례 */}
        <div className="px-5 py-3 bg-zinc-950 flex justify-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full" />
            <span className="text-zinc-400 text-xs">90%+</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full" />
            <span className="text-zinc-400 text-xs">80-89%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full" />
            <span className="text-zinc-400 text-xs">70-79%</span>
          </div>
        </div>

        {/* 선택된 매장 미니 카드 */}
        {selectedPreview && (
          <div className="absolute left-5 right-5 bottom-32 bg-zinc-900 border border-zinc-700 rounded-2xl p-4 shadow-2xl">
            <button
              type="button"
              onClick={() => onPreviewSelect(null)}
              className="absolute top-3 right-3 text-zinc-500 hover:text-white"
            >
              <X size={20} />
            </button>

            <div className="flex gap-4">
              {/* AI 모델 이미지 */}
              <div className="w-24 h-32 bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-xl flex items-center justify-center flex-shrink-0">
                <div className="text-center">
                  <div className="text-3xl mb-1">👗</div>
                  <div className="text-zinc-500 text-[10px]">AI 코디</div>
                </div>
              </div>

              {/* 매장 정보 */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="text-white font-bold">{selectedPreview.name}</div>
                    <div className="text-zinc-500 text-xs">{selectedPreview.director} 디렉터</div>
                  </div>
                  <div className="text-blue-400 font-bold text-lg">{selectedPreview.match}%</div>
                </div>

                <div className="flex items-center gap-2 text-zinc-400 text-xs mb-2">
                  <Navigation size={12} />
                  <span>도보 {selectedPreview.distance}</span>
                </div>

                <div className="flex gap-1.5 flex-wrap mb-3">
                  {selectedPreview.tags.map(tag => (
                    <span key={tag} className="bg-zinc-800 text-blue-300 text-xs px-2 py-0.5 rounded">{tag}</span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => onSelectShop(selectedPreview)}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold text-sm"
                >
                  매장 상세보기
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 리스트 (스크롤) */}
        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          {shops.map((shop) => (
            <div
              key={shop.id}
              onClick={() => onPreviewSelect(selectedPreview?.id === shop.id ? null : shop)}
              className={`bg-zinc-900 rounded-xl p-4 border cursor-pointer transition ${
                selectedPreview?.id === shop.id ? 'border-blue-500' : 'border-zinc-800'
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-white font-semibold">{shop.name}</div>
                  <div className="text-zinc-500 text-xs">{shop.director} 디렉터 · 도보 {shop.distance}</div>
                </div>
                <div className={`font-bold ${shop.match >= 90 ? 'text-green-400' : 'text-blue-400'}`}>
                  {shop.match}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Case 3: 스타일 검색 - 리스트 뷰
  return (
    <div className="h-full flex flex-col bg-black">
      {/* 헤더 */}
      <div className="flex-shrink-0 p-5 border-b border-zinc-900">
        <div className="flex items-center gap-3">
          <button type="button" onClick={onBack} className="text-white">
            <ChevronLeft size={24} />
          </button>
          <div>
            <div className="text-white font-bold text-lg">{getTitle()}</div>
            <div className="text-zinc-500 text-xs">{getSubtitle()}</div>
          </div>
        </div>
      </div>

      {/* 필터 태그 */}
      <div className="px-5 py-3 flex gap-2 border-b border-zinc-900">
        {result.style && (
          <span className="bg-blue-600 text-white text-xs px-3 py-1.5 rounded-full">{result.style}</span>
        )}
        {result.tpo && (
          <span className="bg-purple-600 text-white text-xs px-3 py-1.5 rounded-full">{result.tpo}</span>
        )}
        {result.body && (
          <span className="bg-pink-600 text-white text-xs px-3 py-1.5 rounded-full">{result.body} 커버</span>
        )}
      </div>

      {/* 매장 카드 리스트 */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4">
        {shops.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-4xl mb-4">😢</div>
            <div className="text-zinc-400">조건에 맞는 매장을 찾지 못했어요</div>
          </div>
        ) : (
          shops.map((shop) => (
            <div
              key={shop.id}
              onClick={() => onSelectShop(shop)}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 cursor-pointer hover:border-zinc-600 transition"
            >
              <div className="flex gap-4">
                {/* AI 모델 썸네일 */}
                <div className="w-20 h-28 bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <div className="text-center">
                    <div className="text-2xl">👗</div>
                    <div className="text-zinc-600 text-[10px]">AI 코디</div>
                  </div>
                </div>

                {/* 매장 정보 */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="text-white font-bold">{shop.name}</div>
                      <div className="text-zinc-500 text-xs">{shop.director} 디렉터</div>
                    </div>
                    <div className="text-right">
                      <div className={`font-bold text-lg ${shop.match >= 90 ? 'text-green-400' : 'text-blue-400'}`}>
                        {shop.match}%
                      </div>
                      <div className="text-zinc-500 text-xs">매칭률</div>
                    </div>
                  </div>

                  <div className="flex gap-1.5 flex-wrap mb-2">
                    {shop.tags.map(tag => (
                      <span key={tag} className="bg-zinc-800 text-blue-300 text-xs px-2 py-0.5 rounded">{tag}</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-zinc-500 text-xs">
                    <div className="flex items-center gap-1">
                      <Star size={12} className="text-yellow-500" fill="currentColor" />
                      <span>4.8</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={12} />
                      <span>도보 {shop.distance}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// ========================================
// 지도 화면
// ========================================
const MapScreen = ({ onBack, onSelectDirector }) => (
  <div className="h-full overflow-y-auto pb-24 bg-black">
    <div className="p-5 border-b border-zinc-900">
      <div className="flex items-center gap-3">
        <button type="button" onClick={onBack} className="text-white">
          <ChevronLeft size={24} />
        </button>
        <div className="text-white font-bold text-lg">성수동 주변 매장</div>
      </div>
    </div>

    <div className="relative h-64 bg-zinc-900 flex items-center justify-center">
      <div className="text-zinc-600">지도 영역</div>
      <div className="absolute top-1/4 left-1/3 bg-green-500 text-white text-xs font-bold w-10 h-10 rounded-full flex items-center justify-center shadow-lg">95%</div>
      <div className="absolute top-1/2 left-2/3 bg-blue-500 text-white text-xs font-bold w-10 h-10 rounded-full flex items-center justify-center shadow-lg">92%</div>
      <div className="absolute bottom-1/3 left-1/4 bg-purple-500 text-white text-xs font-bold w-10 h-10 rounded-full flex items-center justify-center shadow-lg">88%</div>
    </div>

    <div className="px-5 py-3 bg-zinc-950 flex justify-center gap-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-green-500 rounded-full" />
        <span className="text-zinc-400 text-xs">90%+</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-blue-500 rounded-full" />
        <span className="text-zinc-400 text-xs">80-89%</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-purple-500 rounded-full" />
        <span className="text-zinc-400 text-xs">70-79%</span>
      </div>
    </div>

    <div className="p-5 space-y-3">
      {[
        { name: '라벨 스튜디오', director: '김민지', match: 95, distance: '5분' },
        { name: '무드 클로젯', director: '박서연', match: 92, distance: '8분' },
        { name: '어반 하우스', director: '이하은', match: 88, distance: '12분' }
      ].map((shop, idx) => (
        <div key={idx} onClick={() => onSelectDirector(shop)} className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 cursor-pointer">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-white font-semibold">{shop.name}</div>
              <div className="text-zinc-500 text-xs">{shop.director} 디렉터 · 도보 {shop.distance}</div>
            </div>
            <div className="text-blue-400 font-bold">{shop.match}%</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ========================================
// 디렉터 상세 화면
// ========================================
const DirectorScreen = ({ director, onBack, onBook }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const directorName = director?.director || '김민지';
  const images = portfolioImages[directorName] || [];

  return (
    <div className="h-full overflow-y-auto pb-24 bg-black">
      <div className="p-5 border-b border-zinc-900">
        <div className="flex items-center gap-3">
          <button type="button" onClick={onBack} className="text-white">
            <ChevronLeft size={24} />
          </button>
          <div className="text-white font-bold text-lg">디렉터 프로필</div>
        </div>
      </div>

      <div className="p-5 space-y-5">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-full flex items-center justify-center">
            <span className="text-3xl">👤</span>
          </div>
          <div className="flex-1">
            <div className="text-white text-xl font-bold">{director?.director || '김민지'} 디렉터</div>
            <div className="text-zinc-500">{director?.name || '라벨 스튜디오'}</div>
            <div className="flex items-center gap-2 mt-2">
              <Star className="text-yellow-500" size={16} fill="currentColor" />
              <span className="text-white font-semibold">4.9</span>
              <span className="text-zinc-500 text-sm">(127개 리뷰)</span>
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">{director?.match || 95}%</div>
            <div className="text-zinc-500 text-xs">매칭도</div>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
          <div className="text-zinc-400 text-sm mb-3">전문 분야</div>
          <div className="flex gap-2 flex-wrap">
            {(director?.tags || ['#하체커버', '#미니멀', '#체형보정', '#직설조언', '#웜톤전문']).map(tag => (
              <span key={tag} className="bg-blue-900 text-blue-300 text-sm px-3 py-1.5 rounded-full">{tag}</span>
            ))}
          </div>
        </div>

        <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 space-y-3">
          <div className="flex items-center gap-3">
            <MapPin className="text-zinc-500" size={18} />
            <span className="text-white text-sm">연남로 2가 · 도보 {director?.distance || '5분'}</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="text-zinc-500" size={18} />
            <span className="text-white text-sm">영업 중 · 12:00 - 21:00</span>
          </div>
        </div>

        <div>
          <div className="text-white font-semibold mb-3">스타일링 포트폴리오</div>
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2, 3, 4, 5].map(i => {
              const imgSrc = images[i];

              return (
                <div
                  key={i}
                  onClick={() => imgSrc && setSelectedImage({ src: imgSrc, index: i })}
                  className={`aspect-square bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-lg overflow-hidden ${imgSrc ? 'cursor-pointer hover:ring-2 hover:ring-blue-500 transition' : ''}`}
                >
                  {imgSrc ? (
                    <img
                      src={imgSrc}
                      alt={`포트폴리오 ${i + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-zinc-600 text-xs">이미지 {i + 1}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <button type="button" onClick={onBook} className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold">
          예약하기
        </button>
      </div>

      {/* 이미지 확대 모달 */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 text-white bg-zinc-800 rounded-full p-2 hover:bg-zinc-700 transition"
          >
            <X size={24} />
          </button>

          <div className="text-center px-4">
            <img
              src={selectedImage.src}
              alt={`포트폴리오 ${selectedImage.index + 1}`}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="mt-4 text-zinc-400 text-sm">
              {selectedImage.index + 1} / {images.filter(Boolean).length}
            </div>
          </div>

          {/* 이전/다음 버튼 */}
          {selectedImage.index > 0 && images[selectedImage.index - 1] && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage({ src: images[selectedImage.index - 1], index: selectedImage.index - 1 });
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-zinc-800/80 rounded-full p-3 hover:bg-zinc-700 transition"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {selectedImage.index < 5 && images[selectedImage.index + 1] && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage({ src: images[selectedImage.index + 1], index: selectedImage.index + 1 });
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-zinc-800/80 rounded-full p-3 hover:bg-zinc-700 transition"
            >
              <ChevronLeft size={28} className="rotate-180" />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

// ========================================
// 예약 화면
// ========================================
const BookingScreen = ({ director, onBack, onHome }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [requestNote, setRequestNote] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      setIsBooked(true);
    }
  };

  // 예약 성공 화면
  if (isBooked) {
    return (
      <div className="h-full bg-black flex flex-col items-center justify-center p-6">
        <div className="text-center">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <Check size={48} className="text-white" strokeWidth={3} />
          </div>
          <div className="text-white text-2xl font-bold mb-2">예약 완료!</div>
          <div className="text-zinc-400 mb-8">
            {director?.director || '김민지'} 디렉터님께<br/>
            예약 요청이 전송되었어요
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 mb-8 text-left">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-zinc-500">매장</span>
                <span className="text-white font-semibold">{director?.name || '라벨 스튜디오'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">디렉터</span>
                <span className="text-white font-semibold">{director?.director || '김민지'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">날짜</span>
                <span className="text-white font-semibold">{selectedDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">시간</span>
                <span className="text-white font-semibold">{selectedTime}</span>
              </div>
              {requestNote && (
                <div className="pt-3 border-t border-zinc-800">
                  <div className="text-zinc-500 text-sm mb-1">요청사항</div>
                  <div className="text-white text-sm">{requestNote}</div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-blue-950 border border-blue-800 rounded-xl p-4 mb-8">
            <div className="flex items-start gap-3">
              <span className="text-xl">📱</span>
              <div className="text-left text-sm">
                <div className="text-blue-300 font-semibold mb-1">카카오톡 알림 발송</div>
                <div className="text-blue-200 text-xs">디렉터님 확인 후 예약 확정 알림을 보내드려요</div>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onHome}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition"
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto pb-24 bg-black">
      <div className="p-5 border-b border-zinc-900">
        <div className="flex items-center gap-3">
          <button type="button" onClick={onBack} className="text-white">
            <ChevronLeft size={24} />
          </button>
          <div className="text-white font-bold text-lg">예약하기</div>
        </div>
      </div>

      <div className="p-5 space-y-5">
        <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
          <div className="text-zinc-400 text-sm mb-2">예약 매장</div>
          <div className="text-white font-semibold">{director?.name || '라벨 스튜디오'}</div>
          <div className="text-zinc-500 text-sm">{director?.director || '김민지'} 디렉터</div>
        </div>

        <div>
          <div className="text-white font-semibold mb-3">날짜 선택</div>
          <div className="grid grid-cols-4 gap-2">
            {['12/11', '12/12', '12/13', '12/14'].map(date => (
              <button
                type="button"
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`py-3 rounded-lg text-sm transition ${
                  selectedDate === date
                    ? 'bg-blue-600 border-2 border-blue-400 text-white font-semibold'
                    : 'bg-zinc-900 border border-zinc-800 text-white hover:border-zinc-600'
                }`}
              >
                {date}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="text-white font-semibold mb-3">시간 선택</div>
          <div className="grid grid-cols-3 gap-2">
            {['14:00', '15:00', '16:00', '17:00', '18:00', '19:00'].map(time => (
              <button
                type="button"
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`py-3 rounded-lg text-sm transition ${
                  selectedTime === time
                    ? 'bg-blue-600 border-2 border-blue-400 text-white font-semibold'
                    : 'bg-zinc-900 border border-zinc-800 text-white hover:border-zinc-600'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-blue-950 border border-blue-800 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <span className="text-xl">ℹ️</span>
            <div className="text-sm">
              <div className="text-blue-300 font-semibold mb-1">스타일 리포트 자동 전송</div>
              <div className="text-blue-200 text-xs">예약 시 나의 스타일 리포트가 디렉터님께 전달돼요</div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-white font-semibold mb-3">그 외 요청사항</div>
          <textarea
            value={requestNote}
            onChange={(e) => setRequestNote(e.target.value.slice(0, 200))}
            placeholder="예: 특별히 커버하고 싶은 부위, 원하는 스타일, 예산 범위 등을 적어주세요"
            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-white placeholder-zinc-600 text-sm resize-none focus:outline-none focus:border-blue-500 transition"
            rows={4}
          />
          <div className="text-zinc-600 text-xs mt-2 text-right">{requestNote.length}/200</div>
        </div>

        <button
          type="button"
          onClick={handleBooking}
          disabled={!selectedDate || !selectedTime}
          className={`w-full py-4 rounded-xl font-bold transition ${
            selectedDate && selectedTime
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
          }`}
        >
          예약 확정하기
        </button>
      </div>
    </div>
  );
};

// ========================================
// 하단 네비게이션
// ========================================
const BottomNav = ({ currentScreen, onHome }) => (
  <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-zinc-950 border-t border-zinc-800 z-40">
    <div className="grid grid-cols-3 items-end px-2 py-2">
      <button type="button" className="flex flex-col items-center gap-1 py-3 rounded-xl transition text-gray-500">
        <Heart size={22} />
        <span className="text-xs font-semibold">찜</span>
      </button>

      <button type="button" onClick={onHome} className="flex flex-col items-center -mt-8">
        <div className={`rounded-full p-4 shadow-lg ${currentScreen === 'home' ? 'bg-blue-500' : 'bg-blue-600'}`}>
          <Home size={28} className="text-white" />
        </div>
        <span className={`text-xs font-semibold mt-2 ${currentScreen === 'home' ? 'text-blue-500' : 'text-gray-500'}`}>홈</span>
      </button>

      <button type="button" className="flex flex-col items-center gap-1 py-3 rounded-xl transition text-gray-500">
        <User size={22} />
        <span className="text-xs font-semibold">마이</span>
      </button>
    </div>
  </div>
);

export default CustomerAppPrototype;