import {Button, Card} from "react-bootstrap";
import {Link} from "@remix-run/react";

export default function ProductComponent(
    {product}
) {
    return (
        <Card key={product.id} style={{ width: '21rem'}} className="product-card text-center">
            <Card.Img variant="top" className="card-img-top" src={product.img || 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg'}/>
            <Card.Body>
                <Card.Title className="cart-title">{product.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    <b>€{parseFloat(product.price).toFixed(2).replace('.', ",")}</b>
                </Card.Subtitle>
                <form action="/?index" method="post">
                    <Card.Text className="input-quantity">
                        Qty: <input name="count" type="number" max={product.stock} min={1} defaultValue={1} /> / {product.stock}
                    </Card.Text>
                    <input name="id" type="hidden" value={product.id} />
                    <input name="title" type="hidden" value={product.title} />
                    <input name="price" type="hidden" value={product.price} />
                    <Button variant="success" type="submit" name="intent" value="plus">Add to Cart</Button>
                </form>
            </Card.Body>
        </Card>
    );
}


