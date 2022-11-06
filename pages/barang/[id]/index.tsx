import {
  Footer,
  KalkulatorKeramik,
  ProductDetailCard,
  SimulasiKeramik,
} from "../../../src/layout";
import { SectionLayout, StoreLayout } from "../../../src/template";
import { Swiper, SwiperSlide } from "swiper/react";
import { CardProduct } from "../../../src/components/molecules";
import { Pagination } from "swiper";

export default function DetailBarang() {
  return (
    <StoreLayout
      title="Detail Barang"
      noSearchable={true}
      main={
        <div>
          <ProductDetailCard />
          <div className="flex flex-col md:flex-row">
            <SimulasiKeramik />
            <KalkulatorKeramik />
          </div>
          <SectionLayout
            title="Produk Lainnya"
            main={
              <div>
                <Swiper
                  slidesPerView={2}
                  breakpoints={{
                    300: { slidesPerView: 1.1 },
                    640: { slidesPerView: 2.1 },
                    768: { slidesPerView: 3.1 },
                    1024: { slidesPerView: 4.1 },
                  }}
                  spaceBetween={20}
                  modules={[Pagination]}
                >
                  {products.map((product) => (
                    <SwiperSlide key={product.name}>
                      <CardProduct onClick={() => {}} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            }
          />
          <Footer />
        </div>
      }
    />
  );
}

const products = [
  {
    name: "Tas Mewah",
    cover: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    price: 20000,
    status: "promo",
    priceSale: 30000,
    kategori: "Men",
    rating: 5,
  },
  {
    name: "Barang Branded",
    cover: "https://placeimg.com/640/480/animals",
    price: 10000,
    status: "sale",
    priceSale: 15000,
    kategori: "Men",
    rating: 4,
  },
  {
    name: "Barang Murah Banget",
    cover: "https://placeimg.com/640/480/tech",
    price: 100000,
    priceSale: 50000,
    kategori: "Men",
    rating: 5,
  },
  {
    name: "Tas Mewah",
    cover: "https://placeimg.com/640/480/nature",
    price: 10000,
    status: "promo",
    priceSale: 15000,
    kategori: "Men",
    rating: 4,
  },
  {
    name: "Tas Mewah",
    cover: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    price: 20000,
    status: "promo",
    priceSale: 30000,
    kategori: "Men",
    rating: 5,
  },
  {
    name: "Barang Branded",
    cover: "https://placeimg.com/640/480/animals",
    price: 10000,
    status: "sale",
    priceSale: 15000,
    kategori: "Men",
    rating: 4,
  },
  {
    name: "Barang Murah Banget",
    cover: "https://placeimg.com/640/480/tech",
    price: 100000,
    priceSale: 50000,
    kategori: "Men",
    rating: 5,
  },
  {
    name: "Tas Mewah",
    cover: "https://placeimg.com/640/480/nature",
    price: 10000,
    status: "promo",
    priceSale: 15000,
    kategori: "Men",
    rating: 4,
  },
];
