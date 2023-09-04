import {Button, ButtonGroup, Card} from "react-bootstrap";

export default function CartEntryComponent({entry}) {
    return (
        <Card style={{ width: '16rem' }} className="cart-entry">
            <Card.Body>
                <Card.Title className="card-title">{entry.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {entry.count} x €{parseFloat(entry.price).toFixed(2).replace('.', ",")}
                </Card.Subtitle>
                <form action="?index" method="post">
                    <input type="hidden" value={entry.id} name="id" />
                    <input type="hidden" value={entry.title} name="title" />
                    <input type="hidden" value={entry.price} name="price" />
                    <input type="hidden" value={1} name="count" />
                    <ButtonGroup className="me-2 cart-button-group" aria-label="First group">
                        <Button className="cart-button" variant="secondary" type="submit" name="intent" value={entry.count > 1 ? "minus" : "remove"}>-</Button>{' '}
                        <Button className="cart-button" variant="secondary" type="submit" name="intent" value="plus">+</Button>{' '}
                    </ButtonGroup>
                </form>
            </Card.Body>
        </Card>
    );
}