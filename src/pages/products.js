import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Row } from "react-bootstrap";
import Paginator from "react-hooks-paginator";
import { LayoutFour } from "../layouts";
import { ShopHeader, ShopProducts } from "../components/Shop";
import GuideVideo from "../components/GuideVideo";
import { getSortedProducts } from "../lib/product";
import { HeroSliderOne } from "../components/HeroSlider";
import heroSliderOneData from "../data/hero-sliders/hero-slider-one.json";

const GridLeftSidebar = () => {
  const { products } = useSelector((state) => state.product);
  const [layout, setLayout] = useState("grid");
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [shopTopFilterStatus, setShopTopFilterStatus] = useState(false);

  const pageLimit = 12;

  const getLayout = (layout) => {
    setLayout(layout);
  };

  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };

  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  useEffect(() => {
    let sortedProducts = getSortedProducts(products, sortType, sortValue);
    const filterSortedProducts = getSortedProducts(
      sortedProducts,
      filterSortType,
      filterSortValue
    );
    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);
    setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
  }, [offset, products, sortType, sortValue, filterSortType, filterSortValue]);

  return (
    <LayoutFour>
      <HeroSliderOne heroSliderData={heroSliderOneData} />
      <div className="shop-content py-5">
        <Container>
          <Row>
            {/* <Col lg={9}> */}
            {/* shop page header */}
            <ShopHeader
              getLayout={getLayout}
              getFilterSortParams={getFilterSortParams}
              shopTopFilterStatus={shopTopFilterStatus}
              setShopTopFilterStatus={setShopTopFilterStatus}
              layout={layout}
            />
            {/* shop products */}
            <ShopProducts layout={layout} products={currentData} />

            {/* shop product pagination */}
            <div className="pagination pagination-style pagination-style--two justify-content-center">
              <Paginator
                totalRecords={sortedProducts.length}
                pageLimit={pageLimit}
                pageNeighbours={2}
                setOffset={setOffset}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pageContainerClass="mb-0 mt-0"
                pagePrevText="«"
                pageNextText="»"
              />
            </div>
            {/* </Col> */}
            {/* sidebar */}
            {/* <Col lg={3} className="order-lg-first mt-4 pt-2 mt-lg-0 pt-lg-0">
              <Sidebar products={products} getSortParams={getSortParams} />
            </Col> */}
          </Row>
        </Container>
      </div>
      <GuideVideo pt={false} pb={false} />
    </LayoutFour>
  );
};

export default GridLeftSidebar;
