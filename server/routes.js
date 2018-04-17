exports.article = function (req, res) {
  res.status(200).send();
};

exports.articles = function (req, res) {
  res.status(200).send(
    [{
      'title': 'qwe',
      'body': 'test body'
    }]
  );
};
