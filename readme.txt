- Chờ tải về
npm install firebase-tools -g
firebase login <~~ firebase sẽ chuyển mày lên trang đăng nhập của Google. Đăng nhập vào rồi trở về terminal

X-code cài xong thì gõ

brew install yarn
git clone https://github.com/hongphinguyen/lxp-photography
cd lxp-photography
npm install

Nếu mày muốn thêm album, thêm ảnh thì vào ~/lxp-photography/src/assets/albums rồi cứ thêm ảnh/album theo cấu trúc trong folder đó
Mỗi khi thêm ảnh xong thì phải chạy command:

npm run resync

Xong xuôi thì m gõ

npm run build && firebase deploy