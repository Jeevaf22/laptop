import { useState } from "react";

import Container from "./Container";
import Input from "./Input";

const Product = () => {
  const productList = [
    {
      img: "https://m.media-amazon.com/images/I/81gK08T6tYL._AC_SL1500_.jpg",
      title: "ASUS",
      price: "1.245$",
      description:
        'ASUS TUF FX505DT Gaming Laptop- 15.6", 120Hz Full HD, AMD Ryzen 5 R5-3550H Processor, GeForce GTX 1650',
      id: 1,
    },
    {
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_SL1500_.jpg",
      title: "RAZER",
      price: "2.345$",
      description:
        'Razer Blade 15 Base Gaming Laptop 2020: Intel Core i7-10750H 6-Core, NVIDIA GeForce GTX 1660 Ti, 15.6"',
      id: 2,
    },
    {
      img: "https://m.media-amazon.com/images/I/81w+3k4U8PL._AC_SL1500_.jpg",
      title: "LENOVO",
      price: "1.020$",
      description:
        'Lenovo Legion 5 Gaming Laptop, 15.6" FHD (1920x1080) IPS Screen, AMD Ryzen 7 4800H Processor, 16GB DDR4,',
      id: 3,
    },
    {
      img: "https://m.media-amazon.com/images/I/61Ze2wc9nyS._AC_SL1500_.jpg",
      title: "MSI",
      price: "2.245$",
      description:
        'MSI GL66 Gaming Laptop: 15.6" 144Hz FHD 1080p Display, Intel Core i7-11800H, NVIDIA GeForce RTX 3070,',
      id: 4,
    },
    // 2nd
    {
      img: "https://m.media-amazon.com/images/I/81gK08T6tYL._AC_SL1500_.jpg",
      title: "ASUS",
      price: "1.245$",
      description:
        'ASUS TUF FX505DT Gaming Laptop- 15.6", 120Hz Full HD, AMD Ryzen 5 R5-3550H Processor, GeForce GTX 1650',
      id: 5,
    },
    {
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_SL1500_.jpg",
      title: "RAZER",
      price: "2.345$",
      description:
        'Razer Blade 15 Base Gaming Laptop 2020: Intel Core i7-10750H 6-Core, NVIDIA GeForce GTX 1660 Ti, 15.6"',
      id: 6,
    },
    {
      img: "https://m.media-amazon.com/images/I/81w+3k4U8PL._AC_SL1500_.jpg",
      title: "LENOVO",
      price: "1.020$",
      description:
        'Lenovo Legion 5 Gaming Laptop, 15.6" FHD (1920x1080) IPS Screen, AMD Ryzen 7 4800H Processor, 16GB DDR4,',
      id: 7,
    },
    {
      img: "https://m.media-amazon.com/images/I/61Ze2wc9nyS._AC_SL1500_.jpg",
      title: "MSI",
      price: "2.245$",
      description:
        'MSI GL66 Gaming Laptop: 15.6" 144Hz FHD 1080p Display, Intel Core i7-11800H, NVIDIA GeForce RTX 3070,',
      id: 8,
    },
  ];

  const [title, setName] = useState("");
  const [list, setList] = useState(productList);

  // Search filter
  const filter = (e) => {
    const keyword = e.target.value;
    if (keyword !== "") {
      const results = productList.filter((user) => {
        return user.title.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setList(results);
    } else {
      setList(productList);
    }
    setName(keyword);
  };

  return (
    <div className="container">
      <h1>Buy Laptops Online at Low Prices</h1>
      <Input title={title} filter={filter} text="Filter products" />
      <Container list={list} />
    </div>
  );
};

export default Product;
