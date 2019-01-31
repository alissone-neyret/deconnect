import React, { Component } from 'react';
import {
  Button, Container, Form, Col, Row, Label, FormGroup,
}
  from 'reactstrap';
import ReactQuill from 'react-quill';

import './TextReview.scss';
import { API_SERVEUR } from '../Constants';


class TextReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      category: 'aboutus',
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateCategoryAboutUs = this.updateCategoryAboutUs.bind(this);
    this.updateCategoryMentionLegal = this.updateCategoryMentionLegal.bind(this);
  }

  componentDidMount = () => {
    const { category } = this.state;
    fetch(`${API_SERVEUR}/edittext/${category}`)
      .then(response => response.json())
      .then((data) => {
        // setstate to set up the labels
        this.setState({

          text: data[0].text,

        });
      })

      .catch(err => (`Caught error: ${err}`));
  }

  // fonction set up the state with input entry
  onChange(value) {
    this.setState({ text: value });
  }

  updateCategoryAboutUs(e) {
    e.preventDefault();
    this.setState({ category: 'aboutus' });

    const { category } = this.state;
    fetch(`${API_SERVEUR}/edittext/${category}`)
      .then(response => response.json())
      .then((data) => {
        // setstate to set up the labels
        this.setState({

          text: data[0].text,

        });
      })

      .catch(err => (`Caught error: ${err}`));
  }

  updateCategoryMentionLegal(e) {
    e.preventDefault();
    this.setState({ category: 'mentionlegal' });

    const { category } = this.state;
    fetch(`${API_SERVEUR}/edittext/${category}`)
      .then(response => response.json())
      .then((data) => {
        // setstate to set up the labels
        this.setState({

          text: data[0].text,

        });
      })

      .catch(err => (`Caught error: ${err}`));
  }


  // post the form to the data base
  handleSubmit(e) {
    const { category, text } = this.state;
    const dataText = {
      text,
    };
    e.preventDefault();
    const config = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataText),
    };

    const url = `${API_SERVEUR}/edittext/${category}`;

    fetch(url, config)
      .then(res => res.text())
      .then((res) => {
        if (res.error) {
          alert(res.error);
        } else {
          alert('Texte et mise en forme modifés');
        }
      })
      .catch(() => {
        alert(`Erreur ${e} lors de la modification du texte`);
      });

    this.setState(prevState => prevState);
  }

  render() {
    const { text, category } = this.state;

    const toolbarOptions = [
      [{ header: [1, 2, 3, false] }, { color: [] }, 'bold', 'italic', 'underline'],
      [{ align: ['', 'center', 'right', 'justify'] }],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image', 'video'],
      ['clean'],
    ];

    const formats = [
      'header', 'font', 'size', 'color',
      'bold', 'italic', 'underline', 'align', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image', 'video',
    ];

    return (
      <div className="TextReview">
        <hr />
        <Row>
          <Col sm={4}>
            <Button className="aboutus" onClick={this.updateCategoryAboutUs} color="primary">About Us</Button>
          </Col>
          <Col sm={4}>
            <Button className="mentionlegal" color="primary" onClick={this.updateCategoryMentionLegal}>Mention Legales</Button>
          </Col>
          <Col sm={4}>
            <Button className="mentionlegal" color="primary" onClick={this.updateCategory}>Mention Legales</Button>
          </Col>
        </Row>
        <Container className="container-info-company modify">
          <Form onSubmit={e => this.handleSubmit(e)}>
            <FormGroup row>
              <Col>
                <Label className="describe-company-text">{category}</Label>
                <ReactQuill
                  theme="snow"
                  type="textarea"
                  name="text"
                  id="exampletextarea"
                  placeholder="Conditions Générales"
                  value={text}
                  modules={{ toolbar: toolbarOptions }}
                  formats={formats}
                  onChange={this.onChange}
                  className="text"
                />
              </Col>
            </FormGroup>

            <Row>
              <Col sm={6}>
                <Button type="submit" onClick={e => this.handleSubmit(e)} color="primary">Enregistrer</Button>
              </Col>
              <Col sm={6}>
                <Button color="danger" onClick={() => this.cancelModification()}>Annuler</Button>
              </Col>
            </Row>
          </Form>

        </Container>

      </div>
    );
  }
}

export default TextReview;
