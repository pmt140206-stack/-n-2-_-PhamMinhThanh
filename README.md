# PT GUNDAM – Website bán mô hình Gundam

Website mẫu được xây dựng theo bố cục wireframe tham khảo gồm 6 màn hình: Trang chủ, Danh sách sản phẩm, Chi tiết sản phẩm, Giỏ hàng/Đặt hàng, Dashboard quản trị và Quản lý sản phẩm.

## Cách chạy

1. Giải nén file `PT_Gundam_Website.zip`.
2. Mở thư mục `pt-gundam`.
3. Nhấp đúp vào `index.html` để chạy trên Chrome, Edge hoặc Firefox.
4. Dùng thanh điều hướng để xem danh sách sản phẩm, chi tiết, giỏ hàng và phần quản trị.

Có thể chạy qua Live Server trong Visual Studio Code để có trải nghiệm phát triển thuận tiện hơn.

## Chức năng đang có

- Trang chủ với banner, danh mục, sản phẩm mới, bán chạy và tin tức minh họa.
- Danh sách sản phẩm: tìm kiếm, lọc theo HG/RG/MG/Khác, lọc giá, lọc còn hàng và sắp xếp.
- Trang chi tiết sản phẩm: hình ảnh, giá, thông tin, thay đổi số lượng và thêm vào giỏ.
- Giỏ hàng: tăng/giảm số lượng, xóa sản phẩm, nhập thông tin khách hàng và mô phỏng đặt hàng.
- Dashboard quản trị: thẻ thống kê, biểu đồ doanh thu và đơn hàng gần đây (số liệu mẫu).
- Quản lý sản phẩm: thêm, sửa, xóa, tìm kiếm và lọc sản phẩm.
- Giỏ hàng và dữ liệu quản trị được lưu trong `localStorage` của trình duyệt.

## Chỉnh sửa nội dung

- Sửa tên, giá, mô tả, tồn kho và đường dẫn ảnh mặc định trong `products-data.js`.
- Hình ảnh minh họa nằm trong `assets/products/`.
- Màu sắc, bố cục và responsive nằm trong `styles.css`.
- Các chức năng JavaScript nằm trong các tệp `site.js`, `catalog.js`, `product-detail.js`, `cart-page.js`, `admin-dashboard.js` và `admin-products.js`.

## Lưu ý cho đồ án

Đây là website front-end demo, chưa kết nối cơ sở dữ liệu, máy chủ, tài khoản đăng nhập thật, cổng thanh toán hay dịch vụ vận chuyển. Đơn hàng chỉ được mô phỏng ở phía trình duyệt. Các ảnh mô hình trong thư mục assets là ảnh minh họa được tạo riêng cho bản demo; tên, giá và các số liệu là dữ liệu mẫu, bạn có thể thay theo dữ liệu khảo sát của mình.
