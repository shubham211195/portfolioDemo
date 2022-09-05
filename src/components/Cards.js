import Card from 'react-bootstrap/Card';

function Cards(props) {
  return (
    <Card style={{ width: '100' }}>
      <Card.Body>
        <Card.Title><b>{props.curElem.title}</b></Card.Title>
        <Card.Text>
          {props.curElem.body}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;