
import React, { Component } from 'react'
import { Card, Icon, Image } from "semantic-ui-react";
import Button from "@material-ui/core/Button";


export default class CardExampleCard extends Component {
  render() {
    return (
      <Card>
      <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
      <Card.Content>
        <Card.Header>{this.props.Name}</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          22 Friends
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        </a>
      </Card.Content>
    </Card>
    )
  }
}

