import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../../store/cartSlice";
import Footer from "../Footer/Footer";
const Food = () => {
 const dispatch=useDispatch();
  const item = [
    {
      id: "1",
      title: "Momo",
      price: 130,

      image:
        "https://b.zmtcdn.com/data/pictures/1/18739011/978ed1e998518948130ab1062407cf95.jpg",
      quantity: 1,
    },
    {
      id: "2",
      title: "Burger",
      price: 160,
      image:
        "https://cdn.pixabay.com/photo/2019/01/29/18/05/burger-3962997_960_720.jpg",
    },
    {
      id: "3",
      title: "Chowmein",
      price: 140,
      image:
        "https://cdn.pixabay.com/photo/2019/05/31/01/53/chowmein-4241265_960_720.jpg",
    },
    {
      id: "4",
      title: "Pizza",
      price: 400,
      image:
        "https://cdn.pixabay.com/photo/2015/12/07/22/27/pizza-1081534_960_720.jpg",
    },
    {
      id: "5",
      title: "Crispy Chicken",
      price: 300,
      image:
        "https://cdn.pixabay.com/photo/2018/04/21/12/03/food-3338309_960_720.jpg",
    },
    {
      id: "6",
      title: "Katti Roll",
      price: 200,
      image:
        "https://cdn.pixabay.com/photo/2018/03/15/12/16/food-3228057_960_720.jpg",
    },
    {
      id: "7",
      title: "Thukpa",
      price: 160,
      image:
        "https://1.bp.blogspot.com/-y6BOEGGRaM8/X8249tMXwGI/AAAAAAAADRQ/KqD2hzYdfEkUy4ioPJdaJXACUs--Zd-0QCLcBGAsYHQ/s2048/IMG_20201207_103726.jpg",
    },
    {
      id: "8",
      title: "Chicken Biryani",
      price: 250,
      image:
        "https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani-750x750.jpg",
    },
    {
      id: "9",
      title: "Buff Khaja Set",
      price: 200,
      image:
        "https://tkathmandukitchen.com/wp-content/uploads/2019/04/khaja-set.jpg",
    },
    {
      id: "10",
      title: "Coke",
      price: 70,
      image:
        "https://cdn.shopify.com/s/files/1/0862/8416/products/Mexican-Coca-Cola.jpg?v=1465322372",
    },
    {
      id: "11",
      title: "Fanta",
      price: 70,
      image:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71Cd1SW1pVL.jpg",
    },
    {
      id: "12",
      title: "Dew",
      price: 70,
      image:
        "https://cdnprod.mafretailproxy.com/sys-master-root/h0d/h44/47856206774302/1700Wx1700H_605045_main.jpg",
    },
  ];
  return (
    <div>
    <div className="max-w-[1100px] mx-auto my-10">
      <div className="max-w-sm mx-auto my-5">
      <h1 className="text-center font-poppins text-2xl max-w-sm bg-black text-white mx-auto ">
          Food Items & Beverages
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-11  place-content-center font-poppins ">
        {item.map((product) => (
          <div key={product.id} className="w-64 h-auto border-2 border-black rounded-2xl text-center mx-auto px-2 hover:scale-105 duration-300 py-3 ">
            <img
              src={product.image}
              alt="/"
              className="w-60 h-52  mx-auto py-2 "
            />
            <h1 className="my-1">{product.title}</h1>
            <p className="italic my-1">Rs:{product.price}</p>
            <button onClick={()=>dispatch(add(product))} className="my-2 hover:bg-slate-600">Add To Cart</button>
          </div>
        ))}
      </div>
     
    </div>
    <Footer/>
    </div>
  );
};

export default Food;
