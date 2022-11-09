import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function ServiceTabs() {
    return (
        <CardGroup>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Steel Structure Design</Card.Title>
                    <Card.Text>
                        When we work with you to design your steel structure, our experienced team spends a substantial amount of time, prior to the commencement of your project,
                         understanding your needs, how the building will be used, and the environmental conditions in which the structure will reside. 
                    </Card.Text>
                </Card.Body>
          
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Steel Structure Detailing</Card.Title>
                    <Card.Text>
                        We provide detailed structural steel fabrication and erection drawings including multi-disciplined
                         conceptual layouts and fabrication detailing of structures for the industrial, retail, mining and
                          agricultural sectors. 
                    </Card.Text>
                </Card.Body>
           
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Steel Structure Fabrication</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This card has even longer content than the
                        first to show that equal height action.
                    </Card.Text>
                </Card.Body>
           
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Steel Structure Erection</Card.Title>
                    <Card.Text>
                        Our experienced and dedicated teams ensure the erection of all steel structures are 
                        completed on time and according to strict All Steel Works specifications. Our installation 
                        teams are committed to ensuring your structure is a complete success. 
                    </Card.Text>
                </Card.Body>

            </Card>
        </CardGroup>
    );
}

export default ServiceTabs;