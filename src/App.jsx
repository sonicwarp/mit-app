import React, { useState } from 'react';
import { Home, Calendar, Camera, TrendingUp, User, ChevronRight, ChevronLeft, Bell, Sparkles, Check, Upload } from 'lucide-react';

const OwnerAppPrototype = () => {
const [isOpen, setIsOpen] = useState(true);
const [currentScreen, setCurrentScreen] = useState('login');
const [selectedCustomer, setSelectedCustomer] = useState(null);
const [registerStep, setRegisterStep] = useState(1);
const [isAnalyzing, setIsAnalyzing] = useState(false);
const [analysisComplete, setAnalysisComplete] = useState(false);
const [uploadedPhotos, setUploadedPhotos] = useState([false, false, false, false, false]);
const [newItemStep, setNewItemStep] = useState(1);
const [uploadedClothes, setUploadedClothes] = useState([false, false, false, false]);
const [isGenerating, setIsGenerating] = useState(false);
const [generatedModels, setGeneratedModels] = useState([false, false, false]);
const [selectedModel, setSelectedModel] = useState(null);

// 로그인 화면
const LoginScreen = () => (
<div className="h-full overflow-y-auto bg-black flex flex-col justify-center px-6 py-10">
  {/* 로고 */}
  <div className="text-center mb-10">
    <div className="text-white text-5xl font-black tracking-tight mb-1">Mit</div>
    <div className="text-zinc-500 text-xs tracking-widest uppercase">MEET & FIT : Business</div>
    <div className="text-zinc-400 text-sm mt-6 leading-relaxed">
      사장님이야말로 우리 매장의 얼굴,<br/>
      <span className="text-white font-bold">브랜드</span>로 만들어드립니다
    </div>
  </div>

  {/* 간편 가입 */}
  <div className="text-zinc-500 text-xs text-center mb-5 tracking-wide">간편 가입</div>

  <div className="space-y-2.5 mb-6">
    <button className="w-full bg-yellow-400 text-black py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-yellow-300 transition">
      <span className="text-lg">💬</span>
      카카오로 시작하기
    </button>
    <button className="w-full bg-green-500 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-green-400 transition">
      <span className="text-lg font-bold">N</span>
      네이버로 시작하기
    </button>
  </div>

  {/* 구분선 */}
  <div className="flex items-center gap-4 my-6">
    <div className="flex-1 h-px bg-zinc-800" />
    <span className="text-zinc-600 text-xs">또는</span>
    <div className="flex-1 h-px bg-zinc-800" />
  </div>

  {/* 이메일 로그인 */}
  <div className="space-y-2.5 mb-4">
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">📧</span>
      <input
              type="email"
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-4 pl-12 pr-4 text-white placeholder-zinc-600 focus:border-white focus:outline-none transition"
              placeholder="이메일"
      />
    </div>
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">🔒</span>
      <input
              type="password"
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-4 pl-12 pr-4 text-white placeholder-zinc-600 focus:border-white focus:outline-none transition"
              placeholder="비밀번호"
      />
    </div>
  </div>

  <button
          onClick={() => setCurrentScreen('home')}
  className="w-full bg-white text-black py-4 rounded-lg font-bold text-base hover:bg-zinc-200 transition mb-8"
  >
  로그인
  </button>

  {/* 푸터 */}
  <div className="text-center text-sm">
    <span className="text-zinc-500">아직 계정이 없으신가요? </span>
    <button
            onClick={() => {
    setRegisterStep(1);
    setCurrentScreen('register');
    }}
    className="text-white font-semibold"
    >
    회원가입
    </button>
    <div className="mt-2">
      <button className="text-zinc-500">비밀번호 찾기</button>
    </div>
  </div>
</div>
);

// 회원가입 Step 1: 기본 정보
const RegisterStep1 = () => {
  // 휴무일 상태 관리 (기본값: '월'요일 선택됨)
  const [offDays, setOffDays] = useState(['월']);

  return (
    <div className="p-5 space-y-6">
      <div>
        <div className="text-white text-2xl font-bold mb-2">매장 기본 정보</div>
        <div className="text-zinc-400 text-sm">매장 운영에 필요한 기본 정보를 입력해주세요. 고객에게 우리 매장을 추천할 때 도움이 됩니다.</div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-zinc-400 text-sm mb-2 block">매장명</label>
          <input
            type="text"
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-4 px-4 text-white placeholder-zinc-600 focus:border-white focus:outline-none transition"
            placeholder="예: 미니멀샵"
          />
        </div>

        <div>
          <label className="text-zinc-400 text-sm mb-2 block">매장 위치</label>
          <input
            type="text"
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-4 px-4 text-white placeholder-zinc-600 focus:border-white focus:outline-none transition"
            placeholder="예: 성수동 2가 123-45"
          />
        </div>

        <div>
          <label className="text-zinc-400 text-sm mb-2 block">영업 시간</label>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-zinc-400 text-sm w-10">평일</span>
              <select className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg py-3 px-3 text-white focus:border-white focus:outline-none">
                <option>09:00</option>
                <option>10:00</option>
                <option>11:00</option>
                <option>12:00</option>
              </select>
              <span className="text-zinc-500">~</span>
              <select className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg py-3 px-3 text-white focus:border-white focus:outline-none">
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
                <option>23:00</option>
              </select>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-zinc-400 text-sm w-10">주말</span>
              <select className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg py-3 px-3 text-white focus:border-white focus:outline-none">
                <option>09:00</option>
                <option>10:00</option>
                <option>11:00</option>
                <option>12:00</option>
              </select>
              <span className="text-zinc-500">~</span>
              <select className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg py-3 px-3 text-white focus:border-white focus:outline-none">
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
                <option>23:00</option>
              </select>
            </div>
          </div>
        </div>

        {/* 휴무일 선택 (수정됨: 다중 선택 및 클릭 동작 추가) */}
        <div>
          <label className="text-zinc-400 text-sm mb-2 block">휴무일 (다중 선택 가능)</label>
          <div className="flex gap-2">
            {['월', '화', '수', '목', '금', '토', '일'].map((day) => (
              <button
                key={day}
                onClick={() => {
                  if (offDays.includes(day)) {
                    setOffDays(offDays.filter((d) => d !== day)); // 이미 선택됐으면 해제
                  } else {
                    setOffDays([...offDays, day]); // 선택 안 됐으면 추가
                  }
                }}
                className={`flex-1 py-3 rounded-lg text-sm font-medium transition border ${
                  offDays.includes(day)
                    ? 'bg-white text-black border-white font-bold' // 선택된 상태
                    : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-600' // 선택 안 된 상태
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-zinc-400 text-sm mb-2 block">연락처</label>
          <input
            type="tel"
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-4 px-4 text-white placeholder-zinc-600 focus:border-white focus:outline-none transition"
            placeholder="010-0000-0000"
          />
        </div>

        <div>
          <label className="text-zinc-400 text-sm mb-2 block">인스타그램</label>
          <input
            type="text"
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-4 px-4 text-white placeholder-zinc-600 focus:border-white focus:outline-none transition"
            placeholder="@instagram_id"
          />
        </div>

        {/* 매장 소개 (수정됨: 문구 추가) */}
        <div>
          <label className="text-zinc-400 text-sm mb-2 block">
            매장 소개 <span className="text-blue-500 text-xs font-normal ml-1">: 이를 기반으로 고객에게 추천을 해드립니다.</span>
          </label>
          <textarea
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-4 px-4 text-white placeholder-zinc-600 focus:border-white focus:outline-none transition resize-none"
            rows="3"
            placeholder="우리 매장의 특징을 간단히 소개해주세요"
          />
        </div>
      </div>
    </div>
  );
};

// 회원가입 Step 2: AI 스타일 분석 (태그 수정 기능 추가됨)
const RegisterStep2 = () => {
  // 태그 데이터 상태 관리
  const [tpoTags, setTpoTags] = useState(['데일리', '데이트', '출근']);
  const [styleTags, setStyleTags] = useState(['미니멀', '페미닌']);
  const [colorTags, setColorTags] = useState(['베이지', '화이트', '브라운', '블랙']);

  // 수정 모드 상태
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('TPO'); // 현재 추가하려는 카테고리
  const [newTagInput, setNewTagInput] = useState('');

  // AI 분석 시뮬레이션
  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
      // 분석 완료 시 초기값 세팅 (실제로는 AI 결과가 들어옴)
      setTpoTags(['데일리', '데이트', '출근']);
      setStyleTags(['미니멀', '페미닌']);
      setColorTags(['베이지', '화이트', '브라운', '블랙']);
    }, 2000);
  };

  // 태그 삭제 핸들러
  const removeTag = (category, tagToRemove) => {
    if (category === 'TPO') {
      setTpoTags(tpoTags.filter(tag => tag !== tagToRemove));
    } else if (category === 'STYLE') {
      setStyleTags(styleTags.filter(tag => tag !== tagToRemove));
    } else if (category === 'COLOR') {
      setColorTags(colorTags.filter(tag => tag !== tagToRemove));
    }
  };

  // 태그 추가 핸들러
  const addTag = () => {
    if (!newTagInput.trim()) return;

    if (activeTab === 'TPO' && !tpoTags.includes(newTagInput)) {
      setTpoTags([...tpoTags, newTagInput]);
    } else if (activeTab === 'STYLE' && !styleTags.includes(newTagInput)) {
      setStyleTags([...styleTags, newTagInput]);
    } else if (activeTab === 'COLOR' && !colorTags.includes(newTagInput)) {
      setColorTags([...colorTags, newTagInput]);
    }
    setNewTagInput(''); // 입력창 초기화
  };

  return (
    <div className="p-5 space-y-6">
      <div>
        <div className="text-white text-2xl font-bold mb-2">AI 스타일 분석</div>
        <div className="text-zinc-400 text-sm">
          <span className="text-blue-400 font-bold">사장님이 직접 스타일링한 사진</span>을 올려주세요.
          AI가 이를 분석해서 <span className="text-blue-400 font-bold">비슷한 스타일을 가지거나 우리 스타일에 호감이 있는 고객을 매칭</span>해드려요.
        </div>
      </div>

      {/* 안내 카드 */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex gap-3 items-start">
        <span className="text-2xl mt-0.5">💡</span>
        <div className="text-xs text-zinc-400 flex flex-col gap-2 tracking-tight">
          <div className="flex items-start gap-1.5">
              <span className="flex-shrink-0">-</span>
              <span className="break-keep leading-relaxed"><span className="text-blue-400 font-bold">사장님이 직접 스타일링한 옷</span>을 착용하여 촬영해주세요.</span>
          </div>
          <div className="flex items-start gap-1.5">
              <span className="flex-shrink-0">-</span>
              <span className="break-keep leading-relaxed">얼굴을 제외한 <span className="text-blue-400 font-bold">전신</span>을 촬영 해주세요.</span>
          </div>
          <div className="flex items-start gap-1.5">
              <span className="flex-shrink-0">-</span>
              <span className="break-keep leading-relaxed"><span className="text-blue-400 font-bold">매장의 주력 스타일로 3~5장</span> 정도 촬영해주세요.</span>
          </div>
          <div className="flex items-start gap-1.5">
              <span className="flex-shrink-0">-</span>
              <span className="break-keep leading-relaxed"><span className="text-blue-400 font-bold">단순하고 중립적인 배경(흰색 벽)</span> 앞에서 촬영하는 것이 좋습니다.</span>
          </div>
        </div>
      </div>

      {/* 사진 업로드 */}
      <div>
        <label className="text-zinc-400 text-sm mb-3 block">스타일 사진 업로드 (3-5장)</label>
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2, 3, 4].map((idx) => (
            <button
              key={idx}
              onClick={() => {
                const newPhotos = [...uploadedPhotos];
                newPhotos[idx] = !newPhotos[idx];
                setUploadedPhotos(newPhotos);
              }}
              className={`aspect-square rounded-xl flex items-center justify-center transition ${
                uploadedPhotos[idx]
                  ? 'bg-blue-600 border-2 border-blue-400'
                  : 'bg-zinc-900 border border-zinc-800 hover:border-zinc-600'
              }`}
            >
              {uploadedPhotos[idx] ? (
                <Check className="text-white" size={32} />
              ) : (
                <Upload className="text-zinc-500" size={24} />
              )}
            </button>
          ))}
        </div>
        <div className="text-zinc-500 text-xs mt-2">
          {uploadedPhotos.filter(Boolean).length}/5장 업로드됨
        </div>
      </div>

      {/* 분석 시작 버튼 */}
      {!isAnalyzing && !analysisComplete && (
        <button
          onClick={handleAnalyze}
          disabled={uploadedPhotos.filter(Boolean).length < 3}
          className={`w-full py-4 rounded-xl font-bold transition ${
            uploadedPhotos.filter(Boolean).length >= 3
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
          }`}
        >
          🤖 AI 분석 시작
        </button>
      )}

      {/* 분석 중 */}
      {isAnalyzing && (
        <div className="bg-zinc-900 rounded-xl p-6 text-center border border-zinc-800">
          <div className="text-4xl mb-3 animate-pulse">🤖</div>
          <div className="text-white font-semibold mb-1">AI가 분석 중이에요...</div>
          <div className="text-zinc-400 text-sm">잠시만 기다려주세요</div>
        </div>
      )}

      {/* 분석 결과 및 수정 영역 */}
      {analysisComplete && (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
          <div className="bg-green-950 border border-green-700 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">✅</span>
                <span className="text-green-300 font-semibold">분석 완료!</span>
              </div>
              <span className="text-green-400 text-xs">틀린 태그는 터치하여 삭제하세요</span>
            </div>

            <div className="space-y-4">
              {/* TPO 태그 */}
              <div>
                <div className="text-zinc-400 text-xs mb-1">주력 TPO</div>
                <div className="flex gap-2 flex-wrap">
                  {tpoTags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => removeTag('TPO', tag)}
                      className="group bg-zinc-800 text-green-300 text-xs px-3 py-1.5 rounded-full flex items-center gap-1 hover:bg-red-900/50 hover:text-red-300 transition"
                    >
                      {tag}
                      <span className="hidden group-hover:inline">✕</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 스타일 태그 */}
              <div>
                <div className="text-zinc-400 text-xs mb-1">주력 스타일</div>
                <div className="flex gap-2 flex-wrap">
                  {styleTags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => removeTag('STYLE', tag)}
                      className="group bg-zinc-800 text-blue-300 text-xs px-3 py-1.5 rounded-full flex items-center gap-1 hover:bg-red-900/50 hover:text-red-300 transition"
                    >
                      {tag}
                      <span className="hidden group-hover:inline">✕</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 색상 태그 */}
              <div>
                <div className="text-zinc-400 text-xs mb-1">주 색상</div>
                <div className="flex gap-2 flex-wrap">
                  {colorTags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => removeTag('COLOR', tag)}
                      className="group bg-zinc-800 text-purple-300 text-xs px-3 py-1.5 rounded-full flex items-center gap-1 hover:bg-red-900/50 hover:text-red-300 transition"
                    >
                      {tag}
                      <span className="hidden group-hover:inline">✕</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 태그 추가/수정 에디터 */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 transition-all">
            {!isEditing ? (
              <div className="flex justify-between items-center">
                <div className="text-zinc-400 text-xs">분석 결과가 다른가요?</div>
                <button
                  onClick={() => setIsEditing(true)}
                  className="text-blue-400 text-sm font-bold flex items-center gap-1 hover:text-blue-300"
                >
                  + 태그 직접 추가하기
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-bold text-sm">태그 직접 추가</span>
                  <button onClick={() => setIsEditing(false)} className="text-zinc-500 text-xs">닫기</button>
                </div>

                {/* 탭 선택 */}
                <div className="flex bg-zinc-950 p-1 rounded-lg">
                  {['TPO', 'STYLE', 'COLOR'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 py-1.5 text-xs font-medium rounded-md transition ${
                        activeTab === tab
                          ? 'bg-zinc-800 text-white shadow'
                          : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      {tab === 'TPO' ? 'TPO' : tab === 'STYLE' ? '스타일' : '색상'}
                    </button>
                  ))}
                </div>

                {/* 입력창 */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newTagInput}
                    onChange={(e) => setNewTagInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTag()}
                    className="flex-1 bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
                    placeholder={`${activeTab === 'TPO' ? 'ex. 하객룩' : activeTab === 'STYLE' ? 'ex. 힙스터' : 'ex. 네이비'} 입력`}
                  />
                  <button
                    onClick={addTag}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700"
                  >
                    추가
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// 회원가입 Step 3: 완료 및 정보 확인
const RegisterStep3 = () => (
  <div className="p-5 flex flex-col h-full bg-black pb-24">
    {/* 상단 완료 메시지 */}
    <div className="text-center mt-4 mb-6">
      <div className="text-5xl mb-3 animate-bounce">🎉</div>
      <div className="text-white text-2xl font-bold mb-2">매장 등록 완료!</div>
      <div className="text-zinc-400 text-sm">
        이제 Mit에서 딱 맞는 고객을 만날 준비가 되었습니다.
      </div>
    </div>

    {/* 1. 예상 효과 (축소된 버전) */}
    <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-800 rounded-xl p-4 mb-6">
      <div className="flex justify-between text-center divide-x divide-white/10">
        <div className="flex-1 px-2">
          <div className="text-zinc-400 text-[10px] mb-1">월 예상 방문</div>
          <div className="text-white font-bold text-lg">30명+</div>
        </div>
        <div className="flex-1 px-2">
          <div className="text-zinc-400 text-[10px] mb-1">매칭 고객</div>
          <div className="text-white font-bold text-lg">150명</div>
        </div>
        <div className="flex-1 px-2">
          <div className="text-zinc-400 text-[10px] mb-1">상위 노출</div>
          <div className="text-blue-400 font-bold text-lg">Top 5%</div>
        </div>
      </div>
    </div>

    {/* 2. 입력 정보 최종 확인 (새로 추가됨) */}
    <div className="flex-1 overflow-y-auto -mx-2 px-2">
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg">📝</span>
          <span className="text-white font-bold">등록 정보 확인</span>
        </div>

        {/* 기본 정보 섹션 */}
        <div className="space-y-3 border-b border-zinc-800 pb-5">
          <div className="text-zinc-500 text-xs font-bold uppercase tracking-wider">기본 정보</div>
          <div className="grid grid-cols-[80px_1fr] gap-y-2 text-sm">
            <div className="text-zinc-400">매장명</div>
            <div className="text-white font-medium">미니멀샵</div>

            <div className="text-zinc-400">위치</div>
            <div className="text-white">성수동 2가 123-45</div>

            <div className="text-zinc-400">영업시간</div>
            <div className="text-white">11:00 ~ 21:00</div>

            <div className="text-zinc-400">휴무일</div>
            <div className="text-white">매주 월요일</div>
          </div>
        </div>

        {/* 스타일 정보 섹션 */}
        <div className="space-y-3">
          <div className="text-zinc-500 text-xs font-bold uppercase tracking-wider">스타일 태그</div>

          <div>
            <div className="text-zinc-400 text-xs mb-1.5">TPO</div>
            <div className="flex gap-1.5 flex-wrap">
              {['데일리', '데이트', '출근'].map(t => (
                <span key={t} className="bg-zinc-800 text-green-300 text-xs px-2 py-1 rounded">{t}</span>
              ))}
            </div>
          </div>

          <div>
            <div className="text-zinc-400 text-xs mb-1.5">스타일</div>
            <div className="flex gap-1.5 flex-wrap">
              {['미니멀', '페미닌'].map(t => (
                <span key={t} className="bg-zinc-800 text-blue-300 text-xs px-2 py-1 rounded">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4 text-zinc-500 text-xs">
        * 정보 수정은 '내 정보' 탭에서 언제든 가능합니다.
      </div>
    </div>

    {/* 하단 고정 버튼 */}
    <div className="mt-4">
      <button
        onClick={() => setCurrentScreen('home')}
        className="w-full bg-white text-black py-4 rounded-xl font-bold text-base hover:bg-zinc-200 transition shadow-lg shadow-white/10"
      >
        사장님 앱 시작하기
      </button>
    </div>
  </div>
);

// 회원가입 화면
const RegisterScreen = () => (
<div className="h-full overflow-y-auto bg-black pb-24">
  {/* 헤더 */}
  <div className="sticky top-0 bg-black z-10 p-5 border-b border-zinc-900">
    <div className="flex items-center gap-3 mb-4">
      <button
              onClick={() => {
      if (registerStep > 1) {
      if (registerStep === 2) {
      setAnalysisComplete(false);
      setIsAnalyzing(false);
      }
      setRegisterStep(registerStep - 1);
      } else {
      setCurrentScreen('login');
      }
      }}
      className="text-white hover:bg-zinc-800 rounded-full p-1.5 transition"
      >
      <ChevronLeft size={24} />
      </button>
      <div className="text-white font-bold text-lg">매장 등록</div>
    </div>

    {/* 프로그레스 바 */}
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1 bg-zinc-800 rounded-full overflow-hidden">
        <div
                className="h-full bg-white transition-all duration-300"
                style={{ width: `${(registerStep / 3) * 100}%` }}
        />
      </div>
      <span className="text-zinc-500 text-xs">{registerStep}/3 단계</span>
    </div>
  </div>

  {/* 단계별 컨텐츠 */}
  {registerStep === 1 && <RegisterStep1 />}
  {registerStep === 2 && <RegisterStep2 />}
  {registerStep === 3 && <RegisterStep3 />}

  {/* 하단 버튼 */}
  {registerStep < 3 && (
  <div className="fixed bottom-0 left-0 right-0 p-5 bg-black border-t border-zinc-900">
    <div className="max-w-md mx-auto flex gap-3">
      <button
              onClick={() => {
      if (registerStep > 1) {
      if (registerStep === 2) {
      setAnalysisComplete(false);
      setIsAnalyzing(false);
      }
      setRegisterStep(registerStep - 1);
      } else {
      setCurrentScreen('login');
      }
      }}
      className="flex-1 bg-zinc-900 text-white py-4 rounded-xl font-semibold border border-zinc-800 hover:bg-zinc-800 transition"
      >
      이전
      </button>
      <button
              onClick={() => {
      if (registerStep === 2 && !analysisComplete) return;
      setRegisterStep(registerStep + 1);
      }}
      className={`flex-1 py-4 rounded-xl font-semibold transition ${
      registerStep === 2 && !analysisComplete
      ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
      : 'bg-white text-black hover:bg-zinc-200'
      }`}
      >
      다음
      </button>
    </div>
  </div>
  )}
</div>
);

// 고객 리포트 화면
const CustomerReportScreen = ({ customer, fromScreen }) => (
<div className="h-full overflow-y-auto pb-24 bg-black">
  <div className="bg-zinc-900 p-5 border-b border-zinc-800">
    <div className="flex items-center gap-3">
      <button
              onClick={() => {
      setSelectedCustomer(null);
      setCurrentScreen(fromScreen || 'home');
      }}
      className="text-white hover:bg-zinc-800 rounded-full p-1.5 transition"
      >
      <ChevronLeft size={24} />
      </button>
      <div>
        <div className="text-white font-bold text-xl">{customer.name}</div>
        <div className="text-gray-400 text-sm">{customer.time} 예약</div>
      </div>
    </div>
  </div>

  <div className="p-5 space-y-4">
    <div className="bg-gradient-to-br from-blue-900 to-blue-950 rounded-xl p-5 border border-blue-800">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">📊</span>
        <span className="text-white font-bold text-lg">체형 분석</span>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-blue-200 text-sm">체형 타입</span>
          <span className="text-white font-bold">하체 볼륨형</span>
        </div>
        <div className="bg-zinc-900 rounded-lg p-3">
          <div className="text-blue-300 text-xs">→ A라인 스커트나 와이드 팬츠 추천</div>
        </div>
      </div>
    </div>

    <div className="bg-gradient-to-br from-purple-900 to-purple-950 rounded-xl p-5 border border-purple-800">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">🎨</span>
        <span className="text-white font-bold text-lg">퍼스널 컬러</span>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-purple-200 text-sm">컬러 타입</span>
          <span className="text-white font-bold">가을 웜톤</span>
        </div>
        <div className="flex gap-2 flex-wrap">
          {['베이지', '브라운', '카키', '머스타드'].map(c => (
          <span key={c} className="bg-purple-800 text-purple-100 text-xs px-2.5 py-1 rounded-full">{c}</span>
          ))}
        </div>
      </div>
    </div>

    <div className="bg-gradient-to-br from-pink-900 to-pink-950 rounded-xl p-5 border border-pink-800">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">👗</span>
        <span className="text-white font-bold text-lg">착용 상황</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-pink-200 text-sm">주요 목적</span>
        <span className="text-white font-bold">데이트</span>
      </div>
    </div>

    <div className="bg-gradient-to-br from-green-900 to-green-950 rounded-xl p-5 border border-green-800">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">🛍️</span>
        <span className="text-white font-bold text-lg">쇼핑 스타일</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-green-200 text-sm">선호 방식</span>
        <span className="text-white font-bold">적극 상담형</span>
      </div>
    </div>

    <div className="flex gap-3 pt-2">
      <button className="flex-1 bg-zinc-800 text-white py-4 rounded-xl font-bold border border-zinc-700">
        이전 방문
      </button>
      <button className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-bold">
        준비 완료
      </button>
    </div>
  </div>
</div>
);

// 홈 화면
const HomeScreen = () => (
<div className="h-full overflow-y-auto pb-24 bg-black">
  <div className="p-5 pb-6">
    <div className="flex items-start justify-between mb-4">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-white text-lg font-bold">안녕하세요,</span>
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-xs font-bold px-2.5 py-1 rounded-full">🏆 Top 디렉터</span>
        </div>
        <div className="text-white text-lg font-bold">성수동 핏 심폐소생술사 디렉터님! 👋</div>
      </div>
    </div>

    <div className="flex items-center justify-between bg-zinc-900 rounded-2xl p-4 border border-zinc-800">
      <div>
        <div className="text-white font-semibold mb-1">영업 상태</div>
        <div className={`text-sm ${isOpen ? 'text-blue-400' : 'text-gray-500'}`}>
        {isOpen ? '고객에게 노출 중이에요' : '잠시 쉬고 있어요'}
      </div>
    </div>
    <button
            onClick={() => setIsOpen(!isOpen)}
    className={`relative w-14 h-8 rounded-full transition-colors ${isOpen ? 'bg-blue-600' : 'bg-zinc-700'}`}
    >
    <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${isOpen ? 'translate-x-7' : 'translate-x-1'}`} />
    </button>
  </div>
</div>

<div className="px-5 mb-6">
  <div className="flex items-center justify-between mb-4">
    <div>
      <div className="text-white font-bold text-lg mb-1">오늘의 Mit</div>
      <div className="text-gray-400 text-sm">3팀의 스타일링이 예약되어 있어요</div>
    </div>
  </div>

  <div className="bg-gradient-to-br from-blue-900 to-blue-950 rounded-2xl p-5 mb-3 border-2 border-blue-700">
    <div className="flex items-start justify-between mb-4">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-3xl font-bold text-white">14:00</span>
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">D-30분</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-white font-semibold text-lg">김민지 님</span>
          <span className="bg-blue-700 text-blue-100 text-xs px-2 py-0.5 rounded">재방문</span>
        </div>
      </div>
    </div>
    <div className="flex gap-2 mb-4">
      <span className="bg-zinc-800 text-blue-300 text-xs px-3 py-1.5 rounded-full">#하체커버</span>
      <span className="bg-zinc-800 text-blue-300 text-xs px-3 py-1.5 rounded-full">#데이트룩</span>
    </div>
    <div className="flex gap-2">
      <button
              onClick={() => {
      setSelectedCustomer({ name: '김민지 님', time: '14:00', fromScreen: 'home' });
      setCurrentScreen('report');
      }}
      className="flex-1 bg-zinc-800 text-white py-3 rounded-xl font-semibold text-sm border border-zinc-700"
      >
      📄 리포트 보기
      </button>
      <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold text-sm">
        ✅ 준비 완료
      </button>
    </div>
  </div>
</div>

<div className="px-5 mb-6">
  <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl p-5 border border-blue-800">
    <div className="flex items-center gap-3 mb-2">
      <Camera className="text-blue-300" size={24} />
      <span className="text-white font-bold text-lg">방금 들어온 신상 있나요?</span>
    </div>
    <div className="text-blue-200 text-sm mb-4">사진 1장만 찍으면 단골에게 알림을 보내드려요</div>
    <button
            onClick={() => setCurrentScreen('newitem')}
    className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-semibold text-sm"
    >
    📸 신상 업로드하기
    </button>
  </div>
</div>

<div className="px-5 mb-6">
  <div className="text-white font-bold text-lg mb-4">이번 달 성과</div>
  <div className="grid grid-cols-3 gap-3">
    <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
      <div className="text-gray-400 text-xs mb-2">예상 매출</div>
      <div className="text-white font-bold text-xl">₩850K</div>
    </div>
    <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
      <div className="text-gray-400 text-xs mb-2">방문 확정</div>
      <div className="flex items-end gap-1">
        <div className="text-white font-bold text-xl">25</div>
        <div className="text-green-500 text-xs mb-1">▲5</div>
      </div>
    </div>
    <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
      <div className="text-gray-400 text-xs mb-2">매너 온도</div>
      <div className="text-white font-bold text-xl">99.5°C</div>
    </div>
  </div>
</div>

<div className="mx-5 mb-6">
  <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-xl p-4 border border-purple-700">
    <div className="flex items-center gap-2">
      <Sparkles className="text-purple-300" size={20} />
      <span className="text-white text-sm">💡 내일은 비가 온대요! 레인부츠 코디를 추천해 볼까요?</span>
    </div>
  </div>
</div>
</div>
);

// 예약 관리 화면
const BookingScreen = () => (
<div className="h-full overflow-y-auto pb-24 bg-black">
  <div className="p-5">
    <div className="text-white font-bold text-2xl mb-6">예약 관리</div>
    <div className="flex gap-2 mb-6">
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold text-sm">전체 (8)</button>
      <button className="px-4 py-2 bg-zinc-900 text-gray-400 rounded-lg font-semibold text-sm border border-zinc-800">오늘 (3)</button>
    </div>
    <div className="space-y-3">
      {[
      { date: '12/11', time: '14:00', name: '김민지 님', status: 'D-30분' },
      { date: '12/11', time: '16:30', name: '이서연 님', status: '예약 확정' },
      { date: '12/11', time: '18:00', name: '박지훈 님', status: '예약 확정' },
      ].map((b, i) => (
      <div key={i} className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-white font-bold">{b.time}</span>
            <span className="text-white">{b.name}</span>
          </div>
          <button onClick={() => { setSelectedCustomer({ name: b.name, time: b.time, fromScreen: 'booking' }); setCurrentScreen('report'); }}>
          <ChevronRight className="text-gray-500" size={20} />
          </button>
        </div>
      </div>
      ))}
    </div>
  </div>
</div>
);

const NewItemScreen = () => (
<div className="h-full overflow-y-auto pb-24 bg-black">
  {/* 헤더 */}
  <div className="sticky top-0 bg-black z-10 p-5 border-b border-zinc-900">
    <div className="flex items-center gap-3 mb-4">
      <button
              onClick={() => {
      if (newItemStep > 1) {
      if (newItemStep === 2) {
      setGeneratedModels([false, false, false]);
      setSelectedModel(null);
      }
      setNewItemStep(newItemStep - 1);
      } else {
      setNewItemStep(1);
      setUploadedClothes([false, false, false, false]);
      setGeneratedModels([false, false, false]);
      setSelectedModel(null);
      setCurrentScreen('home');
      }
      }}
      className="text-white hover:bg-zinc-800 rounded-full p-1.5 transition"
      >
      <ChevronLeft size={24} />
      </button>
      <div className="text-white font-bold text-lg">신상 등록</div>
    </div>

    {/* 프로그레스 바 */}
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1 bg-zinc-800 rounded-full overflow-hidden">
        <div
                className="h-full bg-blue-500 transition-all duration-300"
                style={{ width: `${(newItemStep / 3) * 100}%` }}
        />
      </div>
      <span className="text-zinc-500 text-xs">{newItemStep}/3 단계</span>
    </div>
  </div>

  {/* Step 1: 옷 사진 업로드 */}
  {newItemStep === 1 && (
  <div className="p-5 space-y-6">
    <div>
      <div className="text-white text-2xl font-bold mb-2">옷 사진 촬영</div>
      <div className="text-zinc-400 text-sm">코디하고 싶은 옷들을 촬영해주세요. AI가 자동으로 모델 착용 사진을 생성해드려요.</div>
    </div>

    {/* 안내 카드 */}
    <div className="bg-blue-950 border border-blue-800 rounded-xl p-4">
      <div className="flex items-start gap-3">
        <span className="text-2xl">💡</span>
        <div className="text-sm">
          <div className="text-blue-300 font-semibold mb-1">촬영 TIP</div>
          <div className="text-blue-200 text-xs space-y-1">
            <div>• 상의, 하의, 아우터 등 조합할 옷 촬영</div>
            <div>• 밝은 곳에서 옷 전체가 보이게</div>
            <div>• 2-4개 아이템 권장</div>
          </div>
        </div>
      </div>
    </div>

    {/* 옷 사진 업로드 */}
    <div>
      <label className="text-zinc-400 text-sm mb-3 block">옷 사진 업로드 (2-4장)</label>
      <div className="grid grid-cols-2 gap-3">
        {[0, 1, 2, 3].map((idx) => (
        <button
                key={idx}
                onClick={() => {
        const newClothes = [...uploadedClothes];
        newClothes[idx] = !newClothes[idx];
        setUploadedClothes(newClothes);
        }}
        className={`aspect-square rounded-xl flex flex-col items-center justify-center transition ${
        uploadedClothes[idx]
        ? 'bg-blue-600 border-2 border-blue-400'
        : 'bg-zinc-900 border border-zinc-800 hover:border-zinc-600'
        }`}
        >
        {uploadedClothes[idx] ? (
        <>
        <Check className="text-white mb-2" size={32} />
        <span className="text-white text-xs">
                        {idx === 0 ? '상의' : idx === 1 ? '하의' : idx === 2 ? '아우터' : '액세서리'}
                      </span>
      </>
      ) : (
      <>
      <Camera className="text-zinc-500 mb-2" size={28} />
      <span className="text-zinc-500 text-xs">
                        {idx === 0 ? '상의' : idx === 1 ? '하의' : idx === 2 ? '아우터' : '액세서리'}
                      </span>
    </>
    )}
    </button>
    ))}
  </div>
  <div className="text-zinc-500 text-xs mt-2">
    {uploadedClothes.filter(Boolean).length}/4장 업로드됨
  </div>
</div>

{/* 다음 버튼 */}
<button
        onClick={() => {
if (uploadedClothes.filter(Boolean).length >= 2) {
setNewItemStep(2);
setIsGenerating(true);
setTimeout(() => {
setIsGenerating(false);
setGeneratedModels([true, true, true]);
}, 2500);
}
}}
disabled={uploadedClothes.filter(Boolean).length < 2}
className={`w-full py-4 rounded-xl font-bold transition ${
uploadedClothes.filter(Boolean).length >= 2
? 'bg-blue-600 text-white hover:bg-blue-700'
: 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
}`}
>
AI 모델 생성하기
</button>
</div>
)}

{/* Step 2: AI 모델 생성 & 선택 */}
{newItemStep === 2 && (
<div className="p-5 space-y-6">
  <div>
    <div className="text-white text-2xl font-bold mb-2">AI 모델 선택</div>
    <div className="text-zinc-400 text-sm">AI가 생성한 모델 착용 사진 중 마음에 드는 것을 선택해주세요.</div>
  </div>

  {/* 생성 중 */}
  {isGenerating && (
  <div className="bg-zinc-900 rounded-xl p-8 text-center border border-zinc-800">
    <div className="text-5xl mb-4 animate-bounce">🤖</div>
    <div className="text-white font-semibold mb-2">AI가 모델 사진을 생성 중이에요...</div>
    <div className="text-zinc-400 text-sm">업로드한 옷으로 코디를 만들고 있어요</div>
    <div className="mt-4 flex justify-center gap-1">
      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-100" />
      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-200" />
    </div>
  </div>
  )}

  {/* 생성 완료 */}
  {!isGenerating && generatedModels.some(Boolean) && (
  <>
  <div className="grid grid-cols-3 gap-3">
    {[0, 1, 2].map((idx) => (
    <div
            key={idx}
            onClick={() => setSelectedModel(idx)}
    className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-200 ${
    selectedModel === idx
    ? 'ring-4 ring-blue-500 scale-105'
    : 'ring-1 ring-zinc-700 hover:ring-zinc-500'
    }`}
    style={{ height: '160px' }}
    >
    <div className={`w-full h-full flex items-center justify-center ${
         selectedModel === idx
         ? 'bg-gradient-to-br from-blue-800 via-blue-900 to-zinc-900'
    : 'bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900'
    }`}>
    <div className="text-center">
      <div className="text-4xl mb-2">👤</div>
      <div className={`text-xs ${selectedModel === idx ? 'text-blue-300' : 'text-zinc-400'}`}>
      모델 {idx + 1}
    </div>
  </div>
</div>
{selectedModel === idx && (
<div className="absolute top-2 right-2 bg-blue-500 rounded-full p-1.5 shadow-lg">
  <Check size={14} className="text-white" />
</div>
)}
</div>
))}
</div>

<div className="text-center text-zinc-500 text-sm">
  {selectedModel !== null
  ? `모델 ${selectedModel + 1} 선택됨`
  : '모델을 선택해주세요'
  }
</div>

{/* 리롤 버튼 */}
<button
        onClick={() => {
setIsGenerating(true);
setSelectedModel(null);
setTimeout(() => {
setIsGenerating(false);
setGeneratedModels([true, true, true]);
}, 2000);
}}
className="w-full bg-zinc-900 border border-zinc-700 text-white py-3 rounded-xl font-semibold text-sm hover:bg-zinc-800 transition flex items-center justify-center gap-2"
>
🔄 다시 생성하기
</button>

{/* 선택 완료 버튼 */}
<button
        onClick={() => {
if (selectedModel !== null) {
setNewItemStep(3);
}
}}
disabled={selectedModel === null}
className={`w-full py-4 rounded-xl font-bold transition ${
selectedModel !== null
? 'bg-blue-600 text-white hover:bg-blue-700'
: 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
}`}
>
이 사진으로 선택
</button>
</>
)}
</div>
)}

{/* Step 3: 등록 완료 */}
{newItemStep === 3 && (
<div className="p-5 flex flex-col items-center justify-center min-h-[60vh]">
  <div className="text-6xl mb-6">✨</div>
  <div className="text-white text-2xl font-bold mb-3 text-center">신상 등록 완료!</div>
  <div className="text-zinc-400 text-sm text-center mb-8 leading-relaxed">
    등록한 코디가 매장 프로필에 노출돼요.<br/>고객들이 우리 매장 스타일을 미리 볼 수 있어요!
  </div>

  {/* 미리보기 */}
  <div className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-5 mb-8">
    <div className="text-zinc-400 text-xs mb-3">등록된 컨텐츠</div>
    <div className="flex items-center gap-4">
      <div className="w-20 h-28 bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-lg flex items-center justify-center">
        <span className="text-3xl">👤</span>
      </div>
      <div>
        <div className="text-white font-semibold mb-1">새로운 코디</div>
        <div className="text-zinc-500 text-xs mb-2">방금 등록됨</div>
        <div className="flex gap-1.5">
          <span className="bg-zinc-800 text-blue-300 text-xs px-2 py-1 rounded">#미니멀</span>
          <span className="bg-zinc-800 text-blue-300 text-xs px-2 py-1 rounded">#데일리</span>
        </div>
      </div>
    </div>
  </div>

  {/* 예상 효과 */}
  <div className="w-full bg-blue-950 border border-blue-800 rounded-xl p-4 mb-8">
    <div className="flex items-start gap-3">
      <span className="text-xl">📈</span>
      <div className="text-sm">
        <div className="text-blue-300 font-semibold mb-1">예상 효과</div>
        <div className="text-blue-200 text-xs">
          이 코디로 약 <span className="font-bold">23명</span>의 고객에게 노출될 예정이에요
        </div>
      </div>
    </div>
  </div>

  <div className="w-full flex gap-3">
    <button
            onClick={() => {
    setNewItemStep(1);
    setUploadedClothes([false, false, false, false]);
    setGeneratedModels([false, false, false]);
    setSelectedModel(null);
    }}
    className="flex-1 bg-zinc-900 border border-zinc-700 text-white py-4 rounded-xl font-bold hover:bg-zinc-800 transition"
    >
    하나 더 등록
    </button>
    <button
            onClick={() => {
    setNewItemStep(1);
    setUploadedClothes([false, false, false, false]);
    setGeneratedModels([false, false, false]);
    setSelectedModel(null);
    setCurrentScreen('home');
    }}
    className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition"
    >
    완료
    </button>
  </div>
</div>
)}
</div>
);

// 성과 화면 (매출 메인 + 4개 상세 메뉴)
  const StatsScreen = () => {
    // 상세 화면 진입 상태 관리 ('main' | 'appeal' | 'customer' | 'review' | 'strategy')
    const [statsView, setStatsView] = useState('main');

    // 1. 메인 화면 (매출 + 메뉴 그리드)
    if (statsView === 'main') {
      return (
        <div className="h-full overflow-y-auto pb-24 bg-black">
          <div className="p-5">
            <div className="text-white font-bold text-2xl mb-6">성과 분석</div>

            {/* [Hero Section] 매출 & 효능감 */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-900 rounded-2xl p-6 mb-8 shadow-lg shadow-blue-900/30">
              <div className="flex justify-between items-start mb-2">
                <div className="text-blue-100 text-sm font-medium">12월 Mit 누적 매출</div>
                <div className="bg-white/20 px-2 py-1 rounded text-[10px] text-white font-bold">▲ 15% 성장</div>
              </div>
              <div className="text-white text-4xl font-black mb-6">
                3,520,000<span className="text-2xl font-bold">원</span>
              </div>

              {/* 효능감 지표 (카드형) */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-black/20 rounded-xl p-3 backdrop-blur-sm">
                  <div className="text-blue-100 text-xs mb-1">객단가 비교</div>
                  <div className="text-white font-bold text-lg">
                    +40<span className="text-sm">%</span>
                    <span className="text-xs font-normal text-blue-200 ml-1">vs 워크인</span>
                  </div>
                </div>
                <div className="bg-black/20 rounded-xl p-3 backdrop-blur-sm">
                  <div className="text-blue-100 text-xs mb-1">노쇼 방어율</div>
                  <div className="text-white font-bold text-lg">
                    98<span className="text-sm">%</span>
                    <span className="text-xs font-normal text-blue-200 ml-1">방문 확실</span>
                  </div>
                </div>
              </div>
            </div>

            {/* [Grid Buttons] 상세 분석 메뉴 (첨부 이미지 스타일 적용) */}
            <div className="text-white font-bold text-lg mb-4">상세 분석</div>
            <div className="grid grid-cols-2 gap-3">
              {/* 버튼 1: 매력 포인트 */}
              <button
                onClick={() => setStatsView('appeal')}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-left hover:border-zinc-600 transition group"
              >
                <div className="bg-pink-500/10 w-10 h-10 rounded-full flex items-center justify-center mb-3 group-hover:bg-pink-500/20 transition">
                  <span className="text-2xl">🔥</span>
                </div>
                <div className="text-white font-bold mb-1">매력 포인트</div>
                <div className="text-zinc-500 text-xs">인기 태그 & 찜</div>
              </button>

              {/* 버튼 2: 고객 분석 */}
              <button
                onClick={() => setStatsView('customer')}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-left hover:border-zinc-600 transition group"
              >
                <div className="bg-green-500/10 w-10 h-10 rounded-full flex items-center justify-center mb-3 group-hover:bg-green-500/20 transition">
                  <span className="text-2xl">📊</span>
                </div>
                <div className="text-white font-bold mb-1">고객 분석</div>
                <div className="text-zinc-500 text-xs">체형 & 톤 통계</div>
              </button>

              {/* 버튼 3: 리뷰 & 평판 */}
              <button
                onClick={() => setStatsView('review')}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-left hover:border-zinc-600 transition group"
              >
                <div className="bg-yellow-500/10 w-10 h-10 rounded-full flex items-center justify-center mb-3 group-hover:bg-yellow-500/20 transition">
                  <span className="text-2xl">⭐</span>
                </div>
                <div className="text-white font-bold mb-1">리뷰 & 평판</div>
                <div className="text-zinc-500 text-xs">매너온도 99.5도</div>
              </button>

              {/* 버튼 4: 매출 전략 */}
              <button
                onClick={() => setStatsView('strategy')}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-left hover:border-zinc-600 transition group"
              >
                <div className="bg-purple-500/10 w-10 h-10 rounded-full flex items-center justify-center mb-3 group-hover:bg-purple-500/20 transition">
                  <span className="text-2xl">🎯</span>
                </div>
                <div className="text-white font-bold mb-1">매출 전략</div>
                <div className="text-zinc-500 text-xs">AI 추천 액션</div>
              </button>
            </div>
          </div>
        </div>
      );
    }

    // 2. 상세 화면 (뒤로가기 포함)
    return (
      <div className="h-full overflow-y-auto pb-24 bg-black p-5">
        {/* 헤더 */}
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => setStatsView('main')}
            className="text-white hover:bg-zinc-800 rounded-full p-1.5 transition"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="text-white font-bold text-xl">
            {statsView === 'appeal' && '우리 가게 매력 포인트'}
            {statsView === 'customer' && '방문 고객 분석'}
            {statsView === 'review' && '리뷰 관리'}
            {statsView === 'strategy' && 'AI 매출 전략'}
          </div>
        </div>

        {/* 각 상세 화면 내용 (예시) */}
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">

          {/* A. 매력 포인트 뷰 */}
          {statsView === 'appeal' && (
            <div className="space-y-4">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
                <div className="text-zinc-400 text-xs mb-3">고객 유입 태그 TOP 3</div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-bold">1. #하체커버</span>
                    <span className="text-pink-500 font-bold">452회 클릭</span>
                  </div>
                  <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-pink-500 h-full w-[85%]"></div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-white font-bold">2. #출근룩</span>
                    <span className="text-zinc-400 text-sm">230회</span>
                  </div>
                  <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-zinc-600 h-full w-[45%]"></div>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex justify-between items-center">
                <div>
                  <div className="text-zinc-400 text-xs mb-1">현재 찜한 고객</div>
                  <div className="text-white font-bold text-2xl">248명</div>
                </div>
                <div className="text-3xl">❤️</div>
              </div>
            </div>
          )}

          {/* B. 고객 분석 뷰 */}
          {statsView === 'customer' && (
            <div className="space-y-4">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
                <div className="text-zinc-400 text-xs mb-3">주요 방문 고객층</div>
                <div className="flex gap-4 items-center">
                  <div className="w-24 h-24 rounded-full border-4 border-blue-500 flex items-center justify-center text-blue-400 font-bold text-lg">
                    60%
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">가을 웜톤</div>
                    <div className="text-zinc-400 text-sm">20대 중반 직장인</div>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
                <div className="text-zinc-400 text-xs mb-2">재방문율 (단골 지수)</div>
                <div className="text-white font-bold text-3xl mb-1">32%</div>
                <div className="text-green-500 text-xs">성수동 평균 대비 12% 높음</div>
              </div>
            </div>
          )}

          {/* C. 리뷰 뷰 */}
          {statsView === 'review' && (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-yellow-900/30 to-black border border-yellow-700/50 rounded-xl p-5 text-center">
                <div className="text-yellow-500 text-sm font-bold mb-1">나의 매너 온도</div>
                <div className="text-white font-black text-5xl mb-2">99.5<span className="text-2xl text-yellow-500">°C</span></div>
                <div className="text-zinc-400 text-xs">상위 1% 슈퍼 디렉터 등급이에요!</div>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
                <div className="text-zinc-400 text-xs mb-3">자주 듣는 칭찬</div>
                <div className="flex flex-wrap gap-2">
                  {['센스있어요', '친절해요', '강매없어요', '인생샷건짐'].map(k => (
                    <span key={k} className="bg-zinc-800 text-white text-xs px-3 py-1.5 rounded-full border border-zinc-700">#{k}</span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* D. 전략 뷰 */}
          {statsView === 'strategy' && (
            <div className="space-y-4">
              <div className="bg-blue-900/30 border border-blue-500 rounded-xl p-5">
                <div className="flex gap-3">
                  <span className="text-2xl">💡</span>
                  <div>
                    <div className="text-blue-400 font-bold mb-1">Action Item</div>
                    <div className="text-white text-sm leading-relaxed mb-3">
                      <span className="font-bold">#하체커버</span> 키워드가 인기 급상승 중이에요.
                      관련된 롱스커트나 와이드 팬츠 코디를 2개 더 등록해보세요.
                    </div>
                    <button className="bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-lg">
                      코디 등록하러 가기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    );
  };

const ProfileScreen = () => (
<div className="h-full overflow-y-auto pb-24 bg-black">
  <div className="p-5">
    <div className="text-white font-bold text-2xl mb-6">내 정보</div>
    <div className="text-gray-400 text-center py-20">내 정보 화면 (준비 중)</div>
  </div>
</div>
);

const BottomNav = () => (
<div className="fixed bottom-0 left-0 right-0 bg-zinc-950 border-t border-zinc-800">
  <div className="grid grid-cols-5 items-end px-2 py-2">
    <button onClick={() => setCurrentScreen('booking')} className={`flex flex-col items-center gap-1 py-3 rounded-xl transition ${currentScreen === 'booking' ? 'text-blue-500' : 'text-gray-500'}`}>
    <Calendar size={22} />
    <span className="text-xs font-semibold">예약관리</span>
    </button>
    <button onClick={() => setCurrentScreen('newitem')} className={`flex flex-col items-center gap-1 py-3 rounded-xl transition ${currentScreen === 'newitem' ? 'text-blue-500' : 'text-gray-500'}`}>
    <Camera size={22} />
    <span className="text-xs font-semibold">신상등록</span>
    </button>
    <button onClick={() => { setSelectedCustomer(null); setCurrentScreen('home'); }} className="flex flex-col items-center -mt-8">
    <div className={`rounded-full p-4 shadow-lg ${currentScreen === 'home' ? 'bg-blue-500' : 'bg-blue-600'}`}>
    <Home size={28} className="text-white" />
  </div>
  <span className={`text-xs font-semibold mt-2 ${currentScreen === 'home' ? 'text-blue-500' : 'text-gray-500'}`}>홈</span>
  </button>
  <button onClick={() => setCurrentScreen('stats')} className={`flex flex-col items-center gap-1 py-3 rounded-xl transition ${currentScreen === 'stats' ? 'text-blue-500' : 'text-gray-500'}`}>
  <TrendingUp size={22} />
  <span className="text-xs font-semibold">성과</span>
  </button>
  <button onClick={() => setCurrentScreen('profile')} className={`flex flex-col items-center gap-1 py-3 rounded-xl transition ${currentScreen === 'profile' ? 'text-blue-500' : 'text-gray-500'}`}>
  <User size={22} />
  <span className="text-xs font-semibold">내정보</span>
  </button>
</div>
</div>
);

const showNav = !['login', 'register'].includes(currentScreen);

return (
<div className="max-w-md mx-auto bg-black h-screen flex flex-col relative">
  <div className="flex-1 overflow-hidden">
    {currentScreen === 'login' && <LoginScreen />}
    {currentScreen === 'register' && <RegisterScreen />}
    {currentScreen === 'home' && <HomeScreen />}
    {currentScreen === 'report' && selectedCustomer && <CustomerReportScreen customer={selectedCustomer} fromScreen={selectedCustomer.fromScreen} />}
    {currentScreen === 'booking' && <BookingScreen />}
    {currentScreen === 'newitem' && <NewItemScreen />}
    {currentScreen === 'stats' && <StatsScreen />}
    {currentScreen === 'profile' && <ProfileScreen />}
  </div>
  {showNav && <BottomNav />}
</div>
);
};

export default OwnerAppPrototype;