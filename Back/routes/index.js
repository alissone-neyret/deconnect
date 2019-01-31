import express from 'express';
import nodemailer from 'nodemailer';
import connection from './conf';

const logger = require('../logger/logger');

const router = express.Router();

// api to fetch result from searchbar
router.get('/search', (req, res) => {
  let sql = 'SELECT * FROM `Company`';

  const paramSearch = [];
  const { query } = req;
  let queryprefix = 'WHERE ';

  if ((query.city) || (query.companyName)) {
    if (query.city) {
      sql += ` ${queryprefix} city LIKE ?`;
      paramSearch.push(query.city);
      queryprefix = 'AND ';
    } if (query.companyName) {
      sql += ` ${queryprefix} companyName LIKE ?`;
      paramSearch.push(query.companyName);
    }
    connection.query(sql, [...paramSearch], (err, results) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.json(results);
      }
    });
  }
});

// for fetch on searchbar, fetch city & name data from table company
router.get('/companies', (req, res) => {
  connection.query('SELECT idCompany, companyName, city  FROM `Company`', req.params, (err, results) => {
    if (err) {
      logger.info('Erreur lors de la récupération des informations des entreprises');
      res.status(500).send('Erreur ');
    } else {
      res.json(results);
    }
  });
});


// GET text about us
router.get('/edittext/:category', (req, res) => {
  const categoryname = req.params.category;

  connection.query('SELECT text, id FROM TextTable WHERE category= ?', categoryname, (err, results) => {
    if (err) {
      logger.info(`Erreur lors de la récupération du texte ${categoryname}`);
      res.status(500).send(`Erreur lors de la récupération du texte ${categoryname}`);
    } else {
      res.json(results);
    }
  });
});


// PUT text about us
router.put('/edittext/:category', (req, res) => {
  const formData = req.body;
  const category = req.params.category;
  console.log(req.body);

  connection.query('UPDATE TextTable SET ? WHERE TextTable.category = ?', [formData, category], (err) => {
    if (err) {
      res.status(500).send('Erreur lors de la modification du texte aboutUs');
    } else {
      res.sendStatus(200);
    }
  });
});


// GET all company by ID
router.get('/api/companies/:id', (req, res) => {
  const idCompany = req.params.id;
  connection.query('SELECT companyName, city, country, referent, logo, description, email, address, phoneNumber, website, idCompany FROM Company WHERE idCompany= ?', [idCompany], (err, results) => {
    if (err) {
      logger.info('Erreur lors de la récupération d\'une entreprise');
      res.status(500).send('Erreur lors de la récupération d\'une entreprise ');
    } else {
      res.json(results);
    }
  });
});


/* GET index page. */
router.get('/', (req, res) => {
  res.json({
    title: 'Express'
  });
});

// get all question from database
router.get('/calldoor/question', (req, res) => {
  // connect to database & select questions
  connection.query('SELECT * from Question', (err, results) => {
    if (err) {
      // if err, tell the user
      logger.info('Erreur lors de la récupération d\'une question');
      res.status(500).send('Erreur lors de la récupération d\'une question');
    } else {
      // if everything goes fine, throw a Json after the SQL request
      res.json(results);
    }
  });
});

// to add a new company
router.post('/api/company', (req, res) => {
  connection.query(('INSERT INTO `Company` SET ?'), req.body, (err) => {
    if (err) {
      res.status(500).json({ flash: err.message });
    } else {
      res.status(200).json({ flash: 'Entreprise ajoutée avec succès.' });
    }
  });
});

// PUT change information on company by id
router.put('/calldoor/company/:id', (req, res) => {
  const idCompany = req.params.id;
  const formData = req.body;

  connection.query('UPDATE Company SET ? WHERE Company.idCompany = ?', [formData, idCompany], (err) => {
    if (err) {
      res.status(500).send("Erreur lors de la modification d'une entreprise");
    } else {
      res.sendStatus(200);
    }
  });
});

// add a general information on review on company
router.post('/avis/questionform', (req, res) => {
  connection.query(('INSERT INTO `Answer` SET ?'), req.body, (err) => {
    if (err) {
      res.status(500).json({ flash: err.message });
    } else {
      res.status(200).json({ flash: 'Votre avis a bien été pris en compte.' });
    }
  });
});

// add a review on company
router.post('/avis/questioncompany', (req, res) => {
  connection.query(('INSERT INTO Answer SET ?'), req.body, (err, results) => {
    if (err) {
      res.status(500).json({ flash: err.message });
    } else {
      res.status(200).json(results, { flash: 'Votre avis à bien été pris en compte ' });
    }
  }
  );
});


// upload a picture
router.post('/upload', (req, res) => {
  const uploadFile = req.files.file;
  const fileName = req.files.file.name;
  uploadFile.mv(
    `${__dirname}/public/files/${fileName}`,
    (err) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({
        file: `public/${req.files.file.name}`,
      });
    },
  );
});

router.put('/calldoor/company/:id', (req, res) => {
  const idCompany = req.params.id;
  const formData = req.body;

  connection.query('UPDATE Company SET ? WHERE Company.idCompany = ?', [formData, idCompany], (err) => {
    if (err) {
      res.status(500).send("Erreur lors de la modification d'une entreprise");
    } else {
      res.sendStatus(200);
    }
  });
});


// to get review for admin page
router.get('/admin/avis', (req, res) => {
  // connect to database & select reviews
  connection.query('SELECT Answer.idCompany, reviewGrade, question1, question2, question3, question4, question5, question6, question7, question8, userEmail,employmentStatus, jobPosition, idReview, DATE_FORMAT(reviewDate,"%d/%m/%Y") as reviewDate, Company.companyName from Answer JOIN Company ON Answer.idCompany = Company.idCompany ORDER BY reviewDate DESC', (err, results) => {
    if (err) {
      // if err, tell the user
      logger.info('Erreur lors de la récupération des avis');
      res.status(500).send('Erreur lors de la récupération des avis');
    } else {
      // if everything goes fine, throw a Json after the SQL request
      res.json(results);
    }
  });
});
// to get review for admin page
router.get('/admin/avis/:id', (req, res) => {
  // connect to database & select reviews
  const id = req.params.id;
  connection.query('SELECT Answer.idCompany, reviewGrade, question1, question2, question3, question4, question5, question6, question7, question8, userEmail,employmentStatus, jobPosition, idReview, DATE_FORMAT(reviewDate,"%d/%m/%Y") as reviewDate, Company.companyName from Answer JOIN Company ON Answer.idCompany = Company.idCompany  WHERE Answer.idCompany = ?', id, (err, results) => {
    if (err) {
      // if err, tell the user
      logger.info('Erreur lors de la récupération des avis');
      res.status(500).send('Erreur lors de la récupération des avis');
    } else {
      // if everything goes fine, throw a Json after the SQL request
      res.json(results);
    }
  });
});

// to delete a review by id
router.delete('/avis/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE from Answer WHERE idReview=?', id, (err) => {
    if (err) {
      res.status(500).send('Erreur lors de la suppression');
    } else {
      res.sendStatus(200);
    }
  });
});

router.post('/api/email', (req) => {
  const transporter = nodemailer.createTransport(('SMTP', {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'kgqstlynx3aeff2q@ethereal.email',
      pass: 'e9RJnAaRsu6A1F5t3N'
    }
  }));
  const mail = {
    from: req.body.email,
    to: 'codesavethequeen@gmail.com',
    text: req.body.text,
  };
  transporter.sendMail(mail, (error, response) => {
    if (error) {
      response.status(500).send((error));
    } else {
      response.status(200).send(`Message sent: ${response.message}`);
    }
  });
});

router.delete('/company/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE from Company WHERE idCompany=?', id, (err) => {
    if (err) {
      res.status(500).send('Erreur lors de la suppression');
    } else {
      res.sendStatus(200);
    }
  });
});

router.get('/api/note/:id', (req, res) => {
  connection.query('SELECT reviewGrade FROM Answer WHERE idCompany = ?', req.params.id, (err, results) => {
    if (err) {
      logger.info('Erreur lors de la récupération des informations des entreprises');
      res.status(500).send('Erreur ');
    } else {
      res.json(results);
    }
  });
});

export default router;
