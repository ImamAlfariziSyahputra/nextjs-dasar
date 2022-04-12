export default function handler(req, res) {
  //! "params" refer to file name!
  const { params } = req.query;

  console.log('params => ', params);

  res.status(200).json(params || { message: 'no params' });
}
