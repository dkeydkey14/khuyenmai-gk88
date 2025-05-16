'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import Select from 'react-select';
import { components } from 'react-select';
import { FaUser, FaGift, FaShieldAlt, FaRedo } from 'react-icons/fa';

// Định nghĩa kiểu dữ liệu cho promotion option
interface PromotionOption {
  value: string;
  label: string;
}

interface ApiResponse {
  success?: boolean;
  message?: string;
  successMessage?: string;
  eligible?: boolean;
  autoApproved?: boolean;
  autoRejected?: boolean;
  requiresManualReview?: boolean;
  account?: string;
  name?: string;
  promoCode?: string;
  bonusAmount?: number;
  depositAmount?: number;
  reason?: string;
  data?: any;
}

interface DeviceInfo {
  data?: {
    fingerprint?: string | { value: string };
    ip?: string;
    location?: {
      country?: string;
      city?: string;
    };
    device?: {
      type?: string;
      os?: string;
    };
  };
  error?: string;
}

export default function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [selectedPromotion, setSelectedPromotion] = useState<PromotionOption | null>(null);
  const [captchaCode, setCaptchaCode] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaError, setCaptchaError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo | null>(null);

  // Hàm tạo mã captcha ngẫu nhiên
  const generateCaptcha = () => {
    const digits = '0123456789';
    let result = '';
    for (let i = 0; i < 4; i++) {
      result += digits.charAt(Math.floor(Math.random() * digits.length));
    }
    setCaptchaCode(result);
    setCaptchaInput('');
    setCaptchaError(false);
  };

  // Hàm thu thập thông tin thiết bị
  const detectDeviceInfo = async () => {
    try {
      // Gọi trực tiếp đến API gốc
      const apiUrl = 'https://api.checkipnewpei.it.com/api/device-info?include_fingerprint=true';
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setDeviceInfo(data);
      return data;
    } catch (error) {
      console.error('Lỗi khi lấy thông tin thiết bị:', error);
      setDeviceInfo({ error: 'Không thể lấy thông tin thiết bị' });
      return { error: 'Không thể lấy thông tin thiết bị' };
    }
  };

  // Khởi tạo captcha khi component mount và thu thập thông tin thiết bị
  useEffect(() => {
    generateCaptcha();
    detectDeviceInfo();
  }, []);

  // Kiểm tra captcha khi submit form
  const validateCaptcha = () => {
    if (captchaInput === captchaCode) {
      setCaptchaError(false);
      return true;
    } else {
      setCaptchaError(true);
      return false;
    }
  };

  // Xử lý form submit
  const handleSubmit = async () => {
    // Reset state
    setFormError('');
    setSuccessMessage('');
    setFormSubmitted(false);

    // Kiểm tra username
    if (!username || username.length < 2) {
      setFormError('Vui lòng nhập tên tài khoản (ít nhất 2 ký tự)');
      return;
    }

    // Kiểm tra promotion
    if (!selectedPromotion) {
      setFormError('Vui lòng chọn một khuyến mãi');
      return;
    }

    // Kiểm tra captcha
    if (!validateCaptcha()) {
      setFormError('Mã xác thực không chính xác');
      generateCaptcha(); // Tạo mã captcha mới sau khi xác thực sai
      return;
    }

    // Kiểm tra thông tin thiết bị
    if (!deviceInfo || deviceInfo.error || !deviceInfo.data || !deviceInfo.data.fingerprint) {
      setFormError('Không thể thu thập thông tin thiết bị. Vui lòng làm mới trang.');
      return;
    }

    // Nếu tất cả kiểm tra đều thành công, bắt đầu gửi dữ liệu
    setIsLoading(true);
    setFormSubmitted(true);
    
    try {
      // Chuẩn bị dữ liệu để gửi đến API
      const requestData = {
        account: username,
        promoCode: selectedPromotion.value,
        deviceInfo: deviceInfo // Thêm thông tin thiết bị vào request
      };
      
      // Gửi request đến API
      const response = await fetch('https://api02gk88check.newpei.dev/api/auto-review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData)
      });
      
      // Kiểm tra mã trạng thái HTTP
      if (response.status === 400) {
        // Xử lý lỗi 400 Bad Request
        try {
          const errorResult = await response.json();
          setFormError(errorResult.error || errorResult.message || `Tài khoản đã có yêu cầu khuyến mãi ${selectedPromotion.value} đang chờ duyệt hoặc đã duyệt`);
        } catch (parseError) {
          setFormError(`Tài khoản đã có yêu cầu khuyến mãi ${selectedPromotion.value} đang chờ duyệt hoặc đã duyệt`);
        }
        setFormSubmitted(false);
        setIsLoading(false);
        return;
      }
      
      // Xử lý kết quả
      const result: ApiResponse = await response.json();
      
      // Kiểm tra xem phản hồi có chứa trường successMessage hay không
      if (result.successMessage || result.autoApproved === true || result.eligible === true) {
        // Xử lý khi API trả về thành công
        setSuccessMessage(result.successMessage || 'Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm.');
        
        // Hiển thị thông tin thêm nếu có
        console.log('Kết quả đăng ký:', result);
        
        // Reset form sau khi submit thành công
        setTimeout(() => {
          setUsername('');
          setSelectedPromotion(null);
          setCaptchaInput('');
          generateCaptcha();
          setFormSubmitted(false);
          setSuccessMessage('');
        }, 8000); // Tăng thời gian để người dùng đọc thông báo
      } else if (result.autoRejected === true) {
        // Xử lý khi API trả về từ chối tự động
        setFormError(result.reason || 'Yêu cầu của bạn đã bị từ chối.');
        setFormSubmitted(false);
      } else if (result.requiresManualReview === true) {
        // Xử lý khi cần xét duyệt thủ công
        setSuccessMessage('Yêu cầu của bạn đang được xem xét. Chúng tôi sẽ liên hệ với bạn sớm.');
        
        // Reset form sau khi submit thành công
        setTimeout(() => {
          setUsername('');
          setSelectedPromotion(null);
          setCaptchaInput('');
          generateCaptcha();
          setFormSubmitted(false);
          setSuccessMessage('');
        }, 5000);
      } else if (result.success === false) {
        // Xử lý khi API trả về lỗi rõ ràng
        setFormError(result.message || 'Có lỗi xảy ra. Vui lòng thử lại sau.');
        setFormSubmitted(false);
      } else {
        // Xử lý trường hợp không rõ ràng
        setFormError('Không thể xác định kết quả. Vui lòng liên hệ CSKH để được hỗ trợ.');
        setFormSubmitted(false);
      }
    } catch (error) {
      // Xử lý lỗi khi gọi API
      console.error('Error submitting form:', error);
      setFormError('Không thể kết nối đến máy chủ. Vui lòng thử lại sau.');
      setFormSubmitted(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full max-w-[1024px] mx-auto bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8">
      {successMessage && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-center">
          {successMessage}
        </div>
      )}
      
      {formError && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-center">
          {formError}
        </div>
      )}
      
      <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6 md:gap-4">
        {/* Thông tin tài khoản */}
        <div className="flex flex-col items-center gap-2 w-full md:w-auto">
          <div className="flex items-center gap-2">
            <FaUser className="w-5 h-5 text-orange-500" />
            <label className="font-semibold">Thông tin tài khoản</label>
          </div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nhập Tên Tài Khoản"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Thông tin khuyến mãi */}
        <div className="flex flex-col items-center gap-2 w-full md:w-auto">
          <div className="flex items-center gap-2">
            <FaGift className="w-5 h-5 text-orange-500" />
            <label className="font-semibold">Thông tin khuyến mãi</label>
          </div>
          <Select<PromotionOption>
            className="w-full md:w-72"
            isDisabled={username.length < 2}
            options={[
              { value: 'GK39', label: 'GK39 : ĐĂNG KÍ TÀI KHOẢN NHẬN NGAY 39K' },
              { value: 'GK01', label: 'GK01 : HỘI VIÊN MỚI NẠP ĐẦU THƯỞNG 28.888.000VND' },
              { value: 'GK02', label: 'GK02 : HỘI VIÊN NẠP LẦN 2 THƯỞNG 15.888.000VND' },
              { value: 'GK09', label: 'GK09 : BẮN CÁ - NỔ HŨ NẠP ĐẦU TẶNG 100%' },
              { value: 'GK06', label: 'GK06: Ngày vàng 10, 20, 30 khuyến mãi 6%' },
              { value: 'GH05', label: 'GH05 : SĂN VÉ CƯỢC MAY MẮN' },
              { value: 'LE04', label: 'LE04 : ĐÓN HỘI VIÊN CŨ QUAY LẠI THƯỞNG MIỄN PHÍ 8.888K' },
              { value: 'LE07', label: 'LE07 : NẠP TIỀN CHỦ NHẬT HÀNG TUẦN THƯỞNG 7%' },
              
            ]}
            placeholder="Chọn khuyến mãi"
            value={selectedPromotion}
            onChange={(option) => setSelectedPromotion(option)}
            formatOptionLabel={({ label }) => (
              <span>{label.length > 30 ? `${label.slice(0, 28)}...` : label}</span>
            )}
            components={{
              Menu: (props) => (
                <components.Menu {...props}>
                  <div className="flex justify-between mb-2 px-3">
                    <span className="font-bold">Mã</span>
                    <span className="font-bold mx-auto">Tiêu đề</span>
                  </div>
                  {props.children}
                </components.Menu>
              )
            }}
            styles={{
              control: (provided) => ({
                ...provided,
                borderRadius: '8px',
                borderColor: '#FB923C',
                boxShadow: 'none',
                '&:hover': { borderColor: '#FB923C' },
              }),
              option: (provided, state) => ({
                ...provided,
                backgroundColor: state.isSelected ? '#FB923C' : state.isFocused ? '#FDE68A' : undefined,
                color: state.isSelected ? 'white' : 'black',
                borderRadius: '8px',
                margin: '2px 0',
                padding: '4px 8px',
                border: '1px solid #FB923C',
              }),
            }}
          />
        </div>

        {/* Xác thực */}
        <div className="flex flex-col items-center gap-2 w-full md:w-auto">
          <div className="flex items-center gap-2">
            <FaShieldAlt className="w-5 h-5 text-orange-500" />
            <label className="font-semibold">Xác thực</label>
          </div>
          
          {/* Layout khác cho mobile và desktop */}
          <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-2">
            {/* Phần hiển thị captcha */}
            <div className="flex items-center mb-2 md:mb-0 md:mr-2">
              <div 
                className={`text-2xl font-bold p-2 bg-gray-100 rounded-lg ${captchaError ? 'text-red-600 bg-red-100' : 'text-gray-700'}`} 
                style={{ letterSpacing: '3px', userSelect: 'none' }}
              >
                {captchaCode}
              </div>
              <button 
                onClick={generateCaptcha}
                className="p-1 text-gray-500 hover:text-orange-500 ml-2"
                title="Làm mới mã"
              >
                <FaRedo className="w-5 h-5" />
              </button>
            </div>
            
            {/* Ô nhập captcha */}
            <div className="w-full md:w-auto flex flex-col">
              <input
                type="text"
                placeholder="Nhập mã captcha"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                className={`w-full md:w-36 p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  captchaError 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'focus:ring-orange-500'
                }`}
              />
              {captchaError && (
                <p className="text-xs text-red-500 mt-1">Mã xác thực không chính xác</p>
              )}
            </div>
          </div>
        </div>

        {/* Nút Xác Nhận */}
        <button 
          onClick={handleSubmit}
          className="w-full md:w-auto bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center md:self-end"
          disabled={isLoading || formSubmitted}
        >
          {isLoading && (
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          )}
          {isLoading ? 'Đang xử lý...' : 'Xác Nhận'}
        </button>
      </div>
    </section>
  );
} 
