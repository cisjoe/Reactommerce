import Card from "react-bootstrap/Card";

export default function ProductCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <div className="title-price--holder">
          <Card.Title>{props.title}</Card.Title>
          <span className="card-price">${props.price}</span>
        </div>
        <Card.Text title={props.desc}>{props.desc}</Card.Text>
      </Card.Body>
    </Card>
  );
}
