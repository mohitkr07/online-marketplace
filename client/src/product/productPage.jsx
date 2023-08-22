import styles from './product.module.css'
import Nav from '../components/utils/header';

const ProductPage = (props) => {
    return (
        <>
            <Nav />
            <div className={styles["product-page"]}>

            </div>
        </>
    )
}

export default ProductPage;