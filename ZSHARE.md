우리끼리 git 하는 규칙

작업 시작전
git switch main
git pull main
git branch 브랜치명
git switch 브랜치명

작업 후 머지
main브랜치 한번 확인후
git rebase main
git switch main
git merge 브랜치명

[redux state변경 방법]
1. state 수정해주는 함수 만들기
2. export
3. dispatch(수정해주는 함수호출)

=====================================
functional specification
UID-0001-00 정보 확인 및 추가 입력
1. 고객정보조회 후 화면 출력을 위한 ajax전송
2. 추가 입력사항 등록을 위한 ajax전송

UID-0002-00 상품 안내
1. UI, 제공된 정보 조합 출력

UID-0003-00 사전 안내
1. UI, 제공된 정보 조합 출력

UID-0004-00 심사준비 1단계: 적합성, 적정성 확인
1. 질의목록(화면에서 정의) 출력
2. 질의별 라디오버튼(답안지 O), 및 input박스
3. 화면에서 밸리데이션체크(답안지 및 미입력 등)하고 진단을 위한 ajax전송

UID-0005-00 심사준비 2단계
1. 질의목록(화면에서 정의) 출력
2. 전 항목 OX(라디오버튼?)
3. 화면에서 밸리데이션체크

UID-0006-00 심사준비 3단계
1. 동의목록() 출력
2. 항목별 pdf url전송하여 모달띄워 출력
3. 체크박스 밸리데이션체크

