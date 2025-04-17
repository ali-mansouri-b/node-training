var express = require('express');
const i18next = require('i18next');
const Backend = require('i18next-fs-backend');
const middleware = require('i18next-http-middleware');

var app = express();

i18next
  .use(Backend)
  .use(middleware.LanguageDetector)
  .init({
    fallbackLng: 'english', // Default language
    backend: {
      loadPath: './locales/{{lng}}/translation.json'
    },
    detection: {
      // Order and types of detection
      order: ['querystring', 'cookie', 'header'],
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      caches: ['cookie']
    },
    interpolation: {
      escapeValue: false // React already handles escaping
    }
  });

app.use(middleware.handle(i18next));

app.get('/', (req, res) => {
  res.status(200);
  res.send(req.t('welcome')); // Uses the appropriate translation
});

app.get('/greet/:name', (req, res) => {
  res.status(200);
  res.send(req.t('greeting', { name: req.params.name }));
});

app.listen(3000);