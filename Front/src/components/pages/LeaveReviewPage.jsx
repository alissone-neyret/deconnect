import React, { Component } from 'react';
import {
  Container, Row, Col,
} from 'reactstrap';
import QuestionForm from '../../containers/QuestionForm';
import QuestionCompany from '../../containers/QuestionCompany';
import QuestionMail from '../../containers/QuestionMail';
import AnswerGrade from '../../containers/AnswerGrade';
import AnswerRadio from '../../containers/AnswerRadio';
import AnswerDate from '../../containers/AnswerDate';
import AnswerText from '../../containers/AnswerText';
import ButtonClassic from '../ButtonClassic';
import './LeaveReviewPage.scss';
import { API_SERVEUR } from '../../Constants';

class LeaveReviewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answerstate: null,
      NameCompany: '',
      userEmail: '',
      completedCompany: false,
      completedAnswers: false,
      toggleAnswersOptions: false,
      visible: false,
      companyFetch: [],
      questionFetch: [{ 0: 1, type_question: 'truefalse' }],
      nb: 0,
      renderAnswersOptions: '',
      fullQuestionFetched: 0,
      filterName: [],
      idCompany: 0,
      reviewDate: new Date().toISOString().slice(0, 10),
      jobPosition: 'Salarié',
      employmentStatus: 'En Poste',
      companyCity: '',
      reviewGrade: 0,
      finalGrade: 0,
      counter: 0,
    };
    this.handleValidation = this.handleValidation.bind(this);
    this.handleValidationAnswers = this.handleValidationAnswers.bind(this);
    this.answersToArrayAnswers = this.answersToArrayAnswers.bind(this);
    this.dynamicRenderAnswersOptions = this.dynamicRenderAnswersOptions.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickName = this.handleClickName.bind(this);
    this.targetUserEmail = this.targetUserEmail.bind(this);
    this.collectUserInfo = this.collectUserInfo.bind(this);
    this.getComment = this.getComment.bind(this);
  }

  componentDidMount() {
    this.fetchInfo();
  }

  getQuestionnaireStep() {
    const {
      completedCompany, completedAnswers, renderAnswersOptions, fullQuestionFetched,
      questionFetch, NameCompany, nb, userEmail, companyFetch, filterName,
      visible, employmentStatus, jobPosition, companyCity,
    } = this.state;
    if (!completedAnswers && !completedCompany) {
      return (
        <QuestionCompany
          handleChange={this.handleChange}
          NameCompany={NameCompany}
          companyFetch={companyFetch}
          handleClickName={this.handleClickName}
          filterName={filterName}
          visible={visible}
        />
      );
    }
    if (completedCompany && !completedAnswers) {
      return (
        <QuestionForm
          completedAnswers={completedAnswers}
          handleValidationAnswers={this.handleValidationAnswers}
          answersToArrayAnswers={this.answersToArrayAnswers}
          toArrayAnswers={this.toArrayAnswers}
          renderAnswersOptions={renderAnswersOptions}
          nbQuestions={fullQuestionFetched}
          questions={questionFetch}
          nextQuestion={this.nextQuestion}
          nb={nb}
        />
      );
    }

    if (completedCompany && completedAnswers) {
      return (
        <QuestionMail
          userEmail={userEmail}
          collectUserInfo={this.collectUserInfo}
          jobPosition={jobPosition}
          employmentStatus={employmentStatus}
          companyCity={companyCity}
        />
      );
    } if (!completedCompany && completedAnswers) {
      return (<p>Une erreur est survenue</p>);
    }
    return false;
  }

  getComment(e) {
    this.setState({
      answerstate: e.currentTarget.value,
    });
  }

  fetchInfo() {
    const url = `${API_SERVEUR}/companies`;
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({
        companyFetch: data,
      }));
  }

  filterobject(CompanyArray, Recherche) {
    this.NameCompany = 'companyName';
    return CompanyArray.filter(
      word => word[this.NameCompany].toLowerCase().includes(Recherche.toLowerCase()),
    );
  }

  handleInputChange() {
    const { companyFetch, NameCompany } = this.state;
    if (NameCompany.length > 0) {
      this.setState({
        visible: true,
        filterName: this.filterobject(companyFetch, NameCompany),
      });
    } else if (NameCompany.length === 0) {
      this.setState({
        filterName: [],
        visible: false,
      });
    }
  }

  handleClickName(name) {
    this.setState({
      NameCompany: name.companyName,
      visible: false,
      idCompany: name.idCompany,
    });
  }

  fetchQuestion() {
    const httpReq = new XMLHttpRequest();
    const url = `${API_SERVEUR}/calldoor/question`;
    httpReq.open('GET', url, true);
    httpReq.setRequestHeader('Access-Control-Allow-Headers', '*');
    httpReq.setRequestHeader('Content-type', 'application/ecmascript');
    httpReq.setRequestHeader('Access-Control-Allow-Origin', url);

    fetch(url)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          questionFetch: data,
          fullQuestionFetched: Object.keys(data).length,
        });
      });
  }

  handleSubmit() {
    const {
      idCompany,
      question1,
      question2,
      question3,
      question4,
      question5,
      question6,
      question7,
      answerstate,
      userEmail,
      reviewDate,
      jobPosition,
      employmentStatus,
      finalGrade,
      counter,
      companyCity,
    } = this.state;
    const { history } = this.props;
    const calculatedGrade = finalGrade / (counter - 1);
    const dataUsers = {
      question1,
      question2,
      question3,
      question4,
      question5,
      question6,
      question7,
      question8: answerstate,
      idCompany,
      userEmail,
      reviewDate,
      jobPosition,
      employmentStatus,
      reviewGrade: calculatedGrade,
      companyCity,
    };
    fetch(`${API_SERVEUR}/avis/questionform`,
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': API_SERVEUR,
        }),
        body: JSON.stringify(dataUsers),
      })
      .then(res => (res.json()))
      .then(alert('Votre avis a bien été pris en compte.'))
      .then(() => history.push('/'));
  }

  dynamicRenderAnswersOptions() {
    const { questionFetch, nb } = this.state;
    switch (questionFetch[nb].type_question) {
      case 'truefalse':
        return (
          <AnswerRadio nb={nb} answersToArrayAnswers={this.answersToArrayAnswers} />);

      case 'grade':
        return (
          <AnswerGrade nb={nb} answersToArrayAnswers={this.answersToArrayAnswers} />);

      case 'date':
        return (
          <AnswerDate nb={nb} getComment={this.getComment} />);

      case 'text':
        return (
          <AnswerText nb={nb} getComment={this.getComment} />);
      case undefined:
        return (
          <p>
            Oops, une erreur s&apos;est produite,
            contactez l&apos;administrateur du site.
          </p>
        );
      default:
        return (
          <p>
            Oops, une erreur s&apos;est produite,
            contactez l&apos;administrateur du site.
          </p>
        );
    }
  }

  generateButton() {
    const {
      nb, fullQuestionFetched, completedAnswers, completedCompany,
    } = this.state;
    if (!completedCompany && !completedAnswers && nb === 0) {
      return (
        <ButtonClassic nextQuestion={this.handleValidation} buttonText="Valider l&apos;entreprise choisie" />
      );
    }
    if (nb === fullQuestionFetched - 1 && !completedAnswers) {
      return (
        <ButtonClassic type="button" nextQuestion={this.handleValidationAnswers} buttonText="Valider le questionnaire" />
      );
    }
    if (completedAnswers && completedCompany && nb >= fullQuestionFetched - 1) {
      return (
        <ButtonClassic type="submit" nextQuestion={this.handleSubmit} buttonText="Envoyer mes réponses" />
      );
    }
    if (nb < fullQuestionFetched && completedCompany) {
      return (
        <ButtonClassic type="button" nextQuestion={this.nextQuestion} buttonText="Suivant" />
      );
    }
    return false;
  }

  answersToArrayAnswers(e) {
    this.setState({
      answerstate: e.currentTarget.title,
      reviewGrade: parseInt(e.currentTarget.value, 10),
    });
  }

  handleDateAnswer(e) {
    this.setState({
      answerstate: e.currentTarget.value,
    });
  }

  collectUserInfo(e) {
    this.setState({
      [e.target.name]: e.currentTarget.value,
    });
  }

  handleValidation() {
    this.setState({
      completedCompany: true,
    }, () => this.fetchQuestion(), this.toggleAnswersOptions());
  }

  toggleAnswersOptions() {
    this.setState({
      toggleAnswersOptions: true,
    });
  }

  handleValidationAnswers() {
    this.setState({
      completedAnswers: true,
      toggleAnswersOptions: false,
    });
  }

  targetUserEmail(e) {
    this.setState({
      userEmail: e.target.value,
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      visible: true,
    }, () => this.handleInputChange());
  }

  nextQuestion() {
    const {
      questionFetch, nb, answerstate, reviewGrade, finalGrade, counter,
    } = this.state;
    const stateQuestion = `question${nb + 1}`;
    if (questionFetch[nb].If_No !== null && answerstate === 'non') {
      this.setState({
        nb: questionFetch[nb].If_No,
        [stateQuestion]: answerstate,
        finalGrade: (parseInt(finalGrade, 10) + parseInt(reviewGrade, 10)),
        counter: counter + 1,
      });
    } else {
      this.setState({
        nb: nb + 1,
        finalGrade: (parseInt(finalGrade, 10) + parseInt(reviewGrade, 10)),
        counter: counter + 1,
        [stateQuestion]: answerstate,
        answerstate: null,
      });
    }
  }

  render() {
    const { toggleAnswersOptions } = this.state;
    return (
      <div className="LeaveReviewPage">
        <section>
          <Container className="container-title">
            <Row>
              <Col>
                <h2>Laissez un avis sur votre entreprise</h2>
              </Col>
            </Row>
          </Container>

          <Container className="container-leave-review">
            <Row>
              <Col>
                {this.getQuestionnaireStep()}
              </Col>
            </Row>
            <Row>
              <Col>
                {toggleAnswersOptions
                  ? this.dynamicRenderAnswersOptions()
                  : <div />
                }
              </Col>
            </Row>
            <Row>
              <Col>
                {this.generateButton()}
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}
export default LeaveReviewPage;
