import React from 'react';
import {
  Container, Row, Col, Card,
} from 'reactstrap';
import './SectionsHomePage.scss';

const SectionsHomePage = () => (
  <div className="SectionsHomePage">
    <Container className="container-sections-homepage mt-lg-5 mt-md-4 mt-4">
      <h2>Qu&apos;est-ce que le droit à la déconnexion ?</h2>
      <Row>
        <Col className="column-sections-homepage2" sm="12" lg="6">
          <Card body className="card-body-law">
            <h3 className="card-title mt-16">Ce que dit la loi</h3>
            <p>
              Le droit à la déconnexion a
              été inscrit dans le code du
              travail (article L.2242-8,7°)
              suite à l&apos;adoption de la
              loi n°2016-1088 du 08 Août
              2016 (article 55) relative
              au travail, à la modernisation
              du dialogue social et à la sécurisation des parcours professionnels.
              Cette loi est applicable depuis le 1er Janvier 2017.
            </p>
            <p>
              Son objectif est
              de permettre à tous les
              salariés de concilier
              vie personnelle et vie professionnelle, tout
              en luttant contre les
              risques de burn-out.
            </p>
            <p>
              Pour cela
              ils doivent avoir la
              possibilité de ne pas se
              connecter aux outils numériques
              et de ne pas être contactés
              par leur employeur en dehors des heures de travail (congés, soirées, week-end...).
            </p>
            <p>
              Chaque entreprise doit élaborer une charte.
            </p>
          </Card>
        </Col>
        <Col className="column-sections-homepage1" sm="12" lg="6">
          <Card body className="card-right">
            <h3 className="card-title mt-16">Critères de notation</h3>
            <p>
              Sur ce site, les salariés ou anciens salariés peuvent noter une entreprise en matière
               de droit à la déconnexion et une note moyenne sera ensuite calculée et attribuée à
                l&apos;entreprise selon un certain
                nombre de critères :
            </p>
            <p>
              - Les salariés évaluent l&apos;impact des outils
               numériques fournis par l’employeur tant au niveau professionnel et surtout personnel.
            </p>
            <p>
              - Ils notent également le niveau d’engagement de leur hiérachie sur la diminution des
               usages numériques professionnels en dehors des horaires de travail.
            </p>
            <p>
              - Enfin, ils attribuent une note globale à l&apos;entreprise concernant son
               implication au sujet du droit à la déconnexion.
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);

export default SectionsHomePage;
