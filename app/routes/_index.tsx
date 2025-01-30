import type {V2_MetaFunction} from "@remix-run/node";
import {Button, Container, Form, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import CategoryFilterComponent from "~/components/category.filter";
import ColorFilterComponent from "~/components/color.filter";
import {getAllProducts, updateStock} from "~/services/product.service";
import {useLoaderData} from "@remix-run/react";
import {addToCart, decreaseAmount, getAllEntries, removeFromCart} from "~/services/cart.service";
import {ActionArgs, json, redirect} from "@remix-run/node";
import ProductComponent from "~/components/product";
import CartEntryComponent from "~/components/cart.entry";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Shop Demo" },
    { name: "description", content: "Abrio Bewerbertag Demo" },
  ];
};

export default function Index() {
  const { products, cart } = useLoaderData();
  const [isVisible, setIsVisible] = useState(true);

  //Category states
  const [categoryA, setCategoryA] = useState(false);
  const aCategoryHandler = () => {
    localStorage.setItem('categoryA', JSON.stringify(!categoryA));
    setCategoryA(!categoryA);
  };

  const [categoryB, setCategoryB] = useState(false);
  const bCategoryHandler = () => {
    localStorage.setItem('categoryB', JSON.stringify(!categoryB));
    setCategoryB(!categoryB);
  };

  const [categoryC, setCategoryC] = useState(false);
  const cCategoryHandler = () => {
    localStorage.setItem('categoryC', JSON.stringify(!categoryC));
    setCategoryC(!categoryC);
  };

  //Color states
  const [colorR, setColorR] = useState(false);
  const rColorHandler = () => {
    localStorage.setItem('colorR', JSON.stringify(!colorR));
    setColorR(!colorR);
  };

  const [colorG, setColorG] = useState(false);
  const gColorHandler = () => {
    localStorage.setItem('colorG', JSON.stringify(!colorG));
    setColorG(!colorG);
  };

  const [colorB, setColorB] = useState(false);
  const bColorHandler = () => {
    localStorage.setItem('colorB', JSON.stringify(!colorB));
    setColorB(!colorB);
  };

  const [sortType, setSortType] = useState("");
  const setSortTypeHandler = e => {
    localStorage.setItem('sortType', JSON.stringify(e.target.value));
    setSortType(e.target.value);
  };

  const hydration = (storageName: string, setFunction: Function, fallback: boolean | string) => {
    const storage = localStorage.getItem(`${storageName}`);
  }

  //Hydrating states
  useEffect(() => {
    hydration('isVisible', setIsVisible, false);
    hydration('categoryA', setCategoryA, false);
    hydration('categoryB', setCategoryB, false);
    hydration('categoryC', setCategoryC, false);
    hydration('colorR', setColorR, false);
    hydration('colorG', setColorG, false);
    hydration('colorB', setColorB, false);
    hydration('sortType', setSortType, "");
  }, []);

  useEffect(function mount() {
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
      if (lastScrollY < window.scrollY) {
        setIsVisible(false);
        localStorage.setItem('isVisible', JSON.stringify(isVisible));
      } else {
        setIsVisible(true);
        localStorage.setItem('isVisible', JSON.stringify(isVisible));
      }
      lastScrollY = window.scrollY;
    })
  });

  return (
    <Container fluid>
      <Container className={"navbar fixed-top"} fluid>
        <img className="navbar-icon" src={require("~/images/shop-logo.png")}/>
        <h4>Shop Demo</h4>
      </Container>

      <Container className={isVisible ? 'filter-grid fixed-top' : 'filter-grid fixed-top filter--hidden'}>
        <CategoryFilterComponent
            categoryA={categoryA}
            categoryB={categoryB}
            categoryC={categoryC}
            aCategoryHandler={aCategoryHandler}
            bCategoryHandler={bCategoryHandler}
            cCategoryHandler={cCategoryHandler}
        />

        <ColorFilterComponent
            colorR={colorR}
            colorG={colorG}
            colorB={colorB}
            rColorHandler={rColorHandler}
            gColorHandler={gColorHandler}
            bColorHandler={bColorHandler}
        />

        <Form.Select className={"sort-select filter-container filter-button"} value={sortType} onChange={setSortTypeHandler}>
          <option>None</option>
          <option value={"ascending"}>Low to High</option>
          <option value={"descending"}>High to Low</option>
        </Form.Select>
      </Container>

      <Row className="product-grid">
        {products
            .filter(product => {
              if(categoryA && !product.categories.includes("A")) return false;
              if(categoryB && !product.categories.includes("B")) return false;
              if(categoryC && !product.categories.includes("C")) return false;
              if(colorR && product.color !== "R") return false;
              if(colorG && product.color !== "G") return false;
              if(colorB && product.color !== "B") return false;
              if(product.stock === 0) return false;
              return true;
            })
            .sort((a, b) => {
              if(sortType === "ascending") return (a.price > b.price) ? 1 : -1;
              if(sortType === "descending") return (a.price < b.price) ? 1 : -1;
            })
            .map(product => (
              <ProductComponent product={product}/>
            ))}
      </Row>

      <Row className={cart.length != 0 ? "cart-grid fixed-right" : "cart-grid--hidden fixed-right"}>
        <Container className="cart-content">
          {cart.length != 0 ? <>
            <h4>Cart</h4>
            {cart.map(entry => (
                <CartEntryComponent entry={entry} />
            ))}
            <h4 className="mb-2 text-muted">
              Total:
              €{
              cart.reduce((a, b) => {
                return a + (parseFloat(b.price) * parseInt(b.count));
              }, 0).toFixed(2).replace('.', ",")
            }
            </h4>
            <Button className="pay-button" variant="success">Pay Now</Button>
          </> : <></>}
        </Container>
      </Row>
    </Container>
  );
}

export async function loader() {
  const [products, cart] = await Promise.all([
      getAllProducts(),
      getAllEntries()
  ]);
  return json({ products, cart });
}

//Handles add to cart backend function
export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const intent = formData.get('intent');
  const data = Object.fromEntries(formData);

  if(intent === 'plus') {
    await addToCart(data);
    await updateStock(data, false);
  } else if (intent === 'minus') {
    await decreaseAmount(data);
    await updateStock(data, true); //Add to products
  } else if (intent === 'remove') {
    await removeFromCart(data);
    await updateStock(data, true); //Add to products
  }

  return redirect("/");
}