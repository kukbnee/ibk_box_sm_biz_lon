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