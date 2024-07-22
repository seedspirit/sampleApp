# Helm Chart for SampleApp

values.yaml로 채워넣어야 할 것

| 필수 프로퍼티                              | 설명               |
|--------------------------------------|------------------|
| projectName | 프로젝트 이름          |
| domain                               | 사용하고자 하는 도메인     |
| app.backend.image.name               | 백엔드 서버의 이미지 이름   | 
| app.frontend.image.name              | 프론트 이미지 이름       |
| app.db.image.env.MYSQL_ROOT_PASSWORD | mysql 루트 계정 비밀번호 |
| app.db.image.env.MYSQL_DATABASE      | mysql 엔드포인트      |
| app.db.image.env.MYSQL_USER          | mysql 유저 이름      |
| app.db.image.env.MYSQL_PASSWORD      | mysql 유저 비밀번호    |