import { useEffect, useRef, useState } from "react";
import styles from "./sellerDash.module.css";

const AddProduct = () => {
  const [product, setProduct] = useState({
    categoryName: "",
    name: "",
    price: "",
    description: "",
    category: "",
    subcategoryName: "",
    subCategory: "",
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
      setProduct({ ...product, categoryName: "", name: "", price: "", subcategoryName: "", description: "" })
      alert("product added successfully")
      // console.log(data.product)
    }
  };
  const handleAddProduct = () => {
    postData();
  };

  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct({ ...product, [name]: value });
    if (name === "categoryName") {
      const filtered = categories.filter((category) => {
        return category.name.toLowerCase().includes(value.toLowerCase())
      })
      setFilteredCategories(filtered)
    }
  };


  const [viewSugg, setSugg] = useState(false)
  const myElementRef = useRef(null)

  // const handleSugg = (e) => {
  //   setSugg(!viewSugg);
  // }
  const handleClose = (e) => {
    if (e.target == e.currentTarget) {
      setSugg(false)
    }
  }


  // handle Subcategory

  const [subCategories, setSubCategories] = useState([])
  // const [filteredSub, setFilteredSub] = useState([])

  const fetchSub = async (cat) => {
    const res = await fetch("/api/getsubcat", {
      method: 'post',
      credentials: 'include',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({ cat })
    })
    const data = await res.json();
    if (data.message) {
      setSubCategories(data.subCat)
    }
  }

  const handleFocus = async (e) => {
    let flag = 1;
    for (const category of categories) {
      if (category.name == product.categoryName) {
        await fetchSub(product.category)
        flag = 0;
        setSubSugg(true)
      }
    }
    if (flag)
      console.log('Select Category First')

  }


  const handleBlur = () => {
    // Update the product state after 0ms (immediately)
    setProduct({ ...product, subcategoryName: '' });

    // Update the sugg state after 10ms
    setTimeout(() => {
      setSugg(false);

      // Update the subSugg state after another 10ms
      setTimeout(() => {
        setSubSugg(false);
      }, 0);
    }, 500);
  };

  const [viewSubSugg, setSubSugg] = useState(false)

  return (
    <div style={{ width: "100%", height: "100%" }} onClick={handleClose}>
      <div className={styles["add-product"]} onClick={handleClose}>
        <span>
          <h2>Add Product</h2>
        </span>
        <span>
          <p>Category: </p>
          <div className={styles["search-box"]}>
            <input
              type="text"
              placeholder="Enter Category"
              name="categoryName"
              value={product.categoryName}
              onChange={handleChange}
              onFocus={() => { setSugg(true); setSubSugg(false) }}
              // onBlur={() => { setProduct({ ...product, subcategoryName: "" }); setSugg(false); setSubSugg(false) }}
              onBlur={handleBlur}
            />
            <div className={styles["result"]}>
              {viewSugg && <ul className={styles["suggestions"]}>
                {filteredCategories.map((i, key) => {
                  return <li
                    ref={myElementRef}
                    // onFocus={()=>{setSubSugg(false)}}
                    onClick={() => {
                      setProduct({ ...product, categoryName: i.name, category: i._id }); setTimeout(() => {
                        setSubSugg(false)
                      }, 100);
                    }}
                    key={key}
                  >
                    {i.name}
                  </li>
                })}
              </ul>}
            </div>
          </div>
        </span>
        <span>
          <p>Sub Category: </p>
          <div className={styles["search-box"]}>
            <input
              type="text"
              placeholder="Enter sub category"
              name="subCategory"
              value={product.subcategoryName}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={() => setTimeout(() => {
                setSubSugg(false)
              }, 1000)}

            />
            <div className={styles["result"]}>
              {viewSubSugg && <ul className={styles["suggestions"]}>
                {subCategories.map((i, key) => {
                  return <li
                    onClick={() => {
                      setProduct({ ...product, subcategoryName: i.name, subCategory: i._id }); setTimeout(() => {
                        setSubSugg(false)
                      }, 10);
                    }}
                    key={key}
                  >
                    {i.name}
                  </li>
                })}
              </ul>}
            </div>
          </div>
        </span>
        <span>
          <p>Title: </p>
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
    </div>
  );
};

export default AddProduct;
