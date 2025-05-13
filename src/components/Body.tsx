"use client";
import { useState } from "react";

interface Promotion {
  id: number;
  image: string;
  title: string;
  content: string;
}

export default function Body() {
  const [showModal, setShowModal] = useState(false);
  const [currentPromo, setCurrentPromo] = useState<Promotion | null>(null);

  const promotions: Promotion[] = [
    {
      id: 1,
      image: "/images/1.png",
      title: "",
      content: `
    ※ Mã khuyến mãi: GK01 
    <br />
    ※ Đối tượng khuyến mãi: Tất cả thành viên của GK88
    <br />
    ※ Thời gian bắt đầu: Từ bây giờ
    <br />
    ※ Thời gian kết thúc: Dựa vào thông báo chính thức trên trang. 
    <br />
    ※ Lưu ý: 1 điểm = 1000 VND
    <br />
    ※ Múi giờ thống kê: GMT-4 (Giờ Đông Mỹ).
    <br />
    <br />
    Chi tiết sự kiện:
    Tất cả thành viên mới của GK88 tham gia nạp tiền lần đầu từ 500 điểm trở lên sẽ nhận được tiền thưởng nạp đầu lên đến 28.888.000VND, không giới hạn hội viên tham gia. Bạn chỉ cần hoàn thành 1 vòng cược là có thể rút tiền bất cứ lúc nào. 
    <br />
    <br />
    <table border="1" style="width: 80%; border-collapse: collapse; margin: 0 auto;">
      <thead>
        <tr style="background-color: orange;">
          <th style="border: 1px solid black; padding: 8px; text-align: left;">Trò chơi</th>
          <th style="border: 1px solid black; padding: 8px; text-align: left;">Số tiền nạp lần đầu</th>
          <th style="border: 1px solid black; padding: 8px; text-align: left;">Tiền thưởng</th>
          <th style="border: 1px solid black; padding: 8px; text-align: left;">Vòng cược</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border: 1px solid black; padding: 8px;" rowspan="8">Casino - Thể Thao</td>
          <td style="border: 1px solid black; padding: 8px;">500</td>
          <td style="border: 1px solid black; padding: 8px;">88</td>
          <td style="border: 1px solid black; padding: 8px;" rowspan="8">1 vòng</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 8px;">1,000</td>
          <td style="border: 1px solid black; padding: 8px;">188</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 8px;">5,000</td>
          <td style="border: 1px solid black; padding: 8px;">688</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 8px;">10,000</td>
          <td style="border: 1px solid black; padding: 8px;">988</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 8px;">50,000</td>
          <td style="border: 1px solid black; padding: 8px;">3.888</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 8px;">100,000</td>
          <td style="border: 1px solid black; padding: 8px;">6.888</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 8px;">300,000</td>
          <td style="border: 1px solid black; padding: 8px;">18.888</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 8px;">500,000</td>
          <td style="border: 1px solid black; padding: 8px;">28.888</td>
        </tr>
      </tbody>
    </table>
    <br />
    Phương thức đăng ký:
    Sau khi bạn nạp tiền thành công, vui lòng liên hệ CSKH 24/7 để đăng ký nhận khuyến mãi.
    <br />
    Lưu ý: Khuyến mãi này không nhận song hành cùng các loại khuyến mãi khác. Tiền thưởng nhận được chỉ cần trải qua 1 vòng cược là có thể rút tiền. Thành viên đã tham gia cược hoặc đã hết tiền không đủ điều kiện tham gia khuyến mãi này.
    <br />
    Yêu cầu khuyến mãi:
    <ol>
      <li>1 : Tất cả thành viên sau khi đăng ký tài khoản, ngân hàng và bất kỳ thông tin nào liên quan không được thay đổi trước lần rút tiền đầu tiên, nếu xác định thay đổi GK88 có quyền thu hồi tất cả tiền khuyến mãi và tiền thắng phát sinh.</li>
      <br />
      <li>2 : Khuyến mãi này chỉ áp dụng cho trò chơi Casino và Thể Thao. Nếu phát sinh hành vi lạm dụng khuyến mãi,hoặc cược sai sản phẩm, hệ thống có quyền thu hồi toàn bộ tiền khuyến mãi và tiền thắng phát sinh. Thành viên cần phải hoàn thành: Tổng điểm cược hợp lệ ( Số tiền nạp + tiền khuyến mãi ) X số vòng cược thì mới đủ điều kiện để rút tiền.</li>
      <br />
      <li>3 : Trước khi đăng ký khuyến mãi, thành viên cần phải điền đầy đủ tất cả thông tin cá nhân ( Liên kết thông tin ngân hàng, liên kết ngân hàng rút tiền, điền đầy đủ họ tên thật ) thì mới đủ điều kiện để đăng ký khuyến mãi.</li>
      <br />
      <li>4 : Trong cùng 1 sự kiện khuyến mãi, mỗi tài khoản, mỗi số điện thoại, mỗi Gmail, mỗi ngân hàng, mỗi IP và mỗi thiết bị chỉ có thể nhận khuyến mãi 1 lần. Nếu phát hiện hành vi lạm dụng khuyến mãi. GK88 có quyền thu hồi tất cả tiền khuyến mãi và tiền thắng phát sinh.
        Ví dụ
      <ul>
          <li>* Cược 2 bên (cược đối nghịch). Ví dụ: Trong Baccarat cùng lúc cược nhà cái và nhà con. Trong Roulette cược cùng lúc đỏ và đen, Sicbo cược cùng lúc chẵn lẻ , lớn nhỏ v.v .</li>
          <li>* Gian lận có tổ chức, theo nhóm, sử dụng phần mềm đặt cược...</li>
          <li>* Đặt cược tiền thưởng vào các trò chơi bị loại trừ.</li>
          <li>* Đặt cược gian lận doanh thu cược.</li>
          <li>* Cược chéo tài khoản, cùng hoặc khác hệ thống.</li>
          <li>* Lạm dụng chênh lệch tỷ lệ kèo giữa các trang cá cược.</li>
        </ul>
      </li>
      <br />
      <li>5 : GK88 có quyền thay đổi, bổ sung, chấm dứt hoạt động và bảo lưu quyền giải thích cuối cùng về khuyến mãi.</li>
    </ol>
    `,
    },
    {
      id: 2,
      image: "/images/2.png",
      title: "",
      content: `
      ※ Mã khuyến mãi: GK02
      <br />
      ※ Đối tượng khuyến mãi: Tất cả thành viên của GK88
      <br />
      ※ Thời gian bắt đầu: Từ bây giờ
      <br />
      ※ Thời gian kết thúc: Dựa vào thông báo chính thức trên trang. 
      <br />
      ※ Lưu ý: 1 điểm = 1000 VND
      <br />
      ※ Múi giờ thống kê: GMT-4 (Giờ Đông Mỹ).
      <br />
      <br />
      Chi tiết sự kiện:
      <br />
      Tất cả thành viên của GK88 chỉ cần có số tiền nạp lần 2 từ 500 điểm trở lên sẽ có cơ hội nhận được tiền thưởng lên đến 15.888.000VND. 
      <br />
      <table border="1" style="width: 80%; border-collapse: collapse; margin: 0 auto;">
        <thead>
          <tr style="background-color: orange;">
            <th style="border: 1px solid black; padding: 8px; text-align: left;">Trò chơi</th>
            <th style="border: 1px solid black; padding: 8px; text-align: left;">Số tiền nạp lần đầu</th>
            <th style="border: 1px solid black; padding: 8px; text-align: left;">Tiền thưởng</th>
            <th style="border: 1px solid black; padding: 8px; text-align: left;">Vòng cược</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid black; padding: 8px;" rowspan="9">Casino - Thể Thao</td>
            <td style="border: 1px solid black; padding: 8px;">500</td>
            <td style="border: 1px solid black; padding: 8px;">58</td>
            <td style="border: 1px solid black; padding: 8px;" rowspan="9">1 vòng</td>
          </tr>
          <tr>
            <td style="border: 1px solid black; padding: 8px;">1,000</td>
            <td style="border: 1px solid black; padding: 8px;">88</td>
          </tr>
          <tr>
            <td style="border: 1px solid black; padding: 8px;">3,000</td>
            <td style="border: 1px solid black; padding: 8px;">188</td>
          </tr>
          <tr>
            <td style="border: 1px solid black; padding: 8px;">5,000</td>
            <td style="border: 1px solid black; padding: 8px;">338</td>
          </tr>
          <tr>
            <td style="border: 1px solid black; padding: 8px;">10,000</td>
            <td style="border: 1px solid black; padding: 8px;">688</td>
          </tr>
          <tr>
            <td style="border: 1px solid black; padding: 8px;">50,000</td>
            <td style="border: 1px solid black; padding: 8px;">1,888</td>
          </tr>
          <tr>
            <td style="border: 1px solid black; padding: 8px;">100,000</td>
            <td style="border: 1px solid black; padding: 8px;">3,388</td>
          </tr>
          <tr>
            <td style="border: 1px solid black; padding: 8px;">300,000</td>
            <td style="border: 1px solid black; padding: 8px;">9,888</td>
          </tr>
          <tr>
            <td style="border: 1px solid black; padding: 8px;">500,000</td>
            <td style="border: 1px solid black; padding: 8px;">15,888</td>
          </tr>
        </tbody>
      </table>
      <br />
      Phương thức đăng ký:
      Sau khi hội viên nạp tiền xong, trước khi chưa đặt cược vui lòng liên hệ CSKH 24/7 để được hỗ trợ nhận khuyến mãi.
      <br />
      Yêu cầu khuyến mãi:
      <ol>  
        <li>1. Khuyến mãi này chỉ áp dụng cho trò chơi Casino và Thể thao, không áp dụng cho các trò chơi khác. Thành viên cần phải hoàn thành: Tổng điểm cược hợp lệ ( Số tiền nạp + tiền khuyến mãi ) X số vòng cược thì mới đủ điều kiện để rút tiền. </li>
        <br />
        <li>2. Trước khi đăng ký khuyến mãi, thành viên cần phải điền đầy đủ tất cả thông tin cá nhân ( Liên kết thông tin ngân hàng, liên kết ngân hàng rút tiền, điền đầy đủ họ tên thật ) thì mới đủ điều kiện để đăng ký khuyến mãi.</li>
        <br />
        <li>3. Trong cùng 1 sự kiện khuyến mãi, mỗi tài khoản, mỗi số điện thoại, mỗi Gmail, mỗi ngân hàng, mỗi IP và mỗi thiết bị chỉ có thể nhận khuyến mãi 1 lần. Nếu phát hiện hành vi lạm dụng khuyến mãi. GK88 có quyền thu hồi tất cả tiền khuyến mãi và tiền thắng phát sinh.</li>
        <br />
        </ol>
      `,
    },
    {
      id: 3,
      image: "/images/3.png",
      title: "",
      content: `
      ※ Mã khuyến mãi: GK09
      <br />
      ※ Đối tượng khuyến mãi: Tất cả thành viên của GK88
      <br />
      ※ Thời gian bắt đầu: Từ bây giờ
      <br />
      ※ Thời gian kết thúc: Dựa vào thông báo chính thức trên trang. 
      <br />
      ※ Lưu ý: 1 điểm = 1000 VND
      <br />
      ※ Múi giờ thống kê: GMT-4 (Giờ Đông Mỹ).
      <br />
      <br />
      Chi tiết sự kiện:
      <br />
      <br />
      Tất cả hội viên mới của GK88 chỉ cần có số tiền nạp đầu từ 10K trở lên và tham gia cược ở trò chơi Bắn Cá - Nổ Hũ sẽ được nhận khuyến mãi 100%, thưởng tối đa lên đến 188K không giới hạn số hội viên tham gia. Hãy nhanh tay chia sẻ cho bạn bè, vẫn còn rất nhiều phần thưởng hấp dẫn khác đang chờ bạn đến nhận !
      <br />
      <table border="1" style="width: 80%; border-collapse: collapse; margin: 0 auto;">
        <thead>
          <tr style="background-color: orange;">
            <th style="border: 1px solid black; padding: 8px; text-align: left;">Trò chơi</th>
            <th style="border: 1px solid black; padding: 8px; text-align: left;">Số tiền nạp đầu</th>
            <th style="border: 1px solid black; padding: 8px; text-align: left;">Khuyến mãi</th>
            <th style="border: 1px solid black; padding: 8px; text-align: left;">Tiền thưởng tối đa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid black; padding: 8px;">Bắn cá - Nổ hũ</td>
            <td style="border: 1px solid black; padding: 8px;">10+</td>
            <td style="border: 1px solid black; padding: 8px;">100%</td>
            <td style="border: 1px solid black; padding: 8px;">188</td>
          </tr>
          <tr>
            <td colspan="4" style="border: 1px solid black; padding: 8px;">( Tiền gốc + tiền thưởng ) X2 vòng cược hợp lệ là có thể tiến hành rút tiền</td>
          </tr>
        </tbody>
      </table>
      <br />
      Phương thức đăng ký: 
      Sau khi bạn nạp tiền thành công, vui lòng liên hệ CSKH 24/7 để đăng ký nhận khuyến mãi
      <br />
      Lưu ý : 
      Khuyến mãi này không nhận song hành cùng các loại khuyến mãi khác. Tiền thưởng nhận được chỉ cần trải qua 2 vòng cược là có thể rút tiền. Thành viên đã tham gia cược hoặc đã hết tiền không đủ điều kiện tham gia khuyến mãi này. 
      <br />
      Yêu cầu khuyến mãi:
      <ol>
        <li>1. Tất cả thành viên sau khi đăng ký tài khoản, ngân hàng và bất kỳ thông tin nào liên quan không được thay đổi trước lần rút tiền đầu tiên, nếu xác định thay đổi GK88 có quyền thu hồi tất cả tiền khuyến mãi và tiền thắng phát sinh.</li>
        <br />
        <li>2. Khuyến mãi này chỉ áp dụng cho trò chơi Bắn Cá - Nổ Hũ. Nếu bạn cược sai trò chơi, GK88 có quyền thu hồi tiền thưởng khuyến mãi và tiền thắng phát sinh</li>
        <br />
        <li>3. Trước khi đăng ký khuyến mãi, thành viên cần phải điền đầy đủ tất cả thông tin cá nhân ( Liên kết thông tin ngân hàng, liên kết ngân hàng rút tiền, điền đầy đủ họ tên thật ) thì mới đủ điều kiện để đăng ký khuyến mãi.</li>
        <br />
        <li>4. Trong cùng 1 sự kiện khuyến mãi, mỗi tài khoản, mỗi số điện thoại, mỗi Gmail, mỗi ngân hàng, mỗi IP và mỗi thiết bị chỉ có thể nhận khuyến mãi 1 lần. Nếu phát hiện hành vi lạm dụng khuyến mãi. GK88 có quyền thu hồi tất cả tiền khuyến mãi và tiền thắng phát sinh.</li>
        <br />
        <li>5. GK88 có quyền thay đổi, bổ sung, chấm dứt hoạt động và bảo lưu quyền giải thích cuối cùng về khuyến mãi.</li>
        <br />
      </ol>
      `,
    },
    {
      id: 4,
      image: "/images/4.png",
      title: "",
      content: `
      ※ Mã khuyến mãi: GK06
      <br />
      ※ Đối tượng khuyến mãi: Tất cả thành viên của GK88
      <br />
      ※ Thời gian bắt đầu: 11:00 26/02/2025.
      <br />
      ※ Thời gian kết thúc: Dựa vào thông báo chính thức trên trang. 
      <br />
      ※ Lưu ý: 1 điểm = 1000 VND
      <br />
      ※ Thời gian đăng ký khuyến mãi: GMT+7 ( giờ Việt Nam từ 00:00 23:59, trong ngày diễn ra khuyến mãi ). 
      <br />
      <br />
      Chi tiết sự kiện:
      <br />
      <br />
      Tất cả hội viên GK88 tham gia nạp tiền vào ngày 10，20，30 hàng tháng, sẽ được nhận khuyến mãi 6%, tiền thưởng tối đa lên đến 8.888.000VND, đặc biệt không giới hạn số hội viên tham gia nhận khuyến mãi, nhanh tay mời bạn bè cùng tham gia nhận khuyến mãi siêu hấp dẫn này nhé.
      <br />
      <br />
      <table border="1" style="width: 80%; border-collapse: collapse; margin: 0 auto;">
        <thead>
          <tr style="background-color: orange;">
            <th style="border: 1px solid black; padding: 8px; text-align: left;">Số tiền nạp tối thiểu</th>
            <th style="border: 1px solid black; padding: 8px; text-align: left;">% Khuyến mãi</th>
            <th style="border: 1px solid black; padding: 8px; text-align: left;">Thưởng tối đa</th>
            <th style="border: 1px solid black; padding: 8px; text-align: left;">Vòng cược</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid black; padding: 8px;">100+</td>
            <td style="border: 1px solid black; padding: 8px;">6%</td>
            <td style="border: 1px solid black; padding: 8px;">8.888</td>
            <td style="border: 1px solid black; padding: 8px;">1 vòng</td>
          </tr>
          <tr>
            <td colspan="4" style="border: 1px solid black; padding: 8px;">Tiền gốc + Tiền khuyến mãi hoàn thành 1 vòng cược là có thể tiến hành rút tiền</td>
          </tr>
        </tbody>
      </table>
      <br />
      Phương thức đăng ký: 
      Sau khi thành viên nạp tiền thành công, hội viên vui lòng bấm vào nút ĐĂNG KÝ NGAY liên hệ CSKH 24/7 để đăng ký nhận khuyến mãi. Khuyến mãi sẽ tính theo đơn nạp tiền cuối cùng của hội viên trước khi đăng ký.
      <br />
      Lưu ý : 
      Trước khi tham gia chương trình khuyến mãi thành viên không được đặt cược trước, nếu có đặt cược trước khi tham gia đăng ký, khuyến mãi sẽ không được phê duyệt.
      <br />
      <ol>
        <li>1. Hội viên phải có lịch sử nạp tiền trên 3 lần thì mới đủ điều kiện đăng ký khuyến mãi.</li>
        <br />
        <li>2. Khuyến mãi này không áp dụng cho các trò chơi Xổ Số. Hội viên cần phải hoàn thành: Tổng cược hợp lệ ( Tổng nạp + tiền khuyến mãi ) X số vòng cược, thì mới đủ điều kiện rút tiền.</li>
        <br />
        <li>3. Trước khi đăng ký khuyến mãi, thành viên cần phải điền đầy đủ tất cả thông tin cá nhân ( Liên kết thông tin ngân hàng, liên kết ngân hàng rút tiền, điền đầy đủ họ tên thật ) thì mới đủ điều kiện để đăng ký khuyến mãi.</li>
        <br />
        <li>4. Trong cùng 1 sự kiện khuyến mãi, mỗi tài khoản, mỗi số điện thoại, mỗi Gmail, mỗi ngân hàng, mỗi IP và mỗi thiết bị chỉ có thể nhận khuyến mãi 1 lần. Nếu phát hiện hành vi lạm dụng khuyến mãi. GK88 có quyền thu hồi tất cả tiền khuyến mãi và tiền thắng phát sinh.</li>
        <br />
      </ol>
      
      `,
    },
    {
      id: 5,
      image: "/images/5.png",
      title: "",
      content: `
      ※ Mã khuyến mãi: GH05
      <br />
      ※ Đối tượng khuyến mãi: Tất cả thành viên của GK88
      <br />
      ※ Thời gian bắt đầu: Từ bây giờ
      <br />
      ※ Thời gian kết thúc: Dựa vào thông báo chính thức trên trang. 
      <br />
      ※ Lưu ý: 1 điểm = 1000 VND
      <br />
      ※ Múi giờ thống kê: GMT-4 (Giờ Đông Mỹ).
      <br />
      <br />
      Chi tiết sự kiện:
      <br />
      <br />
      Tất cả thành viên của GK88 mỗi ngày tham gia đặt cược tại trò chơi CASINO khi có các vé cược có chứa những con số 8 đuôi ID giao dịch như sau có thể nhận được số điểm thưởng lên tới 88 lần, số điểm tối đa lên đến 18.888 điểm. 
      <br />
      <br />
      <table border="1" style="width: 80%; border-collapse: collapse; margin: 0 auto;">
        <thead>
          <tr style="background-color: orange;">
            <th style="border: 1px solid black; padding: 8px; text-align: left;">Điểm cược</th>
            <th style="border: 1px solid black; padding: 8px; text-align: left;">Đuôi ID giao dịch</th>
            <th style="border: 1px solid black; padding: 8px; text-align: left;">Số điểm tặng</th>
            <th style="border: 1px solid black; padding: 8px; text-align: left;">Tối đa</th>
            <th style="border: 1px solid black; padding: 8px; text-align: left;">Vòng cược</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid black; padding: 8px;" rowspan="6">100+</td>
            <td style="border: 1px solid black; padding: 8px;">******88</td>
            <td style="border: 1px solid black; padding: 8px;">88</td>
            <td style="border: 1px solid black; padding: 8px;">88</td>
            <td style="border: 1px solid black; padding: 8px;" rowspan="6">1 vòng</td>
          </tr>
          <tr>
            <td style="border: 1px solid black; padding: 8px;">*****888</td>
            <td style="border: 1px solid black; padding: 8px;">Điểm cược x1</td>
            <td style="border: 1px solid black; padding: 8px;">188</td>
          </tr>
          <tr>
            <td style="border: 1px solid black; padding: 8px;">****8888</td>
            <td style="border: 1px solid black; padding: 8px;">Điểm cược x3</td>
            <td style="border: 1px solid black; padding: 8px;">1.888</td>
          </tr>
          <tr>
            <td style="border: 1px solid black; padding: 8px;">***88888</td>
            <td style="border: 1px solid black; padding: 8px;">Điểm cược x10</td>
            <td style="border: 1px solid black; padding: 8px;">3.888</td>
          </tr>
          <tr>
            <td style="border: 1px solid black; padding: 8px;">**888888</td>
            <td style="border: 1px solid black; padding: 8px;">Điểm cược x30</td>
            <td style="border: 1px solid black; padding: 8px;">8.888</td>
          </tr>
          <tr>
            <td style="border: 1px solid black; padding: 8px;">*8888888</td>
            <td style="border: 1px solid black; padding: 8px;">Điểm cược x88</td>
            <td style="border: 1px solid black; padding: 8px;">18.888</td>
          </tr>
        </tbody>
      </table>
      <br />
      Phương thức đăng ký: 
      Sau khi có được mã vé cược như yêu cầu phía trên bạn vui lòng liên hệ CSKH 24/7 để được hỗ trợ nhận khuyến mãi. 
      <br />
      Ví Dụ : 
      Khi bạn đặt cược số tiền cược hợp lệ 200 điểm và có vé cược ***8888 bạn sẽ nhận được số tiền thưởng tương ứng là: (200x3) = 600 điểm
      <br />
      <br />
      Yêu cầu khuyến mãi:
      <ol>
        <li>1. Khuyến mãi chỉ áp dụng trong ngày, qua ngày mới không thể đăng ký vé cược của ngày cũ。</li>
        <br />
        <li>2. Khuyến mãi này chỉ áp dụng cho trò chơi Casino, không áp dụng cho các trò chơi khác. </li>
        <br />
        <li>3. Trước khi đăng ký khuyến mãi, thành viên cần phải điền đầy đủ tất cả thông tin cá nhân ( Liên kết thông tin ngân hàng, liên kết ngân hàng rút tiền, điền đầy đủ họ tên thật ) thì mới đủ điều kiện để đăng ký khuyến mãi. </li>
        <br />
        <li>4. Trong cùng 1 sự kiện khuyến mãi, mỗi tài khoản, mỗi số điện thoại, mỗi Gmail, mỗi ngân hàng, mỗi IP và mỗi thiết bị chỉ có thể nhận khuyến mãi 1 lần. Nếu phát hiện hành vi lạm dụng khuyến mãi. GK88 có quyền thu hồi tất cả tiền khuyến mãi và tiền thắng phát sinh</li>
      </ol>
      <br />
      `,
    },
   {
      id: 6,
      image: "/images/6.png",
      title: "",
      content: `
      ※ Mã khuyến mãi: LE02
      <br />
      ※ Đối tượng khuyến mãi: Tất cả thành viên của GK88
      <br />
      ※ Thời gian bắt đầu: 00:00 01/05/2025 GMT-4 (Giờ Đông Mỹ).
      <br />
      ※ Thời gian kết thúc: Dựa vào thông báo chính thức trên trang. 
      <br />
      ※ Lưu ý: 1 điểm = 1000 VND
      <br />
      ※ Múi giờ thống kê: GMT-4 (Giờ Đông Mỹ).
      <br />
      <br />
      Chú ý : 1000 VND = 1 Điểm
      <br />
      <br />
      Chi tiết sự kiện:
      Tất cả các thành viên GK88 mỗi ngày tham gia nạp 50K sẽ được nhận ngay 50K, và đồng thời phải tham gia cược ở trò chơi Bắn Cá - Nổ Hũ, không giới hạn số lượng người nhận khuyến mãi. Mỗi ngày chỉ có thể tham gia nhận khuyến mãi 1 lần !
      <br />
      <br />
      <table border="1" style="width: 80%; border-collapse: collapse; margin: 0 auto;">
        <thead>
          <tr style="background-color: orange;">
            <th style="border: 1px solid black; padding: 8px; text-align: left;">Trò chơi</th>
            <th style="border: 1px solid black; padding: 8px; text-align: left;">Số tiền nạp</th>
            <th style="border: 1px solid black; padding: 8px; text-align: left;">Tiền thưởng</th>
            <th style="border: 1px solid black; padding: 8px; text-align: left;">Tổng cược hợp lệ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid black; padding: 8px; color: orange; font-weight: bold;">Bắn Cá - Nổ Hũ</td>
            <td style="border: 1px solid black; padding: 8px;">50+</td>
            <td style="border: 1px solid black; padding: 8px;">50</td>
            <td style="border: 1px solid black; padding: 8px;" rowspan="6">1500 ĐIỂM</td>
          </tr>
        </tbody>
      </table>
      <br />
            Lưu ý: 
             Chỉ áp dụng cho tài khoản có từ 5 lần nạp trở lên - Tài khoản phải có tổng tích lũy nạp từ 500K trở lên
      <br />
      Phương thức đăng ký: 
      Sau khi bạn nạp tiền thành công, vui lòng bấm vào nút ĐĂNG KÝ NGAY phía dưới liên hệ CSKH 24/7 để đăng ký nhận khuyến mãi.
      <br />
      Yêu cầu khuyến mãi:
      <ol>
        <li>1. Khuyến mãi chỉ áp dụng cho trò chơi Bắn Cá - Nổ Hũ. Không áp dụng cho các sản phẩm trò chơi khác. Nếu cược sai sản phẩm GK88 sẽ có quyền thu hồi toàn bộ số tiền thắng và tiền khuyến mãi.</li>
        <br />
        <li>2. Thành viên cần phải hoàn thành: Tổng điểm cược hợp lệ = Tiền nạp + 1.500 điểm cược hợp lệ thì mới đủ điều kiện để rút tiền.</li>
        <br />
        <li>3. Trước khi đăng ký khuyến mãi, thành viên cần phải điền đầy đủ tất cả thông tin cá nhân ( Liên kết thông tin ngân hàng, điền đầy đủ họ tên thật ) thì mới đủ điều kiện để đăng ký khuyến mãi.</li>
        <br />
        <li>4. Trong cùng 1 sự kiện khuyến mãi, mỗi tài khoản, mỗi số điện thoại, mỗi Gmail, mỗi ngân hàng, mỗi IP và mỗi thiết bị chỉ có thể nhận khuyến mãi 1 lần. Nếu phát hiện hành vi lạm dụng khuyến mãi. GK88 có quyền thu hồi tất cả tiền khuyến mãi và tiền thắng phát sinh.</li>
        <br />
        <li>5. GK88 có quyền thay đổi, bổ sung, chấm dứt hoạt động và bảo lưu quyền giải thích cuối cùng về khuyến mãi.</li>
      </ol>
      `,
    },
    {
      id: 7,
      image: "/images/7.png",
      title: "",
      content: `
      ※ Mã khuyến mãi: LE04
      <br />
      ※ Đối tượng khuyến mãi: Tất cả thành viên của GK88
      <br />
      ※ Thời gian bắt đầu: 00:00 01/05/2025 GMT-4 (Giờ Đông Mỹ).
      <br />
      ※ Thời gian kết thúc: Dựa vào thông báo chính thức trên trang. 
      <br />
      ※ Lưu ý: 1 điểm = 1000 VND
      <br />
      ※ Múi giờ thống kê: GMT-4 (Giờ Đông Mỹ).
      <br />
      <br />
      Chú ý : 1000 VND = 1 Điểm
      <br />
      <br />
      Chi tiết sự kiện:
      Chào mừng tất cả thành viên cũ của GK88 đã luôn đồng hành và gắn bó cùng GK88 trong suốt chặng đường dài vừa qua. Vì một số lý do nào đó mà bạn đã lâu không đăng nhập và tham gia giải trí tại GK88. Nếu bạn thuộc nhóm hội viên này, sẽ nhận được ngay 1 phần thưởng khủng miễn phí lên đến 8.888.000VND đang chờ đón bạn. Chúc bạn luôn gặp nhiều may mắn và thành công trong cuộc sống.
      <br />
      <br />
            <table border="1" style="width: 80%; border-collapse: collapse; margin: 0 auto;">
        <thead>
          <tr style="background-color: orange;">
            <th style="border: 1px solid black; padding: 8px; text-align: center;">Cấp VIP</th>
            <th style="border: 1px solid black; padding: 8px; text-align: center;">Tiền thưởng</th>
            <th style="border: 1px solid black; padding: 8px; text-align: center;">Vòng cược</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid black; padding: 8px; text-align: center;">VIP 1</td>
            <td style="border: 1px solid black; padding: 8px; text-align: center;">18</td>
            <td style="border: 1px solid black; padding: 8px; text-align: center;" rowspan="10"></td>
          </tr>
          <tr>
            <td style="border: 1px solid black; padding: 8px; text-align: center;">VIP 2</td>
            <td style="border: 1px solid black; padding: 8px; text-align: center;">28</td>
          </tr>
          <tr>
            <td style="border: 1px solid black; padding: 8px; text-align: center;">VIP 3 - VIP 4</td>
            <td style="border: 1px solid black; padding: 8px; text-align: center;">58</td>
          </tr>
          <tr>
            <td style="border: 1px solid black; padding: 8px; text-align: center;">VIP 5 - VIP 10</td>
            <td style="border: 1px solid black; padding: 8px; text-align: center;">388</td>
          </tr>
          <tr>
            <td style="border: 1px solid black; padding: 8px; text-align: center;">VIP 11 - VIP 15</td>
            <td style="border: 1px solid black; padding: 8px; text-align: center;">588</td>
          </tr>
          <tr>
            <td style="border: 1px solid black; padding: 8px; text-align: center;">VIP 16 - VIP 20</td>
            <td style="border: 1px solid black; padding: 8px; text-align: center;">888</td>
          </tr>
          <tr>
            <td style="border: 1px solid black; padding: 8px; text-align: center;">VIP 21 - VIP 30</td>
            <td style="border: 1px solid black; padding: 8px; text-align: center;">1,888</td>
          </tr>
          <tr>
            <td style="border: 1px solid black; padding: 8px; text-align: center;">VIP 31 - VIP 40</td>
            <td style="border: 1px solid black; padding: 8px; text-align: center;">3,888</td>
          </tr>
          <tr>
            <td style="border: 1px solid black; padding: 8px; text-align: center;">VIP 41 - VIP 50</td>
            <td style="border: 1px solid black; padding: 8px; text-align: center;">5,888</td>
          </tr>
          <tr>
            <td style="border: 1px solid black; padding: 8px; text-align: center;">VIP 51 - VIP 60</td>
            <td style="border: 1px solid black; padding: 8px; text-align: center;">8,888</td>
          </tr>
          <tr>
            <td colspan="2" style="border: 1px solid black; padding: 8px; text-align: center;">
              Điều kiện khác: <span style="color: orange; font-weight: bold;">≥ 10 ngày</span> gần nhất không nạp tiền
            </td>
            <td style="border: 1px solid black; padding: 8px; text-align: center; color: orange; font-weight: bold;">3 vòng cược</td>
          </tr>
        </tbody>
      </table>
      <br />
            Lưu ý: 
             Chỉ áp dụng cho tài khoản có từ 5 lần nạp trở lên - Tài khoản phải có tổng tích lũy nạp từ 500K trở lên
      <br />
      Phương thức đăng ký: 
      Phương thức đăng ký: Nếu bạn đạt đủ điều kiện như trên, vui lòng bấm vào nút ĐĂNG KÝ NGAY liên hệ CSKH 24/7 để được hỗ trợ nhận khuyến mãi LE04.
      <br />
      Yêu cầu khuyến mãi:
      <ol>
        <li>1. Khuyến mãi này không áp dụng cho trò chơi xổ số. Thành viên cần phải hoàn thành 3 vòng cược là có thể rút tiền bất cứ lúc nào</li>
        <br />
        <li>2. Trước khi đăng ký khuyến mãi, thành viên cần phải điền đầy đủ tất cả thông tin cá nhân ( Liên kết thông tin ngân hàng, điền đầy đủ họ tên thật ) thì mới đủ điều kiện để đăng ký khuyến mãi.</li>
        <br />
        <li>3.Trong cùng 1 sự kiện khuyến mãi, mỗi tài khoản, mỗi số điện thoại, mỗi Gmail, mỗi ngân hàng, mỗi IP và mỗi thiết bị chỉ có thể nhận khuyến mãi 1 lần. Nếu phát hiện hành vi lạm dụng khuyến mãi, GK88 có quyền thu hồi tất cả tiền khuyến mãi và tiền thắng phát sinh.</li>
        <br />
        <br />
        <li>4. GK88 có quyền thay đổi, bổ sung, chấm dứt hoạt động và bảo lưu quyền giải thích cuối cùng về khuyến mãi.</li>
      </ol>
      `,
    },
    {
      id: 8,
      image: "/images/9.jpg",
      title: "",
      content: `
    ※ Mã khuyến mãi: LE07 
    <br />
    ※ Đối tượng khuyến mãi: Tất cả thành viên của GK88
    <br />
    ※ Thời gian bắt đầu: 00:00 01/05/2025 GMT-4 (Giờ Đông Mỹ).
    <br />
    ※ Thời gian kết thúc: Dựa vào thông báo chính thức trên trang. 
    <br />
    ※ Lưu ý: 1 điểm = 1000 VND
    <br />
    ※ Múi giờ thống kê: GMT-4 (Giờ Đông Mỹ).
    <br />
    <br />
    Chi tiết sự kiện:
     Bắt đầu từ 01/05/2025, Tất cả thành hội viên GK88 tham gia nạp tiền vào chủ nhật hàng tuần, sẽ được nhận khuyến mãi 7%, tiền thưởng tối đa lên đến 12.888.000VND, đặc biệt không giới hạn số hội viên tham gia, nhanh tay mời bạn bè cùng tham gia nhận khuyến mãi siêu hấp dẫn này nhé. 
    <br />
    <br />
    <table border="1" style="width: 80%; border-collapse: collapse; margin: 0 auto;">
      <thead>
        <tr style="background-color: orange;">
          <th style="border: 1px solid black; padding: 8px; text-align: left;">Số tiền nạp tối thiểu</th>
          <th style="border: 1px solid black; padding: 8px; text-align: left;">% Khuyến mãi</th>
          <th style="border: 1px solid black; padding: 8px; text-align: left;">Thưởng tối đa</th>
          <th style="border: 1px solid black; padding: 8px; text-align: left;">Vòng cược</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border: 1px solid black; padding: 8px;" rowspan="8">100+</td>
          <td style="border: 1px solid black; padding: 8px;">7%</td>
          <td style="border: 1px solid black; padding: 8px;">12.888</td>
          <td style="border: 1px solid black; padding: 8px;" rowspan="8">3 vòng</td>
        </tr>
       
      </tbody>
    </table>
    <br />
    Phương thức đăng ký:
    Sau khi nạp tiền thành công, hội viên vui lòng bấm vào nút ĐĂNG KÝ NGAY liên hệ CSKH 24/7 để đăng ký nhận khuyến mãi. Khuyến mãi sẽ tính theo đơn nạp tiền đầu tiên của hội viên trước khi đăng ký.
    <br />
    Lưu ý: Tiền gốc + Tiền khuyến mãi hoàn thành 3 vòng cược là có thể tiến hành rút tiền
    <br />
    Trước khi tham gia chương trình khuyến mãi thành viên không được đặt cược trước, nếu có đặt cược trước khi tham gia đăng ký, khuyến mãi sẽ không được phê duyệt.
    <br />
    Yêu cầu khuyến mãi:
    <ol>
      <li>1. Hội viên phải có lịch sử nạp tiền trên 3 lần thì mới đủ điều kiện đăng ký khuyến mãi.</li>
      <br />
      <li2. Khuyến mãi này không áp dụng cho các trò chơi Xổ Số. Hội viên cần phải hoàn thành: Tổng cược hợp lệ = (Tổng nạp + tiền khuyến mãi ) X số vòng cược, thì mới đủ điều kiện rút tiền.</li>
      <br />
      <li>3. Trước khi đăng ký khuyến mãi, thành viên cần phải điền đầy đủ tất cả thông tin cá nhân ( Liên kết thông tin ngân hàng, điền đầy đủ họ tên thật ) thì mới đủ điều kiện để đăng ký khuyến mãi.</li>
      <br />
      <li>4 : Trong cùng 1 sự kiện khuyến mãi, mỗi tài khoản, mỗi số điện thoại, mỗi Gmail, mỗi ngân hàng, mỗi IP và mỗi thiết bị chỉ có thể nhận khuyến mãi 1 lần. Nếu phát hiện hành vi lạm dụng khuyến mãi. GK88 có quyền thu hồi tất cả tiền khuyến mãi và tiền thắng phát sinh.
      </li>
      <br />
      <li>5 : GK88 có quyền thay đổi, bổ sung, chấm dứt hoạt động và bảo lưu quyền giải thích cuối cùng về khuyến mãi.</li>
    </ol>
    `,
    },
  ];

  const openModal = (promo: Promotion) => {
    setCurrentPromo(promo);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className="py-6 md:py-10 lg:py-12">
      <div className="container mx-auto px-3 md:px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10 relative animate-pulse-text text-orange-500">
          SỰ KIỆN HOT TẠI <span className="relative inline-block">
            <span className="text-[#007BCB] animate-pulse-blue">GK</span><span className="text-orange-500 animate-pulse-orange">88</span>
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#007BCB] to-orange-500 animate-width-expand"></span>
          </span>
        </h2>        
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 md:mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              {promotions.map((promo) => (
                <div
                  key={promo.id}
                  className="bg-black/30 backdrop-blur-sm rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-200 overflow-hidden flex flex-col h-full border border-orange-200"
                  onClick={() => openModal(promo)}
                >
                  <div className="aspect-[760/480] w-full">
                    <img
                      src={promo.image}
                      alt={promo.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                 
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {showModal && currentPromo && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-2 md:p-4 backdrop-blur-sm transition-all duration-300 overflow-y-auto">
          <div
            className="bg-white backdrop-blur-md rounded-xl shadow-[0_20px_50px_rgba(249,115,22,0.2)] w-full max-w-full sm:max-w-[90%] md:max-w-5xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto border-[2px] md:border-[3px] border-gradient-to-r border-orange-200 relative my-4 md:my-auto"
            style={{
              animation:
                "modalFadeIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              boxShadow:
                "0 10px 50px rgba(249,115,22,0.2), 0 6px 20px rgba(0,0,0,0.15), inset 0 1px 1px rgba(255,255,255,0.1)",
            }}
          >
            <div className="sticky top-0 left-0 right-0 z-20 bg-gradient-to-r from-white/90 via-white/80 to-white/90 shadow-sm backdrop-blur-md">
              <div className="h-12 md:h-16 relative flex items-center justify-end px-2 md:px-6">
                <div className="absolute left-3 md:left-6 top-1/2 transform -translate-y-1/2 max-w-[75%] md:max-w-[85%]">
                  <span className="text-orange-500 font-semibold text-sm md:text-base lg:text-lg truncate block">
                    GK88 CƯỢC GIẢI TRÍ, THƯỞNG NGHÌN TỶ!
                  </span>
                </div>
                {/* Nút đóng ở góc phải trên */}
                <button
                  onClick={closeModal}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 duration-200"
                  aria-label="Đóng"
                >
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="relative">
              {/* Content */}
              <div className="p-4 md:p-6 lg:p-8 pt-2 md:pt-4">
                {/* Nội dung */}
                <div className="mb-5 md:mb-8 bg-orange-50/50 backdrop-blur-sm p-3 md:p-6 rounded-xl border border-orange-200 shadow-[0_5px_15px_rgba(0,0,0,0.05)]">
                  <h4 className="text-lg md:text-xl font-bold text-gradient bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-3 md:mb-4 pb-2 border-b border-orange-200 flex items-center">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 mr-1.5 md:mr-2 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                      />
                    </svg>
                    <span className="truncate">GK88 CƯỢC GIẢI TRÍ, THƯỞNG NGHÌN TỶ!</span>
                  </h4>
                  <div
                    dangerouslySetInnerHTML={{ __html: currentPromo.content }}
                  />
                </div>

                {/* Footer */}
                <div className="mt-5 md:mt-8 pt-3 md:pt-4 flex flex-col sm:flex-row justify-center border-t border-orange-200 gap-3 sm:gap-0">
                  <button
                    onClick={closeModal}
                    className="bg-orange-50 backdrop-blur-sm text-orange-600 px-4 md:px-6 py-3 md:py-4 rounded-xl font-bold hover:bg-orange-100 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 duration-200 flex items-center justify-center"
                  >
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    Đóng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .text-gradient {
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @media (max-width: 640px) {
          .text-gradient {
            background-size: 100%;
          }
        }
      `}</style>
    </section>
  );
}
