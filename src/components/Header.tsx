'use client';

export default function Header() {
  return (
    <header className="w-full z-50 absolute">
      <nav className="container mx-auto px-4 py-2 flex justify-end items-center">
        <div className="flex items-center space-x-4">
          <a href="https://pr1gk.xyz/" className="block transition-transform duration-200 hover:scale-105 hover:drop-shadow-lg">
            <img
              src="/images/dang-nhap.png"
              alt="Đăng nhập"
              className="h-8"
            />
          </a>
          <a href="https://pr1gk.xyz/" className="block transition-transform duration-200 hover:scale-105 hover:drop-shadow-lg">
            <img
              src="/images/dang-kí.png"
              alt="Đăng ký"
              className="h-8"
            />
          </a>
        </div>
      </nav>
    </header>
  );
}
