import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination as SwiperPagination } from 'swiper/modules';
import Navbar from './components/Navbar';
import Productcard from './components/ProdcutCard';
import Pagination from './components/Pagination';
import products from './components/Products';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PRODUCTS_PER_PAGE = 6;

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const currentProducts = products.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const handlePageChange = (page) => page >= 1 && page <= totalPages && setCurrentPage(page);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center md:text-left">
          Product Gallery
        </h1>
        <Swiper
          modules={[Navigation, SwiperPagination]}
          spaceBetween={24}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="mySwiper"
        >
          {currentProducts.map(product => (
            <SwiperSlide key={product.id} className="flex justify-center">
              <Productcard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-8 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}

export default App;




















