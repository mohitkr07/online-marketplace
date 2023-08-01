import { useEffect, useRef, useState } from "react";
import styles from "./sellerDash.module.css";

const AddProduct = () => {
  const [product, setProduct] = useState({
    category: "",
    name: "",
    price: "",
    description: "",
  });

  const [categories, setCategories] = useState([])
  const [filteredCategories, setFilteredCategories] = useState([])

  useEffect(() => {
    fetchCategories()
  }, [1])

  const fetchCategories = async () => {
    const res = await fetch("/api/getcategories", {
      method: 'get',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json();
    if (data.message) {
      setCategories(data.categories);
      // console.log(data.categories)
    }
  }

  const postData = async () => {
    const res = await fetch("/api/addproduct", {
      method: "post",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await res.json();
    if (data.message) {
      setProduct({ ...product, category: "", name: "", price: "", description: "" })
      alert("product added successfully")
    }
  };
  const handleAddProduct = () => {
    postData();
  };

  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct({ ...product, [name]: value });
    if (name === "category") {
      const filtered = categories.filter((category) => {
        return category.name.toLowerCase().includes(value.toLowerCase())
      })
      //Learning:
      // if we use curly braces in an arrow function then it is mandatory to 'return' as curly braces implies multiple lines of code
      // we can use round brackets where we have to return only one element and 'return' is not required
      setFilteredCategories(filtered)
    }
  };


  const [viewSugg, setSugg] = useState(false)
  const myElementRef = useRef(null)

  const handleSugg = (e) => {
    setSugg(!viewSugg);
  }

  return (
    <div className={styles["add-product"]}>
      <span>
        <h2>Add Product</h2>
      </span>
      <span>
        <p>Category: </p>
        <div className={styles["search-box"]}>
          <input
            type="text"
            placeholder="Enter Category"
            name="category"
            value={product.category}
            onChange={handleChange}
            onFocus={() => setSugg(true)}
          />
          <div onClick={handleSugg} className={styles["result"]}>
            {viewSugg && product.category.length > 0 && <ul className={styles["suggestions"]}>
              {filteredCategories.map((i, key) => {
                return <li ref={myElementRef} onFocus={handleSugg} onClick={() => setProduct({ ...product, category: i.name })} key={key}>{i.name}</li>
              })}
            </ul>}
          </div>
        </div>
      </span>
      <span>
        <p>Name: </p>
        <input
          type="text"
          placeholder="Enter product name"
          name="name"
          value={product.name}
          onChange={handleChange}
        ></input>
      </span>
      <span>
        <p>Price: </p>
        <input
          type="text"
          placeholder="Enter price"
          name="price"
          value={product.price}
          onChange={handleChange}
        ></input>
      </span>
      <span>
        <p style={{ alignSelf: "flex-start" }}>Description: </p>
        <textarea
          type="text"
          placeholder="Description"
          name="description"
          value={product.description}
          onChange={handleChange}
        />
      </span>
      <button onClick={handleAddProduct}>Add</button>
    </div>
  );
};

export default AddProduct;
